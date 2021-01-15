/******************** 
 * Mooddm Test *
 ********************/

import { PsychoJS } from './lib/core-2020.1.js';
import * as core from './lib/core-2020.1.js';
import { TrialHandler } from './lib/data-2020.1.js';
import { Scheduler } from './lib/util-2020.1.js';
import * as util from './lib/util-2020.1.js';
import * as visual from './lib/visual-2020.1.js';
import * as sound from './lib/sound-2020.1.js';

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'media_decision_making_task';  // from the Builder filename that created this script
let expInfo = {};

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(welcomeRoutineBegin());
flowScheduler.add(welcomeRoutineEachFrame());
flowScheduler.add(welcomeRoutineEnd());
flowScheduler.add(instruction1RoutineBegin());
flowScheduler.add(instruction1RoutineEachFrame());
flowScheduler.add(instruction1RoutineEnd());
flowScheduler.add(instructionturnoffBegine());
flowScheduler.add(instructionturnoffEachFrame());
flowScheduler.add(instruction_turnoffRoutineEnd());
flowScheduler.add(instruction2RoutineBegin());
flowScheduler.add(instruction2RoutineEachFrame());
flowScheduler.add(instruction2RoutineEnd());
flowScheduler.add(reading_instructionsRoutineBegin());
flowScheduler.add(reading_instructionsRoutineEachFrame());
flowScheduler.add(reading_instructionsRoutineEnd());
flowScheduler.add(training_movie_presentRoutineBegin());
flowScheduler.add(training_movie_presentRoutineEachFrame());
flowScheduler.add(training_movie_presentRoutineEnd());
flowScheduler.add(trainning_movie_question1RoutineBegin());
flowScheduler.add(trainning_movie_question1RoutineEachFrame());
flowScheduler.add(trainning_movie_question1RoutineEnd());
flowScheduler.add(trainning_movie_question2RoutineBegin());
flowScheduler.add(trainning_movie_question2RoutineEachFrame());
flowScheduler.add(trainning_movie_question2RoutineEnd());

flowScheduler.add(trainning_induction_instructionRoutineBegin());
flowScheduler.add(trainning_induction_instructionRoutineEachFrame());
flowScheduler.add(trainning_induction_instructionRoutineEnd());
flowScheduler.add(trainning_photoRoutineBegin());
flowScheduler.add(trainning_photoRoutineEachFrame());
flowScheduler.add(trainning_photoRoutineEnd());


flowScheduler.add(training_movie_decisionRoutineBegin());
flowScheduler.add(training_movie_decisionRoutineEachFrame());
flowScheduler.add(training_movie_decisionRoutineEnd());
flowScheduler.add(trainning_decision_decisionRoutineBegin());
flowScheduler.add(trainning_decision_decisionRoutineEachFrame());
flowScheduler.add(trainning_decision_decisionRoutineEnd());

flowScheduler.add(experiment_startRoutineBegin());
flowScheduler.add(experiment_startRoutineEachFrame());
flowScheduler.add(experiment_startRoutineEnd());

const trials_3LoopScheduler = new Scheduler(psychoJS);


flowScheduler.add(trials_3LoopBegin, trials_3LoopScheduler);
flowScheduler.add(trials_3LoopScheduler);
flowScheduler.add(trials_3LoopEnd);
flowScheduler.add(thank_youRoutineBegin());
flowScheduler.add(thank_youRoutineEachFrame());
flowScheduler.add(thank_youRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  });


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2020.1.2';
  expInfo['OS'] = window.navigator.platform;
  expInfo['group'] = 'group1';

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  let redirectUrlQualtrics = 'https://ucdavis.co1.qualtrics.com/jfe/form/SV_508XPoilRP6HEod?id=' + expInfo['participant'];
  console.log(expInfo['participant'])
  console.log(redirectUrlQualtrics)
  psychoJS.setRedirectUrls(redirectUrlQualtrics, 'https://ucdavis.co1.qualtrics.com/jfe/form/SV_9N4fjjBcQ9R68It');
  return Scheduler.Event.NEXT;
}


var welcomeClock;
var text_31;
var instruction1Clock;
var text;
var key_resp;
var instruction2Clock;
var text_2;
var key_resp_2;
var reading_instructionsClock;
var text_5;

var text_turnoff;

var key_resp_sad_training;
var key_resp_excited_training;

var key_resp_sad_test;
var key_resp_excited_test;

var key_resp_4;
var training_movie_presentClock;
var text_3;
var trainning_movie_question1Clock;
var text_4;
var text_6;

var text_01;
var text_02;
var text_03;
var text_04;
var text_05;

var image_9;
var image_10;
var image_11;
var image_12;
var image_13;
var text_14;
var text_15;
var trainning_movie_question2Clock;
var text_9;
var text_10;

var image;
var image_14;
var image_15;
var image_16;
var image_17;
var text_16;
var text_17;
var trainning_movie_question3Clock;
var text_11;
var text_12;

var text_induction_question
var text_induction_question2

var image_2;
var image_18;
var image_19;
var image_20;
var image_21;
var text_18;
var text_19;
var training_movie_decisionClock;
var text_28;
var key_resp_6;
var trainning_decision_decisionClock;
var key_resp_5;
var polygon_3;
var text_26;
var text_27;
var image_8;
var image_22;
var text_29;
var experiment_startClock;
var text_13;
var movie_present_block1Clock;
var block1chosen;
var polygon;


var trainning_induction_instructionClock
var trainning_induction_instruction
var trainning_induction_key_resp
var trainning_photo_photoClock
var trainning_photo_instruction
var trainning_photo

var Excited1;
var Excited2;
var Excited3;
var Excited4;
var Excited5;
var text_20;
var text_21;
var movie_present_question_2Clock;
var block1chosen_2;

var Sad1;
var Sad2;
var Sad3;
var Sad4;
var Sad5;
var text_22;
var text_23;
var movie_present_question_3Clock;
var block1chosen_3;

var text_24;
var text_25;
var movie_decision_block1Clock;
var key_resp_3;
var polygon_2;
var text_7;
var text_8;
var image_6;
var image_7;
var rest_1Clock;
var text_30;
var text_30_left;
var key_resp_7;
var thank_youClock;
var text_32;
var globalClock;
var routineTimer;


var imageHH1;
var imageHH2;
var imageHH3;
var imageHH4;
var imageHH5;
var imageHH6;
var imageHH7;
var imageHL1;
var imageHL2;
var imageHL3;
var imageHL4;
var imageHL5;
var imageHL6;
var imageHL7;
var imageLH1;
var imageLH2;
var imageLH3;
var imageLH4;
var imageLH5;
var imageLH6;
var imageLH7;
var imageLL1;
var imageLL2;
var imageLL3;
var imageLL4;
var imageLL5;
var imageLL6;
var imageLL7;

var imageHH8;
var imageHH9;
var imageHH10;
var imageHH11;
var imageHH12;
var imageHH13;
var imageHH14;
var imageHL8;
var imageHL9;
var imageHL10;
var imageHL11;
var imageHL12;
var imageHL13;
var imageHL14;
var imageLH8;
var imageLH9;
var imageLH10;
var imageLH11;
var imageLH12;
var imageLH13;
var imageLH14;
var imageLL8;
var imageLL9;
var imageLL10;
var imageLL11;
var imageLL12;
var imageLL13;
var imageLL14;

var HHlist;
var HLlist;
var LHlist;
var LLlist;

var HH;
var HL;
var LH;
var LL;

var induction_block1Clock;
var induction_photo1
var induction_photo2
var induction_photo3
var induction_photo4
var induction_photo5
var induction_photo6
var induction_photo7
var induction_photos

var decisionlist;
var decision1;
var decision2;

var HHshuffled;
var HLshuffled;
var LHshuffled;
var LLshuffled;

var block1List;
var block1Listshuffled;
var decisionCombinBlock1;
var block1Listshuffled;
var decisionCombinBlock1shuffled;
var decisionList;
var blockList;
var blockListshuffled;
var loop7;
var loop8;
var loop28;

var induction1
var induction2
var induction3
var induction4
var induction5
var induction6
var induction7
var induction8
var induction9
var induction10
var induction11
var induction12
var induction13
var induction14
var induction15
var induction16
var induction17
var induction18
var induction19
var induction20
var induction21
var induction22
var induction23
var induction24
var induction25
var induction26
var induction27
var induction28
var induction29
var induction30
var induction31
var induction32
var induction33
var induction34
var induction35
var induction36
var induction37
var induction38
var induction39
var induction40
var induction41
var induction42
var induction43
var induction44
var induction45
var induction46
var induction47
var induction48
var induction49
var induction50
var induction51
var induction52
var induction53
var induction54
var induction55
var induction56
var induction57
var induction58
var induction59
var induction60
var induction61
var induction62
var induction63
var induction64
var induction65
var induction66
var induction67
var induction68
var induction69
var induction70
var induction71
var induction72
var induction73
var induction74
var induction75
var induction76
var induction77
var induction78
var induction79
var induction80
var induction81
var induction82
var induction83
var induction84
var induction85
var induction86
var induction87
var induction88
var induction89
var induction90
var induction91
var induction92
var induction93
var induction94
var induction95
var induction96
var induction97
var induction98
var induction99
var induction100
var induction101
var induction102
var induction103
var induction104
var induction105
var induction106
var induction107
var induction108
var induction109
var induction110
var induction111
var induction112
var induction113
var induction114
var induction115
var induction116
var induction117
var induction118
var induction119
var induction120
var induction121
var induction122
var induction123
var induction124
var induction125
var induction126
var induction127
var induction128
var induction129
var induction130
var induction131
var induction132
var induction133

var induction_instruction_text
var induction_loop_index
var inductionChosen
var induction_block1Components

