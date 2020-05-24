/****************************** 
 * Media_Decision_Making Test *
 ******************************/

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
let expName = 'media_decision_making';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

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
flowScheduler.add(trainning_movie_question3RoutineBegin());
flowScheduler.add(trainning_movie_question3RoutineEachFrame());
flowScheduler.add(trainning_movie_question3RoutineEnd());
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

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  psychoJS.setRedirectUrls('www.youtube.com', '');

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
var key_resp_4;
var training_movie_presentClock;
var text_3;
var trainning_movie_question1Clock;
var text_4;
var text_6;
var slider_2;
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
var slider_3;
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
var slider_4;
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
var slider;
var Excited1;
var Excited2;
var Excited3;
var Excited4;
var Excited5;
var text_20;
var text_21;
var movie_present_question_2Clock;
var block1chosen_2;
var slider_sad;
var Sad1;
var Sad2;
var Sad3;
var Sad4;
var Sad5;
var text_22;
var text_23;
var movie_present_question_3Clock;
var block1chosen_3;
var slider_weak;
var Weak1;
var Weak2;
var Weak3;
var Weak4;
var Weak5;
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
var key_resp_7;
var thank_youClock;
var text_32;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "welcome"
  welcomeClock = new util.Clock();
  text_31 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_31',
    text: 'Welcome to our experiment!',
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
    text: 'In this experiment, there will be three sessions.\n\nIn the first session, you will need to complete a behavioral game task\nIn the second session, you will read a list of short pargraphs decribing a movie. \nAnd you will need to imagine the story in the movie based on your reading, and respond to the questions after the presentation\nof each movie summaries.\n\nIn the last session, you will need to make a list of decision sfrom two options of movies, based on the summaries you just read.\nYou choice should indicate your preference among the given options. \nThe second and the last session will be repeated for seven times.\n\nThere will be instructions and trainning session that could help you familiarize the experimental tasks. \nPlease read the instruction carefully and follow the instruction step by step.\n\npress spacebar to continue.',
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
    text: 'At the current session, you will read movie summaries\nthat describes the story of the movie.\n\nWe require your to use your imagination to elaborate the story in your mind\nand answer the questions following the reading.\n\nThe questions after the movie summary will ask you about\nyour emotional feeling about the movie.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "reading_instructions"
  reading_instructionsClock = new util.Clock();
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: 'When you are reading the movie summaries\n\nImage the movie and elaborate the story in your mind\n\npress "space" to continue',
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
    text: 'For example, you will read:\n\n\nThe quick brown for jumped\nover the lazy dog.\n\n\n\nNow please imaging the movie story\nbased on the movie texts.',
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
    text: 'The quick brown for jumped\nover the lazy dog.\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  text_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_6',
    text: 'Wihch picture below best describes your feelings\nabout boring or exciting the summary was?\n\nPlease note the sleepy figure on the left indicates very boring,\nwhich the exploding figure on the right indicates very exciting.\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.1)], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  slider_2 = new visual.Slider({
    win: psychoJS.window, name: 'slider_2',
    size: [1.2, 0.1], pos: [0, (- 0.4)], units: 'height',
    labels: undefined, ticks: [1, 2, 3, 4, 5],
    granularity: 0, style: [visual.Slider.Style.RATING],
    color: new util.Color('LightGray'), 
    fontFamily: 'HelveticaBold', bold: true, italic: false, 
    flip: false,
  });
  
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
    text: 'Boredom',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.25)], height: 0.03,  wrapWidth: undefined, ori: 0,
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
    text: 'The quick brown for jumped\nover the lazy dog.\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  text_10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_10',
    text: 'Which picture below best describes your feelings about \nhow sad or happy the summary was?\n\nPlease note the frowning figure on the left indicates \nvery sad, while the smiling figure on the right indicates very happy. ',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.1)], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  slider_3 = new visual.Slider({
    win: psychoJS.window, name: 'slider_3',
    size: [1.2, 0.1], pos: [0, (- 0.4)], units: 'height',
    labels: undefined, ticks: [1, 2, 3, 4, 5],
    granularity: 0, style: [visual.Slider.Style.RATING],
    color: new util.Color('LightGray'), 
    fontFamily: 'HelveticaBold', bold: true, italic: false, 
    flip: false,
  });
  
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
    text: 'The quick brown for jumped\nover the lazy dog.\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  text_12 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_12',
    text: 'Which picture below best describes your feelings about\nhow weak or strong the summary was?\n\nPlease note the tiny figure on the left indicates \nvery weak, while the large figure on the right indicates very strong. ',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.1)], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  slider_4 = new visual.Slider({
    win: psychoJS.window, name: 'slider_4',
    size: [1.2, 0.1], pos: [0, (- 0.4)], units: 'height',
    labels: undefined, ticks: [1, 2, 3, 4, 5],
    granularity: 0, style: [visual.Slider.Style.RATING],
    color: new util.Color('LightGray'), 
    fontFamily: 'HelveticaBold', bold: true, italic: false, 
    flip: false,
  });
  
  image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_2', units : undefined, 
    image : 'SAM/Weak1.jpg', mask : undefined,
    ori : 0, pos : [(- 0.6), (- 0.4)], size : [0.15, 0.15],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -3.0 
  });
  image_18 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_18', units : undefined, 
    image : 'SAM/Weak2.jpg', mask : undefined,
    ori : 0, pos : [(- 0.3), (- 0.4)], size : [0.15, 0.15],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -4.0 
  });
  image_19 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_19', units : undefined, 
    image : 'SAM/Weak3.jpg', mask : undefined,
    ori : 0, pos : [0, (- 0.4)], size : [0.15, 0.15],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -5.0 
  });
  image_20 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_20', units : undefined, 
    image : 'SAM/Weak4.jpg', mask : undefined,
    ori : 0, pos : [0.3, (- 0.4)], size : [0.15, 0.15],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -6.0 
  });
  image_21 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_21', units : undefined, 
    image : 'SAM/Weak5.jpg', mask : undefined,
    ori : 0, pos : [0.6, (- 0.4)], size : [0.15, 0.15],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -7.0 
  });
  text_18 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_18',
    text: 'Weak',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.25)], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -8.0 
  });
  
  text_19 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_19',
    text: 'Strong',
    font: 'Arial',
    units: undefined, 
    pos: [0.6, (- 0.25)], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -9.0 
  });
  
  // Initialize components for Routine "training_movie_decision"
  training_movie_decisionClock = new util.Clock();
  text_28 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_28',
    text: 'Very nice! \n\nNow, imagine that you are in a movie theater,\nthere are a list of movies, and the only information\nabout the movies is from the movie summaries. \n\nYour task is to make preferential decisions between\ntwo given options. In the real task the optitons will\nbe repeated, until the computer find out you true movie\npreference. \n\nTo choose the left option, press the left arrow button in your keyboard <-\nto choose the right option, press the right arrow button in your keyboard ->\n\npress spacebar to continue.\n',
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
    text: '<-',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.3), (- 0.4)], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  text_27 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_27',
    text: '->',
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
    text: 'To choose the left option, press the left arrow button in your keyboard <-\nto choose the right option, press the right arrow button in your keyboard ->',
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
    text: 'Now your have finished the trainning!\n\nWait 5 s, then you will start the main task.',
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
  
  slider = new visual.Slider({
    win: psychoJS.window, name: 'slider',
    size: [1.2, 0.1], pos: [0, (- 0.4)], units: 'height',
    labels: undefined, ticks: [1, 2, 3, 4, 5],
    granularity: 0, style: [visual.Slider.Style.RATING],
    color: new util.Color('LightGray'), 
    fontFamily: 'HelveticaBold', bold: true, italic: false, 
    flip: false,
  });
  
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
    text: 'Boredom',
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
  slider_sad = new visual.Slider({
    win: psychoJS.window, name: 'slider_sad',
    size: [1.2, 0.1], pos: [0, (- 0.4)], units: 'height',
    labels: undefined, ticks: [1, 2, 3, 4, 5],
    granularity: 0, style: [visual.Slider.Style.RATING],
    color: new util.Color('LightGray'), 
    fontFamily: 'HelveticaBold', bold: true, italic: false, 
    flip: false,
  });
  
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
  
  // Initialize components for Routine "movie_present_question_3"
  movie_present_question_3Clock = new util.Clock();
  block1chosen_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'block1chosen_3', units : undefined, 
    image : 'texts/HH1.jpg', mask : undefined,
    ori : 0, pos : [0, 0], size : [0.5, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  slider_weak = new visual.Slider({
    win: psychoJS.window, name: 'slider_weak',
    size: [1.2, 0.1], pos: [0, (- 0.4)], units: 'height',
    labels: undefined, ticks: [1, 2, 3, 4, 5],
    granularity: 0, style: [visual.Slider.Style.RATING],
    color: new util.Color('LightGray'), 
    fontFamily: 'HelveticaBold', bold: true, italic: false, 
    flip: false,
  });
  
  Weak1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Weak1', units : undefined, 
    image : 'SAM/Weak1.jpg', mask : undefined,
    ori : 0, pos : [(- 0.6), (- 0.4)], size : [0.15, 0.15],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  Weak2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Weak2', units : undefined, 
    image : 'SAM/Sad2.jpg', mask : undefined,
    ori : 0, pos : [(- 0.3), (- 0.4)], size : [0.15, 0.15],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -3.0 
  });
  Weak3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Weak3', units : undefined, 
    image : 'SAM/Excited3.jpg', mask : undefined,
    ori : 0, pos : [0, (- 0.4)], size : [0.15, 0.15],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -4.0 
  });
  Weak4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Weak4', units : undefined, 
    image : 'SAM/Excited4.jpg', mask : undefined,
    ori : 0, pos : [0.3, (- 0.4)], size : [0.15, 0.15],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -5.0 
  });
  Weak5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Weak5', units : undefined, 
    image : 'SAM/Excited5.jpg', mask : undefined,
    ori : 0, pos : [0.6, (- 0.4)], size : [0.15, 0.15],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -6.0 
  });
  text_24 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_24',
    text: 'Weak',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.25)], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -7.0 
  });
  
  text_25 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_25',
    text: 'Strong',
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
    text: '<-',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.3), (- 0.4)], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  text_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_8',
    text: '->',
    font: 'Arial',
    units: undefined, 
    pos: [0.3, (- 0.4)], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  image_6 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_6', units : undefined, 
    image : 'texts/HH1.jpg', mask : undefined,
    ori : 0, pos : [(- 0.3), 0], size : [0.5, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -4.0 
  });
  image_7 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_7', units : undefined, 
    image : 'texts/HH2.jpg', mask : undefined,
    ori : 0, pos : [0.3, 0], size : [0.5, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -5.0 
  });
  // Initialize components for Routine "rest_1"
  rest_1Clock = new util.Clock();
  text_30 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_30',
    text: 'You have finished the current block! ^a^\n\nPlease wait for 10 seconds, \n\nThen you can perss "spacebar" to continue to next block',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0,
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
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    welcomeComponents = [];
    welcomeComponents.push(text_31);
    
    welcomeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
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

    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
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
    welcomeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    welcomeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
    
    instruction1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
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
    instruction1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    instruction1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "instruction1" was not non-slip safe, so reset the non-slip timer
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
    
    instruction2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
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
    instruction2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    instruction2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
    
    reading_instructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
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
    reading_instructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    reading_instructionsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
    
    training_movie_presentComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
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
    training_movie_presentComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    training_movie_presentComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var trainning_movie_question1Components;
