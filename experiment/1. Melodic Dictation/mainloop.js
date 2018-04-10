var mainaudio2 = {

    timeline: [

// MAIN LOOP  

/// SET UP 
        {
	    	type: 'audio-button-response',
   	     	stimulus: 'sound/mp3/fiveSecondSilence.wav',
		choices: ['CLICK WHEN READY TO BEGIN'],
		prompt: function(){ return "EXPERIMENTER: Please turn to page with melody "+jsPsych.timelineVariable('melody', true); } 
      },

// FIRST REP

// Triangle 

        {
	    	type: 'audio-button-response',
   	     	stimulus: 'sound/mp3/Triangle.mp3',
		choices: ['READY!?'],
		trial_ends_after_audio: true ,
		prompt: 'First Hearing'
          },


// Set Up AND Melody 

        {
	    	type: 'audio-button-response',
   	     	stimulus: jsPsych.timelineVariable('melody'),
		choices: ['LISTEN'],
		trial_ends_after_audio: true 
          },

// Silence for Transcribing

        {
	    	type: 'audio-button-response',
   	     	stimulus: 'sound/mp3/twentySecondSilence.wav',
		choices: ['LISTEN'],
		trial_ends_after_audio: true ,
		prompt: 'USE THESE 20 SECONDS TO DICTATE THE MELODY'
          },

// REP TWO 

// Triangle 

        {
	    	type: 'audio-button-response',
   	     	stimulus: 'sound/mp3/Triangle.mp3',
		choices: ['READY!?'],
		trial_ends_after_audio: true ,
		prompt: 'Second Hearing'
          },


// Set Up AND Melody 

        {
	    	type: 'audio-button-response',
   	     	stimulus: jsPsych.timelineVariable('melody'),
		choices: ['LISTEN'],
		trial_ends_after_audio: true 
          },

// Silence for Transcribing

        {
	    	type: 'audio-button-response',
   	     	stimulus: 'sound/mp3/twentySecondSilence.wav',
		choices: ['LISTEN'],
		trial_ends_after_audio: true ,
		prompt: 'USE THESE 20 SECONDS TO DICTATE THE MELODY'
          },



// REP THREE

// Triangle 

        {
	    	type: 'audio-button-response',
   	     	stimulus: 'sound/mp3/Triangle.mp3',
		choices: ['READY!?'],
		trial_ends_after_audio: true ,
		prompt: 'Third Hearing'
          },


// Set Up AND Melody 

        {
	    	type: 'audio-button-response',
   	     	stimulus: jsPsych.timelineVariable('melody'),
		choices: ['LISTEN'],
		trial_ends_after_audio: true 
          },

// Silence for Transcribing

        {
	    	type: 'audio-button-response',
   	     	stimulus: 'sound/mp3/twentySecondSilence.wav',
		choices: ['LISTEN'],
		trial_ends_after_audio: true ,
		prompt: 'USE THESE 20 SECONDS TO DICTATE THE MELODY'
          },


// REP FOUR

// Triangle 

        {
	    	type: 'audio-button-response',
   	     	stimulus: 'sound/mp3/Triangle.mp3',
		choices: ['READY!?'],
		trial_ends_after_audio: true ,
		prompt: 'Fourth Hearing'
          },


// Set Up AND Melody 

        {
	    	type: 'audio-button-response',
   	     	stimulus: jsPsych.timelineVariable('melody'),
		choices: ['LISTEN'],
		trial_ends_after_audio: true 
          },

// Silence for Transcribing

        {
	    	type: 'audio-button-response',
   	     	stimulus: 'sound/mp3/twentySecondSilence.wav',
		choices: ['LISTEN'],
		trial_ends_after_audio: true ,
		prompt: 'USE THESE 20 SECONDS TO DICTATE THE MELODY'
          },



// REP FIVE (DOUBLE TRIANGLE, END SEQUENCE)

// Triangle 

        {
	    	type: 'audio-button-response',
   	     	stimulus: 'sound/mp3/DoubleTriangle.mp3',
		choices: ['READY!?'],
		trial_ends_after_audio: true ,
		prompt: 'Fifth and Final Hearing'
          },


// Set Up AND Melody 

        {
	    	type: 'audio-button-response',
   	     	stimulus: jsPsych.timelineVariable('melody'),
		choices: ['LISTEN'],
		trial_ends_after_audio: true 
          },

// Silence for Final Transcribing

        {
	    	type: 'audio-button-response',
   	     	stimulus: 'sound/mp3/twentySecondSilence.wav',
		choices: ['LISTEN'],
		trial_ends_after_audio: true ,
		prompt: 'USE THESE 60 SECONDS TO DICTATE THE MELODY'
          },
	{
	    	type: 'audio-button-response',
   	     	stimulus: 'sound/mp3/twentySecondSilence.wav',
		choices: ['LISTEN'],
		trial_ends_after_audio: true ,
		prompt: 'USE THESE 40 SECONDS TO DICTATE THE MELODY'
          },
	{
	    	type: 'audio-button-response',
   	     	stimulus: 'sound/mp3/twentySecondSilence.wav',
		choices: ['LISTEN'],
		trial_ends_after_audio: true ,
		prompt: 'USE THESE 20 SECONDS TO DICTATE THE MELODY'
          },

// Turn In Sheet to Experimenter

        {
	    	type: 'audio-button-response',
   	     	stimulus: 'sound/mp3/DoubleTriangle.mp3',
		choices: ['STOP'],
		trial_ends_after_audio: true ,
		prompt: 'PLEASE PUT DOWN YOUR PENCIL'
          },


        {
	    	type: 'audio-button-response',
   	     	stimulus: 'sound/mp3/DoubleTriangle.mp3',
		choices: ['STOP'],
		trial_ends_after_audio: true ,
		prompt: 'PLEASE PUT DOWN YOUR PENCIL'
          },


        {
	    	type: 'audio-button-response',
   	     	stimulus: 'sound/mp3/twentySecondSilence.wav',
		choices: ['CONTINUE'],
		prompt: '<p>PLEASE GIVE YOUR DICTATION TO THE EXPERIMENTER AND INDICATE ON BOTTOM OF SHEET IF YOU HAVE HEARD THIS MELODY BEFORE</p><p>WHEN YOU ARE READY TO START THE NEXT MELODY PLEASE PRESS THE BUTTON ABOVE</p>'
          }



            ],

// DECLARE Melodies Used in Loop
// ( eventually have it so set number of times of melody? //

    timeline_variables: [
        { melody: 'sound/E1MB9.mp3', prompt: '<p>TEMP HOLDER</p>'},
	{ melody: 'sound/E1MB95.mp3', prompt: '<p>TEMP</p>'},
	{ melody: 'sound/E1MB112.mp3', prompt: '<p>TEMP HOLDER</p>'},
	{ melody: 'sound/E1MB34.mp3', prompt: '<p>TEMP HOLDER</p>'}
    ],
	randomize_order : true

};

timeline.push(mainaudio2)


