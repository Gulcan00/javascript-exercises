const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
};

const multiply = function(arr) {
  return arr.reduce((mul, item) => mul * item, 1);
};

const power = function(num1, num2) {
	 let power = 1;
   for(let i = 0; i < num2; i++) {
     power *= num1;
   }

   return power;
};

const factorial = function(num) {
	let fac = 1;
  for(let i = 2; i <= num; i++)
    fac *= i;

  return fac;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
