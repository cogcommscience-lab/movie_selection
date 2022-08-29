library(hBayesDM)
library(ggplot2)
require(gridExtra)
library(dplyr)
library(tidyr)
# Read data ======================

# load metadata
meta_data <- read.csv('/data/meta_data.csv')
meta_data_consent <-read.csv('/data/meta_consent.csv')

meta_data <- meta_data %>% drop_na(Status)
meta_data <- meta_data %>% mutate(StartDate = as.Date(StartDate, "%Y-%m-%d")) %>% 
  filter(StartDate >= '2022-04-04')

user_id <- as.character(meta_data$id)

user_id <- user_id[nchar(user_id) == 24]
user_id

file.name <- paste("/data/data_s3/",
                   list.files(path = "/data/", pattern = ".csv"),
                   sep="")

file.name

# visually screen response
meta_data$Q13
meta_data$Q15

temp_file = c()
for (index in user_id) {
  temp_file <- append(temp_file, file.name[which(grepl(index, file.name))])
}
file.name <- temp_file

data_user_id <- substring(file.name, 64, 87)

data <- vector(mode = "list", length = length(file.name))

for (i in 1:length(file.name)) {
  data[[i]] <- read.csv(file.name[i])
  print(cat("success load", i))
}

# remove dataset that contain not enough data
for (i in 1:length(file.name)) {
  if (!(nrow(data[[i]]) == 328)) {
    print('remove')
    print(i)
    data <- data[-i]
  }
}

dat <- data.frame()
for (i in 1:length(data)) {
  dat <- rbind(dat, data[[i]])
}

# Data processing ======================
dat <- select(dat, c(key_resp_3.keys,
                     key_resp_3.rt, Z_movie, M_movie, 
                     induction_check_keys_arousal.key, 
                     induction_check_keys_valence.key,
                     participant, group))


dat[dat==""]<-NA
# dat <- na.omit(dat)
completeFun <- function(data, desiredCols) {
  completeVec <- complete.cases(data[, desiredCols])
  return(data[completeVec, ])
}
# 
dat <- completeFun(dat, 'key_resp_3.rt')
# 
for (i in 1:nrow(dat)) {
  if (is.na(dat[i, 'induction_check_keys_arousal.key'])) {
    dat[i, 'induction_check_keys_arousal.key'] <- dat[i-1, 'induction_check_keys_arousal.key']
    dat[i, 'induction_check_keys_valence.key'] <- dat[i-1, 'induction_check_keys_valence.key']
  }
}

dat$Z_movie<-substr(dat$Z_movie, 6, 7)
dat$M_movie<-substr(dat$M_movie, 6, 7)
dat$ZV <- substr(dat$Z_movie,1,1)
dat$ZA <- substr(dat$Z_movie,2,2)
dat$MV <- substr(dat$M_movie,1,1)
dat$MA <- substr(dat$M_movie,2,2)
dat$key_resp_3.rt <- substr(dat$key_resp_3.rt,2,7)
dat$key_resp_3.rt <- gsub("]", "", dat$key_resp_3.rt)
dat$trial <- 1:nrow(dat)


dat$key_resp_3.keys <- as.character(dat$key_resp_3.keys)
dat[dat=='["z"]'] <- as.numeric(1)
dat[dat=='["m"]'] <- as.numeric(2)

dat[dat=='H'] <- as.numeric(1)
dat[dat=='L'] <- as.numeric(0)
dat$V <- as.numeric(dat$ZV) - as.numeric(dat$MV)
dat$A <- as.numeric(dat$ZA) - as.numeric(dat$MA)

dat$key_resp_3.keys <- as.factor(dat$key_resp_3.keys)
dat$decisiontype <- dat$Z_movie 

