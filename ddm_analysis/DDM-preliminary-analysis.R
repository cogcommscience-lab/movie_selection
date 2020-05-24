library(hBayesDM)
library(rtdists)
library(ggplot2)
require(gridExtra)
library(dplyr)


data <- `192837465_media_decision_making_task_2222.25.22_12h24.38.153`

dat <- select(data, c(key_resp_3.keys, key_resp_3.rt, Z_movie, M_movie))
dat[dat==""]<-NA
dat <- na.omit(dat)
dat$Z_movie<-substr(dat$Z_movie, 6, 7)
dat$M_movie<-substr(dat$M_movie, 6, 7)
dat$ZV <- substr(dat$Z_movie,1,1)
dat$ZA <- substr(dat$Z_movie,2,2)
dat$MV <- substr(dat$M_movie,1,1)
dat$MA <- substr(dat$M_movie,2,2)
dat$key_resp_3.rt <- substr(dat$key_resp_3.rt,2,7)

dat$key_resp_3.keys <- as.character(dat$key_resp_3.keys)
dat[dat=='["z"]'] <- as.numeric(1)
dat[dat=='["m"]'] <- as.numeric(2)

dat[dat=='H'] <- as.numeric(1)
dat[dat=='L'] <- as.numeric(2)
dat$V <- as.numeric(dat$ZV) - as.numeric(dat$MV)
dat$A <- as.numeric(dat$ZA) - as.numeric(dat$MA)

dat$key_resp_3.keys <- as.factor(dat$key_resp_3.keys)
dat$decisiontype <- dat$Z_movie 
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
  if (dat$V[i] == dat$A[i]) {
    dat$decisiontype[i] <- '0V+0A'
  }
}

for (i in 1:nrow(dat)) {
  if (dat$decisiontype[i] == '-1V+0A') {
    dat$decisiontype[i] <- '1V+0A'
    if (dat$key_resp_3.keys[i] == 1) {
      dat$key_resp_3.keys[i] <- 2
    } else {
      dat$key_resp_3.keys[i] <- 1
    }
  }
  
  if (dat$decisiontype[i] == '-1V+0A') {
    dat$decisiontype[i] <- '1V+0A'
    if (dat$key_resp_3.keys[i] == 1) {
      dat$key_resp_3.keys[i] <- 2
    } else {
      dat$key_resp_3.keys[i] <- 1
    }
  }
  
  if (dat$decisiontype[i] == '0V-1A') {
    dat$decisiontype[i] <- '0V+1A'
    if (dat$key_resp_3.keys[i] == 1) {
      dat$key_resp_3.keys[i] <- 2
    } else {
      dat$key_resp_3.keys[i] <- 1
    }
  }
  
}  

#=========
# 0V1A #
RT_0V1A <- dat$key_resp_3.rt[dat$decisiontype=='0V+1A']
choice_0V1A <- dat$key_resp_3.keys[dat$decisiontype=='0V+1A']
subjID_0V1A <- rep(1, length(RT_0V1A))
RT_0V1A <- as.numeric(RT_0V1A)
rtdata_0V1A <- data.frame(RT = RT_0V1A, choice = choice_0V1A, subjID = subjID_0V1A)
#=========
# 1V0A #
RT_1V0A <- dat$key_resp_3.rt[dat$decisiontype=='1V+0A']
choice_1V0A <- dat$key_resp_3.keys[dat$decisiontype=='1V+0A']
subjID_1V0A <- rep(1, length(RT_1V0A))
RT_1V0A <- as.numeric(RT_1V0A)
rtdata_1V0A <- data.frame(RT = RT_1V0A, choice = choice_1V0A, subjID = subjID_1V0A)
#=========
# 1V1A #
RT_1V1A <- dat$key_resp_3.rt[dat$decisiontype=='1V+1A']
choice_1V1A <- dat$key_resp_3.keys[dat$decisiontype=='1V+1A']
subjID_1V1A <- rep(1, length(RT_1V1A))
RT_1V1A <- as.numeric(RT_1V1A)
rtdata_1V1A <- data.frame(RT = RT_1V1A, choice = choice_1V1A, subjID = subjID_1V1A)
#=========
# 0V0A #
RT_0V0A <- dat$key_resp_3.rt[dat$decisiontype=='0V+0A']
choice_0V0A <- dat$key_resp_3.keys[dat$decisiontype=='0V+0A']
subjID_0V0A <- rep(1, length(RT_0V0A))
RT_0V0A <- as.numeric(RT_0V0A)
rtdata_0V0A <- data.frame(RT = RT_0V0A, choice = choice_0V0A, subjID = subjID_0V0A)
#=========
# 1V-1A #
RT_1Vne1A <- dat$key_resp_3.rt[dat$decisiontype=='1V-1A']
choice_1Vne1A <- dat$key_resp_3.keys[dat$decisiontype=='1V-1A']
subjID_1Vne1A <- rep(1, length(RT_1Vne1A))
RT_1Vne1A <- as.numeric(RT_1Vne1A)
rtdata_1Vne1A <- data.frame(RT = RT_1Vne1A, choice = choice_1Vne1A, subjID = subjID_1Vne1A)


#=========
# 0V1A #
ggplot(data = rtdata_0V1A, aes(x=RT,group=choice)) + 
  geom_density(aes(color=choice)) +
  theme_bw()
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
densityplot_1Vne1A <- ggplot(rtdata_1Vne1A,aes(x=RT,group=choice))+
  geom_histogram(aes(y=..density..,fill=choice),position="dodge")+
  theme_bw()
histplot_1Vne1A <- ggplot(rtdata_1Vne1A,aes(x=RT,group=choice))+
  geom_density(aes(color=choice,fill=choice), adjust = 2, alpha = .4) +
  theme_bw()
grid.arrange(densityplot_1Vne1A, histplot_1Vne1A, ncol=2)

#=========
# 0V1A #
output_0V1A <- choiceRT_ddm_single(
  data = rtdata_0V1A, niter = 2000, nwarmup = 1000, nchain = 4, ncore = 4)
plot(output_0V1A, type = "trace")
rhat(output_0V1A)
plot(output_0V1A)

#=========
# 1V0A #
output_1V0A <- choiceRT_ddm_single(
  data = rtdata_1V0A, niter = 2000, nwarmup = 1000, nchain = 4, ncore = 4)
plot(output_1V0A, type = "trace")
rhat(output_1V0A)
plot(output_1V0A)

#=========
# 1V1A #
output_1V1A <- choiceRT_ddm_single(
  data = rtdata_1V1A, niter = 2000, nwarmup = 1000, nchain = 4, ncore = 4)
plot(output_1V1A, type = "trace")
rhat(output_1V1A)
plot(output_1V1A)

#=========
# 0V0A #
output_0V0A <- choiceRT_ddm_single(
  data = rtdata_0V0A, niter = 2000, nwarmup = 1000, nchain = 4, ncore = 4)
plot(output_0V0A, type = "trace")
rhat(output_0V0A)
plot(output_0V0A)

#=========
# 0V0A #
output_1Vne1A <- choiceRT_ddm_single(
  data = rtdata_1Vne1A, niter = 2000, nwarmup = 1000, nchain = 4, ncore = 4)
plot(output_1Vne1A, type = "trace")
rhat(output_1Vne1A)
plot(output_1Vne1A)

