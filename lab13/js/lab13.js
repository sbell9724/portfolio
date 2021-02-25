function fizzBuzz() {
  for (var i=1;i<=200; i++) {
    var outputStr = ""
    if (i%3==0) {
      outputStr += "Fizz";
    }
    if (i%5==0) {
      outputStr += "Buzz";
    }
    if (i%7==0) {
      outputStr += "Boom";
    }
    outputStr = i + ": " + outputStr;
    $("#output").append("<p>"+outputStr+"</p>");
  }
}

fizzBuzz();
