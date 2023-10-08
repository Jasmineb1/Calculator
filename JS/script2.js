let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
//For input through the buttons click
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => handleInput(e.target.innerHTML));
});

// For input through the keyboard
document.addEventListener('keydown', (e) => {
    const key = e.key;
    if (isValidInput(key)) {
        e.preventDefault(); // Prevent default behavior for valid keys bc of which when 1 was pressed once two ones appeared and similar for other numbers
        handleInput(key);
    } else if (key === 'Enter') {
        e.preventDefault();  
        handleInput('=');
    } else if (key === 'Escape') {
        e.preventDefault(); 
        handleInput('AC');
    }
});

// Different cases for handling the  functions
function handleInput(inputValue) {
    switch (inputValue) {
        case '=':
            string = eval(string);
            //input.value= string;
            break;
        case 'AC':
            string = "";
            //input.value= string;
            break;
        case 'DEL':
            string = string.slice(0,-1);
            //input.value=string;
            break;
        default:
            if (inputValue == '0' || string !== '') {
                string += inputValue;
            } else {
                string += inputValue;
            }
            break;
    }
   input.value = string;
}

function isValidInput(input) {
    return /^[0-9+\-*/().sincotan]$/.test(input);
}
