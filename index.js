const { printMessage } = require("./utils");
const slugify = require("slugify");

//this is add method
function add(num1, num2, textToBeSlug) {
  printMessage("Your slug is " + slugify.default(textToBeSlug));
  return num1 + num2;
}

module.exports.add2 = add;
