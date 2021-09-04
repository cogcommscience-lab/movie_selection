library(ggplot2)
require(gridExtra)
library(dplyr)
library(tidyr)
library(tidyverse)
library(ggpubr)
library(rstatix)
library(hrbrthemes)
library(viridis)


#==================
# induction check
# create the dataframe for induction check
induction_check_dat <- select(dat, c(participant,
                                     group, induction_check_keys_arousal.key,
                                     induction_check_keys_valence.key))
rownames(induction_check_dat) <- NULL

# code variable time for the order of blocks
induction_check_dat$time <- rep(1:7, nrow(induction_check_dat)/7)

row_index <- matrix(as.numeric(rownames(induction_check_dat)), byrow = TRUE, ncol = 20)[,1]
induction_check_dat <- induction_check_dat[row_index,]

# for each group, encode the variables mood valence/arousal
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

induction_check_dat$time <- factor(induction_check_dat$time, order=TRUE)

# repeated measure ANOVA test, between variables as mood induction
# within variables as order of blocks or time
# test for arousal and valence
res.aov.arousal <- anova_test(
  data = induction_check_dat, dv = induction_check_keys_arousal.key,
  wid = participant,
  within = time, between = mood_arousal,
)
get_anova_table(res.aov.arousal)

res.aov.valence <- anova_test(
  data = induction_check_dat, dv = induction_check_keys_valence.key,
  wid = participant,
  within = time, between = mood_valence,
)
get_anova_table(res.aov.valence)



# plot the boxplots for the induction check
# Figure S3
induction_check_dat$mood_valence <- as.factor(induction_check_dat$mood_valence)
induction_check_dat$mood_arousal <- as.factor(induction_check_dat$mood_arousal)
levels(induction_check_dat$mood_valence) <- c("negative", "positive")
levels(induction_check_dat$mood_arousal) <- c("low", "high")

p1 <- induction_check_dat %>%
  ggplot(aes(x=mood_valence, y=induction_check_keys_valence.key, fill=time)) +
  geom_boxplot() +
  scale_fill_viridis(discrete = TRUE, alpha=0.6) +
  geom_jitter(aes(colour = mood_valence), size=0.4, alpha=0.9) +
  labs(x = "Induced Mood Valence", y = "Measured Mood Valence",
       color = "Mood Valence",
       fill = "Time")

p2 <- induction_check_dat %>%
  ggplot(aes(x=mood_arousal, y=induction_check_keys_arousal.key, fill=time)) +
  geom_boxplot() +
  scale_fill_viridis(discrete = TRUE, alpha=0.6) +
  geom_jitter(aes(colour = mood_arousal), size=0.4, alpha=0.9) +
  labs(x = "Induced Mood Arousal", y = "Measured Mood Arousal",
       color = "Mood Arousal",
       fill = "Time")

grid.arrange(p1, p2, nrow = 1)