# Normalize decision ======================
for (i in 1:nrow(dat)) {
  
  if (dat$V[i] == 0 & dat$A[i] == 0) {
    dat$decisiontype[i] <- '0V+0A'
  }
  
  if (dat$V[i] == 1 & dat$A[i] == 0) {
    dat$decisiontype[i] <- '1V+0A'
  }
  
  if (dat$V[i] == -1 & dat$A[i] == 0) {
    dat$decisiontype[i] <- '-1V+0A'
  }
  
  if (dat$V[i] == 0 & dat$A[i] == 1) {
    dat$decisiontype[i] <- '0V+1A'
  }
  
  if (dat$V[i] == 0 & dat$A[i] == -1) {
    dat$decisiontype[i] <- '0V-1A'
  }
  
  if (dat$V[i] == 1 & dat$A[i] == -1) {
    dat$decisiontype[i] <- '1V-1A'
  }
  
  if (dat$V[i] == -1 & dat$A[i] == 1) {
    dat$decisiontype[i] <- '-1V+1A'
  }
  
  if (dat$V[i] == 1 & dat$A[i] == 1) {
    dat$decisiontype[i] <- '1V+1A'
  }
  
  if (dat$V[i] == 0 & dat$A[i] == 0) {
    dat$decisiontype[i] <- '0V+0A'
  }
  if (dat$V[i] == -1 & dat$A[i] == -1) {
    dat$decisiontype[i] <- '-1V-1A'
  }
}

for (i in 1:nrow(dat)) {
  if (dat$decisiontype[i] == '-1V+0A') {
    dat$reverse[i] <- "True"
    dat$decisiontype[i] <- '1V+0A'
    if (dat$key_resp_3.keys[i] == 1) {
      dat$key_resp_3.keys[i] <- 2
    } else {
      dat$key_resp_3.keys[i] <- 1
    }
  }
  
  if (dat$decisiontype[i] == '-1V+1A') {
    dat$reverse[i] <- "True"
    dat$decisiontype[i] <- '1V-1A'
    if (dat$key_resp_3.keys[i] == 1) {
      dat$key_resp_3.keys[i] <- 2
    } else {
      dat$key_resp_3.keys[i] <- 1
    }
  }
  
  if (dat$decisiontype[i] == '0V-1A') {
    dat$reverse[i] <- "True"
    dat$decisiontype[i] <- '0V+1A'
    if (dat$key_resp_3.keys[i] == 1) {
      dat$key_resp_3.keys[i] <- 2
    } else {
      dat$key_resp_3.keys[i] <- 1
    }
  }
  
  if (dat$decisiontype[i] == '-1V-1A') {
    dat$reverse[i] <- "True"
    dat$decisiontype[i] <- '1V+1A'
    if (dat$key_resp_3.keys[i] == 1) {
      dat$key_resp_3.keys[i] <- 2
    } else {
      dat$key_resp_3.keys[i] <- 1
    }
  }
  
}  

dat$subjID <- rep(1:length(data), each=140)


# delete dataset that contain reponse other than 0 or 1
delete_sub = unique(dat$subjID[!(dat$key_resp_3.keys %in% c(1,2))])
delete_sub
delete_par_2 = unique(dat$participant[!(dat$key_resp_3.keys %in% c(1,2))])
delete_par

dat = filter(dat, (!subjID %in% delete_sub))


dat$key_resp_3.rt <- as.numeric(dat$key_resp_3.rt)
dat_uncleaned <- dat
boxplot(log(dat$key_resp_3.rt))
plot(dat$key_resp_3.rt)

# delete dataset that contain reponse rt too long or too short

too_long_sub = unique(dat$subjID[dat$key_resp_3.rt > 120])
too_long_sub
too_long_par = unique(dat$participant[dat$key_resp_3.rt > 120])
too_long_par

too_short_sub = unique(dat$subjID[dat$key_resp_3.rt < 0.001])
too_short_sub
too_short_par = unique(dat$participant[dat$key_resp_3.rt < 0.001])
too_short_par

dat = filter(dat, (!subjID %in% too_long_sub))
dat = filter(dat, (!subjID %in% too_short_sub))

# Clean the data (removing outliers)
# We use a fixed fast RT cutoff and used a 3 sd slow RT cutoff
for (i in dat$subjID) {
  mean <- mean(dat$key_resp_3.rt[dat$subjID==i])
  sd <- sd(dat$key_resp_3.rt[dat$subjID==i])
  cut_1 <- mean + 3 * sd
  cut_2 <- 0.250
  dat$key_resp_3.rt[dat$subjID==i][dat$key_resp_3.rt[dat$subjID==i] > cut_1] <-
    rep(cut_1,sum(dat$key_resp_3.rt[dat$subjID==i] > cut_1))
  dat$key_resp_3.rt[dat$subjID==i][dat$key_resp_3.rt[dat$subjID==i] <= cut_2] <-
    rep(cut_2,sum(dat$key_resp_3.rt[dat$subjID==i] <= cut_2))
} 

