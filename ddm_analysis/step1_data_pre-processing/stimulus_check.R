library(ggplot2)
require(gridExtra)
library(tidyverse)
library(ggpubr)
library(rstatix)
library(hrbrthemes)
library(viridis)
library(readr)

#==================
# stimulus check
# create the dataframe for induction check for study 1 and study 2

study2_dat <- read.csv("study2_raw_dat.csv")
study1_dat <- read.csv("study1_raw_dat.csv")

participants_study2 <- read.csv("participants_study2.csv")$x
participants_study1 <- read.csv("participants_study1.csv")$x

stimulus_check_s2 <- select(study2_dat, c(key_resp_sad_test.keys,
                                key_resp_excited_test.keys,
                                movie_present_chosen,
                                participant, group))
stimulus_check_s2$study <- 2
stimulus_check_s1 <- select(study1_dat, c(key_resp_sad_test.keys,
                                          key_resp_excited_test.keys,
                                          movie_present_chosen,
                                          participant))
stimulus_check_s1$study <- 1

# filter stimulus rating from sampled participants 
stimulus_check_s1 <- stimulus_check_s1[stimulus_check_s1$participant %in% participants_study1,]
stimulus_check_s2 <- stimulus_check_s2[stimulus_check_s2$participant %in% participants_study2,]

stimulus_check_s1 <- stimulus_check_s1[complete.cases(stimulus_check_s1), ]

# make valence and arousal variables
stimulus_check_s1$valence_arousal <- substr(stimulus_check_s1$movie_present_chosen, 6,7)
stimulus_check_s1$valence <- substr(stimulus_check_s1$valence_arousal, 1,1)
stimulus_check_s1$arousal <- substr(stimulus_check_s1$valence_arousal, 2,2)
stimulus_check_s1$valence <- as.factor(ifelse(stimulus_check_s1$valence == "H", 1, 0))
stimulus_check_s1$arousal <- as.factor(ifelse(stimulus_check_s1$arousal == "H", 1, 0))


# do the same thing for study 2
stimulus_check_s2 <- stimulus_check_s2[complete.cases(stimulus_check_s2), ]
stimulus_check_s2$valence_arousal <- substr(stimulus_check_s2$movie_present_chosen, 6,7)
stimulus_check_s2$valence <- substr(stimulus_check_s2$valence_arousal, 1,1)
stimulus_check_s2$arousal <- substr(stimulus_check_s2$valence_arousal, 2,2)
stimulus_check_s2$valence <- as.factor(ifelse(stimulus_check_s2$valence == "H", 1, 0))
stimulus_check_s2$arousal <- as.factor(ifelse(stimulus_check_s2$arousal == "H", 1, 0))

# convert SAM rating to numeric
stimulus_check_s1$key_resp_sad_test.keys <- as.numeric(stimulus_check_s1$key_resp_sad_test.keys)
stimulus_check_s1$key_resp_excited_test.keys <- as.numeric(stimulus_check_s1$key_resp_excited_test.keys)
stimulus_check_s2$key_resp_sad_test.keys <- as.numeric(stimulus_check_s2$key_resp_sad_test.keys)
stimulus_check_s2$key_resp_excited_test.keys <- as.numeric(stimulus_check_s2$key_resp_excited_test.keys)

# combine the dataframe from study 1 & 2
stimulus_check <- dplyr::bind_rows(stimulus_check_s1, stimulus_check_s2)
stimulus_check$study <- as.factor(stimulus_check$study)

# repeated measure ANOVA test
# within variables as ratings for either High (1) valence/arousal or Low (0) valence/arousal

library(nlme)
# test for arousal - study 1
m1 <- lme(key_resp_excited_test.keys~arousal*valence,
          random=~1|participant,
          data=stimulus_check_s1)
anova(m1)
# test for valence - study 1
m2 <- lme(key_resp_sad_test.keys~valence*arousal,
          random=~1|participant,
          data=stimulus_check_s1)
anova(m2)
# test for arousal - study 2
m3 <- lme(key_resp_excited_test.keys~arousal*valence,
          random=~1|participant,
          data=stimulus_check_s2)
anova(m3)
# test for valence - study 2
m4 <- lme(key_resp_sad_test.keys~arousal*valence, 
          random=~1|participant,
          data=stimulus_check_s2)
anova(m4)



# plot the boxplots for the stimulus check 
# Figure S3
p1 <- stimulus_check %>% 
  ggplot(aes(x=study, y=key_resp_sad_test.keys, fill=valence)) + 
  geom_boxplot() + labs(y = "Measured valence",
                        title = "Valence")
p1
p2 <- ggplot(stimulus_check, aes(x=study, y=key_resp_excited_test.keys, fill=arousal)) + 
  geom_boxplot() + labs(y = "Measured arousal",
                        title = "Arousal")
p2

grid.arrange(p1,p2, nrow=1)


