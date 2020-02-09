var broccoli = {
  imgSource: "images/broccoli.png",
  height: 100,
  width: 100,
  name: "broccoli"
};

var tomato = {
  imgSource: "images/tomato.jpeg",
  height: 100,
  width: 100,
  name: "tomato"
};

var sweetCorn = {
  imgSource: "images/sweetcorn.jpg",
  height: 100,
  width: 100,
  name: "sweetCorn"
};

var carrot = {
  imgSource: "images/carrot.png",
  height: 100,
  width: 100,
  name: "carrot"
};

var vegArray = [broccoli, tomato, sweetCorn, carrot];
var mainContainer = document.getElementById("container");

// function createVegGallery(vegArray) {
//   for (var i = 0; i < vegArray.length; i++) {
//     var vegContainerCreated = setupVegContainer();
//     setupImageElement(vegArray[i], vegContainerCreated);
//     appendVegContainerToMainContainer(mainContainer, vegContainerCreated);
//   }
// }
// function setupVegContainer() {
//   var vegContainer = document.createElement("div");
//   vegContainer.classList.add("veg-container");
//   return vegContainer;
// }

// function setupImageElement(vegitable, vegContainerCreated) {
//   var myImageElement = document.createElement("IMG");

//   myImageElement.src = vegitable.imgSource;
//   myImageElement.height = vegitable.height;
//   myImageElement.width = vegitable.width;

//   vegContainerCreated.appendChild(myImageElement);
// }
// function appendVegContainerToMainContainer(mainContainer, vegContainerCreated) {
//   mainContainer.appendChild(vegContainerCreated);
// }
// createVegGallery(vegArray);

createFruitGallery(vegArray);