function experimentInit() {
  // Initialize components for Routine "welcome"
  welcomeClock = new util.Clock();
  text_31 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_31',
    text: 'Thank you for participating in our study!',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "instruction1"
  instruction1Clock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'This study has three parts.\n\nIn the first part, you will read several short sentences describing different movies. For each movie, you will be asked to imagine what the movie is about and then you will respond to some questions about that movie.\n\nIn the second part, you will view a list of photos.\n\nIn the third part, you will be shown two different movies and asked to decide which movie you would most like to see.\n\nThese three parts will be repeated several times.\n\nThere will be instructions and a training session that will help familiarize you with how to complete the study.\n\nPlease read the instructions carefully and follow the instructions step-by-step.\n\nPress the space bar key to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instruction2"
  instruction2Clock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'You will now read movie summaries that describe the story of different movies.\n\nAfter reading each summary, please take a few moments to use your imagination to elaborate on the story in your mind. \n\nDo you think this is a happy or sad story? Is it exciting or boring?\n\nWhen you have thought about these questions, please respond to the questions at the bottom of the page.\n\nPress the space bar key to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
    // Initialize components for Routine "instruction_turnoff"
  instruction_turnoffClock = new util.Clock();
  text_turnoff = new visual.TextStim({
    win: psychoJS.window,
    text: 'We ask that you take this study seriously.\n\nPlease focus only on this study, and not anything else.\n\nPlease turn off any music, put away and silence your cellphone, and close other tabs in your web browser. It is really important that you focus only on the study for the next hour.\n\nOnce you are ready, press space bar to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_turnoff = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  
  // Initialize components for Routine "reading_instructions"
  reading_instructionsClock = new util.Clock();
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: 'To respond to the quetions, you will see a small figure who is either happy or sad. Please select which figure represents how happy or sad the summary is.\n\nYou will then see a small figure who is either very excited or very bored. Please select which figure represents how exciting or boring the summary is.\n\nPress the space bar key to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "training_movie_present"
  training_movie_presentClock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: 'For example, you will read a summary like:\n\n\nPack my box with five dozen liquor jugs.\n\n\n\nNow, please imagine what this movie is about.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "trainning_movie_question1"
  trainning_movie_question1Clock = new util.Clock();
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: 'Pack my box with five dozen liquor jugs\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  text_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_6',
    text: 'Which picture below best describes your feelings about how boring or exciting the summary was?\nPress "1" on your keyboard to choose "boring", press "5" to choose "exciting" Please note the sleepy figure on the left indicates very boring, the exploding figure on the right indicates very exciting.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });


  text_induction_question = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_induction_question',
    text: 'Which picture below best describes your current feelings in terms of how boring (left) or exciting (right)?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });

  text_induction_question2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_induction_question2',
    text: 'Which picture below best describes your current feelings in terms of how sad (left) or happy (right)?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  key_resp_excited_training = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});

  image_9 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_9', units : undefined, 
    image : 'SAM/Excited1.jpg', mask : undefined,
    ori : 0, pos : [(- 0.6), (- 0.4)], size : [0.15, 0.15],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -3.0 
  });
  image_10 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_10', units : undefined, 
    image : 'SAM/Excited2.jpg', mask : undefined,
    ori : 0, pos : [(- 0.3), (- 0.4)], size : [0.15, 0.15],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -4.0 
  });
  image_11 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_11', units : undefined, 
    image : 'SAM/Excited3.jpg', mask : undefined,
    ori : 0, pos : [0, (- 0.4)], size : [0.15, 0.15],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -5.0 
  });
  image_12 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_12', units : undefined, 
    image : 'SAM/Excited4.jpg', mask : undefined,
    ori : 0, pos : [0.3, (- 0.4)], size : [0.15, 0.15],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -6.0 
  });
  image_13 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_13', units : undefined, 
    image : 'SAM/Excited5.jpg', mask : undefined,
    ori : 0, pos : [0.6, (- 0.4)], size : [0.15, 0.15],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -7.0 
  });
  text_14 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_14',
    text: 'Boring',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.25)], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -8.0 
  });
  
  text_01 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_14',
    text: '1',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.2)], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -8.0 
  });
  
   text_02 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_14',
    text: '2',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.3), (- 0.2)], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -8.0 
  });
  
   text_03 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_14',
    text: '3',
    font: 'Arial',
    units: undefined, 
    pos: [(0), (- 0.2)], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -8.0 
  });
  
   text_04 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_14',
    text: '4',
    font: 'Arial',
    units: undefined, 
    pos: [(0.3), (- 0.2)], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -8.0 
  });
  
   text_05 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_14',
    text: '5',
    font: 'Arial',
    units: undefined, 
    pos: [(0.6), (- 0.2)], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -8.0 
  });
  
  text_15 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_15',
    text: 'Exciting',
    font: 'Arial',
    units: undefined, 
    pos: [0.6, (- 0.25)], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -9.0 
  });
  
  // Initialize components for Routine "trainning_movie_question2"
  trainning_movie_question2Clock = new util.Clock();
  text_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_9',
    text: 'Pack my box with five dozen liquor jugs.\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  text_10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_10',
    text: 'Which picture below best describes your feelings about how sad or happy the summary was?\nPress "1" on your keyboard to choose "Sad", press "5" to choose "Happy" Please note the frowning figure on the left indicates very sad, while the smiling figure on the right indicates very happy. ',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  key_resp_sad_training = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : undefined, 
    image : 'SAM/Sad1.jpg', mask : undefined,
    ori : 0, pos : [(- 0.6), (- 0.4)], size : [0.15, 0.15],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -3.0 
  });
  image_14 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_14', units : undefined, 
    image : 'SAM/Sad2.jpg', mask : undefined,
    ori : 0, pos : [(- 0.3), (- 0.4)], size : [0.15, 0.15],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -4.0 
  });
  image_15 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_15', units : undefined, 
    image : 'SAM/Sad3.jpg', mask : undefined,
    ori : 0, pos : [0, (- 0.4)], size : [0.15, 0.15],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -5.0 
  });
  image_16 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_16', units : undefined, 
    image : 'SAM/Sad4.jpg', mask : undefined,
    ori : 0, pos : [0.3, (- 0.4)], size : [0.15, 0.15],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -6.0 
  });
  image_17 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_17', units : undefined, 
    image : 'SAM/Sad5.jpg', mask : undefined,
    ori : 0, pos : [0.6, (- 0.4)], size : [0.15, 0.15],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -7.0 
  });
  text_16 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_16',
    text: 'Sad',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.25)], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -8.0 
  });
  
  text_17 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_17',
    text: 'Happy',
    font: 'Arial',
    units: undefined, 
    pos: [0.6, (- 0.25)], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -9.0 
  });
  
  // Initialize components for Routine "trainning_movie_question3"
  trainning_movie_question3Clock = new util.Clock();
  text_11 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_11',
    text: 'Pack my box with five dozen liquor jugs.\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });


  trainning_induction_instructionClock = new util.Clock();
  trainning_induction_instruction = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_28',
    text: 'In the next training session, you will view one photo.\n\nOnce the study has started, you will see more than one photo.\n\nEach photo will be shown for a few seconds.\n\nIf you find yourself uncomfortable viewing the photos, you can close your eyes for the specific photo.\n\nYou can choose to press the "Esc" two times to stop the experiment any time.\n\nPress the space bar key to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  trainning_induction_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});

  trainning_photo_photoClock = new util.Clock();
  trainning_photo_instruction = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_28',
    text: 'Please view the photo when the photo is present on the screen.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.4], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });

  trainning_photo = new visual.ImageStim({
        win : psychoJS.window,
        name : 'trainning_photo', units : undefined,
        image : 'selected/training.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
  

  
  
  // Initialize components for Routine "training_movie_decision"
  training_movie_decisionClock = new util.Clock();
  text_28 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_28',
    text: 'Now, imagine that you are in a movie theater. There is a list of movies that you might watch. Each movie has a one-sentence summary that tells you what the movie is about. \n\nYou will be shown two possible movies from this list of movies. Your task is to decide which movie you want to see most.\n\nTo choose the movie shown on the left, press the "Z" button on your keyboard. To choose the movie shown on the right, press the "M" button on your keyboard\n\n\Please place your right index finger on the "M" key, and your left index finger on the "Z" key.\n\nPress the space bar key to continue.\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_6 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trainning_decision_decision"
  trainning_decision_decisionClock = new util.Clock();
  key_resp_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  polygon_3 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'polygon_3', 
    vertices: 'cross', size:[0.05, 0.05],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  text_26 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_26',
    text: 'Z',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.3), (- 0.4)], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  text_27 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_27',
    text: 'M',
    font: 'Arial',
    units: undefined, 
    pos: [0.3, (- 0.4)], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  image_8 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_8', units : undefined, 
    image : 'texts/HH1.jpg', mask : undefined,
    ori : 0, pos : [(- 0.3), 0], size : [0.5, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -4.0 
  });
  image_22 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_22', units : undefined, 
    image : 'texts/HH2.jpg', mask : undefined,
    ori : 0, pos : [0.3, 0], size : [0.5, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -5.0 
  });
  text_29 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_29',
    text: 'To choose the left option, press the Z button on your keyboard \nto choose the right option, press the M button on your keyboard ',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.25], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -6.0 
  });
  
  // Initialize components for Routine "experiment_start"
  experiment_startClock = new util.Clock();
  text_13 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_13',
    text: 'You have now finished the training!\n\nWait 5 seconds, then you will start the main part of the study.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "movie_present_block1"
  movie_present_block1Clock = new util.Clock();
  block1chosen = new visual.ImageStim({
    win : psychoJS.window,
    name : 'block1chosen', units : undefined, 
    image : 'texts/HH1.jpg', mask : undefined,
    ori : 0, pos : [0, 0], size : [0.5, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });

  polygon = new visual.ShapeStim ({
    win: psychoJS.window, name: 'polygon', 
    vertices: 'cross', size:[0.05, 0.05],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  key_resp_excited_test = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  Excited1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Excited1', units : undefined, 
    image : 'SAM/Excited1.jpg', mask : undefined,
    ori : 0, pos : [(- 0.6), (- 0.4)], size : [0.15, 0.15],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -3.0 
  });
  Excited2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Excited2', units : undefined, 
    image : 'SAM/Excited2.jpg', mask : undefined,
    ori : 0, pos : [(- 0.3), (- 0.4)], size : [0.15, 0.15],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -4.0 
  });
  Excited3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Excited3', units : undefined, 
    image : 'SAM/Excited3.jpg', mask : undefined,
    ori : 0, pos : [0, (- 0.4)], size : [0.15, 0.15],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -5.0 
  });
  Excited4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Excited4', units : undefined, 
    image : 'SAM/Excited4.jpg', mask : undefined,
    ori : 0, pos : [0.3, (- 0.4)], size : [0.15, 0.15],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -6.0 
  });
  Excited5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Excited5', units : undefined, 
    image : 'SAM/Excited5.jpg', mask : undefined,
    ori : 0, pos : [0.6, (- 0.4)], size : [0.15, 0.15],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -7.0 
  });
  text_20 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_20',
    text: 'Boring',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.25)], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -8.0 
  });
  
  text_21 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_21',
    text: 'Exciting',
    font: 'Arial',
    units: undefined, 
    pos: [0.6, (- 0.25)], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -9.0 
  });
  
  // Initialize components for Routine "movie_present_question_2"
  movie_present_question_2Clock = new util.Clock();
  block1chosen_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'block1chosen_2', units : undefined, 
    image : 'texts/HH1.jpg', mask : undefined,
    ori : 0, pos : [0, 0], size : [0.5, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });

  key_resp_sad_test = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  Sad1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Sad1', units : undefined, 
    image : 'SAM/Sad1.jpg', mask : undefined,
    ori : 0, pos : [(- 0.6), (- 0.4)], size : [0.15, 0.15],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  Sad2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Sad2', units : undefined, 
    image : 'SAM/Sad2.jpg', mask : undefined,
    ori : 0, pos : [(- 0.3), (- 0.4)], size : [0.15, 0.15],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -3.0 
  });
  Sad3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Sad3', units : undefined, 
    image : 'SAM/Sad3.jpg', mask : undefined,
    ori : 0, pos : [0, (- 0.4)], size : [0.15, 0.15],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -4.0 
  });
  Sad4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Sad4', units : undefined, 
    image : 'SAM/Sad4.jpg', mask : undefined,
    ori : 0, pos : [0.3, (- 0.4)], size : [0.15, 0.15],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -5.0 
  });
  Sad5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Sad5', units : undefined, 
    image : 'SAM/Sad5.jpg', mask : undefined,
    ori : 0, pos : [0.6, (- 0.4)], size : [0.15, 0.15],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -6.0 
  });
  text_22 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_22',
    text: 'Sad',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.25)], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -7.0 
  });
  
  text_23 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_23',
    text: 'Happy',
    font: 'Arial',
    units: undefined, 
    pos: [0.6, (- 0.25)], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -8.0 
  });
  

  
  // Initialize components for Routine "movie_decision_block1"
  movie_decision_block1Clock = new util.Clock();
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  polygon_2 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'polygon_2', 
    vertices: 'cross', size:[0.05, 0.05],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  text_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_7',
    text: 'Z',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.3), (- 0.4)], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  text_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_8',
    text: 'M',
    font: 'Arial',
    units: undefined, 
    pos: [0.3, (- 0.4)], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
 
  // Initialize components for Routine "rest_1"
  rest_1Clock = new util.Clock();
  text_30 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_30',
    text: 'Great Job! You have finished this part of the study. \n\nThe study will pause for 10 seconds so please take a short rest.\n\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });

  text_30_left = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_30_left',
    text: 'There are n parts left',
    font: 'Arial',
    units: undefined, 
    pos: [0, -0.3], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_7 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "thank_you"
  thank_youClock = new util.Clock();
  text_32 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_32',
    text: 'Thank you!\n\nYou have finished the main task.\n\nNow you will be redirected to a questionaire website within 10s.\nAnd you will finish a questionaire. ',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
    imageHH1 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'imageHH1', units : undefined,
        image : 'texts/HH1.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size : [0.8145,0.3915],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    imageHH2 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'imageHH2', units : undefined,
        image : 'texts/HH2.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size : [0.8145,0.3915],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    imageHH3 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'imageHH3', units : undefined,
        image : 'texts/HH3.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size : [0.8145,0.3915],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    imageHH4 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'imageHH4', units : undefined,
        image : 'texts/HH4.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size : [0.8145,0.3915],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    imageHH5 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'imageHH5', units : undefined,
        image : 'texts/HH5.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size : [0.8145,0.3915],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    imageHH6 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'imageHH6', units : undefined,
        image : 'texts/HH6.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size : [0.8145,0.3915],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    imageHH7 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'imageHH7', units : undefined,
        image : 'texts/HH7.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size : [0.8145,0.3915],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    imageHH8 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'imageHH8', units : undefined,
        image : 'texts/HH8.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size : [0.8145,0.3915],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    imageHH9 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'imageHH9', units : undefined,
        image : 'texts/HH9.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [0.8145,0.3915],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    imageHH10 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'imageHH10', units : undefined,
        image : 'texts/HH10.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [0.8145,0.3915],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    imageHH11 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'imageHH11', units : undefined,
        image : 'texts/HH11.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [0.8145,0.3915],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    imageHH12 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'imageHH12', units : undefined,
        image : 'texts/HH12.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [0.8145,0.3915],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    imageHH13 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'imageHH13', units : undefined,
        image : 'texts/HH13.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size : [0.8145,0.3915],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    imageHH14 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'imageHH14', units : undefined,
        image : 'texts/HH14.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size : [0.8145,0.3915],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    imageHL1 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'imageHL1', units : undefined,
        image : 'texts/HL1.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size : [0.8145,0.3915],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    imageHL2 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'imageHL2', units : undefined,
        image : 'texts/HL2.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size : [0.8145,0.3915],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    imageHL3 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'imageHL3', units : undefined,
        image : 'texts/HL3.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size : [0.8145,0.3915],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    imageHL4 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'imageHL4', units : undefined,
        image : 'texts/HL4.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size : [0.8145,0.3915],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    imageHL5 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'imageHL5', units : undefined,
        image : 'texts/HL5.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size : [0.8145,0.3915],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    imageHL6 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'imageHL6', units : undefined,
        image : 'texts/HL6.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size : [0.8145,0.3915],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    imageHL7 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'imageHL7', units : undefined,
        image : 'texts/HL7.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size : [0.8145,0.3915],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    imageHL8 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'imageHL8', units : undefined,
        image : 'texts/HL8.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size : [0.8145,0.3915],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    imageHL9 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'imageHL9', units : undefined,
        image : 'texts/HL9.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size : [0.8145,0.3915],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    imageHL10 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'imageHL10', units : undefined,
        image : 'texts/HL10.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size : [0.8145,0.3915],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    imageHL11 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'imageHL11', units : undefined,
        image : 'texts/HL11.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size : [0.8145,0.3915],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    imageHL12 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'imageHL12', units : undefined,
        image : 'texts/HL12.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size : [0.8145,0.3915],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    imageHL13 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'imageHL13', units : undefined,
        image : 'texts/HL13.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size : [0.8145,0.3915],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    imageHL14 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'imageHL14', units : undefined,
        image : 'texts/HL14.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size : [0.8145,0.3915],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    imageLH1 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'imageLH1', units : undefined,
        image : 'texts/LH1.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size : [0.8145,0.3915],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    imageLH2 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'imageLH2', units : undefined,
        image : 'texts/LH2.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size : [0.8145,0.3915],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    imageLH3 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'imageLH3', units : undefined,
        image : 'texts/LH3.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size : [0.8145,0.3915],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    imageLH4 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'imageLH4', units : undefined,
        image : 'texts/LH4.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size : [0.8145,0.3915],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    imageLH5 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'imageLH5', units : undefined,
        image : 'texts/LH5.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size : [0.8145,0.3915],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    imageLH6 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'imageLH6', units : undefined,
        image : 'texts/LH6.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size : [0.8145,0.3915],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    imageLH7 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'imageLH7', units : undefined,
        image : 'texts/LH7.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [0.8145,0.3915],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    imageLH8 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'imageLH8', units : undefined,
        image : 'texts/LH8.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [0.8145,0.3915],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    imageLH9 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'imageLH9', units : undefined,
        image : 'texts/LH9.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size : [0.8145,0.3915],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    imageLH10 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'imageLH10', units : undefined,
        image : 'texts/LH10.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size : [0.8145,0.3915],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    imageLH11 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'imageLH11', units : undefined,
        image : 'texts/LH11.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [0.8145,0.3915],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    imageLH12 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'imageLH12', units : undefined,
        image : 'texts/LH12.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [0.8145,0.3915],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    imageLH13 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'imageLH13', units : undefined,
        image : 'texts/LH13.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [0.8145,0.3915],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    imageLH14 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'imageLH14', units : undefined,
        image : 'texts/LH14.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [0.8145,0.3915],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    imageLL1 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'imageLL1', units : undefined,
        image : 'texts/LL1.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [0.8145,0.3915],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    imageLL2 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'imageLL2', units : undefined,
        image : 'texts/LL2.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size : [0.8145,0.3915],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    imageLL3 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'imageLL3', units : undefined,
        image : 'texts/LL3.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [0.8145,0.3915],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    imageLL4 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'imageLL4', units : undefined,
        image : 'texts/LL4.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [0.8145,0.3915],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    imageLL5 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'imageLL5', units : undefined,
        image : 'texts/LL5.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size : [0.8145,0.3915],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    imageLL6 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'imageLL6', units : undefined,
        image : 'texts/LL6.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [0.8145,0.3915],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    imageLL7 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'imageLL7', units : undefined,
        image : 'texts/LL7.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [0.8145,0.3915],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    imageLL8 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'imageLL8', units : undefined,
        image : 'texts/LL8.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size : [0.8145,0.3915],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    imageLL9 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'imageLL9', units : undefined,
        image : 'texts/LL9.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [0.8145,0.3915],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    imageLL10 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'imageLL10', units : undefined,
        image : 'texts/LL10.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size : [0.8145,0.3915],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    imageLL11 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'imageLL11', units : undefined,
        image : 'texts/LL11.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [0.8145,0.3915],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    imageLL12 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'imageLL12', units : undefined,
        image : 'texts/LL12.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [0.8145,0.3915],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    imageLL13 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'imageLL13', units : undefined,
        image : 'texts/LL13.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [0.8145,0.3915],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    imageLL14 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'imageLL14', units : undefined,
        image : 'texts/LL14.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [0.8145,0.3915],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });




    induction_block1Clock = new util.Clock();
    induction_instruction_text = new visual.TextStim({
    win: psychoJS.window,
    text: 'Now you will see several photos.\n\nEach photo will be shown for a few seconds.\n\nPlease pay attention to the photos.\n\nOnce you are ready, press the space bar to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });

    induction1 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction1', units : undefined,
        image : 'selected/1.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });

    induction2 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction2', units : undefined,
        image : 'selected/2.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction3 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction3', units : undefined,
        image : 'selected/3.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction4 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction4', units : undefined,
        image : 'selected/4.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction5 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction5', units : undefined,
        image : 'selected/5.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction6 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction6', units : undefined,
        image : 'selected/6.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction7 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction7', units : undefined,
        image : 'selected/7.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction8 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction8', units : undefined,
        image : 'selected/8.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction9 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction9', units : undefined,
        image : 'selected/9.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction10 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction10', units : undefined,
        image : 'selected/10.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction11 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction11', units : undefined,
        image : 'selected/11.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction12 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction12', units : undefined,
        image : 'selected/12.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction13 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction13', units : undefined,
        image : 'selected/13.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction14 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction14', units : undefined,
        image : 'selected/14.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction15 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction15', units : undefined,
        image : 'selected/15.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction16 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction16', units : undefined,
        image : 'selected/16.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction17 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction17', units : undefined,
        image : 'selected/17.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction18 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction18', units : undefined,
        image : 'selected/18.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction19 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction19', units : undefined,
        image : 'selected/19.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction20 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction20', units : undefined,
        image : 'selected/20.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction21 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction21', units : undefined,
        image : 'selected/21.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction22 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction22', units : undefined,
        image : 'selected/22.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction23 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction23', units : undefined,
        image : 'selected/23.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction24 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction24', units : undefined,
        image : 'selected/24.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction25 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction25', units : undefined,
        image : 'selected/25.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction26 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction26', units : undefined,
        image : 'selected/26.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction27 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction27', units : undefined,
        image : 'selected/27.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction28 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction28', units : undefined,
        image : 'selected/28.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction29 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction29', units : undefined,
        image : 'selected/29.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction30 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction30', units : undefined,
        image : 'selected/30.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction31 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction31', units : undefined,
        image : 'selected/31.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction32 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction32', units : undefined,
        image : 'selected/32.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction33 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction33', units : undefined,
        image : 'selected/33.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction34 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction34', units : undefined,
        image : 'selected/34.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction35 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction35', units : undefined,
        image : 'selected/35.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction36 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction36', units : undefined,
        image : 'selected/36.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction37 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction37', units : undefined,
        image : 'selected/37.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction38 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction38', units : undefined,
        image : 'selected/38.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction39 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction39', units : undefined,
        image : 'selected/39.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction40 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction40', units : undefined,
        image : 'selected/40.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction41 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction41', units : undefined,
        image : 'selected/41.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction42 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction42', units : undefined,
        image : 'selected/42.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction43 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction43', units : undefined,
        image : 'selected/43.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction44 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction44', units : undefined,
        image : 'selected/44.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction45 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction45', units : undefined,
        image : 'selected/45.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction46 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction46', units : undefined,
        image : 'selected/46.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction47 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction47', units : undefined,
        image : 'selected/47.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction48 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction48', units : undefined,
        image : 'selected/48.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction49 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction49', units : undefined,
        image : 'selected/49.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction50 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction50', units : undefined,
        image : 'selected/50.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction51 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction51', units : undefined,
        image : 'selected/51.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction52 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction52', units : undefined,
        image : 'selected/52.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction53 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction53', units : undefined,
        image : 'selected/53.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction54 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction54', units : undefined,
        image : 'selected/54.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction55 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction55', units : undefined,
        image : 'selected/55.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction56 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction56', units : undefined,
        image : 'selected/56.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction57 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction57', units : undefined,
        image : 'selected/57.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction58 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction58', units : undefined,
        image : 'selected/58.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction59 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction59', units : undefined,
        image : 'selected/59.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction60 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction60', units : undefined,
        image : 'selected/60.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction61 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction61', units : undefined,
        image : 'selected/61.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction62 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction62', units : undefined,
        image : 'selected/62.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction63 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction63', units : undefined,
        image : 'selected/63.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction64 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction64', units : undefined,
        image : 'selected/64.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction65 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction65', units : undefined,
        image : 'selected/65.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction66 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction66', units : undefined,
        image : 'selected/66.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction67 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction67', units : undefined,
        image : 'selected/67.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction68 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction68', units : undefined,
        image : 'selected/68.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction69 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction69', units : undefined,
        image : 'selected/69.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction70 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction70', units : undefined,
        image : 'selected/70.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction71 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction71', units : undefined,
        image : 'selected/71.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction72 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction72', units : undefined,
        image : 'selected/72.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction73 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction73', units : undefined,
        image : 'selected/73.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction74 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction74', units : undefined,
        image : 'selected/74.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction75 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction75', units : undefined,
        image : 'selected/75.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction76 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction76', units : undefined,
        image : 'selected/76.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction77 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction77', units : undefined,
        image : 'selected/77.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction78 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction78', units : undefined,
        image : 'selected/78.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction79 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction79', units : undefined,
        image : 'selected/79.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction80 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction80', units : undefined,
        image : 'selected/80.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction81 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction81', units : undefined,
        image : 'selected/81.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction82 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction82', units : undefined,
        image : 'selected/82.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction83 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction83', units : undefined,
        image : 'selected/83.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction84 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction84', units : undefined,
        image : 'selected/84.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction85 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction85', units : undefined,
        image : 'selected/85.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction86 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction86', units : undefined,
        image : 'selected/86.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction87 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction87', units : undefined,
        image : 'selected/87.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction88 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction88', units : undefined,
        image : 'selected/88.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction89 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction89', units : undefined,
        image : 'selected/89.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction90 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction90', units : undefined,
        image : 'selected/90.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction91 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction91', units : undefined,
        image : 'selected/91.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction92 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction92', units : undefined,
        image : 'selected/92.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction93 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction93', units : undefined,
        image : 'selected/93.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction94 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction94', units : undefined,
        image : 'selected/94.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction95 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction95', units : undefined,
        image : 'selected/95.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction96 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction96', units : undefined,
        image : 'selected/96.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction97 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction97', units : undefined,
        image : 'selected/97.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction98 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction98', units : undefined,
        image : 'selected/98.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction99 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction99', units : undefined,
        image : 'selected/99.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction100 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction100', units : undefined,
        image : 'selected/100.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction101 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction101', units : undefined,
        image : 'selected/101.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction102 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction102', units : undefined,
        image : 'selected/102.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction103 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction103', units : undefined,
        image : 'selected/103.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction104 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction104', units : undefined,
        image : 'selected/104.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction105 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction105', units : undefined,
        image : 'selected/105.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction106 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction106', units : undefined,
        image : 'selected/106.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction107 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction107', units : undefined,
        image : 'selected/107.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction108 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction108', units : undefined,
        image : 'selected/108.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction109 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction109', units : undefined,
        image : 'selected/109.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction110 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction110', units : undefined,
        image : 'selected/110.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction111 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction111', units : undefined,
        image : 'selected/111.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction112 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction112', units : undefined,
        image : 'selected/112.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction113 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction113', units : undefined,
        image : 'selected/113.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction114 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction114', units : undefined,
        image : 'selected/114.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction115 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction115', units : undefined,
        image : 'selected/115.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction116 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction116', units : undefined,
        image : 'selected/116.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction117 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction117', units : undefined,
        image : 'selected/117.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction118 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction118', units : undefined,
        image : 'selected/118.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction119 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction119', units : undefined,
        image : 'selected/119.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction120 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction120', units : undefined,
        image : 'selected/120.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction121 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction121', units : undefined,
        image : 'selected/121.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction122 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction122', units : undefined,
        image : 'selected/122.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction123 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction123', units : undefined,
        image : 'selected/123.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction124 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction124', units : undefined,
        image : 'selected/124.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction125 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction125', units : undefined,
        image : 'selected/125.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction126 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction126', units : undefined,
        image : 'selected/126.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction127 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction127', units : undefined,
        image : 'selected/127.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction128 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction128', units : undefined,
        image : 'selected/128.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction129 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction129', units : undefined,
        image : 'selected/129.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction130 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction130', units : undefined,
        image : 'selected/130.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction131 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction131', units : undefined,
        image : 'selected/131.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction132 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction132', units : undefined,
        image : 'selected/132.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    induction133 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'induction133', units : undefined,
        image : 'selected/133.jpg', mask : undefined,
        ori : 0, pos : [0, 0], size :  [1,0.76],
        color : new util.Color([1, 1, 1]), opacity : 1,
        flipHoriz : false, flipVert : false,
        texRes : 128, interpolate : true, depth : -4.0
    });
    








    induction_photo1 = [induction1, induction2, induction3, induction4, induction5, induction6, induction7, induction8, induction9, induction10, induction11,
    induction12, induction13, induction14, induction15, induction16, induction17, induction18, induction19];

    induction_photo2 = [induction20, induction21, induction22, induction23, induction24, induction25, induction26, induction27, induction28, induction29, induction30,      induction31, induction32, induction33, induction34, induction35, induction36, induction37, induction38];

    induction_photo3 = [induction39, induction40, induction41, induction42, induction43, induction44, induction45, induction46, induction47, induction48, induction49,      induction50, induction51, induction52, induction53, induction54, induction55, induction56, induction57];

    induction_photo4 = [induction58, induction59, induction60, induction61, induction62, induction63, induction64, induction65, induction66, induction67, induction68,      induction69, induction70, induction71, induction72, induction73, induction74, induction75, induction76];

    induction_photo5 = [induction77, induction78, induction79, induction80, induction81, induction82, induction83, induction84, induction85, induction86, induction87,      induction88, induction89, induction90, induction91, induction92, induction93, induction94, induction95];

    induction_photo6 = [induction96, induction97, induction98, induction99, induction100, induction101, induction102, induction103, induction104, induction105,             induction106, induction107, induction108, induction109, induction110, induction111, induction112, induction113, induction114];

    induction_photo7 = [induction115, induction116, induction117, induction118, induction119, induction120, induction121, induction122, induction123, induction124,         induction125, induction126, induction127, induction128, induction129, induction130, induction131, induction132, induction133];

    induction_photos = [induction_photo1, induction_photo2, induction_photo3, induction_photo4, induction_photo5, induction_photo6, induction_photo7];










    HH = [imageHH1, imageHH2, imageHH3, imageHH4, imageHH5, imageHH6, imageHH7, imageHH8, imageHH9, imageHH10, imageHH11, imageHH12, imageHH13, imageHH14];
    HL = [imageHL1, imageHL2, imageHL3, imageHL4, imageHL5, imageHL6, imageHL7, imageHL8, imageHL9, imageHL10, imageHL11, imageHL12, imageHL13, imageHL14];
    LH = [imageLH1, imageLH2, imageLH3, imageLH4, imageLH5, imageLH6, imageLH7, imageLH8, imageLH9, imageLH10, imageLH11, imageLH12, imageLH13, imageLH14];
    LL = [imageLL1, imageLL2, imageLL3, imageLL4, imageLL5, imageLL6, imageLL7, imageLL8, imageLL9, imageLL10, imageLL11, imageLL12, imageLL13, imageLL14];


    HHshuffled = HH.sort(function(){return .5 - Math.random()});
    HLshuffled = HL.sort(function(){return .5 - Math.random()});
    LHshuffled = LH.sort(function(){return .5 - Math.random()});
    LLshuffled = LL.sort(function(){return .5 - Math.random()});

    HHlist = [];
    HLlist = [];
    LHlist = [];
    LLlist = [];
    blockList= [];
    blockListshuffled = [];
    decisionList = [];
    var HHHLlist = [];
    var LHLLlist = [];
    var HHLHlist = [];
    var HLLLlist = [];

    var Removelist = [];
    var decisionListblock = [];

    var step;
    for (step = 0; step < 7; step++) {
        HHlist.push([HHshuffled[step*2], HHshuffled[step*2+1]]);
        HLlist.push([HLshuffled[step*2], HLshuffled[step*2+1]]);
        LHlist.push([LHshuffled[step*2], LHshuffled[step*2+1]]);
        LLlist.push([LLshuffled[step*2], LLshuffled[step*2+1]]);
        blockList.push([HHshuffled[step*2], HHshuffled[step*2+1], HLshuffled[step*2], HLshuffled[step*2+1], LHshuffled[step*2], LHshuffled[step*2+1], LLshuffled[step*2], LLshuffled[step*2+1]]);
        blockListshuffled.push(blockList[step].sort(function(){return .5 - Math.random()}));
        const combinations = ([head, ...tail]) => tail.length > 0 ? [...tail.map(tailValue => [head, tailValue]), ...combinations(tail)] : []

        decisionListblock = combinations(blockListshuffled[step])
        console.log(decisionListblock)

        HHHLlist = [ [HHshuffled[step*2], HLshuffled[step*2]],
            [HHshuffled[step*2], HLshuffled[step*2+1]],
            [HHshuffled[step*2+1], HLshuffled[step*2]],
            [HHshuffled[step*2+1], HLshuffled[step*2+1]]]
        HHHLlist = HHHLlist.sort(() => .5 - Math.random()).slice(0,2)
        HHHLlist.push([HHHLlist[0][1],HHHLlist[0][0]],[HHHLlist[1][1],HHHLlist[1][0]])

        LHLLlist = [ [LHshuffled[step*2], LLshuffled[step*2]],
            [LHshuffled[step*2], LLshuffled[step*2+1]],
            [LHshuffled[step*2+1], LLshuffled[step*2]],
            [LHshuffled[step*2+1], LLshuffled[step*2+1]]]
        LHLLlist = LHLLlist.sort(() => .5 - Math.random()).slice(0,2)
        LHLLlist.push([LHLLlist[0][1],LHLLlist[0][0]],[LHLLlist[1][1],LHLLlist[1][0]])

        HHLHlist = [ [HHshuffled[step*2], LHshuffled[step*2]],
            [HHshuffled[step*2], LHshuffled[step*2+1]],
            [HHshuffled[step*2+1], LHshuffled[step*2]],
            [HHshuffled[step*2+1], LHshuffled[step*2+1]]]
        HHLHlist = HHLHlist.sort(() => .5 - Math.random()).slice(0,2)
        HHLHlist.push([HHLHlist[0][1],HHLHlist[0][0]],[HHLHlist[1][1],HHLHlist[1][0]])

        HLLLlist = [ [HLshuffled[step*2], LLshuffled[step*2]],
            [HLshuffled[step*2], LLshuffled[step*2+1]],
            [HLshuffled[step*2+1], LLshuffled[step*2]],
            [HLshuffled[step*2+1], LLshuffled[step*2+1]]]
        HLLLlist = HLLLlist.sort(() => .5 - Math.random()).slice(0,2)
        HLLLlist.push([HLLLlist[0][1],HLLLlist[0][0]],[HLLLlist[1][1],HLLLlist[1][0]])

        Removelist=[HHHLlist[0], HHHLlist[1], HHHLlist[2], HHHLlist[3],
            LHLLlist[0], LHLLlist[1], LHLLlist[2], LHLLlist[3],
            HHLHlist[0], HHLHlist[1], HHLHlist[2], HHLHlist[3],
            HLLLlist[0], HLLLlist[1], HLLLlist[2], HLLLlist[3],]

        var i;
        var j;
        var removeindex = [];
        for (i = 0; i < decisionListblock.length; i ++) {
            for (j=0 ; j< Removelist.length; j++) {
                if (decisionListblock[i][0]==Removelist[j][0] & decisionListblock[i][1]==Removelist[j][1]) {
                    removeindex.push(i)
                }
            }
        }

        removeindex.reverse()
        removeindex = [...new Set(removeindex)]
        console.log(removeindex)
        console.log(Removelist)

        for (i = 0 ; i < removeindex.length; i ++) {
            decisionListblock.splice(removeindex[i],1)
        }

        function remove(array, element) {
            return array.filter(el => el !== element);
        }

        decisionList.push(decisionListblock.sort(function(){return .5 - Math.random()}))

    };
    
    console.log(decisionList)
    console.log(decisionList[0].length)
    console.log(decisionList[1].length)
    console.log(decisionList[2].length)
    console.log(decisionList[3].length)
    console.log(decisionList[4].length)
    console.log(decisionList[5].length)
    console.log(decisionList[6].length)

  instruction_turnoffClock = new util.Clock();
  key_resp_turnoff = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var welcomeComponents;
function welcomeRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'welcome'-------
    t = 0;
    welcomeClock.reset(); // clock
    frameN = -1;
    routineTimer.add(4.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    welcomeComponents = [];
    welcomeComponents.push(text_31);
    
    for (const thisComponent of welcomeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var frameRemains;
var continueRoutine;
function welcomeRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'welcome'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = welcomeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_31* updates
    if (t >= 0.0 && text_31.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_31.tStart = t;  // (not accounting for frame time here)
      text_31.frameNStart = frameN;  // exact frame index
      
      text_31.setAutoDraw(true);
    }

    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_31.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_31.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of welcomeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function welcomeRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'welcome'-------
    for (const thisComponent of welcomeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_allKeys;
var instruction1Components;
function instruction1RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'instruction1'-------
    t = 0;
    instruction1Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    instruction1Components = [];
    instruction1Components.push(text);
    instruction1Components.push(key_resp);
    
    for (const thisComponent of instruction1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function instruction1RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'instruction1'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = instruction1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    
    // *key_resp* updates
    if (t >= 0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instruction1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instruction1RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'instruction1'-------
    for (const thisComponent of instruction1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "instruction1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

var instruction_turnoffClock;
var key_resp_turnoff;
var instruction_turnoffComponents;
function instructionturnoffBegine(trials) {
    return function () {
    t=0;
    instruction_turnoffClock.reset(); // clock 
    key_resp_turnoff.keys = undefined;
    key_resp_turnoff.rt = undefined;
    
    instruction_turnoffComponents = [];
    instruction_turnoffComponents.push(text_turnoff);
    instruction_turnoffComponents.push(key_resp_turnoff);
    
    for (const thisComponent of instruction_turnoffComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
    }
}

function instructionturnoffEachFrame(trials) {
    return function () {
    //------Loop for each frame of Routine 'instruction2'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = instruction_turnoffClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_turnoff.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_turnoff.tStart = t;  // (not accounting for frame time here)
      text_turnoff.frameNStart = frameN;  // exact frame index
      
      text_turnoff.setAutoDraw(true);
    }

    
    // *key_resp_2* updates
    if (t >= 3 && key_resp_turnoff.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_turnoff.tStart = t;  // (not accounting for frame time here)
      key_resp_turnoff.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_turnoff.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_turnoff.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_turnoff.clearEvents(); });
    }

    if (key_resp_turnoff.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_turnoff.getKeys({keyList: ['space'], waitRelease: false});
      if (theseKeys.length > 0) {
        key_resp_turnoff.keys = theseKeys[theseKeys.length - 1].name;  // just the last key pressed
        key_resp_turnoff.rt = theseKeys[theseKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instruction_turnoffComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function instruction_turnoffRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'instruction2'-------
    for (const thisComponent of instruction_turnoffComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "instruction2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

var _key_resp_2_allKeys;
var instruction2Components;
function instruction2RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'instruction2'-------
    t = 0;
    instruction2Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    // keep track of which components have finished
    instruction2Components = [];
    instruction2Components.push(text_2);
    instruction2Components.push(key_resp_2);
    
    for (const thisComponent of instruction2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function instruction2RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'instruction2'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = instruction2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }

    
    // *key_resp_2* updates
    if (t >= 3 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }

    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instruction2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instruction2RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'instruction2'-------
    for (const thisComponent of instruction2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "instruction2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_4_allKeys;
var reading_instructionsComponents;
function reading_instructionsRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'reading_instructions'-------
    t = 0;
    reading_instructionsClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp_4.keys = undefined;
    key_resp_4.rt = undefined;
    _key_resp_4_allKeys = [];
    // keep track of which components have finished
    reading_instructionsComponents = [];
    reading_instructionsComponents.push(text_5);
    reading_instructionsComponents.push(key_resp_4);
    
    for (const thisComponent of reading_instructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function reading_instructionsRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'reading_instructions'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = reading_instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_5* updates
    if (t >= 0.0 && text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_5.tStart = t;  // (not accounting for frame time here)
      text_5.frameNStart = frameN;  // exact frame index
      
      text_5.setAutoDraw(true);
    }

    
    // *key_resp_4* updates
    if (t >= 3 && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_4.tStart = t;  // (not accounting for frame time here)
      key_resp_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.clearEvents(); });
    }

    if (key_resp_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_4.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_4_allKeys = _key_resp_4_allKeys.concat(theseKeys);
      if (_key_resp_4_allKeys.length > 0) {
        key_resp_4.keys = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].name;  // just the last key pressed
        key_resp_4.rt = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of reading_instructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function reading_instructionsRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'reading_instructions'-------
    for (const thisComponent of reading_instructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "reading_instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var training_movie_presentComponents;
function training_movie_presentRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'training_movie_present'-------
    t = 0;
    training_movie_presentClock.reset(); // clock
    frameN = -1;
    routineTimer.add(15.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    training_movie_presentComponents = [];
    training_movie_presentComponents.push(text_3);
    
    for (const thisComponent of training_movie_presentComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function training_movie_presentRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'training_movie_present'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = training_movie_presentClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }

    frameRemains = 0.0 + 15 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_3.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of training_movie_presentComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function training_movie_presentRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'training_movie_present'-------
    for (const thisComponent of training_movie_presentComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}



var _key_resp_sad_training_allKeys;
var trainning_movie_question1Components;
function trainning_movie_question1RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'trainning_movie_question1'-------
    t = 0;
    trainning_movie_question1Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat

    key_resp_excited_training.keys = undefined;
    key_resp_excited_training.rt = undefined;
    _key_resp_sad_training_allKeys = [];
    // keep track of which components have finished
    trainning_movie_question1Components = [];
    trainning_movie_question1Components.push(text_4);
    trainning_movie_question1Components.push(text_6);
    trainning_movie_question1Components.push(key_resp_excited_training);
    trainning_movie_question1Components.push(image_9);
    trainning_movie_question1Components.push(image_10);
    trainning_movie_question1Components.push(image_11);
    trainning_movie_question1Components.push(image_12);
    trainning_movie_question1Components.push(image_13);
    trainning_movie_question1Components.push(text_14);
    trainning_movie_question1Components.push(text_15);
    
    trainning_movie_question1Components.push(text_01);
    trainning_movie_question1Components.push(text_02);
    trainning_movie_question1Components.push(text_03);
    trainning_movie_question1Components.push(text_04);
    trainning_movie_question1Components.push(text_05);
    
    for (const thisComponent of trainning_movie_question1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function trainning_movie_question1RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'trainning_movie_question1'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = trainning_movie_question1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_4* updates
    if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }
    
    if (t >= 0.0) {
      text_01.setAutoDraw(true);
    }
    if (t >= 0.0) {
      text_02.setAutoDraw(true);
    }
    if (t >= 0.0) {
      text_03.setAutoDraw(true);
    }
    if (t >= 0.0) {
      text_04.setAutoDraw(true);
    }
    if (t >= 0.0) {
      text_05.setAutoDraw(true);
    }
    
    // *text_6* updates
    if (t >= 0.0 && text_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_6.tStart = t;  // (not accounting for frame time here)
      text_6.frameNStart = frameN;  // exact frame index
      
      text_6.setAutoDraw(true);
    }

    if (t >= 0 && key_resp_excited_training.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_excited_training.tStart = t;  // (not accounting for frame time here)
      key_resp_excited_training.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_excited_training.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_excited_training.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_excited_training.clearEvents(); });
    }

    if (key_resp_excited_training.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_excited_training.getKeys({keyList: ['1','2','3','4','5'], waitRelease: false});
      _key_resp_sad_training_allKeys = _key_resp_sad_training_allKeys.concat(theseKeys);
      if (_key_resp_sad_training_allKeys.length > 0) {
        key_resp_excited_training.keys = _key_resp_sad_training_allKeys[_key_resp_sad_training_allKeys.length - 1].name;  // just the last key pressed
        key_resp_excited_training.rt = _key_resp_sad_training_allKeys[_key_resp_sad_training_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // *image_9* updates
    if (t >= 0.0 && image_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_9.tStart = t;  // (not accounting for frame time here)
      image_9.frameNStart = frameN;  // exact frame index
      
      image_9.setAutoDraw(true);
    }

    // *image_10* updates
    if (t >= 0.0 && image_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_10.tStart = t;  // (not accounting for frame time here)
      image_10.frameNStart = frameN;  // exact frame index
      
      image_10.setAutoDraw(true);
    }

    // *image_11* updates
    if (t >= 0.0 && image_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_11.tStart = t;  // (not accounting for frame time here)
      image_11.frameNStart = frameN;  // exact frame index
      
      image_11.setAutoDraw(true);
    }

    // *image_12* updates
    if (t >= 0.0 && image_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_12.tStart = t;  // (not accounting for frame time here)
      image_12.frameNStart = frameN;  // exact frame index
      
      image_12.setAutoDraw(true);
    }

    // *image_13* updates
    if (t >= 0.0 && image_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_13.tStart = t;  // (not accounting for frame time here)
      image_13.frameNStart = frameN;  // exact frame index
      
      image_13.setAutoDraw(true);
    }

    // *text_14* updates
    if (t >= 0.0 && text_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_14.tStart = t;  // (not accounting for frame time here)
      text_14.frameNStart = frameN;  // exact frame index
      
      text_14.setAutoDraw(true);
    }

    // *text_15* updates
    if (t >= 0.0 && text_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_15.tStart = t;  // (not accounting for frame time here)
      text_15.frameNStart = frameN;  // exact frame index
      
      text_15.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trainning_movie_question1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trainning_movie_question1RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'trainning_movie_question1'-------
    for (const thisComponent of trainning_movie_question1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_excited_training.keys', key_resp_excited_training.keys);
    psychoJS.experiment.addData('key_resp_excited_training.rt', key_resp_excited_training.rt);
    // the Routine "trainning_movie_question1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

var _key_resp_sad_training_allKeys;
var trainning_movie_question2Components;
function trainning_movie_question2RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'trainning_movie_question2'-------
    t = 0;
    trainning_movie_question2Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    
    key_resp_sad_training.keys = undefined;
    key_resp_sad_training.rt = undefined;
    _key_resp_sad_training_allKeys = [];
    // keep track of which components have finished
    trainning_movie_question2Components = [];
    trainning_movie_question2Components.push(text_9);
    trainning_movie_question2Components.push(text_10);
    trainning_movie_question2Components.push(key_resp_sad_training);
    trainning_movie_question2Components.push(image);
    trainning_movie_question2Components.push(image_14);
    trainning_movie_question2Components.push(image_15);
    trainning_movie_question2Components.push(image_16);
    trainning_movie_question2Components.push(image_17);
    trainning_movie_question2Components.push(text_16);
    trainning_movie_question2Components.push(text_17);
    
    trainning_movie_question2Components.push(text_01);
    trainning_movie_question2Components.push(text_02);
    trainning_movie_question2Components.push(text_03);
    trainning_movie_question2Components.push(text_04);
    trainning_movie_question2Components.push(text_05);
    
    for (const thisComponent of trainning_movie_question2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function trainning_movie_question2RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'trainning_movie_question2'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = trainning_movie_question2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_9* updates
    if (t >= 0.0 && text_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_9.tStart = t;  // (not accounting for frame time here)
      text_9.frameNStart = frameN;  // exact frame index
      
      text_9.setAutoDraw(true);
    }
    
    if (t >= 0.0) {
      text_01.setAutoDraw(true);
    }
    
    if (t >= 0.0) {
      text_02.setAutoDraw(true);
    }
    
    if (t >= 0.0) {
      text_03.setAutoDraw(true);
    }
    
    if (t >= 0.0) {
      text_04.setAutoDraw(true);
    }
    
    if (t >= 0.0) {
      text_05.setAutoDraw(true);
    }
    
    // *text_10* updates
    if (t >= 0.0 && text_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_10.tStart = t;  // (not accounting for frame time here)
      text_10.frameNStart = frameN;  // exact frame index
      
      text_10.setAutoDraw(true);
    }

    // *image* updates
    if (t >= 0.0 && image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image.tStart = t;  // (not accounting for frame time here)
      image.frameNStart = frameN;  // exact frame index
      
      image.setAutoDraw(true);
    }

    
    // *image_14* updates
    if (t >= 0.0 && image_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_14.tStart = t;  // (not accounting for frame time here)
      image_14.frameNStart = frameN;  // exact frame index
      
      image_14.setAutoDraw(true);
    }

    
    // *image_15* updates
    if (t >= 0.0 && image_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_15.tStart = t;  // (not accounting for frame time here)
      image_15.frameNStart = frameN;  // exact frame index
      
      image_15.setAutoDraw(true);
    }

    
    // *image_16* updates
    if (t >= 0.0 && image_16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_16.tStart = t;  // (not accounting for frame time here)
      image_16.frameNStart = frameN;  // exact frame index
      
      image_16.setAutoDraw(true);
    }

    
    // *image_17* updates
    if (t >= 0.0 && image_17.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_17.tStart = t;  // (not accounting for frame time here)
      image_17.frameNStart = frameN;  // exact frame index
      
      image_17.setAutoDraw(true);
    }

    
    // *text_16* updates
    if (t >= 0.0 && text_16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_16.tStart = t;  // (not accounting for frame time here)
      text_16.frameNStart = frameN;  // exact frame index
      
      text_16.setAutoDraw(true);
    }

    
    // *text_17* updates
    if (t >= 0.0 && text_17.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_17.tStart = t;  // (not accounting for frame time here)
      text_17.frameNStart = frameN;  // exact frame index
      
      text_17.setAutoDraw(true);
    }
    
    if (t >= 0 && key_resp_sad_training.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    key_resp_sad_training.tStart = t;  // (not accounting for frame time here)
    key_resp_sad_training.frameNStart = frameN;  // exact frame index
      
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { key_resp_sad_training.clock.reset(); });  // t=0 on next screen flip
    psychoJS.window.callOnFlip(function() { key_resp_sad_training.start(); }); // start on screen flip
    psychoJS.window.callOnFlip(function() { key_resp_sad_training.clearEvents(); });
    }

    if (key_resp_sad_training.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_sad_training.getKeys({keyList: ['1','2','3','4','5'], waitRelease: false});
      _key_resp_sad_training_allKeys = _key_resp_sad_training_allKeys.concat(theseKeys);
      if (_key_resp_sad_training_allKeys.length > 0) {
        key_resp_sad_training.keys = _key_resp_sad_training_allKeys[_key_resp_sad_training_allKeys.length - 1].name;  // just the last key pressed
        key_resp_sad_training.rt = _key_resp_sad_training_allKeys[_key_resp_sad_training_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trainning_movie_question2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trainning_movie_question2RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'trainning_movie_question2'-------
    for (const thisComponent of trainning_movie_question2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_sad_training.keys', key_resp_sad_training.keys);
    psychoJS.experiment.addData('key_resp_sad_training.rt', key_resp_sad_training.rt);
    // the Routine "trainning_movie_question2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_trainning_induction_instruction_allKeys;
var trainning_induction_instructionComponents;
function trainning_induction_instructionRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'trainning_movie_question2'-------
    t = 0;
    trainning_induction_instructionClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    
    trainning_induction_key_resp.keys = undefined;
    trainning_induction_key_resp.rt = undefined;
    _key_resp_trainning_induction_instruction_allKeys = [];
    // keep track of which components have finished
    trainning_induction_instructionComponents = [];
    trainning_induction_instructionComponents.push(trainning_induction_instruction);
    trainning_induction_instructionComponents.push(trainning_induction_key_resp);

    
    for (const thisComponent of trainning_induction_instructionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}

function trainning_induction_instructionRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'instruction2'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = trainning_induction_instructionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && trainning_induction_instruction.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trainning_induction_instruction.tStart = t;  // (not accounting for frame time here)
      trainning_induction_instruction.frameNStart = frameN;  // exact frame index
      
      trainning_induction_instruction.setAutoDraw(true);
    }

    
    // *key_resp_2* updates
    if (t >= 3 && trainning_induction_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trainning_induction_key_resp.tStart = t;  // (not accounting for frame time here)
      trainning_induction_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { trainning_induction_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { trainning_induction_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { trainning_induction_key_resp.clearEvents(); });
    }

    if (trainning_induction_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = trainning_induction_key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_trainning_induction_instruction_allKeys = _key_resp_trainning_induction_instruction_allKeys.concat(theseKeys);
      if (_key_resp_trainning_induction_instruction_allKeys.length > 0) {
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trainning_induction_instructionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function trainning_induction_instructionRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'reading_instructions'-------
    for (const thisComponent of trainning_induction_instructionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "reading_instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var trainning_photoComponents
function trainning_photoRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'movie_present_block1'-------
    routineTimer.add(10.000000);
    t = 0;
    trainning_photo_photoClock.reset(); // clock
    frameN = -1;

    // keep track of which components have finished
    trainning_photoComponents = [];
    trainning_photoComponents.push(trainning_photo_instruction);
    trainning_photoComponents.push(trainning_photo);

    for (const thisComponent of trainning_photoComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}

function trainning_photoRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'movie_present_block1'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = trainning_photo_photoClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame

    // *movie_presentChosen* updates
    if (t >= 0 && trainning_photo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trainning_photo.tStart = t;  // (not accounting for frame time here)
      trainning_photo.frameNStart = frameN;  // exact frame index
      trainning_photo_instruction.tStart = t;
      trainning_photo_instruction.frameNStart = frameN;

      trainning_photo.setAutoDraw(true);
      trainning_photo_instruction.setAutoDraw(true);
    }


    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trainning_photoComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function trainning_photoRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'movie_present_block1'-------
    for (const thisComponent of trainning_photoComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "movie_present_block1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

var _key_resp_6_allKeys;
var training_movie_decisionComponents;
function training_movie_decisionRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'training_movie_decision'-------
    t = 0;
    training_movie_decisionClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp_6.keys = undefined;
    key_resp_6.rt = undefined;
    _key_resp_6_allKeys = [];
    // keep track of which components have finished
    training_movie_decisionComponents = [];
    training_movie_decisionComponents.push(text_28);
    training_movie_decisionComponents.push(key_resp_6);
    
    for (const thisComponent of training_movie_decisionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function training_movie_decisionRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'training_movie_decision'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = training_movie_decisionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_28* updates
    if (t >= 0.0 && text_28.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_28.tStart = t;  // (not accounting for frame time here)
      text_28.frameNStart = frameN;  // exact frame index
      
      text_28.setAutoDraw(true);
    }

    
    // *key_resp_6* updates
    if (t >= 3 && key_resp_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_6.tStart = t;  // (not accounting for frame time here)
      key_resp_6.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_6.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.clearEvents(); });
    }

    if (key_resp_6.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_6.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_6_allKeys = _key_resp_6_allKeys.concat(theseKeys);
      if (_key_resp_6_allKeys.length > 0) {
        key_resp_6.keys = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].name;  // just the last key pressed
        key_resp_6.rt = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of training_movie_decisionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function training_movie_decisionRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'training_movie_decision'-------
    for (const thisComponent of training_movie_decisionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "training_movie_decision" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_5_allKeys;
var trainning_decision_decisionComponents;
function trainning_decision_decisionRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'trainning_decision_decision'-------
    t = 0;
    trainning_decision_decisionClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp_5.keys = undefined;
    key_resp_5.rt = undefined;
    _key_resp_5_allKeys = [];
    // keep track of which components have finished
    trainning_decision_decisionComponents = [];
    trainning_decision_decisionComponents.push(key_resp_5);
    trainning_decision_decisionComponents.push(polygon_3);
    trainning_decision_decisionComponents.push(text_26);
    trainning_decision_decisionComponents.push(text_27);
    trainning_decision_decisionComponents.push(image_8);
    trainning_decision_decisionComponents.push(image_22);
    trainning_decision_decisionComponents.push(text_29);
    
    for (const thisComponent of trainning_decision_decisionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function trainning_decision_decisionRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'trainning_decision_decision'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = trainning_decision_decisionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_5* updates
    if (t >= 1.5 && key_resp_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_5.tStart = t;  // (not accounting for frame time here)
      key_resp_5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.clearEvents(); });
    }

    if (key_resp_5.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_5.getKeys({keyList: ['z', 'm'], waitRelease: false});
      _key_resp_5_allKeys = _key_resp_5_allKeys.concat(theseKeys);
      if (_key_resp_5_allKeys.length > 0) {
        key_resp_5.keys = _key_resp_5_allKeys.map((key) => key.name);  // storing all keys
        key_resp_5.rt = _key_resp_5_allKeys.map((key) => key.rt);
        // was this correct?
        if (key_resp_5.keys == '') {
            key_resp_5.corr = 1;
        } else {
            key_resp_5.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *polygon_3* updates
    if (t >= 0 && polygon_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_3.tStart = t;  // (not accounting for frame time here)
      polygon_3.frameNStart = frameN;  // exact frame index
      
      polygon_3.setAutoDraw(true);
    }

    frameRemains = 0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (polygon_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      polygon_3.setAutoDraw(false);
    }
    
    // *text_26* updates
    if (t >= 1.5 && text_26.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_26.tStart = t;  // (not accounting for frame time here)
      text_26.frameNStart = frameN;  // exact frame index
      
      text_26.setAutoDraw(true);
    }

    
    // *text_27* updates
    if (t >= 1.5 && text_27.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_27.tStart = t;  // (not accounting for frame time here)
      text_27.frameNStart = frameN;  // exact frame index
      
      text_27.setAutoDraw(true);
    }

    
    // *image_8* updates
    if (t >= 1.5 && image_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_8.tStart = t;  // (not accounting for frame time here)
      image_8.frameNStart = frameN;  // exact frame index
      
      image_8.setAutoDraw(true);
    }

    
    // *image_22* updates
    if (t >= 1.5 && image_22.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_22.tStart = t;  // (not accounting for frame time here)
      image_22.frameNStart = frameN;  // exact frame index
      
      image_22.setAutoDraw(true);
    }

    
    // *text_29* updates
    if (t >= 1.5 && text_29.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_29.tStart = t;  // (not accounting for frame time here)
      text_29.frameNStart = frameN;  // exact frame index
      
      text_29.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trainning_decision_decisionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trainning_decision_decisionRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'trainning_decision_decision'-------
    for (const thisComponent of trainning_decision_decisionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (key_resp_5.keys === undefined) {
      if (['None','none',undefined].includes('')) {
         key_resp_5.corr = 1;  // correct non-response
      } else {
         key_resp_5.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_5.keys', key_resp_5.keys);
    psychoJS.experiment.addData('key_resp_5.corr', key_resp_5.corr);
    if (typeof key_resp_5.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_5.rt', key_resp_5.rt);
        routineTimer.reset();
        }
    
    key_resp_5.stop();
    // the Routine "trainning_decision_decision" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var experiment_startComponents;
function experiment_startRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'experiment_start'-------
    t = 0;
    experiment_startClock.reset(); // clock
    frameN = -1;
    routineTimer.add(5.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    experiment_startComponents = [];
    experiment_startComponents.push(text_13);
    
    for (const thisComponent of experiment_startComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function experiment_startRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'experiment_start'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = experiment_startClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_13* updates
    if (t >= 0.0 && text_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_13.tStart = t;  // (not accounting for frame time here)
      text_13.frameNStart = frameN;  // exact frame index
      
      text_13.setAutoDraw(true);
    }

    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_13.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_13.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of experiment_startComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function experiment_startRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'experiment_start'-------
    for (const thisComponent of experiment_startComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var trials_3;
var currentLoop;
function trials_3LoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials_3 = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 7, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'trials_3'
  });
  psychoJS.experiment.addLoop(trials_3); // add the loop to the experiment
  currentLoop = trials_3;  // we're now the current loop
  var trials_3thisRepN;
  // Schedule all the trials in the trialList:
  for (const thisTrial_3 of trials_3) {
    const snapshot = trials_3.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    const trialsLoopScheduler = new Scheduler(psychoJS);

    trials_3thisRepN=trials_3.thisRepN;

    thisScheduler.add(trialsLoopBegin, trialsLoopScheduler);
    thisScheduler.add(trialsLoopScheduler);
    thisScheduler.add(trialsLoopEnd);

    const induction_trialsLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(induction_trialsLoopBegin, induction_trialsLoopScheduler);
    thisScheduler.add(induction_trialsLoopScheduler);
    thisScheduler.add(induction_trialsLoopEnd);

    thisScheduler.add(induction_question1RoutineBegin());
    thisScheduler.add(induction_question1RoutineEachFrame());
    thisScheduler.add(induction_question1RoutineEnd());

    thisScheduler.add(induction_question2RoutineBegin());
    thisScheduler.add(induction_question2RoutineEachFrame());
    thisScheduler.add(induction_question2RoutineEnd());

    const trials_2LoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(trials_2LoopBegin, trials_2LoopScheduler);
    thisScheduler.add(trials_2LoopScheduler);
    thisScheduler.add(trials_2LoopEnd);
    thisScheduler.add(rest_1RoutineBegin(snapshot,trials_3thisRepN));
    thisScheduler.add(rest_1RoutineEachFrame(snapshot));
    thisScheduler.add(rest_1RoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


// new
var induction_question1Components;
function induction_question1RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'trainning_movie_question1'-------
    t = 0;
    trainning_movie_question1Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat

    key_resp_excited_training.keys = undefined;
    key_resp_excited_training.rt = undefined;
    _key_resp_sad_training_allKeys = [];
    // keep track of which components have finished
    induction_question1Components = [];
    induction_question1Components.push(text_induction_question);
    induction_question1Components.push(key_resp_excited_training);
    induction_question1Components.push(image_9);
    induction_question1Components.push(image_10);
    induction_question1Components.push(image_11);
    induction_question1Components.push(image_12);
    induction_question1Components.push(image_13);
    induction_question1Components.push(text_14);
    induction_question1Components.push(text_15);
    
    induction_question1Components.push(text_01);
    induction_question1Components.push(text_02);
    induction_question1Components.push(text_03);
    induction_question1Components.push(text_04);
    induction_question1Components.push(text_05);
    
    for (const thisComponent of induction_question1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function induction_question1RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'trainning_movie_question1'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = trainning_movie_question1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    
    if (t >= 0.0) {
      text_01.setAutoDraw(true);
      text_02.setAutoDraw(true);
      text_03.setAutoDraw(true);
      text_04.setAutoDraw(true);
      text_05.setAutoDraw(true);
    }
    
    // *text_6* updates
    if (t >= 0.0 && text_induction_question.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_induction_question.tStart = t;  // (not accounting for frame time here)
      text_induction_question.frameNStart = frameN;  // exact frame index
      
      text_induction_question.setAutoDraw(true);
    }

    if (t >= 0 && key_resp_excited_training.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_excited_training.tStart = t;  // (not accounting for frame time here)
      key_resp_excited_training.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_excited_training.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_excited_training.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_excited_training.clearEvents(); });
    }

    if (key_resp_excited_training.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_excited_training.getKeys({keyList: ['1','2','3','4','5'], waitRelease: false});
      _key_resp_sad_training_allKeys = _key_resp_sad_training_allKeys.concat(theseKeys);
      if (_key_resp_sad_training_allKeys.length > 0) {
        key_resp_excited_training.keys = _key_resp_sad_training_allKeys[_key_resp_sad_training_allKeys.length - 1].name;  // just the last key pressed
        key_resp_excited_training.rt = _key_resp_sad_training_allKeys[_key_resp_sad_training_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // *image_9* updates
    if (t >= 0.0 && image_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_9.tStart = t;  // (not accounting for frame time here)
      image_9.frameNStart = frameN;  // exact frame index
      
      image_9.setAutoDraw(true);
    }

    // *image_10* updates
    if (t >= 0.0 && image_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_10.tStart = t;  // (not accounting for frame time here)
      image_10.frameNStart = frameN;  // exact frame index
      
      image_10.setAutoDraw(true);
    }

    // *image_11* updates
    if (t >= 0.0 && image_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_11.tStart = t;  // (not accounting for frame time here)
      image_11.frameNStart = frameN;  // exact frame index
      
      image_11.setAutoDraw(true);
    }

    // *image_12* updates
    if (t >= 0.0 && image_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_12.tStart = t;  // (not accounting for frame time here)
      image_12.frameNStart = frameN;  // exact frame index
      
      image_12.setAutoDraw(true);
    }

    // *image_13* updates
    if (t >= 0.0 && image_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_13.tStart = t;  // (not accounting for frame time here)
      image_13.frameNStart = frameN;  // exact frame index
      
      image_13.setAutoDraw(true);
    }

    // *text_14* updates
    if (t >= 0.0 && text_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_14.tStart = t;  // (not accounting for frame time here)
      text_14.frameNStart = frameN;  // exact frame index
      
      text_14.setAutoDraw(true);
    }

    // *text_15* updates
    if (t >= 0.0 && text_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_15.tStart = t;  // (not accounting for frame time here)
      text_15.frameNStart = frameN;  // exact frame index
      
      text_15.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of induction_question1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function induction_question1RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'trainning_movie_question1'-------
    for (const thisComponent of induction_question1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('induction_check_keys_arousal.key', key_resp_excited_training.keys);
    psychoJS.experiment.addData('induction_check_keys_arousal.rt', key_resp_excited_training.rt);
    // the Routine "trainning_movie_question1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

var _key_resp_sad_training_allKeys;
var trainning_movie_question2Components;
function induction_question2RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'trainning_movie_question2'-------
    t = 0;
    trainning_movie_question2Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    
    key_resp_sad_training.keys = undefined;
    key_resp_sad_training.rt = undefined;
    _key_resp_sad_training_allKeys = [];
    // keep track of which components have finished
    trainning_movie_question2Components = [];
    trainning_movie_question2Components.push(text_induction_question2);
    trainning_movie_question2Components.push(key_resp_sad_training);
    trainning_movie_question2Components.push(image);
    trainning_movie_question2Components.push(image_14);
    trainning_movie_question2Components.push(image_15);
    trainning_movie_question2Components.push(image_16);
    trainning_movie_question2Components.push(image_17);
    trainning_movie_question2Components.push(text_16);
    trainning_movie_question2Components.push(text_17);
    
    trainning_movie_question2Components.push(text_01);
    trainning_movie_question2Components.push(text_02);
    trainning_movie_question2Components.push(text_03);
    trainning_movie_question2Components.push(text_04);
    trainning_movie_question2Components.push(text_05);
    
    for (const thisComponent of trainning_movie_question2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function induction_question2RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'trainning_movie_question2'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = trainning_movie_question2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_9* updates
    if (t >= 0.0 && text_induction_question2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_induction_question2.tStart = t;  // (not accounting for frame time here)
      text_induction_question2.frameNStart = frameN;  // exact frame index
      
      text_induction_question2.setAutoDraw(true);
    }
    
    if (t >= 0.0) {
      text_01.setAutoDraw(true);
      text_02.setAutoDraw(true);
      text_03.setAutoDraw(true);
      text_04.setAutoDraw(true);
      text_05.setAutoDraw(true);
    }
    

    // *image* updates
    if (t >= 0.0 && image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image.tStart = t;  // (not accounting for frame time here)
      image.frameNStart = frameN;  // exact frame index
      
      image.setAutoDraw(true);
    }

    
    // *image_14* updates
    if (t >= 0.0 && image_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_14.tStart = t;  // (not accounting for frame time here)
      image_14.frameNStart = frameN;  // exact frame index
      
      image_14.setAutoDraw(true);
    }

    
    // *image_15* updates
    if (t >= 0.0 && image_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_15.tStart = t;  // (not accounting for frame time here)
      image_15.frameNStart = frameN;  // exact frame index
      
      image_15.setAutoDraw(true);
    }

    
    // *image_16* updates
    if (t >= 0.0 && image_16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_16.tStart = t;  // (not accounting for frame time here)
      image_16.frameNStart = frameN;  // exact frame index
      
      image_16.setAutoDraw(true);
    }

    
    // *image_17* updates
    if (t >= 0.0 && image_17.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_17.tStart = t;  // (not accounting for frame time here)
      image_17.frameNStart = frameN;  // exact frame index
      
      image_17.setAutoDraw(true);
    }

    
    // *text_16* updates
    if (t >= 0.0 && text_16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_16.tStart = t;  // (not accounting for frame time here)
      text_16.frameNStart = frameN;  // exact frame index
      
      text_16.setAutoDraw(true);
    }

    
    // *text_17* updates
    if (t >= 0.0 && text_17.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_17.tStart = t;  // (not accounting for frame time here)
      text_17.frameNStart = frameN;  // exact frame index
      
      text_17.setAutoDraw(true);
    }
    
    if (t >= 0 && key_resp_sad_training.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    key_resp_sad_training.tStart = t;  // (not accounting for frame time here)
    key_resp_sad_training.frameNStart = frameN;  // exact frame index
      
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { key_resp_sad_training.clock.reset(); });  // t=0 on next screen flip
    psychoJS.window.callOnFlip(function() { key_resp_sad_training.start(); }); // start on screen flip
    psychoJS.window.callOnFlip(function() { key_resp_sad_training.clearEvents(); });
    }

    if (key_resp_sad_training.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_sad_training.getKeys({keyList: ['1','2','3','4','5'], waitRelease: false});
      _key_resp_sad_training_allKeys = _key_resp_sad_training_allKeys.concat(theseKeys);
      if (_key_resp_sad_training_allKeys.length > 0) {
        key_resp_sad_training.keys = _key_resp_sad_training_allKeys[_key_resp_sad_training_allKeys.length - 1].name;  // just the last key pressed
        key_resp_sad_training.rt = _key_resp_sad_training_allKeys[_key_resp_sad_training_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trainning_movie_question2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function induction_question2RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'trainning_movie_question2'-------
    for (const thisComponent of trainning_movie_question2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('induction_check_keys_valence.key', key_resp_sad_training.keys);
    psychoJS.experiment.addData('induction_check_keys_valence.rt', key_resp_sad_training.rt);
    // the Routine "trainning_movie_question2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}




// new end



var induction_trials;
function induction_trialsLoopBegin(thisScheduler) {
  induction_trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 19, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'trials'
  });
  psychoJS.experiment.addLoop(induction_trials); 
  currentLoop = induction_trials;

  thisScheduler.add(induction_instructionRoutineBegin());
  thisScheduler.add(induction_instructionEachFrame());
  thisScheduler.add(induction_instructionRoutineEnd());

  for (const this_induction_Trial of induction_trials) {
    var snapshot = induction_trials.getSnapshot();
    
    induction_loop_index = induction_trials.thisRepN;

    thisScheduler.add(importConditions(snapshot));
    
    thisScheduler.add(induction_block1RoutineBegin(snapshot, block_index, induction_loop_index));
    thisScheduler.add(induction_block1RoutineEachFrame(snapshot));
    thisScheduler.add(induction_block1RoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}



function induction_trialsLoopEnd() {
  psychoJS.experiment.removeLoop(induction_trials);

  return Scheduler.Event.NEXT;
}


var induction_instructionComponents;
function induction_instructionRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'instruction1'-------
    t = 0;
    instruction1Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    induction_instructionComponents = [];
    induction_instructionComponents.push(induction_instruction_text);
    induction_instructionComponents.push(key_resp);
    
    for (const thisComponent of induction_instructionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function induction_instructionEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'instruction1'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = instruction1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && induction_instruction_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      induction_instruction_text.tStart = t;  // (not accounting for frame time here)
      induction_instruction_text.frameNStart = frameN;  // exact frame index
      
      induction_instruction_text.setAutoDraw(true);
    }

    
    // *key_resp* updates
    if (t >= 0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of induction_instructionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function induction_instructionRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'instruction1'-------
    for (const thisComponent of induction_instructionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "instruction1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function induction_block1RoutineBegin(trials, block_index, induction_loop_index) {
  return function () {

    
    //------Prepare to start Routine 'movie_present_block1'-------
    inductionChosen = induction_photos[block_index][induction_loop_index]
    routineTimer.add(5.000000);
    t = 0;
    induction_block1Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp_excited_test.keys = undefined;
    key_resp_excited_test.rt = undefined;
    _key_resp_excited_test_allKeys = [];
    // keep track of which components have finished
    induction_block1Components = [];
    induction_block1Components.push(inductionChosen);

    
    for (const thisComponent of induction_block1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}

//editing
function induction_block1RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'movie_present_block1'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = induction_block1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame



    // *movie_presentChosen* updates
    if (t >= 0 && inductionChosen.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      inductionChosen.tStart = t;  // (not accounting for frame time here)
      inductionChosen.frameNStart = frameN;  // exact frame index
      
      inductionChosen.setAutoDraw(true);
    }

    if (t >= 5 && inductionChosen.status === PsychoJS.Status.STARTED) {
      inductionChosen.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of induction_block1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function induction_block1RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'movie_present_block1'-------
    for (const thisComponent of induction_block1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "movie_present_block1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var block_index = -1;
var trials;
function trialsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 8, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'trials'
  });
  psychoJS.experiment.addLoop(trials); // add the loop to the experiment
  currentLoop = trials;  // we're now the current loop
  block_index ++;
  
  thisScheduler.add(instruction2RoutineBegin());
  thisScheduler.add(instruction2RoutineEachFrame());
  thisScheduler.add(instruction2RoutineEnd());
  
  // Schedule all the trials in the trialList:
  for (const thisTrial of trials) {
    var snapshot = trials.getSnapshot();
    
    loop8 = trials.thisRepN;
    thisScheduler.add(importConditions(snapshot));
    
    
    
    thisScheduler.add(movie_present_block1RoutineBegin(snapshot, block_index, loop8));
    thisScheduler.add(movie_present_block1RoutineEachFrame(snapshot));
    thisScheduler.add(movie_present_block1RoutineEnd(snapshot));
    thisScheduler.add(movie_present_question_2RoutineBegin(snapshot));
    thisScheduler.add(movie_present_question_2RoutineEachFrame(snapshot));
    thisScheduler.add(movie_present_question_2RoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


var trials_2;
function trials_2LoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials_2 = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 20, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'trials_2'
  });
  psychoJS.experiment.addLoop(trials_2); // add the loop to the experiment
  currentLoop = trials_2;  // we're now the current loop
  thisScheduler.add(training_movie_decisionRoutineBegin());
  thisScheduler.add(training_movie_decisionRoutineEachFrame());
  thisScheduler.add(training_movie_decisionRoutineEnd());
  // Schedule all the trials in the trialList:
  for (const thisTrial_2 of trials_2) {

    const snapshot = trials_2.getSnapshot();
    
    loop28 = trials_2.thisRepN;
    thisScheduler.add(importConditions(snapshot));
    
    
    thisScheduler.add(movie_decision_block1RoutineBegin(snapshot, block_index, loop28));
    thisScheduler.add(movie_decision_block1RoutineEachFrame(snapshot));
    thisScheduler.add(movie_decision_block1RoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function trials_2LoopEnd() {
  psychoJS.experiment.removeLoop(trials_2);

  return Scheduler.Event.NEXT;
}


function trials_3LoopEnd() {
  psychoJS.experiment.removeLoop(trials_3);

  return Scheduler.Event.NEXT;
}

var movie_presentChosen;
var movie_present_block1Components;
var _key_resp_excited_test_allKeys;
function movie_present_block1RoutineBegin(trials, block_index, loop8) {
  return function () {
    
    //------Prepare to start Routine 'movie_present_block1'-------
    movie_presentChosen = blockListshuffled[block_index][loop8]
    movie_presentChosen.setPos([0, 0])
    t = 0;
    movie_present_block1Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp_excited_test.keys = undefined;
    key_resp_excited_test.rt = undefined;
    _key_resp_excited_test_allKeys = [];
    // keep track of which components have finished
    movie_present_block1Components = [];
    movie_present_block1Components.push(movie_presentChosen);
    movie_present_block1Components.push(polygon);
    movie_present_block1Components.push(key_resp_excited_test);
    movie_present_block1Components.push(Excited1);
    movie_present_block1Components.push(Excited2);
    movie_present_block1Components.push(Excited3);
    movie_present_block1Components.push(Excited4);
    movie_present_block1Components.push(Excited5);
    movie_present_block1Components.push(text_20);
    movie_present_block1Components.push(text_21);
    
    movie_present_block1Components.push(text_01);
    movie_present_block1Components.push(text_02);
    movie_present_block1Components.push(text_03);
    movie_present_block1Components.push(text_04);
    movie_present_block1Components.push(text_05);
    
    for (const thisComponent of movie_present_block1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}



function movie_present_block1RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'movie_present_block1'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = movie_present_block1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *movie_presentChosen* updates
    if (t >= 1.2 && movie_presentChosen.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      movie_presentChosen.tStart = t;  // (not accounting for frame time here)
      movie_presentChosen.frameNStart = frameN;  // exact frame index
      
      movie_presentChosen.setAutoDraw(true);
    }

    
    // *polygon* updates
    if (t >= 0.0 && polygon.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon.tStart = t;  // (not accounting for frame time here)
      polygon.frameNStart = frameN;  // exact frame index
      
      polygon.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (polygon.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      polygon.setAutoDraw(false);
    }
    
    // check key press
    if (t >= 4.2 && key_resp_excited_test.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_excited_test.tStart = t;  // (not accounting for frame time here)
      key_resp_excited_test.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_excited_test.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_excited_test.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_excited_test.clearEvents(); });
    }
    
    if (t >= 4.2) {
      text_01.setAutoDraw(true);
    }
    if (t >= 4.2) {
      text_02.setAutoDraw(true);
    }
    if (t >= 4.2) {
      text_03.setAutoDraw(true);
    }
    if (t >= 4.2) {
      text_04.setAutoDraw(true);
    }
    if (t >= 4.2) {
      text_05.setAutoDraw(true);
    }
    
    if (key_resp_excited_test.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_excited_test.getKeys({keyList: ['1','2','3','4','5'], waitRelease: false});
      _key_resp_excited_test_allKeys = _key_resp_excited_test_allKeys.concat(theseKeys);
      if (_key_resp_excited_test_allKeys.length > 0) {
        key_resp_excited_test.keys = _key_resp_excited_test_allKeys[_key_resp_excited_test_allKeys.length - 1].name;  // just the last key pressed
        key_resp_excited_test.rt = _key_resp_excited_test_allKeys[_key_resp_excited_test_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    // *Excited1* updates
    if (t >= 4.2 && Excited1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Excited1.tStart = t;  // (not accounting for frame time here)
      Excited1.frameNStart = frameN;  // exact frame index
      
      Excited1.setAutoDraw(true);
    }

    
    // *Excited2* updates
    if (t >= 4.2 && Excited2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Excited2.tStart = t;  // (not accounting for frame time here)
      Excited2.frameNStart = frameN;  // exact frame index
      
      Excited2.setAutoDraw(true);
    }

    
    // *Excited3* updates
    if (t >= 4.2 && Excited3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Excited3.tStart = t;  // (not accounting for frame time here)
      Excited3.frameNStart = frameN;  // exact frame index
      
      Excited3.setAutoDraw(true);
    }

    
    // *Excited4* updates
    if (t >= 4.2 && Excited4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Excited4.tStart = t;  // (not accounting for frame time here)
      Excited4.frameNStart = frameN;  // exact frame index
      
      Excited4.setAutoDraw(true);
    }

    
    // *Excited5* updates
    if (t >= 4.2 && Excited5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Excited5.tStart = t;  // (not accounting for frame time here)
      Excited5.frameNStart = frameN;  // exact frame index
      
      Excited5.setAutoDraw(true);
    }

    
    // *text_20* updates
    if (t >= 4.2 && text_20.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_20.tStart = t;  // (not accounting for frame time here)
      text_20.frameNStart = frameN;  // exact frame index
      
      text_20.setAutoDraw(true);
    }

    
    // *text_21* updates
    if (t >= 4.2 && text_21.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_21.tStart = t;  // (not accounting for frame time here)
      text_21.frameNStart = frameN;  // exact frame index
      
      text_21.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of movie_present_block1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function movie_present_block1RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'movie_present_block1'-------
    for (const thisComponent of movie_present_block1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_excited_test.keys', key_resp_excited_test.keys);
    psychoJS.experiment.addData('key_resp_excited_test.rt', key_resp_excited_test.rt);
    psychoJS.experiment.addData('movie_present_chosen', movie_presentChosen.getName());
    // the Routine "movie_present_block1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

var _key_resp_sad_test_allKeys;
var movie_present_question_2Components;
function movie_present_question_2RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'movie_present_question_2'-------
    t = 0;
    movie_present_question_2Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp_sad_test.keys = undefined;
    key_resp_sad_test.rt = undefined;
    _key_resp_sad_test_allKeys = [];
    // keep track of which components have finished
    movie_present_question_2Components = [];
    movie_present_question_2Components.push(movie_presentChosen);
    movie_present_question_2Components.push(key_resp_sad_test);
    movie_present_question_2Components.push(Sad1);
    movie_present_question_2Components.push(Sad2);
    movie_present_question_2Components.push(Sad3);
    movie_present_question_2Components.push(Sad4);
    movie_present_question_2Components.push(Sad5);
    movie_present_question_2Components.push(text_22);
    movie_present_question_2Components.push(text_23);
    
    movie_present_question_2Components.push(text_01);
    movie_present_question_2Components.push(text_02);
    movie_present_question_2Components.push(text_03);
    movie_present_question_2Components.push(text_04);
    movie_present_question_2Components.push(text_05);
    
    for (const thisComponent of movie_present_question_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function movie_present_question_2RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'movie_present_question_2'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = movie_present_question_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *movie_presentChosen* updates
    if (t >= 0 && movie_presentChosen.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      movie_presentChosen.tStart = t;  // (not accounting for frame time here)
      movie_presentChosen.frameNStart = frameN;  // exact frame index
      
      movie_presentChosen.setAutoDraw(true);
    }

    
    if (t >= 0 && key_resp_sad_test.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_sad_test.tStart = t;  // (not accounting for frame time here)
      key_resp_sad_test.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_sad_test.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_sad_test.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_sad_test.clearEvents(); });
    }

    if (key_resp_sad_test.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_sad_test.getKeys({keyList: ['1','2','3','4','5'], waitRelease: false});
      _key_resp_sad_test_allKeys = _key_resp_sad_test_allKeys.concat(theseKeys);
      if (_key_resp_sad_test_allKeys.length > 0) {
        key_resp_sad_test.keys = _key_resp_sad_test_allKeys[_key_resp_sad_test_allKeys.length - 1].name;  // just the last key pressed
        key_resp_sad_test.rt = _key_resp_sad_test_allKeys[_key_resp_sad_test_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // *Sad1* updates
    if (t >= 0 && Sad1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Sad1.tStart = t;  // (not accounting for frame time here)
      Sad1.frameNStart = frameN;  // exact frame index
      
      Sad1.setAutoDraw(true);
    }

    
    // *Sad2* updates
    if (t >= 0 && Sad2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Sad2.tStart = t;  // (not accounting for frame time here)
      Sad2.frameNStart = frameN;  // exact frame index
      
      Sad2.setAutoDraw(true);
    }

    
    // *Sad3* updates
    if (t >= 0 && Sad3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Sad3.tStart = t;  // (not accounting for frame time here)
      Sad3.frameNStart = frameN;  // exact frame index
      
      Sad3.setAutoDraw(true);
    }

    
    // *Sad4* updates
    if (t >= 0 && Sad4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Sad4.tStart = t;  // (not accounting for frame time here)
      Sad4.frameNStart = frameN;  // exact frame index
      
      Sad4.setAutoDraw(true);
    }

    
    // *Sad5* updates
    if (t >= 0 && Sad5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Sad5.tStart = t;  // (not accounting for frame time here)
      Sad5.frameNStart = frameN;  // exact frame index
      
      Sad5.setAutoDraw(true);
    }

    
    // *text_22* updates
    if (t >= 0.0 && text_22.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_22.tStart = t;  // (not accounting for frame time here)
      text_22.frameNStart = frameN;  // exact frame index
      
      text_22.setAutoDraw(true);
    }

    
    // *text_23* updates
    if (t >= 0.0 && text_23.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_23.tStart = t;  // (not accounting for frame time here)
      text_23.frameNStart = frameN;  // exact frame index
      
      text_23.setAutoDraw(true);
    }
    
    if (t >= 0) {
      text_01.setAutoDraw(true);
    }
    if (t >= 0) {
      text_02.setAutoDraw(true);
    }
    if (t >= 0) {
      text_03.setAutoDraw(true);
    }
    if (t >= 0) {
      text_04.setAutoDraw(true);
    }
    if (t >= 0) {
      text_05.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of movie_present_question_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function movie_present_question_2RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'movie_present_question_2'-------
    for (const thisComponent of movie_present_question_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_sad_test.keys', key_resp_sad_test.keys);
    psychoJS.experiment.addData('key_resp_sad_test.rt', key_resp_sad_test.rt);
    // the Routine "movie_present_question_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}




var _key_resp_3_allKeys;
var movie_decision_block1Components;
var decision_chosen1;
var decision_chosen2;
function movie_decision_block1RoutineBegin(trials,block_index, loop28) {
  return function () {
    decisionList[block_index][loop28]=decisionList[block_index][loop28].sort(function(){return .5 - Math.random()})
    decision_chosen1 = decisionList[block_index][loop28][0];
    decision_chosen2 = decisionList[block_index][loop28][1];
    
    decision_chosen1.setPos([(-0.4), 0]);
    decision_chosen2.setPos([(0.4), 0]);
      
      
    //------Prepare to start Routine 'movie_decision_block1'-------
    t = 0;
    movie_decision_block1Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    // keep track of which components have finished
    movie_decision_block1Components = [];
    movie_decision_block1Components.push(key_resp_3);
    movie_decision_block1Components.push(polygon_2);
    movie_decision_block1Components.push(text_7);
    movie_decision_block1Components.push(text_8);
    movie_decision_block1Components.push(decision_chosen1);
    movie_decision_block1Components.push(decision_chosen2);
    
    for (const thisComponent of movie_decision_block1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function movie_decision_block1RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'movie_decision_block1'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = movie_decision_block1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_3* updates
    if (t >= 2 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }

    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({keyList: ['z', 'm'], waitRelease: false});
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys.map((key) => key.name);  // storing all keys
        key_resp_3.rt = _key_resp_3_allKeys.map((key) => key.rt);
        // was this correct?
        if (key_resp_3.keys == '') {
            key_resp_3.corr = 1;
        } else {
            key_resp_3.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *polygon_2* updates
    if (t >= 0.5 && polygon_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_2.tStart = t;  // (not accounting for frame time here)
      polygon_2.frameNStart = frameN;  // exact frame index
      
      polygon_2.setAutoDraw(true);
    }

    frameRemains = 0.5 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (polygon_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      polygon_2.setAutoDraw(false);
    }
    
    // *text_7* updates
    if (t >= 2 && text_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_7.tStart = t;  // (not accounting for frame time here)
      text_7.frameNStart = frameN;  // exact frame index
      
      text_7.setAutoDraw(true);
    }

    
    // *text_8* updates
    if (t >= 2 && text_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_8.tStart = t;  // (not accounting for frame time here)
      text_8.frameNStart = frameN;  // exact frame index
      
      text_8.setAutoDraw(true);
    }

    
    // *image_6* updates
    if (t >= 2 && decision_chosen1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      decision_chosen1.tStart = t;  // (not accounting for frame time here)
      decision_chosen1.frameNStart = frameN;  // exact frame index
      
      decision_chosen1.setAutoDraw(true);
    }

    
    // *image_7* updates
    if (t >= 2 && decision_chosen2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      decision_chosen2.tStart = t;  // (not accounting for frame time here)
      decision_chosen2.frameNStart = frameN;  // exact frame index
      
      decision_chosen2.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of movie_decision_block1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function movie_decision_block1RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'movie_decision_block1'-------
    for (const thisComponent of movie_decision_block1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (key_resp_3.keys === undefined) {
      if (['None','none',undefined].includes('')) {
         key_resp_3.corr = 1;  // correct non-response
      } else {
         key_resp_3.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
    psychoJS.experiment.addData('key_resp_3.corr', key_resp_3.corr);
    if (typeof key_resp_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
        routineTimer.reset();
        }
    psychoJS.experiment.addData('Z_movie', decision_chosen1.getName());
    psychoJS.experiment.addData('M_movie', decision_chosen2.getName());
    key_resp_3.stop();
    // the Routine "movie_decision_block1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

var left_text;
var _key_resp_7_allKeys;
var rest_1Components;
function rest_1RoutineBegin(trials,rep) {
  return function () {
    //------Prepare to start Routine 'rest_1'-------
    t = 0;
    rest_1Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp_7.keys = undefined;
    key_resp_7.rt = undefined;
    _key_resp_7_allKeys = [];
    rep = 7 - rep - 1;
    left_text = `There are ${rep} parts left`
    text_30_left.setText(left_text)
    console.log(text_30_left.getText())
    console.log(rep)
    // keep track of which components have finished
    rest_1Components = [];
    rest_1Components.push(text_30);
    rest_1Components.push(text_30_left);
    
    for (const thisComponent of rest_1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function rest_1RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'rest_1'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = rest_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_30* updates
    if (t >= 0.0 && text_30.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_30.tStart = t;  // (not accounting for frame time here)
      text_30.frameNStart = frameN;  // exact frame index
      text_30_left.setAutoDraw(true);
      text_30.setAutoDraw(true);
    }

    
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    

    
    if (t >= 10.0) {
        continueRoutine = false;
    }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function rest_1RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'rest_1'-------
    for (const thisComponent of rest_1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "rest_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var thank_youComponents;
function thank_youRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'thank_you'-------
    t = 0;
    thank_youClock.reset(); // clock
    frameN = -1;
    routineTimer.add(10.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    thank_youComponents = [];
    thank_youComponents.push(text_32);
    
    for (const thisComponent of thank_youComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function thank_youRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'thank_you'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = thank_youClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_32* updates
    if (t >= 0.0 && text_32.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_32.tStart = t;  // (not accounting for frame time here)
      text_32.frameNStart = frameN;  // exact frame index
      
      text_32.setAutoDraw(true);
    }

    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_32.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_32.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of thank_youComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function thank_youRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'thank_you'-------
    for (const thisComponent of thank_youComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(thisScheduler, loop) {
  // ------Prepare for next entry------
  return function () {
    if (typeof loop !== 'undefined') {
      // ------Check if user ended loop early------
      if (loop.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(loop);
        }
      thisScheduler.stop();
      } else {
        const thisTrial = loop.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(loop);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(trials) {
  return function () {
    psychoJS.importAttributes(trials.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}