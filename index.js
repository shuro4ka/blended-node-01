// index.js
const argv = require("yargs").argv;
const {sum, minus, mult, devide} = require("./function");

// TODO: рефакторить
function invokeAction({ action, num1, num2 }) {
  switch (action) {
    case "sum":
      console.log(sum(num1,num2));
      break;

    case "minus":
        console.log(minus(num1,num2));
      break;

    case "mult":
        console.log(mult(num1,num2));
      break;

    case "devide":
        console.log(devide(num1,num2));
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);