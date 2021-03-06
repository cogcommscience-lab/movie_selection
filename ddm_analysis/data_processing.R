library(hBayesDM)
library(ggplot2)
require(gridExtra)
library(dplyr)

# Read data ======================
file.name <- paste("~/OneDrive/projects/mood_management/data/summer/experiment_data/",
                   list.files(path = "~/OneDrive/projects/mood_management/data/summer/experiment_data/", pattern = ".csv"),
                   sep="")
file.name <- file.name[-length(file.name)]
file.name

# remove dataset the participants notes as unusable
distracted_index = c('85652', '91586', '91432', '66068', '83846', '67148', '81324', '91469', '80288', '83217', '90141')
for (index in distracted_index) {
  file.name <- file.name[-which(grepl(index, file.name))]
}

data <- vector(mode = "list", length = length(file.name))
for (i in 1:length(file.name)) {
  data[[i]] <- read.csv(file.name[i])
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
dat <- select(dat, c(key_resp_3.keys, key_resp_3.rt, Z_movie, M_movie, participant))
dat[dat==""]<-NA
dat <- na.omit(dat)
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


plot(dat$key_resp_3.rt)

# Seperate file ======================
# 0V1A #
RT_0V1A <- dat$key_resp_3.rt[dat$decisiontype=='0V+1A']
choice_0V1A <- dat$key_resp_3.keys[dat$decisiontype=='0V+1A']
subjID_0V1A <- dat$subjID[dat$decisiontype=='0V+1A']
RT_0V1A <- as.numeric(RT_0V1A)
rtdata_0V1A <- data.frame(RT = RT_0V1A, choice = choice_0V1A, subjID = subjID_0V1A)

# 1V0A #
RT_1V0A <- dat$key_resp_3.rt[dat$decisiontype=='1V+0A']
choice_1V0A <- dat$key_resp_3.keys[dat$decisiontype=='1V+0A']
subjID_1V0A <- dat$subjID[dat$decisiontype=='1V+0A']
RT_1V0A <- as.numeric(RT_1V0A)
rtdata_1V0A <- data.frame(RT = RT_1V0A, choice = choice_1V0A, subjID = subjID_1V0A)

# 1V1A #
RT_1V1A <- dat$key_resp_3.rt[dat$decisiontype=='1V+1A']
choice_1V1A <- dat$key_resp_3.keys[dat$decisiontype=='1V+1A']
subjID_1V1A <- dat$subjID[dat$decisiontype=='1V+1A']
RT_1V1A <- as.numeric(RT_1V1A)
rtdata_1V1A <- data.frame(RT = RT_1V1A, choice = choice_1V1A, subjID = subjID_1V1A)

# 0V0A #
RT_0V0A <- dat$key_resp_3.rt[dat$decisiontype=='0V+0A']
choice_0V0A <- dat$key_resp_3.keys[dat$decisiontype=='0V+0A']
subjID_0V0A <- dat$subjID[dat$decisiontype=='0V+0A']
RT_0V0A <- as.numeric(RT_0V0A)
rtdata_0V0A <- data.frame(RT = RT_0V0A, choice = choice_0V0A, subjID = subjID_0V0A)

# 1V-1A #
RT_1Vne1A <- dat$key_resp_3.rt[dat$decisiontype=='1V-1A']
choice_1Vne1A <- dat$key_resp_3.keys[dat$decisiontype=='1V-1A']
subjID_1Vne1A <- dat$subjID[dat$decisiontype=='1V-1A']
RT_1Vne1A <- as.numeric(RT_1Vne1A)
rtdata_1Vne1A <- data.frame(RT = RT_1Vne1A, choice = choice_1Vne1A, subjID = subjID_1Vne1A)



# CSV ======================
# make the file and write csv
pilot2hddm <- rbind(rtdata_0V0A, rtdata_0V1A, rtdata_1V0A, rtdata_1V1A, rtdata_1Vne1A)
pilot2hddm$subj_idx <- pilot2hddm$subjID-1
pilot2hddm$stim <- c(rep("0V0A",nrow(rtdata_0V0A)), rep("0V1A",nrow(rtdata_0V1A)), rep("1V0A",nrow(rtdata_1V0A)), 
                     rep("1V1A",nrow(rtdata_1V1A)), rep("1Vne1A",nrow(rtdata_1Vne1A)))
pilot2hddm$rt <- pilot2hddm$RT
pilot2hddm$response <- pilot2hddm$choice
levels(pilot2hddm$response)[levels(pilot2hddm$response)==2] <- "0"
pilot2hddm <- select(pilot2hddm, c("subj_idx", "stim", "rt", "response"))
pilot2hddm <- pilot2hddm[order(pilot2hddm$subj_idx),]
pilot2hddm$participant <- dat$participant
write.csv(pilot2hddm, "~/OneDrive/projects/mood_management/data/summer/summer_hddm_cleaned.csv")


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

