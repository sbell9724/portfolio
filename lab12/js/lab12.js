/*
yes
*/

//when given number, returns hogwarts house
function getHouse(num) {
  //get length of name
  var length = num.length;
  //get the remainder of the name divided by 4
  var remainder = length % 4;
  //create if/else to show house
  if (remainder == 0) {
    return "Gryffindor";
  }
  else if (remainder == 1) {
    return "Ravenclaw";
  }
  else if (remainder == 2) {
    return "Hufflepuff";
  }
  else if (remainder == 3) {
    return "Slytherin";
  }
};

//attach click handler to submit box
$("#button").click(function() {
  //get the value in the input box, assign to variable
  var name = $("#userName").val();
  //determine house
  var house = getHouse(name);
  //add house to output div
  $("#output").html("<h1>" + "You have been sorted into the house of " + house + "!" + "</h1>");
});
