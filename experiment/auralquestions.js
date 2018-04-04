var auralintro={
    type: 'instructions',
    pages: ['The melodic dictation of this experiment is now over. Please press "Next" to continue. You will next answer some questions about your musical education.',
      'Please answer the questions on the next few pages to the best of your ability.'],
    show_clickable_nav: true
  };

timeline.push(auralintro)

var aural_survey = {
  type: 'survey-text',
  questions: [
		{prompt: "<p>How many weeks of aural skills training have you had? Please respond using number, do not write out the number.</p><p>One semester = 15 weeks</p><p>Two semesters = 30 weeks</p><p>Three semesters = 45 weeks</p><p>Four semesters = 60 weeks</p><p>If mid semester, please add accordingly. For example, if it is week 3 in your second year of college having taken Aural Skills last year, you would do 30 + 3 = 33  Weeks.</p>"}, 
		{prompt: "How many weeks of Aural Skills training have you taught?(Use the same math for calculating weeks as above!)"},
		{prompt: "Did you take AP music theory in High School?"},
		{prompt: "If so and you took the AP test, what score did you receive?"},
		{prompt: "Do you have absolute pitch?(also called perfect pitch)"},
		{prompt: "What system of solfege do you use primarily?(Ex: Moveable DO, Fixed Do, La Based Minor, Numbers, No System)"},
		{prompt: "How many weeks has it been since the last aural skills class you participated in? (As a student or teacher)"},
		{prompt: "Please use the the space below to describe strategies you used to complete melodic dictations."}
		],
};

timeline.push(aural_survey)


