/*
*Author: Solomon Bell <somibell@ucsc.edu>
*Created: 17 February
*License: Public Domain
*/

//create our variables
var challengesEl = $('#challenges');
var problemsEl = $('#problems');
var resultsEl = $('#results');

//create the button
var modifyButton = '<button>Modify Me!</button>';

//add button to each section
challengesEl.append(modifyButton);
problemsEl.append(modifyButton);
resultsEl.append(modifyButton);

//add click event for the buttons
challengesEl.children('button').click(function() {
  challengesEl.toggleClass('special')
});

problemsEl.children('button').click(function() {
  problemsEl.toggleClass('special')
});

resultsEl.children('button').click(function() {
  resultsEl.toggleClass('special')
});
