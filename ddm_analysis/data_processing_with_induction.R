library(hBayesDM)
library(ggplot2)
require(gridExtra)
library(dplyr)

# Read data ======================
file.name <- paste("/data/",
                   list.files(path = "/data/", pattern = ".csv"),
                   sep="")
# file.name <- file.name[-length(file.name)]
file.name

data <- vector(mode = "list", length = length(file.name))

for (i in 1:length(file.name)) {
  data[[i]] <- read.csv(file.name[i])
}

for (i in 1:length(file.name)) {
  if (ncol(data[[i]]) == 42) {
    data[[i]]$group <- substr(data[[i]]$participant, 6, 11)
    data[[i]]$participant <- substr(data[[i]]$participant, 1, 5)
  }
}

# remove dataset that contain not enough data
for (i in 1:length(file.name)) {
  if (!(nrow(data[[i]]) == 202)) {
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
                     key_resp_3.rt, Z_movie,
                     M_movie, participant,
                     group, induction_check_keys_arousal.key, induction_check_keys_valence.key))
dat[dat==""]<-NA

completeFun <- function(data, desiredCols) {
  completeVec <- complete.cases(data[, desiredCols])
  return(data[completeVec, ])
}

dat <- completeFun(dat, 'key_resp_3.rt')

for (i in 1:nrow(dat)) {
  if (is.na(dat[i, 'induction_check_keys_arousal.key'])) {
    dat[i, 'induction_check_keys_arousal.key'] <- dat[i-1, 'induction_check_keys_arousal.key']
    dat[i, 'induction_check_keys_valence.key'] <- dat[i-1, 'induction_check_keys_valence.key']
  }
}  

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

ggplot(induction_check_dat, aes(x=mood_valence, y=induction_check_keys_valence.key)) + 
  geom_point(size=1)

ggplot(induction_check_dat, aes(x=mood_arousal, y=induction_check_keys_arousal.key)) + 
  geom_point(size=1)
induction_check_dat[induction_check_dat$time == 1]
ggplot(filter(induction_check_dat, induction_check_dat$time == 1), aes(x=induction_check_keys_valence.key,
                                y=induction_check_keys_arousal.key,
                                color = group)) + 
  geom_point(size=1) + geom_jitter(aes(colour = group), width = 0.2)

ggplot(filter(induction_check_dat, induction_check_dat$time == 2), aes(x=induction_check_keys_valence.key,
                                                                       y=induction_check_keys_arousal.key,
                                                                       color = group)) + 
  geom_point(size=1) + geom_jitter(aes(colour = group), width = 0.2)

ggplot(filter(induction_check_dat, induction_check_dat$time == 3), aes(x=induction_check_keys_valence.key,
                                                                       y=induction_check_keys_arousal.key,
                                                                       color = group)) + 
  geom_point(size=1) + geom_jitter(aes(colour = group), width = 0.2)


ggplot(filter(induction_check_dat, induction_check_dat$time == 4), aes(x=induction_check_keys_valence.key,
                                                                       y=induction_check_keys_arousal.key,
                                                                       color = group)) + 
  geom_point(size=1) + geom_jitter(aes(colour = group), width = 0.2)

ggplot(filter(induction_check_dat, induction_check_dat$time == 5), aes(x=induction_check_keys_valence.key,
                                                                       y=induction_check_keys_arousal.key,
                                                                       color = group)) + 
  geom_point(size=1) + geom_jitter(aes(colour = group), width = 0.2)

ggplot(filter(induction_check_dat, induction_check_dat$time == 6), aes(x=induction_check_keys_valence.key,
                                                                       y=induction_check_keys_arousal.key,
                                                                       color = group)) + 
  geom_point(size=1) + geom_jitter(aes(colour = group), width = 0.2)

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
dat = filter(dat, (!subjID %in% delete_sub))


dat$key_resp_3.rt <- as.numeric(dat$key_resp_3.rt)
dat_uncleaned <- dat
boxplot(log(dat$key_resp_3.rt))
plot(dat$key_resp_3.rt)

# delete dataset that contain reponse rt too long or too short