function trainning_movie_question1RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'trainning_movie_question1'-------
    t = 0;
    trainning_movie_question1Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    slider_2.reset()
    // keep track of which components have finished
    trainning_movie_question1Components = [];
    trainning_movie_question1Components.push(text_4);
    trainning_movie_question1Components.push(text_6);
    trainning_movie_question1Components.push(slider_2);
    trainning_movie_question1Components.push(image_9);
    trainning_movie_question1Components.push(image_10);
    trainning_movie_question1Components.push(image_11);
    trainning_movie_question1Components.push(image_12);
    trainning_movie_question1Components.push(image_13);
    trainning_movie_question1Components.push(text_14);
    trainning_movie_question1Components.push(text_15);
    
    trainning_movie_question1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
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

    
    // *text_6* updates
    if (t >= 0.0 && text_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_6.tStart = t;  // (not accounting for frame time here)
      text_6.frameNStart = frameN;  // exact frame index
      
      text_6.setAutoDraw(true);
    }

    
    // *slider_2* updates
    if (t >= 0.0 && slider_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_2.tStart = t;  // (not accounting for frame time here)
      slider_2.frameNStart = frameN;  // exact frame index
      
      slider_2.setAutoDraw(true);
    }

    
    // Check slider_2 for response to end routine
    if (slider_2.getRating() !== undefined && slider_2.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    
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
    trainning_movie_question1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    trainning_movie_question1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('slider_2.response', slider_2.getRating());
    psychoJS.experiment.addData('slider_2.rt', slider_2.getRT());
    // the Routine "trainning_movie_question1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var trainning_movie_question2Components;
function trainning_movie_question2RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'trainning_movie_question2'-------
    t = 0;
    trainning_movie_question2Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    slider_3.reset()
    // keep track of which components have finished
    trainning_movie_question2Components = [];
    trainning_movie_question2Components.push(text_9);
    trainning_movie_question2Components.push(text_10);
    trainning_movie_question2Components.push(slider_3);
    trainning_movie_question2Components.push(image);
    trainning_movie_question2Components.push(image_14);
    trainning_movie_question2Components.push(image_15);
    trainning_movie_question2Components.push(image_16);
    trainning_movie_question2Components.push(image_17);
    trainning_movie_question2Components.push(text_16);
    trainning_movie_question2Components.push(text_17);
    
    trainning_movie_question2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
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

    
    // *text_10* updates
    if (t >= 0.0 && text_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_10.tStart = t;  // (not accounting for frame time here)
      text_10.frameNStart = frameN;  // exact frame index
      
      text_10.setAutoDraw(true);
    }

    
    // *slider_3* updates
    if (t >= 0.0 && slider_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_3.tStart = t;  // (not accounting for frame time here)
      slider_3.frameNStart = frameN;  // exact frame index
      
      slider_3.setAutoDraw(true);
    }

    
    // Check slider_3 for response to end routine
    if (slider_3.getRating() !== undefined && slider_3.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    
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

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trainning_movie_question2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    trainning_movie_question2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('slider_3.response', slider_3.getRating());
    psychoJS.experiment.addData('slider_3.rt', slider_3.getRT());
    // the Routine "trainning_movie_question2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var trainning_movie_question3Components;
function trainning_movie_question3RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'trainning_movie_question3'-------
    t = 0;
    trainning_movie_question3Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    slider_4.reset()
    // keep track of which components have finished
    trainning_movie_question3Components = [];
    trainning_movie_question3Components.push(text_11);
    trainning_movie_question3Components.push(text_12);
    trainning_movie_question3Components.push(slider_4);
    trainning_movie_question3Components.push(image_2);
    trainning_movie_question3Components.push(image_18);
    trainning_movie_question3Components.push(image_19);
    trainning_movie_question3Components.push(image_20);
    trainning_movie_question3Components.push(image_21);
    trainning_movie_question3Components.push(text_18);
    trainning_movie_question3Components.push(text_19);
    
    trainning_movie_question3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function trainning_movie_question3RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'trainning_movie_question3'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = trainning_movie_question3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_11* updates
    if (t >= 0.0 && text_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_11.tStart = t;  // (not accounting for frame time here)
      text_11.frameNStart = frameN;  // exact frame index
      
      text_11.setAutoDraw(true);
    }

    
    // *text_12* updates
    if (t >= 0.0 && text_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_12.tStart = t;  // (not accounting for frame time here)
      text_12.frameNStart = frameN;  // exact frame index
      
      text_12.setAutoDraw(true);
    }

    
    // *slider_4* updates
    if (t >= 0.0 && slider_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_4.tStart = t;  // (not accounting for frame time here)
      slider_4.frameNStart = frameN;  // exact frame index
      
      slider_4.setAutoDraw(true);
    }

    
    // Check slider_4 for response to end routine
    if (slider_4.getRating() !== undefined && slider_4.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    
    // *image_2* updates
    if (t >= 0.0 && image_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_2.tStart = t;  // (not accounting for frame time here)
      image_2.frameNStart = frameN;  // exact frame index
      
      image_2.setAutoDraw(true);
    }

    
    // *image_18* updates
    if (t >= 0.0 && image_18.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_18.tStart = t;  // (not accounting for frame time here)
      image_18.frameNStart = frameN;  // exact frame index
      
      image_18.setAutoDraw(true);
    }

    
    // *image_19* updates
    if (t >= 0.0 && image_19.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_19.tStart = t;  // (not accounting for frame time here)
      image_19.frameNStart = frameN;  // exact frame index
      
      image_19.setAutoDraw(true);
    }

    
    // *image_20* updates
    if (t >= 0.0 && image_20.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_20.tStart = t;  // (not accounting for frame time here)
      image_20.frameNStart = frameN;  // exact frame index
      
      image_20.setAutoDraw(true);
    }

    
    // *image_21* updates
    if (t >= 0.0 && image_21.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_21.tStart = t;  // (not accounting for frame time here)
      image_21.frameNStart = frameN;  // exact frame index
      
      image_21.setAutoDraw(true);
    }

    
    // *text_18* updates
    if (t >= 0.0 && text_18.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_18.tStart = t;  // (not accounting for frame time here)
      text_18.frameNStart = frameN;  // exact frame index
      
      text_18.setAutoDraw(true);
    }

    
    // *text_19* updates
    if (t >= 0.0 && text_19.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_19.tStart = t;  // (not accounting for frame time here)
      text_19.frameNStart = frameN;  // exact frame index
      
      text_19.setAutoDraw(true);
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
    trainning_movie_question3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trainning_movie_question3RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'trainning_movie_question3'-------
    trainning_movie_question3Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('slider_4.response', slider_4.getRating());
    psychoJS.experiment.addData('slider_4.rt', slider_4.getRT());
    // the Routine "trainning_movie_question3" was not non-slip safe, so reset the non-slip timer
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
    
    training_movie_decisionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
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
    training_movie_decisionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    training_movie_decisionComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
    
    trainning_decision_decisionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
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
    if (t >= 2 && key_resp_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_5.tStart = t;  // (not accounting for frame time here)
      key_resp_5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.clearEvents(); });
    }

    if (key_resp_5.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_5.getKeys({keyList: ['left', 'right'], waitRelease: false});
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
    if (t >= 2 && text_26.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_26.tStart = t;  // (not accounting for frame time here)
      text_26.frameNStart = frameN;  // exact frame index
      
      text_26.setAutoDraw(true);
    }

    
    // *text_27* updates
    if (t >= 2 && text_27.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_27.tStart = t;  // (not accounting for frame time here)
      text_27.frameNStart = frameN;  // exact frame index
      
      text_27.setAutoDraw(true);
    }

    
    // *image_8* updates
    if (t >= 2 && image_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_8.tStart = t;  // (not accounting for frame time here)
      image_8.frameNStart = frameN;  // exact frame index
      
      image_8.setAutoDraw(true);
    }

    
    // *image_22* updates
    if (t >= 2 && image_22.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_22.tStart = t;  // (not accounting for frame time here)
      image_22.frameNStart = frameN;  // exact frame index
      
      image_22.setAutoDraw(true);
    }

    
    // *text_29* updates
    if (t >= 2 && text_29.status === PsychoJS.Status.NOT_STARTED) {
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
    trainning_decision_decisionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    trainning_decision_decisionComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
    
    experiment_startComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
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
    experiment_startComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    experiment_startComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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

  // Schedule all the trials in the trialList:
  trials_3.forEach(function() {
    const snapshot = trials_3.getSnapshot();

    thisScheduler.add(importConditions(snapshot));
    const trialsLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(trialsLoopBegin, trialsLoopScheduler);
    thisScheduler.add(trialsLoopScheduler);
    thisScheduler.add(trialsLoopEnd);
    const trials_2LoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(trials_2LoopBegin, trials_2LoopScheduler);
    thisScheduler.add(trials_2LoopScheduler);
    thisScheduler.add(trials_2LoopEnd);
    thisScheduler.add(rest_1RoutineBegin(snapshot));
    thisScheduler.add(rest_1RoutineEachFrame(snapshot));
    thisScheduler.add(rest_1RoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


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

  // Schedule all the trials in the trialList:
  trials.forEach(function() {
    const snapshot = trials.getSnapshot();

    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(movie_present_block1RoutineBegin(snapshot));
    thisScheduler.add(movie_present_block1RoutineEachFrame(snapshot));
    thisScheduler.add(movie_present_block1RoutineEnd(snapshot));
    thisScheduler.add(movie_present_question_2RoutineBegin(snapshot));
    thisScheduler.add(movie_present_question_2RoutineEachFrame(snapshot));
    thisScheduler.add(movie_present_question_2RoutineEnd(snapshot));
    thisScheduler.add(movie_present_question_3RoutineBegin(snapshot));
    thisScheduler.add(movie_present_question_3RoutineEachFrame(snapshot));
    thisScheduler.add(movie_present_question_3RoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  });

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
    nReps: 28, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'trials_2'
  });
  psychoJS.experiment.addLoop(trials_2); // add the loop to the experiment
  currentLoop = trials_2;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trials_2.forEach(function() {
    const snapshot = trials_2.getSnapshot();

    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(movie_decision_block1RoutineBegin(snapshot));
    thisScheduler.add(movie_decision_block1RoutineEachFrame(snapshot));
    thisScheduler.add(movie_decision_block1RoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  });

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


var movie_present_block1Components;
function movie_present_block1RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'movie_present_block1'-------
    t = 0;
    movie_present_block1Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    slider.reset()
    // keep track of which components have finished
    movie_present_block1Components = [];
    movie_present_block1Components.push(block1chosen);
    movie_present_block1Components.push(polygon);
    movie_present_block1Components.push(slider);
    movie_present_block1Components.push(Excited1);
    movie_present_block1Components.push(Excited2);
    movie_present_block1Components.push(Excited3);
    movie_present_block1Components.push(Excited4);
    movie_present_block1Components.push(Excited5);
    movie_present_block1Components.push(text_20);
    movie_present_block1Components.push(text_21);
    
    movie_present_block1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
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
    
    // *block1chosen* updates
    if (t >= 1.2 && block1chosen.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      block1chosen.tStart = t;  // (not accounting for frame time here)
      block1chosen.frameNStart = frameN;  // exact frame index
      
      block1chosen.setAutoDraw(true);
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
    
    // *slider* updates
    if (t >= 4.2 && slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider.tStart = t;  // (not accounting for frame time here)
      slider.frameNStart = frameN;  // exact frame index
      
      slider.setAutoDraw(true);
    }

    
    // Check slider for response to end routine
    if (slider.getRating() !== undefined && slider.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    
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
    movie_present_block1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    movie_present_block1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('slider.response', slider.getRating());
    psychoJS.experiment.addData('slider.rt', slider.getRT());
    // the Routine "movie_present_block1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var movie_present_question_2Components;
function movie_present_question_2RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'movie_present_question_2'-------
    t = 0;
    movie_present_question_2Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    slider_sad.reset()
    // keep track of which components have finished
    movie_present_question_2Components = [];
    movie_present_question_2Components.push(block1chosen_2);
    movie_present_question_2Components.push(slider_sad);
    movie_present_question_2Components.push(Sad1);
    movie_present_question_2Components.push(Sad2);
    movie_present_question_2Components.push(Sad3);
    movie_present_question_2Components.push(Sad4);
    movie_present_question_2Components.push(Sad5);
    movie_present_question_2Components.push(text_22);
    movie_present_question_2Components.push(text_23);
    
    movie_present_question_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
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
    
    // *block1chosen_2* updates
    if (t >= 0 && block1chosen_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      block1chosen_2.tStart = t;  // (not accounting for frame time here)
      block1chosen_2.frameNStart = frameN;  // exact frame index
      
      block1chosen_2.setAutoDraw(true);
    }

    
    // *slider_sad* updates
    if (t >= 0 && slider_sad.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_sad.tStart = t;  // (not accounting for frame time here)
      slider_sad.frameNStart = frameN;  // exact frame index
      
      slider_sad.setAutoDraw(true);
    }

    
    // Check slider_sad for response to end routine
    if (slider_sad.getRating() !== undefined && slider_sad.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    
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

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    movie_present_question_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    movie_present_question_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('slider_sad.response', slider_sad.getRating());
    psychoJS.experiment.addData('slider_sad.rt', slider_sad.getRT());
    // the Routine "movie_present_question_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var movie_present_question_3Components;
function movie_present_question_3RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'movie_present_question_3'-------
    t = 0;
    movie_present_question_3Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    slider_weak.reset()
    // keep track of which components have finished
    movie_present_question_3Components = [];
    movie_present_question_3Components.push(block1chosen_3);
    movie_present_question_3Components.push(slider_weak);
    movie_present_question_3Components.push(Weak1);
    movie_present_question_3Components.push(Weak2);
    movie_present_question_3Components.push(Weak3);
    movie_present_question_3Components.push(Weak4);
    movie_present_question_3Components.push(Weak5);
    movie_present_question_3Components.push(text_24);
    movie_present_question_3Components.push(text_25);
    
    movie_present_question_3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function movie_present_question_3RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'movie_present_question_3'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = movie_present_question_3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *block1chosen_3* updates
    if (t >= 0 && block1chosen_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      block1chosen_3.tStart = t;  // (not accounting for frame time here)
      block1chosen_3.frameNStart = frameN;  // exact frame index
      
      block1chosen_3.setAutoDraw(true);
    }

    
    // *slider_weak* updates
    if (t >= 0 && slider_weak.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_weak.tStart = t;  // (not accounting for frame time here)
      slider_weak.frameNStart = frameN;  // exact frame index
      
      slider_weak.setAutoDraw(true);
    }

    
    // Check slider_weak for response to end routine
    if (slider_weak.getRating() !== undefined && slider_weak.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    
    // *Weak1* updates
    if (t >= 0 && Weak1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Weak1.tStart = t;  // (not accounting for frame time here)
      Weak1.frameNStart = frameN;  // exact frame index
      
      Weak1.setAutoDraw(true);
    }

    
    // *Weak2* updates
    if (t >= 0 && Weak2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Weak2.tStart = t;  // (not accounting for frame time here)
      Weak2.frameNStart = frameN;  // exact frame index
      
      Weak2.setAutoDraw(true);
    }

    
    // *Weak3* updates
    if (t >= 0 && Weak3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Weak3.tStart = t;  // (not accounting for frame time here)
      Weak3.frameNStart = frameN;  // exact frame index
      
      Weak3.setAutoDraw(true);
    }

    
    // *Weak4* updates
    if (t >= 0 && Weak4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Weak4.tStart = t;  // (not accounting for frame time here)
      Weak4.frameNStart = frameN;  // exact frame index
      
      Weak4.setAutoDraw(true);
    }

    
    // *Weak5* updates
    if (t >= 0 && Weak5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Weak5.tStart = t;  // (not accounting for frame time here)
      Weak5.frameNStart = frameN;  // exact frame index
      
      Weak5.setAutoDraw(true);
    }

    
    // *text_24* updates
    if (t >= 0.0 && text_24.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_24.tStart = t;  // (not accounting for frame time here)
      text_24.frameNStart = frameN;  // exact frame index
      
      text_24.setAutoDraw(true);
    }

    
    // *text_25* updates
    if (t >= 0.0 && text_25.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_25.tStart = t;  // (not accounting for frame time here)
      text_25.frameNStart = frameN;  // exact frame index
      
      text_25.setAutoDraw(true);
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
    movie_present_question_3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function movie_present_question_3RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'movie_present_question_3'-------
    movie_present_question_3Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('slider_weak.response', slider_weak.getRating());
    psychoJS.experiment.addData('slider_weak.rt', slider_weak.getRT());
    // the Routine "movie_present_question_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_3_allKeys;
var movie_decision_block1Components;
function movie_decision_block1RoutineBegin(trials) {
  return function () {
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
    movie_decision_block1Components.push(image_6);
    movie_decision_block1Components.push(image_7);
    
    movie_decision_block1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
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
      let theseKeys = key_resp_3.getKeys({keyList: ['left', 'right'], waitRelease: false});
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
    if (t >= 2 && image_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_6.tStart = t;  // (not accounting for frame time here)
      image_6.frameNStart = frameN;  // exact frame index
      
      image_6.setAutoDraw(true);
    }

    
    // *image_7* updates
    if (t >= 2 && image_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_7.tStart = t;  // (not accounting for frame time here)
      image_7.frameNStart = frameN;  // exact frame index
      
      image_7.setAutoDraw(true);
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
    movie_decision_block1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    movie_decision_block1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
    
    key_resp_3.stop();
    // the Routine "movie_decision_block1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_7_allKeys;
var rest_1Components;
function rest_1RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'rest_1'-------
    t = 0;
    rest_1Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp_7.keys = undefined;
    key_resp_7.rt = undefined;
    _key_resp_7_allKeys = [];
    // keep track of which components have finished
    rest_1Components = [];
    rest_1Components.push(text_30);
    rest_1Components.push(key_resp_7);
    
    rest_1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
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
      
      text_30.setAutoDraw(true);
    }

    
    // *key_resp_7* updates
    if (t >= 5 && key_resp_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_7.tStart = t;  // (not accounting for frame time here)
      key_resp_7.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_7.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_7.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_7.clearEvents(); });
    }

    if (key_resp_7.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_7.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_7_allKeys = _key_resp_7_allKeys.concat(theseKeys);
      if (_key_resp_7_allKeys.length > 0) {
        key_resp_7.keys = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].name;  // just the last key pressed
        key_resp_7.rt = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].rt;
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
    rest_1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    rest_1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
    
    thank_youComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
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
    thank_youComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    thank_youComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
