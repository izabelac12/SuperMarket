const DAY_TO_MILISECONDS = 24 * 60 * 60 * 1000;

function convertDaysToMiliseconds(numberOfDays) {
  return numberOfDays * DAY_TO_MILISECONDS;
}

function convertMilisecondsToDate(miliseconds) {
  return new Date(miliseconds).toDateString();
}

function addDaysFromToday(daysToAdd) {
  var daysInMil = convertDaysToMiliseconds(daysToAdd);
  var result = Date.now() + daysInMil;
  return convertMilisecondsToDate(result);
}

// Fruit Click Handler

// first u click on a fruit
// we need the fruit div to listen to the click
// then we need to give it a function containing what action to take once click is detected

function handleFruitClick(event) {
  console.log(event);
  var clickedElem = event.target;
  // if image is clicked then event.target is <img>
  // check if clickedElement.nodeName ? == DIV or IMG
  // if IMG true then find parentNode and follow below step
  // if IMG false then follow below steps

  console.log(clickedElem);
  console.log(clickedElem.getAttribute("data-fruitname"));
  // event.target -> clicked fruitContainer
  // fruitContainer.getAttribute('data-name'); -> apple
}
