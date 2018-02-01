//make variables from class/id

var buttonNum = document.getElementsByClassName("buttonNum");
var buttonOperator = document.getElementsByClassName("operator");
var display = document.getElementsByClassName("screen");
var equalsButton = document.getElementsByClassName("equals");
var buttonReset = document.getElementsByClassName("buttonClear");
var firstnumber, secondnumber, operator;
// var screen = document.getElementsByClassName("screen");

function init() {
  for(var i = 0; i < buttonNum.length; i++){
      var button = buttonNum[i];
      button.addEventListener("click", function(event){
        var number = event.target.innerHTML;
        displayText(number);
        saveNumber(number);
      });
  };

  for(var i = 0; i < buttonOperator.length; i++){
      var button = buttonOperator[i];
      button.addEventListener("click", function(event){
      displayText(event.target.innerHTML);
      operator = event.target.innerHTML;
      });
  };

  equalsButton.addEventListener("click", function() {
    var answer = calculate(firstNumber, secondNumber, operator);
    displayText(answer);
  });
  buttonReset.addEventListener("click", reset);
}

//enter text
function displayText(text) {
  return display.innerHTML = text;
}
function saveNumber(number) {
    parsedNumber = parseFloat(number);
    if(!firstNumber) {
        return firstNumber = parsedNumber;
    } else {
        return secondNumber = parsedNumber;
    }
}

function calculate(firstNum, secondNum, operator) {
    console.log(firstNumber, operator, secondNumber);

    switch(operator) {
      case "+":
          return firstNumb + secondNum;
      case "-":
          return firstNum - secondNum;
      case "*":
          return firstNum * secondNum;
      case "/":
          return firstNum / secondNum;
      default:
          throw "Incorrect operator";
    }
}

function reset() {
  var firstNumber, secondNumber, operator = null;
  displayText(0);
}

init();