too_long_sub_2 = unique(dat$subjID[dat$key_resp_3.rt > 60])
too_long_sub_2



dat$trial_index <- rep(1:140, nrow(dat)/140)
plot(dat$trial_index, dat$key_resp_3.rt)
cor(dat$trial_index, dat$key_resp_3.rt)


length(unique(dat$participant))
length(unique(c(too_long_par, too_short_par, delete_par_2)))

# Seperate file ======================
# 0V1A #
RT_0V1A <- dat$key_resp_3.rt[dat$decisiontype=='0V+1A']
choice_0V1A <- dat$key_resp_3.keys[dat$decisiontype=='0V+1A']
subjID_0V1A <- dat$subjID[dat$decisiontype=='0V+1A']
participant_0V1A <- dat$participant[dat$decisiontype=='0V+1A']
group_0V1A <- dat$group[dat$decisiontype=='0V+1A']
valence_0V1A <- dat$induction_check_keys_valence.key[dat$decisiontype=='0V+1A']
arousal_0V1A <- dat$induction_check_keys_arousal.key[dat$decisiontype=='0V+1A']
trial_0V1A <- dat$trial_index[dat$decisiontype=='0V+1A']
RT_0V1A <- as.numeric(RT_0V1A)
rtdata_0V1A <- data.frame(RT = RT_0V1A, choice = choice_0V1A,
                          subjID = subjID_0V1A, participant = participant_0V1A,
                          group = group_0V1A, trial=trial_0V1A,
                          valence = valence_0V1A,
                          arousal = arousal_0V1A)

# 1V0A #
RT_1V0A <- dat$key_resp_3.rt[dat$decisiontype=='1V+0A']
choice_1V0A <- dat$key_resp_3.keys[dat$decisiontype=='1V+0A']
subjID_1V0A <- dat$subjID[dat$decisiontype=='1V+0A']
participant_0V1A <- dat$participant[dat$decisiontype=='1V+0A']
group_1V0A <- dat$group[dat$decisiontype=='1V+0A']
valence_1V0A <- dat$induction_check_keys_valence.key[dat$decisiontype=='1V+0A']
arousal_1V0A <- dat$induction_check_keys_arousal.key[dat$decisiontype=='1V+0A']
trial_1V0A <- dat$trial_index[dat$decisiontype=='1V+0A']
RT_1V0A <- as.numeric(RT_1V0A)
rtdata_1V0A <- data.frame(RT = RT_1V0A, choice = choice_1V0A,
                          subjID = subjID_1V0A, participant =participant_0V1A,
                          group = group_1V0A, trial=trial_1V0A,
                          valence = valence_1V0A,
                          arousal = arousal_1V0A)

# 1V1A #
RT_1V1A <- dat$key_resp_3.rt[dat$decisiontype=='1V+1A']
choice_1V1A <- dat$key_resp_3.keys[dat$decisiontype=='1V+1A']
subjID_1V1A <- dat$subjID[dat$decisiontype=='1V+1A']
participant_1V1A <- dat$participant[dat$decisiontype=='1V+1A']
group_1V1A <- dat$group[dat$decisiontype=='1V+1A']
valence_1V1A <- dat$induction_check_keys_valence.key[dat$decisiontype=='1V+1A']
arousal_1V1A <- dat$induction_check_keys_arousal.key[dat$decisiontype=='1V+1A']
trial_1V1A <- dat$trial_index[dat$decisiontype=='1V+1A']
RT_1V1A <- as.numeric(RT_1V1A)
rtdata_1V1A <- data.frame(RT = RT_1V1A, choice = choice_1V1A,
                          subjID = subjID_1V1A, participant =participant_1V1A,
                          group = group_1V1A, trial=trial_1V1A,
                          valence = valence_1V1A,
                          arousal = arousal_1V1A)

