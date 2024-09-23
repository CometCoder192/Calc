// Project Layout - 
// ~~1. make a layout in html using css grid preferably. make sure it's responsive later by adding media queries

// ~~2. after styling the page, do the simple tasks first, like linking the dom with the page using lets and vars.

// 3. after that, make a simple reduce func which accumulates the addition and display it to the console.
// any and every thing can be done after we successfully manange to do operations on the numbers submitted by the user.

// 4. after updating state every time at the display window, add other functionality to it such as clear all and 
// and delete button to individually clear single numbers.

//  5. CALC shouldn't evaluate more than one operation at a time, just like a real calc. (more on TOP readme)

// 6. round long answers with decimals

// 7. try except for divide by zero and other notorious stuff.

// 8. 

let display = document.querySelector("#display");
let plusButton = document.querySelector('#add');
let minusButton = document.querySelector('#minus');
let multiplyButton = document.querySelector('#multiply');
let divideButton = document.querySelector('#divide');
let clearButton = document.querySelector('#clear');
let deleteButton = document.querySelector('#delete');
let enterButton = document.querySelector('#enter');
let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine");
let zero = document.querySelector("#zero");
let numbers = document.querySelectorAll('.number');
let operators = document.querySelectorAll('.operator');

// clears the display
display.textContent = '';

numbers.forEach(button => {
    button.addEventListener('click', () => {
        display.textContent += button.textContent;
    })
})
operators.forEach(button => {
    button.addEventListener('click', () => {
        const containsOperator = /[+\-*/]/.test(display.textContent);
        if (!containsOperator) {
            display.textContent += button.textContent; 
        }
    })
})

// This function clears the textcontent of the display div
function clearAll() {
    display.textContent = "";
}
// This event listener has clearAll() as a callback and it executes only when the user clicks
clearButton.addEventListener('click', clearAll)

// Delete button functionality
function deleteNum() {
    if (display.textContent.length > 0) {
        display.textContent = display.textContent.slice(0,-1);
    }
}
deleteButton.addEventListener('click', deleteNum); // Event listener for when delete button works

// main calc function
function calc() {
    try {
        display.textContent = eval(display.textContent);
    } catch (error) {
        display.textContent = "Error";
    }
}

document.addEventListener('keydown', (e) => {
    const key = e.key;
    if (!isNaN(key) && key >=0 && key <= 9) {
        display.textContent += key;
        const gridItem = document.querySelector(`.gridItem[data-value="${key}"]`)
        
        if (gridItem) {
            gridItem.classList.add('hoverClass');
            
            setTimeout(() => {
                gridItem.classList.remove('hoverClass');
            }, 200);
        }

    } else if (key === 'Enter') {
        e.preventDefault();
        calc();
    } else if (key === 'Backspace') {
        e.preventDefault();
        deleteNum();
    } else if (key === 'Delete') {
        e.preventDefault();
        clearAll();
    } else if (['+', '-', '*', '/'].includes(key)) {
        e.preventDefault();
        const containsOperator = /[+\-*/]/.test(display.textContent);
        if (!containsOperator) {

            display.textContent += key;
            const gridItem = document.querySelector(`.gridItem[data-value="${key}"]`);
            if (gridItem) {
                gridItem.classList.add('hoverClass');
                
                setTimeout(() => {
                    gridItem.classList.remove('hoverClass');
                }, 200)
            }
        }
    }
}); 

