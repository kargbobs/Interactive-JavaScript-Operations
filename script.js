// Declare variables of different data types
let name = "Alice";          // String
let age = 30;               // Number
let isStudent = true;       // Boolean

// Print variables to the console
console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);

// Define functions for simple operations

// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Function to subtract two numbers
function subtract(a, b) {
    return a - b;
}

// Function to divide two numbers
function divide(a, b) {
    if (b === 0) {
        console.error("Cannot divide by zero");
        return "Error: Division by zero";
    }
    return a / b;
}

// Function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

// Event listeners for buttons
document.getElementById('addButton').addEventListener('click', function() {
    const num1 = Number(document.getElementById('number1').value);
    const num2 = Number(document.getElementById('number2').value);
    const result = add(num1, num2);
    document.getElementById('result').textContent = `Result: ${result}`;
});

document.getElementById('subtractButton').addEventListener('click', function() {
    const num1 = Number(document.getElementById('number1').value);
    const num2 = Number(document.getElementById('number2').value);
    const result = subtract(num1, num2);
    document.getElementById('result').textContent = `Result: ${result}`;
});

document.getElementById('multiplyButton').addEventListener('click', function() {
    const num1 = Number(document.getElementById('number1').value);
    const num2 = Number(document.getElementById('number2').value);
    const result = multiply(num1, num2);
    document.getElementById('result').textContent = `Result: ${result}`;
});

document.getElementById('divideButton').addEventListener('click', function() {
    const num1 = Number(document.getElementById('number1').value);
    const num2 = Number(document.getElementById('number2').value);
    const result = divide(num1, num2);
    document.getElementById('result').textContent = `Result: ${result}`;
});

// Integrate Chart.js
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar', // You can change this to 'line', 'pie', etc.
    data: {
        labels: ['Addition', 'Subtraction', 'Multiplication', 'Division'],
        datasets: [{
            label: 'Math Operations',
            data: [add(10, 5), subtract(10, 5), multiply(10, 5), divide(10, 5)],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
