library(ggplot2)
require(gridExtra)
library(dplyr)
library(tidyr)

# Read data ======================

# date string data to date data in R
meta_data <- meta_data %>% mutate(StartDate = as.Date(StartDate)) 

# get user id
user_id <- as.character(meta_data$id)

# get all file names for the log files of each participants
file.name <- paste("data/experiment_data/",
                   list.files(path = "data/", pattern = ".csv"),
                   sep="")
file.name

# remove dataset the participants notes as unusable
# identifiable information removed
distracted_index = c('XXXXX', 'XXXXX', 'XXXXX', 'XXXXX', 'XXXXX',
                     'XXXXX', 'XXXXX', 'XXXXX', 'XXXXX', 'XXXXX', 
                     'XXXXX', 'XXXXX', 'XXXXX', 'XXXXX', 'XXXXX',
                     'XXXXX', 'XXXXX', 'XXXXX')
user_id <- setdiff(user_id, distracted_index)

# load the log datasets for each participants
temp_file = c()
for (index in user_id) {
  temp_file <- append(temp_file, file.name[which(grepl(index, file.name))])
}
file.name <- temp_file


data <- vector(mode = "list", length = length(file.name))

for (i in 1:length(file.name)) {
  data[[i]] <- read.csv(file.name[i])
  print(cat("success load", i))
}

# remove dataset that contain not enough data
# a success dataset should have 202 rows
for (i in 1:length(file.name)) {
  if (!(nrow(data[[i]]) == 328)) {
    print('remove')
    print(i)
    data <- data[-i]
  }
}

# combine all data sets into one dataframe
dat <- data.frame()
for (i in 1:length(data)) {
  dat <- rbind(dat, data[[i]])
}

# Data processing ======================
# select chosen option, RTs, and given options 
# induction check measures
# participants id, and their experimental group
dat <- select(dat, c(key_resp_3.keys,
                     key_resp_3.rt, Z_movie, M_movie, 
                     induction_check_keys_arousal.key, 
                     induction_check_keys_valence.key,
                     participant, group))

# remove empty lines and NA lines
dat[dat==""]<-NA

completeFun <- function(data, desiredCols) {
  completeVec <- complete.cases(data[, desiredCols])
  return(data[completeVec, ])
}

dat <- completeFun(dat, 'key_resp_3.rt')

# fill the empty lines for induction check for each participants and each block
for (i in 1:nrow(dat)) {
  if (is.na(dat[i, 'induction_check_keys_arousal.key'])) {
    dat[i, 'induction_check_keys_arousal.key'] <- dat[i-1, 'induction_check_keys_arousal.key']
    dat[i, 'induction_check_keys_valence.key'] <- dat[i-1, 'induction_check_keys_valence.key']
  }
}

# data wrangling 
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
# code the decision type
# there should be 10 types of decision tasks

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

# to make the Z option always the higher value option
# and M option always the lower value option
# all the decision tasks can be reduced to 5 type of decision tasks
# 1V0A, 0V1A, 1V1A, 0V0V, 1V-1A
# for example, -1V0A can be converted to 1V0A by reverse the Z and M options

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
# these participants contain failed trials
delete_sub = unique(dat$subjID[!(dat$key_resp_3.keys %in% c(1,2))])
delete_sub
dat = filter(dat, (!subjID %in% delete_sub))

dat$key_resp_3.rt <- as.numeric(dat$key_resp_3.rt)

# delete dataset that contain reponse rt too long or too short
# we set the long cut-off as 120 s 
# short cut-off as 0.001s

too_long_sub = unique(dat$subjID[dat$key_resp_3.rt > 120])
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


# Demographic tables
# make a vector for all participant id
participants <- unique(dat$participant)

# get all demographics information from meta_data
demographics <- meta_data

age <- as.numeric(demographics$Q3[demographics$id %in% participants])
race <- as.factor(demographics$Q5[demographics$id %in% participants])
gender <- as.factor(demographics$Q7[demographics$id %in% participants])
standing <- as.factor(demographics$Q9[demographics$id %in% participants])
english_speaking <- as.factor(demographics$Q11[demographics$id %in% participants])

# make a demographic dataframe
demo_df <- data.frame("participants" = participants,
                      "age" = age,
                      "race" = race,
                      "gender" = gender,
                      "standing" = standing,
                      "english_speaking" = english_speaking)

# calculate the frequency (count and percentage) for all demographics
table(demo_df$age)
prop.table(table(demo_df$age))
table(demo_df$race)
prop.table(table(demo_df$race))
table(demo_df$gender)
prop.table(table(demo_df$gender))
table(demo_df$standing)
prop.table(table(demo_df$standing))
table(demo_df$english_speaking)
prop.table(table(demo_df$english_speaking))



### making plot S5
rows = c()
for (i in 1:14){
  rows = c(rows, paste("HH", i, sep=""))
}
for (i in 1:14){
  rows = c(rows, paste("HL", i, sep=""))
}
for (i in 1:14){
  rows = c(rows, paste("LH", i, sep=""))
}
for (i in 1:14){
  rows = c(rows, paste("LL", i, sep=""))
}

columns = rows
mat <- matrix(0,nrow=14*4,ncol=14*4)
rownames(mat) <- rows
colnames(mat) <- rows

# If choice the Z movie, mat[Z, M] += 1
# If choice the M movie, mat[M, Z] += 1
for (i in 1:nrow(dat)) {
  if (dat$choice[i] == 1) {
    row.index = dat[i, "Z"]
    col.index = dat[i, "M"]
    
    mat[row.index, col.index] = mat[row.index, col.index] + 1
  }
  if (dat$choice[i] == 2) {
    row.index = dat[i, "M"]
    col.index = dat[i, "Z"]
    
    mat[row.index, col.index] = mat[row.index, col.index] + 1
  }
}