# 0V0A #
RT_0V0A <- dat$key_resp_3.rt[dat$decisiontype=='0V+0A']
choice_0V0A <- dat$key_resp_3.keys[dat$decisiontype=='0V+0A']
subjID_0V0A <- dat$subjID[dat$decisiontype=='0V+0A']
participant_0V0A <- dat$participant[dat$decisiontype=='0V+0A']
group_0V0A <- dat$group[dat$decisiontype=='0V+0A']
valence_0V0A <- dat$induction_check_keys_valence.key[dat$decisiontype=='0V+0A']
arousal_0V0A <- dat$induction_check_keys_arousal.key[dat$decisiontype=='0V+0A']
trial_0V0A <- dat$trial_index[dat$decisiontype=='0V+0A']
RT_0V0A <- as.numeric(RT_0V0A)
rtdata_0V0A <- data.frame(RT = RT_0V0A, choice = choice_0V0A,
                          subjID = subjID_0V0A, participant =participant_0V0A,
                          group = group_0V0A, trial=trial_0V0A,
                          valence = valence_0V0A,
                          arousal = arousal_0V0A)

# 1V-1A #
RT_1Vne1A <- dat$key_resp_3.rt[dat$decisiontype=='1V-1A']
choice_1Vne1A <- dat$key_resp_3.keys[dat$decisiontype=='1V-1A']
subjID_1Vne1A <- dat$subjID[dat$decisiontype=='1V-1A']
participant_1Vne1A <- dat$participant[dat$decisiontype=='1V-1A']
group_1Vne1A <- dat$group[dat$decisiontype=='1V-1A']
valence_1Vne1A <- dat$induction_check_keys_valence.key[dat$decisiontype=='1V-1A']
arousal_1Vne1A <- dat$induction_check_keys_arousal.key[dat$decisiontype=='1V-1A']
trial_1Vne1A <- dat$trial_index[dat$decisiontype=='1V-1A']
RT_1Vne1A <- as.numeric(RT_1Vne1A)
rtdata_1Vne1A <- data.frame(RT = RT_1Vne1A, choice = choice_1Vne1A,
                            subjID = subjID_1Vne1A, participant = participant_1Vne1A,
                            group = group_1Vne1A, trial=trial_1Vne1A,
                            valence = valence_1Vne1A,
                            arousal = arousal_1Vne1A)



# CSV ======================
# make the file and write csv
pilot2hddm <- rbind(rtdata_0V0A, rtdata_0V1A, rtdata_1V0A, rtdata_1V1A, rtdata_1Vne1A)
pilot2hddm$subj_idx <- pilot2hddm$subjID-1
pilot2hddm$stim <- c(rep("0V0A",nrow(rtdata_0V0A)), rep("0V1A",nrow(rtdata_0V1A)), rep("1V0A",nrow(rtdata_1V0A)), 
                     rep("1V1A",nrow(rtdata_1V1A)), rep("1Vne1A",nrow(rtdata_1Vne1A)))
pilot2hddm$rt <- pilot2hddm$RT
pilot2hddm$response <- pilot2hddm$choice
levels(pilot2hddm$response)[levels(pilot2hddm$response)==2] <- "0"

pilot2hddm <- pilot2hddm[order(pilot2hddm$subj_idx),]

new_dat <- left_join(pilot2hddm, meta_data, by=c("participant"="id"))

new_dat <- select(new_dat, c("subj_idx", "participant", "stim", "rt", "response", "group.x","trial",
                                   "arousal", "valence", "Q3", "Q7", "Q11"))
colnames(new_dat) <- c("subj_idx", "participant", "stim", "rt", "response", "group","trial",
                       "arousal", "valence", "age", "gender", "language")

# autocorr
pilot2hddm$trial_index <- rep(1:140, nrow(pilot2hddm)/140)

plot(pilot2hddm$trial, pilot2hddm$rt)

cor.test(pilot2hddm$trial, pilot2hddm$rt, method=c("pearson"))

res.by <- by(pilot2hddm$rt, pilot2hddm$trial, mean)
plot(res.by, type="l")


# Plot data==========
ggplot(data = rtdata_0V1A, aes(x=RT,group=choice)) + 
  geom_density(aes(color=choice)) +
  theme_bw()
ggplot(rtdata_0V1A, aes(choice)) +
  geom_bar() + ylab('0V1A')

frequency_group1 <- ggplot(rtdata_0V1A[rtdata_1V0A$group=="group1",], aes(choice)) +
  geom_bar() + ylab('0V1A')
frequency_group2 <- ggplot(rtdata_0V1A[rtdata_1V0A$group=="group2",], aes(choice)) +
  geom_bar() + ylab('0V1A')
