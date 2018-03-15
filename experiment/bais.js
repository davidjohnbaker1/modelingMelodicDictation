var bucknellV={
      type: 'survey-likert',
      preamble: 'The following scale is designed to measure auditory imagery, or the way in which you "think about sounds in your head." For the following items you are asked to do the following: Read the item and consider whether you think of an image of the described sound in your head. Then rate the vividness of your image using the following "Vividness Rating Scale." If no image is generated, give a rating of 1. Please feel free to use all of the levels in the scale when selecting your ratings.',
      questions: [	{prompt:'<p>For the first item, consider the beginning of the song "Happy Birthday."</p><p>The sound of a trumpet beginning the piece.</p>', labels: baisScaleV, required: true},
			{prompt:'<p>For the next item, consider ordering something over the phone.</p><p>The voice of an elderly clerk assisting you.</p>', labels: baisScaleV, required: true},
			{prompt:'<p>For the next item, consider being at the beach.</p><p>The sound of the waves crashing against nearby rocks.</p>', labels: baisScaleV, required: true},
			{prompt:'<p>For the next item, consider going to a dentist appointment.</p><p>The loud sound of the dentist\'s drill.</p>', labels: baisScaleV, required: true},
			{prompt:'<p>For the next item, consider being present at a jazz club.</p><p>The sound of a saxophone solo.</p>', labels: baisScaleV, required: true},
			{prompt:'<p>For the next item, consider being at a live baseball game.</p><p>The cheer of the crowd as a player hits the ball.</p>', labels: baisScaleV, required: true},
			{prompt:'<p>For the next item, consider attending a choir rehearsal.</p><p>The sound of an all-children\'s choir singing the first verse of a song.</p>', labels: baisScaleV, required: true},
			{prompt:'<p>For the next item, consider attending an orchestral performance of Beethoven\'s Fifth.</p><p>The sound of the ensemble playing. </p>', labels: baisScaleV, required: true},
			{prompt:'<p>For the next item, consider listening to a rain storm.</p><p>The sound of gentle rain. </p>', labels: baisScaleV, required: true},
			{prompt:'<p>For the next item, consider attending classes.</p><p>The slow-paced voice of your English teacher.</p>', labels: baisScaleV, required: true},
			{prompt:'<p>For the next item, consider seeing a live opera performance.</p><p>The voice of an opera singer in the middle of a verse.</p>', labels: baisScaleV, required: true},
			{prompt:'<p>For the next item, consider attending a new tap-dance performance.</p><p>The sound of tap-shoes on the stage.</p>', labels: baisScaleV, required: true},
			{prompt:'<p>For the next item, consider a kindergarten class.</p><p>The voice of the teacher reading a story to the children.</p>', labels: baisScaleV, required: true},
			{prompt:'<p>For the next item, consider driving in a car.</p><p>The sound of an upbeat rock song on the radio.</p>', labels: baisScaleV, required: true}

		],
  };

timeline.push(bucknellV)

var bucknellC={
      type: 'survey-likert',
      preamble: 'The following scale is designed to measure auditory imagery, or the way in which you "think about sounds in your head." For the following pairs of items you are asked to do the following: Read the first item (marked "a") and consider whether you think of an image of the described sound in your head. Then read the second item (marked "b") and consider how easily you could change your image of the first sound to that of the second sound and hold this image. Rate how easily you could make this change using the "Ease of Change Rating Scale." If no images are generated, give a rating of 1. Please read "a" first and "b" second for each pair. It may be necessary to cover up "b" so that you focus first on "a" for each pair. Please feel free to use all of the levels in the scale when selecting your ratings.',
      questions: [	
{prompt:'<p> For the first pair,  consider attending a choir rehearsal.</p><p>a. The sound of an all-children\'s choir singing the first verse of a song.</p><p>b. An all-adults\' choir now sings the second verse of the song.</p>', labels: baisScaleC, required: true},
{prompt:'<p> For the next pair, consider being present at a jazz club.</p><p>a. The sound of a saxophone solo.</p><p>b. The saxophone is now accompanied by a piano.</p>', labels: baisScaleC, required: true},
{prompt:'<p> For the next pair, consider listening to a rain storm.</p><p>a. The sound of gentle rain.</p><p>b. The gentle rain turns into a violent thunderstorm.</p>', labels: baisScaleC, required: true},
{prompt:'<p> For the next pair, consider driving in a car.</p><p>a. The sound of an upbeat rock song on the radio.</p><p>b. The song is now masked by the sound of the car coming to a screeching halt.</p>', labels: baisScaleC, required: true},
{prompt:'<p> For the next pair, consider ordering something over the phone.</p><p>a. The voice of an elderly clerk assisting you.</p><p>b. The elderly clerk leaves and the voice of a younger clerk is now on the line.</p>', labels: baisScaleC, required: true},
{prompt:'<p> For the next pair, consider seeing a live opera performance.</p><p>a. The voice of an opera singer in the middle of a verse.</p><p>b. The opera singer now reaches the end of the piece and holds the final note.</p>', labels: baisScaleC, required: true},
{prompt:'<p> For the next pair, consider going to a dentist appointment.</p><p>a. The loud sound of the dentist\'s drill.</p><p>b. The drill stops and you can now hear the soothing voice of the receptionist.</p>', labels: baisScaleC, required: true},
{prompt:'<p> For the next pair, consider the beginning of the song "Happy Birthday."</p><p>a. The sound of a trumpet beginning the piece.</p><p>b. The trumpet stops and a violin continues the piece.</p>', labels: baisScaleC, required: true},
{prompt:'<p> For the next pair, consider attending an orchestral performance of Beethoven\'s Fifth.</p><p>a. The sound of the ensemble playing.</p><p>b. The ensemble stops but the sound of a piano solo is present.</p>', labels: baisScaleC, required: true},
{prompt:'<p> For the next pair, consider attending a new tap\-dance performance.</p><p>a. The sound of tap\-shoes on the stage.</p><p>b. The sound of the shoes speeds up and gets louder.</p>', labels: baisScaleC, required: true},
{prompt:'<p> For the next pair, consider being at a live baseball game.</p><p>a. The cheer of the crowd as a player hits the ball.</p><p>b. Now the crowd boos as the fielder catches the ball.</p>', labels: baisScaleC, required: true},
{prompt:'<p> For the next pair, consider a kindergarten class.</p><p>a. The voice of the teacher reading a story to the children.</p><p>b. The teacher stops reading for a minute to talk to another teacher.</p>', labels: baisScaleC, required: true},
{prompt:'<p> For the next pair, consider attending classes.</p><p>a. The slow\-paced voice of your English teacher.</p><p>b. The pace of the teacher\'s voice gets faster at the end of class.</p>', labels: baisScaleC, required: true},
{prompt:'<p> For the next pair, consider being at the beach.</p><p>a. The sound of the waves crashing against nearby rocks.</p><p>b. The waves are now drowned out by the loud sound of a boat\'s horn out at sea.</p>', labels: baisScaleC, required: true}
		],
  };

timeline.push(bucknellC)


