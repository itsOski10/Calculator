# Calculator Program

<p>
This is a simple calculator program built using HTML, CSS, and JavaScript. It allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division.
</p>


<h1>How to Use</h1>
<ol>
<li>Open the index.html file in a web browser.</li>
<li>Use the calculator buttons to enter numeric values and arithmetic operators (+, -, *, /) into the input field.</li>
<li>Click the equals button (=) to calculate the result of the expression entered.</li>
<li>The result will be displayed in the output field.</li>

</ol>

<p> 
You can also use the clear button (C) to clear the input and output fields.
</p>

<h1>Implementation Details</h1>

<p>
The calculator program is implemented using HTML, CSS, and JavaScript. The HTML file defines the layout of the calculator, and the CSS file styles its appearance. The JavaScript file implements the calculator logic, including handling user input and performing calculations.
</p>

<p>
The calculator logic is implemented using event listeners attached to the calculator buttons. When a button is clicked, its corresponding event listener is triggered, which updates the calculator input field based on the user's input. When the equals button is clicked, a separate event listener calculates the result of the expression entered and displays it in the output field.
</p>

<h1>Known Issues</h1>
<ul>
<li>
The calculator currently uses eval() to evaluate the input expression, which can be risky as it can execute any code passed to it. To improve security, you should consider implementing your own expression parser or sanitizing the input to ensure that only valid expressions are evaluated.
</li>
</ul>

<h1>Future Improvements</h1>

<ul>
<li>Add support for more complex arithmetic operations, such as exponentiation and square roots</li>
<li>Improve the calculator's appearance and user experience by adding animations and visual feedback</li>
<liAdd support for keyboard input, allowing users to enter expressions using the keyboard in addition to the calculator buttons.</li>
</ul>


<h1>License</h1>

<p>This project is licensed under the MIT License. See the LICENSE file for details.</p>