frequency_group3 <- ggplot(rtdata_0V1A[rtdata_1V0A$group=="group3",], aes(choice)) +
  geom_bar() + ylab('0V1A')
frequency_group4 <- ggplot(rtdata_0V1A[rtdata_1V0A$group=="group4",], aes(choice)) +
  geom_bar() + ylab('0V1A')
grid.arrange(frequency_group1, frequency_group2,
             frequency_group3, frequency_group4,
             ncol=2, nrow=2)

densityplot_0V1A <- ggplot(rtdata_0V1A,aes(x=RT,group=choice))+
  geom_histogram(aes(y=..density..,fill=choice),position="dodge")+
  theme_bw()
histplot_0V1A <- ggplot(rtdata_0V1A,aes(x=RT,group=choice))+
  geom_density(aes(color=choice,fill=choice), adjust = 2, alpha = .4) +
  theme_bw()
grid.arrange(densityplot_0V1A, histplot_0V1A, ncol=2)

#=========
# 1V0A #
ggplot(data = rtdata_1V0A, aes(x=RT,group=choice)) + 
  geom_density(aes(color=choice)) +
  theme_bw()

frequency_group1 <- ggplot(rtdata_1V0A[rtdata_1V0A$group=="group1",], aes(choice)) +
  geom_bar() + ylab('1V0A')
frequency_group2 <- ggplot(rtdata_1V0A[rtdata_1V0A$group=="group2",], aes(choice)) +
  geom_bar() + ylab('1V0A')
frequency_group3 <- ggplot(rtdata_1V0A[rtdata_1V0A$group=="group3",], aes(choice)) +
  geom_bar() + ylab('1V0A')
frequency_group4 <- ggplot(rtdata_1V0A[rtdata_1V0A$group=="group4",], aes(choice)) +
  geom_bar() + ylab('1V0A')
grid.arrange(frequency_group1, frequency_group2,
             frequency_group3, frequency_group4,
             ncol=2, nrow=2)

densityplot_1V0A <- ggplot(rtdata_1V0A,aes(x=RT,group=choice))+
  geom_histogram(aes(y=..density..,fill=choice),position="dodge")+
  theme_bw()
histplot_1V0A <- ggplot(rtdata_1V0A,aes(x=RT,group=choice))+
  geom_density(aes(color=choice,fill=choice), adjust = 2, alpha = .4) +
  theme_bw()
grid.arrange(densityplot_1V0A, histplot_1V0A, ncol=2)
#=========
# 1V1A #
ggplot(data = rtdata_1V1A, aes(x=RT,group=choice)) + 
  geom_density(aes(color=choice)) +
  theme_bw()
ggplot(rtdata_1V1A, aes(choice)) +
  geom_bar() + ylab('1V1A')
densityplot_1V1A <- ggplot(rtdata_1V1A,aes(x=RT,group=choice))+
  geom_histogram(aes(y=..density..,fill=choice),position="dodge")+
  theme_bw()
histplot_1V1A <- ggplot(rtdata_1V1A,aes(x=RT,group=choice))+
  geom_density(aes(color=choice,fill=choice), adjust = 2, alpha = .4) +
  theme_bw()
grid.arrange(densityplot_1V1A, histplot_1V1A, ncol=2)
#=========
# 0V0A #
ggplot(data = rtdata_0V0A, aes(x=RT,group=choice)) + 
  geom_density(aes(color=choice)) +
  theme_bw()
ggplot(rtdata_0V0A, aes(choice)) +
  geom_bar() + ylab('0V0A')
densityplot_0V0A <- ggplot(rtdata_0V0A,aes(x=RT,group=choice))+
  geom_histogram(aes(y=..density..,fill=choice),position="dodge")+
  theme_bw()
histplot_0V0A <- ggplot(rtdata_0V0A,aes(x=RT,group=choice))+
  geom_density(aes(color=choice,fill=choice), adjust = 2, alpha = .4) +
  theme_bw()
grid.arrange(densityplot_0V0A, histplot_0V0A, ncol=2)
#=========
# 1V-1A #
ggplot(data = rtdata_1Vne1A, aes(x=RT,group=choice)) + 
  geom_density(aes(color=choice)) +
  theme_bw()
ggplot(rtdata_1Vne1A, aes(choice)) +
  geom_bar()+ ylab('1V-1A')
