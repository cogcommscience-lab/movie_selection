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

# create averaged dataframe
mean_summary_df <- stimulus_check %>% group_by(study, participant, valence, arousal) %>% 
  summarize(mean_valence = mean(key_resp_sad_test.keys),
            mean_arousal = mean(key_resp_excited_test.keys)) %>%
  ungroup()

# repeated measure ANOVA test
# within variables as ratings for either High (1) valence/arousal or Low (0) valence/arousal


# test for valence - study 1
res.aov <- anova_test(data = mean_summary_df[mean_summary_df$study==1,],
                      dv = mean_valence,
                      wid = participant,
                      within = c(arousal, valence))
get_anova_table(res.aov)
pwc <- mean_summary_df[mean_summary_df$study==1,] %>%
  pairwise_t_test(
    mean_valence ~ valence, paired = TRUE
  )
pwc

# test for arousal - study 1
res.aov <- anova_test(data = mean_summary_df[mean_summary_df$study==1,],
                      dv = mean_arousal,
                      wid = participant,
                      within = c(arousal, valence))
get_anova_table(res.aov)
pwc <- mean_summary_df[mean_summary_df$study==1,] %>%
  pairwise_t_test(
    mean_arousal ~ arousal, paired = TRUE
  )
pwc

# test for valence - study 2
res.aov <- anova_test(data = mean_summary_df[mean_summary_df$study==2,],
                      dv = mean_valence,
                      wid = participant,
                      within = c(arousal, valence))
get_anova_table(res.aov)
pwc <- mean_summary_df[mean_summary_df$study==1,] %>%
  pairwise_t_test(
    mean_valence ~ valence, paired = TRUE
  )
pwc

# test for arousal - study 2
res.aov <- anova_test(data = mean_summary_df[mean_summary_df$study==2,],
                      dv = mean_arousal,
                      wid = participant,
                      within = c(arousal, valence))
get_anova_table(res.aov)
pwc <- mean_summary_df[mean_summary_df$study==2,] %>%
  pairwise_t_test(
    mean_arousal ~ arousal, paired = TRUE
  )
pwc



# plot the boxplots for the stimulus check 
# Figure S3
p1 <- mean_summary_df %>%
  ggplot(aes(x=study, y=mean_valence, fill=valence)) + 
  geom_boxplot() + labs(y = "Measured valence",
                        fill = "Valence",
                        x="Study",
                        title = "Valence") +
  scale_fill_discrete(labels = c("Negative", "Positive"))+
  geom_signif(
    y_position = c(5.3, 5.3), xmin = c(0.8, 1.8), xmax = c(1.2, 2.2),
    annotation = c("***", "***"), tip_length = 0.02
  )
p1

p2 <- mean_summary_df %>%
  ggplot(aes(x=study, y=mean_arousal, fill=arousal)) + 
  geom_boxplot() + labs(y = "Measured arousal",
                        fill = "Arousal",
                        x="Study",
                        title = "Arousal") +
  scale_fill_discrete(labels = c("Low", "High")) +
  geom_signif(
    y_position = c(5.3, 5.3), xmin = c(0.8, 1.8), xmax = c(1.2, 2.2),
    annotation = c("***", "***"), tip_length = 0.02
  )
p2
grid.arrange(p1,p2, nrow=1)