p_mat <- matrix(,nrow=14*4,ncol=14*4)
rownames(p_mat) <- rows
colnames(p_mat) <- rows
for (i in 1:nrow(p_mat)) {
  for (j in 1:ncol(p_mat)) {
    p_mat[i,j] <- mat[i,j] / (mat[i,j] + mat[j,i])
  }
}
p_mat_tri <- p_mat
p_mat_tri[upper.tri(p_mat_tri)] <- 0.5
p_mat_tri[upper.tri(p_mat_tri)] <- 0.5
diag(p_mat_tri) <- 0.5


# Rename the rows and columns from HH to PH, LH to NH, etc.
rows = c()
for (i in 1:14){
  rows = c(rows, paste("PH", i, sep=""))
}
for (i in 1:14){
  rows = c(rows, paste("PL", i, sep=""))
}
for (i in 1:14){
  rows = c(rows, paste("NH", i, sep=""))
}
for (i in 1:14){
  rows = c(rows, paste("NL", i, sep=""))
}


p_mat_dat <- expand.grid(X=rows, Y=rows)
p_mat_dat_tri <- expand.grid(X=rows, Y=rows)

p_mat_dat$Z <- c(p_mat)
p_mat_dat_tri$Z <- c(p_mat_tri)
p_mat_dat_tri_study1 <- p_mat_dat_tri

# store the plot as ggplot 
p2 <- ggplot(p_mat_dat, aes(Y, X, fill= Z)) + 
  geom_tile() +
  geom_segment(aes(x = 14.5 , y = Inf, xend = 14.5, yend = 14.5)) +
  geom_segment(aes(x = 28.5 , y = Inf, xend = 28.5, yend = 28.5)) + 
  geom_segment(aes(x = 42.5 , y = Inf, xend = 42.5, yend = 42.5)) + 
  geom_segment(aes(x = 0 , y = 14.5, xend = 14.5, yend = 14.5)) + 
  geom_segment(aes(x = 0 , y = 28.5, xend = 28.5, yend = 28.5)) + 
  geom_segment(aes(x = 0 , y = 42.5, xend = 42.5, yend = 42.5)) + 
  scale_fill_gradient2(low = "blue",
                     mid = "white",
                     high = "yellow",
                     midpoint = 0.5)  +
  theme(axis.text.x = element_text(angle = 90, vjust = 0.5, hjust=1),
        axis.title.x = element_text(size = 15),
        axis.title.y = element_text(size = 15),
        plot.title = element_text(size = 18),
        legend.title = element_text(size=18),
        legend.text = element_text(size=12)) +
  scale_x_discrete(position = "top") +
  labs(fill = "Probability",
       x = "Movie Option 2",
       y = "Movie Option 1",
       title = "Study 2")


library(grid)
library(gridExtra)
library(gtable)
legend = gtable_filter(ggplot_gtable(ggplot_build(p1)), "guide-box")
grid.arrange(arrangeGrob(p1 + theme(legend.position="none"),
                         p2 + theme(legend.position="none"), 
                         nrow = 1),
             legend, nrow = 1, 
             top = textGrob("Probability of Average Movie Decision Choice",gp=gpar(fontsize=22)),
             widths=c(10,1))





# Seperate file ======================
# 0V1A #
RT_0V1A <- dat$key_resp_3.rt[dat$decisiontype=='0V+1A']
choice_0V1A <- dat$key_resp_3.keys[dat$decisiontype=='0V+1A']
subjID_0V1A <- dat$subjID[dat$decisiontype=='0V+1A']
group_0V1A <- dat$group[dat$decisiontype=='0V+1A']
valence_0V1A <- dat$induction_check_keys_valence.key[dat$decisiontype=='0V+1A']
arousal_0V1A <- dat$induction_check_keys_arousal.key[dat$decisiontype=='0V+1A']
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
arousal_1V0A <- dat$induction_check_keys_arousal.key[dat$decisiontype=='1V+0A']
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
arousal_1V1A <- dat$induction_check_keys_arousal.key[dat$decisiontype=='1V+1A']
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
arousal_0V0A <- dat$induction_check_keys_arousal.key[dat$decisiontype=='0V+0A']
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
arousal_1Vne1A <- dat$induction_check_keys_arousal.key[dat$decisiontype=='1V-1A']
RT_1Vne1A <- as.numeric(RT_1Vne1A)
rtdata_1Vne1A <- data.frame(RT = RT_1Vne1A, choice = choice_1Vne1A,
                            subjID = subjID_1Vne1A, group = group_1Vne1A,
                            valence = valence_1Vne1A,
                            arousal = arousal_1Vne1A)



# CSV ======================
# make the file and write csv
study2_df <- rbind(rtdata_0V0A, rtdata_0V1A, rtdata_1V0A, rtdata_1V1A, rtdata_1Vne1A)
study2_df$subj_idx <- study2_df$subjID-1
study2_df$stim <- c(rep("0V0A",nrow(rtdata_0V0A)), rep("0V1A",nrow(rtdata_0V1A)), rep("1V0A",nrow(rtdata_1V0A)), 
                     rep("1V1A",nrow(rtdata_1V1A)), rep("1Vne1A",nrow(rtdata_1Vne1A)))
study2_df$rt <- study2_df$RT
study2_df$response <- study2_df$choice
levels(study2_df$response)[levels(study2_df$response)==2] <- "0"
study2_df <- select(study2_df, c("subj_idx", "stim", "rt", "response", "group",
                                   "arousal", "valence"))
study2_df <- study2_df[order(study2_df$subj_idx),]
study2_df$participant <- dat$participant
write.csv(study2_df, "data/study2.csv")



