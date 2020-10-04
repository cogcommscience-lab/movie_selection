library(dplyr)

mood <- read.csv("~/OneDrive/projects/mood_management/data/summer/qualtrics_data/movie_decision_making-consent_August 18, 2020_10.57.csv", header=T)
mood <- select(mood, c(QID16, QID17, id))
colnames(mood) <- c('arousal', 'valence', 'id')
mood <- mood[-c(1,2),]
v_stats <- read.csv("~/OneDrive/projects/mood_management/data/summer/v_stats.csv")
index <- read.csv("~/OneDrive/projects/mood_management/data/summer/summer_hddm_cleaned.csv")
index <- select(index, c(subj_idx, participant))
index <- unique(index)

v_stats <- select(v_stats, c(X, mean))
v <- v_stats$mean
dim(v) <- c(130,5)
v <- as.data.frame(v)
colnames(v) <- c('0V0A', '0V1A', '1V0A', '1V1A', '1Vne1A')
v$sub <- index$subj_idx
v$par <- index$participant

merge <- merge(v, mood, by.x = "par", by.y = "id")
merge$sub
merge <- merge[-c(56, 66, 114),]
merge$arousal <- as.numeric(merge$arousal)
merge$valence <- as.numeric(merge$valence)

x_a <- merge$arousal
x_v <- merge$valence
y_a <- merge$`0V1A`
y_v <- merge$`1V0A`
y_va <- merge$`1V1A`
y_vnea <- merge$`1Vne1A`

plot(x_a, y_v)
cor(x_a, y_v)
summary(lm(y_v ~ x_a))

plot(x_a, y_a)
cor(x_a, y_a)
summary(lm(y_a ~ x_a))

plot(x_a, y_va)
cor(x_a, y_va)
summary(lm(y_va ~ x_a))

plot(x_a, y_vnea)
cor(x_a, y_vnea)
summary(lm(y_vnea ~ x_a))

# valence
plot(x_v, y_v)
cor(x_v, y_v)
summary(lm(y_v ~ x_v))

plot(x_v, y_a)
cor(x_v, y_a)
simp_v_3 <- lm(y_a ~ x_v)
summary(simp_v_3)

plot(x_v, y_va)
cor(x_v, y_va)
summary(lm(y_va ~ x_v))

plot(x_v, y_vnea)
cor(x_v, y_vnea)
summary(lm(y_vnea ~ x_v))

