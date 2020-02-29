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
// var mainContainer = document.getElementById("container");

// function setupVegContainer(mainContainer) {
//   var vegContainer = document.createElement("div");
//   vegContainer.classList.add("veg-container");
//   mainContainer.appendChild(vegContainer);
//   vegContainer.appendChild(vegArray);
//   return vegContainer;
// }

// setupVegContainer(mainContainer);
// console.log(vegArray);
createFruitGallery(vegArray);

// what do u want?
// create a div
// store array of veg/fruit in the div
// add styles to div
// add div to the DOM Tree otherwise it won't show up

//create bttn
// store the veg img in the button
// add to the mainfunc
