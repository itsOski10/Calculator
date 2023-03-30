const clear = document.getElementById("clear");
const del = document.getElementById("delete");
const nine = document.getElementById("nine");
const eight = document.getElementById("eight");
const seven = document.getElementById("seven");
const six = document.getElementById("six");
const five = document.getElementById("five");
const four = document.getElementById("four");
const three = document.getElementById("three");
const two = document.getElementById("two");
const one = document.getElementById("one");
const zero = document.getElementById("zero");
const divide = document.getElementById("divide");
const mult = document.getElementById("multiply");
const sub = document.getElementById("sub");
const add = document.getElementById("add");
const equals = document.getElementById("equals");
const outputField = document.getElementById('result');

clear.addEventListener('click', clearInput);
del.addEventListener('click', deleteInput);
divide.addEventListener('click', () => {
  performOperation('/');
});
seven.addEventListener('click', () => {
  appendInput('7');
});
eight.addEventListener('click', () => {
  appendInput('8');
});
nine.addEventListener('click', () => {
  appendInput('9');
});
multiply.addEventListener('click', () => {
  performOperation('*');
});
four.addEventListener('click', () => {
  appendInput('4');
});
five.addEventListener('click', () => {
  appendInput('5');
});
six.addEventListener('click', () => {
  appendInput('6');
});
sub.addEventListener('click', () => {
  performOperation('-');
});
one.addEventListener('click', () => {
  appendInput('1');
});
two.addEventListener('click', () => {
  appendInput('2');
});
three.addEventListener('click', () => {
  appendInput('3');
});
add.addEventListener('click', () => {
  performOperation('+');
});
zero.addEventListener('click', () => {
  appendInput('0');
});

equals.addEventListener('click', function () {
    const result = calculate();
    outputField.value =result;
});
// Functions


function appendInput (value) { // chanfe the result to the value

    result.value += value; // result is the id in my html filr index.html
};

function deleteInput () {
    result.value = result.value.slice(0,-1)
};

function clearInput () {
  result.value = '';  
};

function performOperation(operator) {
    result.value += operator;
  };



function calculate() {
    const input = document.getElementById('result').value;
    const result = eval(input);
    return result;
  }; 







function evaluateExpression() {
 try {
      const resultValue = eval(result.value);
      result.value = resultValue.toString();
    } catch (e) {
      console.error(e);
      result.value = 'Error';
    }
  }
