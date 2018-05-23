// Write your code in this file!
function scuberGreetingForFeet(someValue) {
  if (someValue <= 400) {
    return 'This one is on me!';
  } else if (someValue > 2000) {
    return "I will gladly take your thirty bucks.";
  } else if (someValue < 2500) {
    return "I will gladly take your thirty bucks.";
  } else (someValue > 2500){
    return 'No can do.';
  }

}

function ternaryCheckCity(city) {
  var city = false;
  if (city === true) {
    var cityValue = "NYC"
    console.log("Ok, sounds good.");
  } else {
    console.log("No go.");
  }
  return message
}

function switchOnCharmFromTip(tip) {
  let message
  if (tip === "generous") {
    message = "Thank you so much.";
  } else if (tip === 'not as generous') {
    message = "Thank you.";
  } else {
    message = "Bye."
  }
  return message
}
