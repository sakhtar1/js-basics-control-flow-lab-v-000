// Write your code in this file!
function scuberGreetingForFeet(someValue) {
  let message
  if (someValue <= 400) {
    message = 'This one is on me!'
  } else if (someValue > 2000 < 2500) {
    message = "I will gladly take your thirty bucks."
  } else (someValue > 2500){
    message = 'No can do.'
  }
  return message
}

function ternaryCheckCity(city) {
  let message
  if (city === "NYC") {
    message = "Ok, sounds good."
  } else {
    message = "No go."
  }
  return message
}

function switchOnCharmFromTip(tip) {
  let message
  if (tip === "generous") {
    message = "Thank you so much."
  } else if (tip === 'not as generous') {
    message = "Thank you."
  } else {
    message = "Bye."
  }
  return message
}
