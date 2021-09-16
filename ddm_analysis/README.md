The codes to replicate the analysis are organized in sequential steps. 

Data csv files are pre-processed data, which is the output of step-1. 

# Step 1
### Data pre-processing
*R*
Input file is raw data files collected from Qualtrics and Pavlovia. 
The codes pre-processed the raw data into csv files for study 1 and study 2.
It also includes a R-script for induction check, including the plot and ANOVA testing. 

# Step 2 (study 1) & 4 (study 2)
### Model fitting
*Jupyter Notebook*
Loads the pre-processed data csv files from step 1. And fitts the [HDDM](http://ski.clps.brown.edu/hddm_docs/) models, then outputs saved models for inference testing.

# Step 3 (study 1) & 5 (study 2)
### Inference testing
*Jupyter Notebook*
Loads the fitted model from step 2 & 4, and output the statistics of the posteriors distributions, including p-values for hypothesis testing, and the 95% credible interval.

# Step 6 (study 2)
### Generate samples for plotting
*Jupyter Notebook*
Loads the data for study 2, and fitted HDDM for each individual cell. It output drift rate MCMC samples for each cell, and save the samples to csv file for plotting.

# Step 7
### Model convergence
*Jupyter Notebook*
It fits each model 4 times, and calculate inter-chain variability (GR metrics) to test the convergence of HDDM models. 

# Step 8
### Plotting
*Jupyter Notebook*
The directory includes a notebook file which reproduce plots in the manuscripts. The data for plotting is also included in the directory. 

## Requirement
R | Jupyter Notebook
------------ | -------------
ggplot2 | hddm
gridExtra | matplotlib
tidyverse | pandas
rstatix | numpy
hrbrthemes | kabuki
viridis | seaborn
ggpubr | scipy

