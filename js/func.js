function add(a, b) {
  var result = a + b;
  console.log(result);
  return result; // The end of the func
}

console.log(add(6, 7));

var answer = add(6, 7);
console.log(answer);

function subtract(add, x, y, z) {
  var answer = add(x, y) - z;
  return answer;
}

var sub = subtract(add, 6, 7, 3);
console.log(sub);

// declaring function
function add(x, plusOne) {
  // oneAdder is running here inside add
  return plusOne(x);
}

// declaring function
function plusOne(val) {
  console.log("hello", val);
  return val + 1;
}

// add is running here
var result = add(10000, x => {
  return x + 123;
});
console.log("Result", result);
