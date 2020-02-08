// Create an array of fruits and show them in the html page...
// fruits image should have name under it
// store fruit data in a structure (object)
// list -> Arrays of objects

var apple = {
  imgSource: "images/apple.jpg",
  color: 100,
  width: 100,
  name: "Apple"
};

var banana = {
  imgSource: "images/banana.png",
  height: 100,
  width: 100,
  name: "Banana"
};

var blueberry = {
  imgSource: "images/blueberry.svg",
  height: 100,
  width: 100,
  name: "Blueberry"
};

var orange = {
  imgSource: "images/apple.jpg",
  color: 100,
  width: 100,
  name: "Apple"
};

var pear = {
  imgSource: "images/banana.png",
  height: 100,
  width: 100,
  name: "Banana"
};

var pineapple = {
  imgSource: "images/blueberry.svg",
  height: 100,
  width: 100,
  name: "Blueberry"
};

var watermelon = {
  imgSource: "images/blueberry.svg",
  height: 100,
  width: 100,
  name: "Blueberry"
};

var grapes = {
  imgSource: "images/grapes.png",
  height: 100,
  width: 100,
  name: "Grapes",
  showName: function() {
    return this.name;
  }
};

// list of fruits - Global variables
var fruitArray = [
  apple,
  banana,
  blueberry,
  grapes,
  orange,
  watermelon,
  pear,
  pineapple
];

// takes list of fruit object => creates fruit gallery
function createFruitGallery(fruitArray) {
  // local variables
  var mainContainer = document.getElementById("container");
  // pick a div from html to show the fruit gallery
  // loop thru the fruit array
  for (var i = 0; i < fruitArray.length; i++) {
    // setting up the fruit image element
    var myFruitContainerCreated = setupFruitContainer();
    // giving each fruit item to this setImage function
    // setuupImageElement function takes a fruit and adds it to the fruitDiv in the DOM...
    setupImageElement(fruitArray[i], myFruitContainerCreated); // apple - banana - blueberry
    appendFruitContainerToMainContainer(mainContainer, myFruitContainerCreated);
  }
}

function setupFruitContainer() {
  var fruitContainer = document.createElement("div"); // creating multiple divs child
  // Add class fruit-container to the fruitContainer
  fruitContainer.classList.add("fruit-container");
  return fruitContainer;
}

//***********************************************************
function setupImageElement(fruit, fruitContainer) {
  // creating image element n DOM
  var myImageElement = document.createElement("IMG");
  // attach fruit props to image element
  // adds properties to the fruit objects
  myImageElement.src = fruit.imgSource;
  myImageElement.height = fruit.height;
  myImageElement.width = fruit.width;
  // Insert this image to Fruit container
  fruitContainer.appendChild(myImageElement);
}
//***********************************************************

function appendFruitContainerToMainContainer(
  mainContainer,
  myFruitContainerCreated
) {
  mainContainer.appendChild(myFruitContainerCreated);
}
createFruitGallery(fruitArray);
//***********************************************************
//**********************************************************
console.log(tomato);
