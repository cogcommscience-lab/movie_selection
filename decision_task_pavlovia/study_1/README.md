# decision-making-experiment-psychopy

This repo contains demo code for creating an experiment using [PsychoJS](https://github.com/psychopy/psychojs).

The files should be contained and hosted on [Pavlovia](https://pavlovia.org/).

The experiment file is ```media_decision_making.js```

## Steps for experiment building

### Prepare the experiment stimuli 

The PsychoJS library provides a list of stimuli protocols, such as texts, shapes, images, soundtracks, or videos. And we specified the desired attributes for needed stimuli, such as content, color, position or duration. In addition, we defined a list of necessary sensors to capture participants behavioral response data, which automatically record response data like participants keyboard presses or mouse movements.

### Build the logistics of the experiment

In this step we built the logistics of the experiment, including the loops and transition between sessions. Most experiments require multiple sessions such as: instructions, training, induction, and measurement. These sessions need to be connected in order by defining a triggered transition (e.g., keyboard press, timed transition). Each session, or block of sessions, can be reused by defining session loops. For instance, decision-making experiments demand repeated measures of response data in different decision tasks. Thus, we specified a decision session and then repeat the sessions with varying stimuli via a loop. 

### Construct the routines for each experiment session

We constructed the routines for each experiment session. Depending on the purpose of the specific session, the timing and duration of the stimuli presentation and behavioral response sensors should be well-specified. For instance, a typical cognitive experiment test session would normally start with a short presentation of a cross stimuli to concentrate participants’ eye gaze on the center of the screen, then followed by the experiment stimuli and keyboard pressing sensors. 