densityplot_1Vne1A <- ggplot(rtdata_1Vne1A,aes(x=RT,group=choice))+
  geom_histogram(aes(y=..density..,fill=choice),position="dodge")+
  theme_bw()
histplot_1Vne1A <- ggplot(rtdata_1Vne1A,aes(x=RT,group=choice))+
  geom_density(aes(color=choice,fill=choice), adjust = 2, alpha = .4) +
  theme_bw()
grid.arrange(densityplot_1Vne1A, histplot_1Vne1A, ncol=2)

#==================
# induction check

induction_check_dat <- select(dat, c(participant,
                                     group, induction_check_keys_arousal.key,
                                     induction_check_keys_valence.key))
rownames(induction_check_dat) <- NULL
induction_check_dat$time <- rep(1:7, nrow(induction_check_dat)/7)

row_index <- matrix(as.numeric(rownames(induction_check_dat)), byrow = TRUE, ncol = 20)[,1]
induction_check_dat <- induction_check_dat[row_index,]


for (i in 1:nrow(induction_check_dat)) {
  if (induction_check_dat$group[i] == 'group1') {
    induction_check_dat$mood_valence[i] <- 1
    induction_check_dat$mood_arousal[i] <- 1
  }
  if (induction_check_dat$group[i] == 'group2') {
    induction_check_dat$mood_valence[i] <- 1
    induction_check_dat$mood_arousal[i] <- 0
  }
  if (induction_check_dat$group[i] == 'group3') {
    induction_check_dat$mood_valence[i] <- 0
    induction_check_dat$mood_arousal[i] <- 1
  }
  if (induction_check_dat$group[i] == 'group4') {
    induction_check_dat$mood_valence[i] <- 0
    induction_check_dat$mood_arousal[i] <- 0
  }
}

library(ordinal)

induction_check_dat$induction_check_keys_arousal.key <- as.factor(induction_check_dat$induction_check_keys_arousal.key)
induction_check_dat$arousal_measure <- induction_check_dat$induction_check_keys_arousal.key

model = clmm(arousal_measure ~ mood_arousal + time + mood_arousal*time + (1|participant),
             data = induction_check_dat,
             threshold = "equidistant")
summary(model)

induction_check_dat$induction_check_keys_valence.key <- as.factor(induction_check_dat$induction_check_keys_valence.key)
induction_check_dat$valence_measure <- induction_check_dat$induction_check_keys_valence.key

model = clmm(valence_measure ~ mood_valence + time  + mood_valence*time + (1|participant),
             data = induction_check_dat,
             threshold = "equidistant")
summary(model)


library(ggridges)
induction_check_dat$mood_valence <- as.factor(induction_check_dat$mood_valence)
induction_check_dat$mood_arousal <- as.factor(induction_check_dat$mood_arousal)
levels(induction_check_dat$mood_arousal) <- c("low", "high")
levels(induction_check_dat$mood_valence) <- c("negative", "positive")

p1 <- induction_check_dat %>%
  ggplot(aes(y = as.factor(time))) +
  geom_density_ridges(
    aes(x = as.numeric(induction_check_keys_valence.key), fill = as.factor(mood_valence)), 
    alpha = .7, color = "white") +
  labs(
    x = "Measured Valence",
    y = "Time",
    title = "Study 2 Induction Check For Valence",
    fill = "Valence Induction") +
  coord_cartesian(clip = "off") +
  theme_ridges(grid = FALSE) + 
  theme(legend.position = "top")
p1
p2 <- induction_check_dat %>%
  ggplot(aes(y = as.factor(time))) +
  geom_density_ridges(
    aes(x = as.numeric(induction_check_keys_arousal.key), fill = as.factor(mood_arousal)), 
    alpha = .7, color = "white") +
  labs(
    x = "Measured Arousal",
    y = "Time",
    title = "Study 2 Induction Check For Arousal",
    fill = "Arousal Induction") +
  coord_cartesian(clip = "off") +
  theme_ridges(grid = FALSE) + 
  theme(legend.position = "top")

psave <- ggarrange(p1,p2, ncol = 2, labels = c("A","B"),
          font.label = list(size = 25, color = "black", face = "bold", family = NULL))
psave

ggsave("/data/plot/inductioncheck1.png",
       psave, dpi=300,
       width=8, height=5)