too_long_sub = unique(dat$subjID[dat$key_resp_3.rt > 60])
too_long_sub

too_short_sub = unique(dat$subjID[dat$key_resp_3.rt < 0.001])
too_short_sub

dat = filter(dat, (!subjID %in% too_long_sub))
dat = filter(dat, (!subjID %in% too_short_sub))

# Clean the data (removing outliers)
# We use a fixed fast RT cutoff and used a 3 sd slow RT cutoff
for (i in dat$subjID) {
  mean <- mean(dat$key_resp_3.rt[dat$subjID==i])
  sd <- sd(dat$key_resp_3.rt[dat$subjID==i])
  cut_1 <- mean + 3 * sd
  cut_2 <- 0.250
  dat$key_resp_3.rt[dat$subjID==i][dat$key_resp_3.rt[dat$subjID==i] > cut_1] <- rep(cut_1,sum(dat$key_resp_3.rt[dat$subjID==i] > cut_1))
  dat$key_resp_3.rt[dat$subjID==i][dat$key_resp_3.rt[dat$subjID==i] <= cut_2] <- rep(cut_2,sum(dat$key_resp_3.rt[dat$subjID==i] <= cut_2))
} 

too_long_sub = unique(dat$subjID[dat$key_resp_3.rt > 30])
too_long_sub

plot(dat$key_resp_3.rt)

dat$subjID == 1
cor(pilot2hddm$trial_index, pilot2hddm$rt)
plot(pilot2hddm$trial_index, pilot2hddm$rt)
# dat = filter(dat, (!subjID %in% too_long_sub))
# for uncleaned data (data that too_long sub and too_short sub is not deleted)
#for (i in dat_uncleaned$subjID) {
#  mean <- mean(dat_uncleaned$key_resp_3.rt[dat_uncleaned$subjID==i])
#  sd <- sd(dat_uncleaned$key_resp_3.rt[dat_uncleaned$subjID==i])
#  cut_1 <- mean + 3 * sd
#  cut_2 <- 0.250
#  dat_uncleaned$key_resp_3.rt[dat_uncleaned$subjID==i][dat_uncleaned$key_resp_3.rt[dat_uncleaned$subjID==i] > cut_1] <- rep(cut_1,sum(dat_uncleaned$key_resp_3.rt[dat_uncleaned$subjID==i] > cut_1))
#  dat_uncleaned$key_resp_3.rt[dat_uncleaned$subjID==i][dat_uncleaned$key_resp_3.rt[dat_uncleaned$subjID==i] <= cut_2] <- rep(cut_2,sum(dat_uncleaned$key_resp_3.rt[dat_uncleaned$subjID==i] <= cut_2))
#} 
# plot(dat_uncleaned$key_resp_3.rt)


# dat <- dat_uncleaned

# Seperate file ======================
# 0V1A #
RT_0V1A <- dat$key_resp_3.rt[dat$decisiontype=='0V+1A']
choice_0V1A <- dat$key_resp_3.keys[dat$decisiontype=='0V+1A']
subjID_0V1A <- dat$subjID[dat$decisiontype=='0V+1A']
group_0V1A <- dat$group[dat$decisiontype=='0V+1A']
valence_0V1A <- dat$induction_check_keys_valence.key[dat$decisiontype=='0V+1A']
arousal_0V1A <- dat$induction_check_keys_valence.key[dat$decisiontype=='0V+1A']
RT_0V1A <- as.numeric(RT_0V1A)
rtdata_0V1A <- data.frame(RT = RT_0V1A, choice = choice_0V1A,
                          subjID = subjID_0V1A, group = group_0V1A,
                          valence = valence_0V1A,
                          arousal = arousal_0V1A)

