const outputTxt = document.getElementById('results-div');
const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');

const checkValidNum = input => {
    if (input === '') {
        alert('Please provide a phone number');
        return;
    }
}

checkBtn.addEventListener('click', () => {
    checkValidNum(userInput.value);
});

clearBtn.addEventListener('click', () => {
    outputTxt.innerText = '';
    userInput.value = '';
});