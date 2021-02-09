function nameFixer() {
  var name = window.prompt("Let me know your name so I can fix it for you.");
  var fixedName = name.toLower().split('').sort().join('');
  return fixedName;
}

document.writeln("Hey, I fixed your name for you!", nameFixer(), "</br>");
