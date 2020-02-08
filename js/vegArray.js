var broccoli = {
  imgsource: "images/broccli.png",
  name: "broccoli"
};

var tomato = {
  imgsource: "images/tomato.jpeg",
  name: "tomato"
};

var sweetCorn = {
  imgsource: "images/sweetcorn.jpg",
  name: "sweetCorn"
};

var carrot = {
  imgsource: "images/carrot.png",
  name: "carrot"
};

var vegArray = [broccoli, tomato, sweetCorn, carrot];

function createVegGallery() {
  for (var i = 0; i < vegArray.length; i++) setUpVegContainer();
}

function setUpVegContainer() {
  setupFruitContainer();
}