# 1V0A #
RT_1V0A <- dat$key_resp_3.rt[dat$decisiontype=='1V+0A']
choice_1V0A <- dat$key_resp_3.keys[dat$decisiontype=='1V+0A']
subjID_1V0A <- dat$subjID[dat$decisiontype=='1V+0A']
group_1V0A <- dat$group[dat$decisiontype=='1V+0A']
valence_1V0A <- dat$induction_check_keys_valence.key[dat$decisiontype=='1V+0A']
arousal_1V0A <- dat$induction_check_keys_valence.key[dat$decisiontype=='1V+0A']
RT_1V0A <- as.numeric(RT_1V0A)
rtdata_1V0A <- data.frame(RT = RT_1V0A, choice = choice_1V0A,
                          subjID = subjID_1V0A, group = group_1V0A,
                          valence = valence_1V0A,
                          arousal = arousal_1V0A)

# 1V1A #
RT_1V1A <- dat$key_resp_3.rt[dat$decisiontype=='1V+1A']
choice_1V1A <- dat$key_resp_3.keys[dat$decisiontype=='1V+1A']
subjID_1V1A <- dat$subjID[dat$decisiontype=='1V+1A']
group_1V1A <- dat$group[dat$decisiontype=='1V+1A']
valence_1V1A <- dat$induction_check_keys_valence.key[dat$decisiontype=='1V+1A']
arousal_1V1A <- dat$induction_check_keys_valence.key[dat$decisiontype=='1V+1A']
RT_1V1A <- as.numeric(RT_1V1A)
rtdata_1V1A <- data.frame(RT = RT_1V1A, choice = choice_1V1A,
                          subjID = subjID_1V1A, group = group_1V1A,
                          valence = valence_1V1A,
                          arousal = arousal_1V1A)

# 0V0A #
RT_0V0A <- dat$key_resp_3.rt[dat$decisiontype=='0V+0A']
choice_0V0A <- dat$key_resp_3.keys[dat$decisiontype=='0V+0A']
subjID_0V0A <- dat$subjID[dat$decisiontype=='0V+0A']
group_0V0A <- dat$group[dat$decisiontype=='0V+0A']
valence_0V0A <- dat$induction_check_keys_valence.key[dat$decisiontype=='0V+0A']
arousal_0V0A <- dat$induction_check_keys_valence.key[dat$decisiontype=='0V+0A']
RT_0V0A <- as.numeric(RT_0V0A)
rtdata_0V0A <- data.frame(RT = RT_0V0A, choice = choice_0V0A,
                          subjID = subjID_0V0A, group = group_0V0A,
                          valence = valence_0V0A,
                          arousal = arousal_0V0A)

# 1V-1A #
RT_1Vne1A <- dat$key_resp_3.rt[dat$decisiontype=='1V-1A']
choice_1Vne1A <- dat$key_resp_3.keys[dat$decisiontype=='1V-1A']
subjID_1Vne1A <- dat$subjID[dat$decisiontype=='1V-1A']
group_1Vne1A <- dat$group[dat$decisiontype=='1V-1A']
valence_1Vne1A <- dat$induction_check_keys_valence.key[dat$decisiontype=='1V-1A']
arousal_1Vne1A <- dat$induction_check_keys_valence.key[dat$decisiontype=='1V-1A']
RT_1Vne1A <- as.numeric(RT_1Vne1A)
rtdata_1Vne1A <- data.frame(RT = RT_1Vne1A, choice = choice_1Vne1A,
                            subjID = subjID_1Vne1A, group = group_1Vne1A,
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
pilot2hddm <- select(pilot2hddm, c("subj_idx", "stim", "rt", "response", "group",
                                   "arousal", "valence"))
pilot2hddm <- pilot2hddm[order(pilot2hddm$subj_idx),]
pilot2hddm$participant <- dat$participant
write.csv(pilot2hddm, "/data/_hddm_cleaned.csv")

# autocorr
pilot2hddm$trial_index <- rep(1:140, nrow(pilot2hddm)/140)

plot(pilot2hddm$trial_index, pilot2hddm$rt)
cor(pilot2hddm$trial_index, pilot2hddm$rt)

# Plot data==========
ggplot(data = rtdata_0V1A, aes(x=RT,group=choice)) + 
  geom_density(aes(color=choice)) +
  theme_bw()
ggplot(rtdata_0V1A, aes(choice)) +
  geom_bar() + ylab('0V1A')
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
ggplot(rtdata_1V0A, aes(choice)) +
  geom_bar() + ylab('1V0A')
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


