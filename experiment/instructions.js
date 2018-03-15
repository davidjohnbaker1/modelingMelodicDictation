var welcome= {
    type: 'instructions',
    pages: ['<p align="justify">Welcome to this experiment on melodic dictation!</p><p>Please click the button below to begin!</p>',
      '<p align="justify">This study is examining factors that might contribute to an individual&#39;s ability to dictate musical material. This experiment will take place in two parts. The first part requires listening to various melodies played through a speaker in a classroom setting and attempting dictate what is heard.  After completing the first part of the experiment, you will be asked to come back into the lab to fill out a selection of surveys thought to contribute to processes involved in musical dictation such as your musical sophistication, your memory, and your ability to imagine musical tones. Subjects may choose not to participate or to withdraw from the study at any time without penalty or loss of any benefit to which they might otherwise be entitled. All data will be made anonymous, and all efforts will be made to keep possible identifying data private and secure. This study has been approved by the LSU IRB. For questions concerning participant rights, please contact the IRB Chair, Dr. Dennis Landin, 578-8692, or irb@lsu.edu. The Primary Investigator is Dr. Daniel Shanahan, who can be contacted at dshanahan@lsu.edu with any questions or concerns you might have. The co-investigator is David Baker (dbake29@lsu.edu). </p><p>If you are willing to partake in this experiment, please sign the form in front of you, pass it to the experimenter, then click the next button below</p>',
      '<p align="justify">This experiment is meant to reproduce what a melodic dictation in an Aural Skills classroom would be like in a controlled setting. Please note that at this point you should have both staff paper as well as a pencil on your desk which you will use for the experiment. If you do not have either or both staff paper and a pencil, please let the experimenter know now. Put phones away at this time. </p>','<p align="justify">Please put the headphones on next to you. On the next screen you will hear a melody. Please adjust the volume to a comfortable volume as the melody plays. If the volume level is satisfactory, just enjoy the melody!</p>'],
    show_clickable_nav: true
  };

timeline.push(welcome)

// Audio At Comfortable Level

var audiocomfort={
    type: 'audio-button-response',
    stimulus: 'sound/mp3/yankee.mp3',
    choices: ['NEXT'],
    prompt: "<p>Please adjust the volume HERE to a comfortable level.</p>"
  };

timeline.push(audiocomfort)

// Instructions for Experiment

// ADD IN BIT HERE ABOUT TIME TO FLIP TO CORRECT PAGE

var maininstructions ={
    type: 'instructions',
    pages: ['<p align="justify">For this experiment you will perform FIVE melodic dictations on relatively short melodies.</p><p align="justify">Each melody will be played FIVE times. Prior to hearing each melody, the key will be established via a I &mdash; IV &mdash; I &mdash; V7 &mdash; I progression. Once the key is established, you will hear a two bars for nothing played by a clave. For example, if the melody is in 4/4 time,  you will hear eight clave clicks representing four quarter notes and then  the melody will begin to play. The times signature, mode, and key signature of each melody is provided on your paper. After each melody is played you will have 30 seconds before the next hearing. A triangle sound will play before every hearing. Before the final hearing of the melody the triangle will be played twice. After the last hearing of the melody, you will have two minutes to make any needed corrections to your paper.</p>','<p align="justify">PUT SOMETHING IN ABOUT HERE ABOUT FLIPPING TO THE RIGHT MELODY.</p><p align="justify"> A THIS SOUND WILL PLAY WHEN THE NEW MELODY IS ABOUT TO START. It is very important that once you have moved on to the next melody that you do not correct any previous melodies. Changes outside of the allotted time will corrupt any data we are trying to collect. If you understand this, press next.</p>',
      '<p align="justify">The your dication will be graded in two parts. Half of the grade will come from having the correct rhythms in the correct places. For example, if the first bar is all eight-notes, and you write that, you would get half points for that bar. The other half of the possible points for the bar will come from identifying the correct scale degrees with the rhythm. Note that you will NOT be given the starting pitch and should infer it from the cadence.</p><p align="justify">After the last dictation you will be asked to use the blank piece of non-staff paper given to you to write down strategies you used during the experiment.</p>','<p align="justify">To review, you will hear each melody FIVE times. Please do your best to dictate it as you would in an aural skills classroom setting noting with each hearing how confident you were with your answer at that point.</p><p align="justify">If there are any questions at this point, please ask the experimenter. If not, the experiment will begin. Please ask any questions the experimenter now. When you are ready to begin the experiment, please press NEXT!</p>' ],
    show_clickable_nav: true
  };


