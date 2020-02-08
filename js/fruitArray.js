// Create an array of fruits and show them in the html page...
// fruits image should have name under it
// store fruit data in a structure
// list -> Arrays of objects

var apple = {
  imgSource: 'images/apple.jpeg',
  name: 'Apple'
}

var banana = {
  imgSource: 'images/banana.jpeg',
  name: 'Banana'
}

var blueberry = {
  imgSource: "images/blueberry.svg",
  height: 100,
  width: 100,
  name: 'Blueberry'
}

var grapes = {
  imgSource: 'images/grapes.png',
  height: 100,
  width: 100,
  name: 'Grapes',
  showName: function() {
    console.log(this.name);
    return this.name;
  }
}

var fruitArray = [apple, banana, blueberry, grapes];

// grab a div from html
var container = document.getElementById("container");

// Add the fruitDiv to container
for (var i = 0; i < 10; i++) {
  var fruitDiv = document.createElement("div"); // creating multiple divs child

  
  // Add class to fruitDiv styling fruit div here
  fruitDiv.classList.add('fruit-container');
//  var textnode = document.createTextNode("Water");

myImage.src = blueberry.imgSource;
myImage.height = blueberry.height;
myImage.width = blueberry.width;

myImage.src = grapes.imgSource;
myImage.height = grapes.height;
myImage.width = grapes.width;

 // Insert this image to Fruit container
fruitDiv.appendChild(myImage);




  container.appendChild(fruitDiv); // container is one time created its the parent
}
// creating image element n DOM
var myImage = document.createElement('IMG');
console.log(myImage);
//***********************************************************

//***********************************************************
//why is this undefined ????                             // *
console.log(grapes.showName()); //1 //2
// what is the function giving back => return
      // *
  var catchMyFruit = grapes.showName(); //3
  console.log(catchMyFruit); //4
//***********************************************************


// create a box in html using js

// render image inside the box
