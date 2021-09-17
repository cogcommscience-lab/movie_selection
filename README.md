# movie_selection
A project organized around understanding decision making and movie selection.

.
├── data
│   ├── study1.csv
│   ├── study1_measured_mood.csv
│   └── study2.csv
├── step1_data_pre-processing
│   ├── study1_pre-processing.R
│   ├── study2_induction_check.R
│   └── study2_pre-processing.R
├── step2_Fitting_HDDM_study_1.ipynb
├── step3_Inference_testing_study_1.ipynb
├── step4_Fitting_regression_study_2.ipynb
├── step5_Inference_testing_study_2.ipynb
├── step6_Cell_means_study_2.ipynb
├── step7_convergence_test
│   ├── convergence_study1.ipynb
│   └── convergence_study2.ipynb
└── step8_plot
    ├── plots.ipynb
    ├── study1_correlation_traces.csv
    ├── study_1_ddm_confirmative_analysis.csv
    ├── study_1_ddm_exploratory_analysis.csv
    ├── study2_cell_mean_trace_df.csv
    └── study2_full_regression_hypothesis.csv

## Generate Movie Plot Summaries
This code takes a corpus of movie summaries and uses NLP to reduce these summaries into several short sentences. You can think of these as summaries of movie summaries. Once summaries are generated, the ANEW dictionary is used to characterize the arousal, dominance,and valence score for each summary.

### Resources used:
* [The CMU Movie Summary Corpus](http://www.cs.cmu.edu/~ark/personas/)
* [Text Summarization with NLTK in Python](https://stackabuse.com/text-summarization-with-nltk-in-python/)
* [Sentiment Analysis Using ANEW](https://github.com/dwzhou/SentimentAnalysis)

## Summary Scoring
Code to analyze the read easiness of the generated movie summaries. 

## Decision Task Pavlovia
The code to replicate the movie decision making task on Pavlovia. This experiment is implemented by [PsychJS](https://www.psychopy.org/online/psychojsCode.html), and hosted on [Pavlovia](https://pavlovia.org/).

## DDM analysis
The codes to replicate the analysis are organized in sequential steps. 

### Data directory
Data csv files are pre-processed data, which is the output of step-1. 

### Step 1 Data pre-processing
*R*

Input file is raw data files collected from Qualtrics and Pavlovia. 
The codes pre-processed the raw data into csv files for study 1 and study 2.
It also includes a R-script for induction check, including the plot and ANOVA testing. 

### Step 2 (study 1) & 4 (study 2) Model fitting
*Jupyter Notebook*

Loads the pre-processed data csv files from step 1. And fitts the [HDDM](http://ski.clps.brown.edu/hddm_docs/) models, then outputs saved models for inference testing.

### Step 3 (study 1) & 5 (study 2) Inference testing
*Jupyter Notebook*

Loads the fitted model from step 2 & 4, and output the statistics of the posteriors distributions, including p-values for hypothesis testing, and the 95% credible interval.

### Step 6 (study 2) Generate samples for plotting
*Jupyter Notebook*

Loads the data for study 2, and fitted HDDM for each individual cell. It output drift rate MCMC samples for each cell, and save the samples to csv file for plotting.

### Step 7 Model convergence
*Jupyter Notebook*

It fits each model 4 times, and calculate inter-chain variability (GR metrics) to test the convergence of HDDM models. 

### Step 8 Plotting
*Jupyter Notebook*

The directory includes a notebook file which reproduce plots in the manuscripts. The data for plotting is also included in the directory. 

### Requirement
R | Jupyter Notebook
------------ | -------------
ggplot2 | hddm
gridExtra | matplotlib
tidyverse | pandas
rstatix | numpy
hrbrthemes | kabuki
viridis | seaborn
ggpubr | scipy

