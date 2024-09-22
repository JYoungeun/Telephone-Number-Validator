const outputTxt = document.getElementById('results-div');
const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');

const checkValidNum = input => {
    const countryCode = '^(\\+1\\s?|1\\s?)?';
    const areaCode = '(\\([0-9]{3}\\)|[0-9]{3})';
    const spacesDashes = '[\\s\\-]?';
    const phoneNumber = '[0-9]{3}[\\s\\-]?[0-9]{4}$';
    const phoneRegex = new RegExp(`${countryCode}${areaCode}${spacesDashes}${phoneNumber}`);

    const pTag = document.createElement('p');
    pTag.className = 'results-text';
    phoneRegex.test(input) ? (pTag.style.color = '#00471b') : (pTag.style.color = '#4d3800');
    pTag.appendChild(document.createTextNode(`${phoneRegex.test(input) ? 'Valid' : 'Invalid'} US number: ${input}`));
    outputTxt.appendChild(pTag);

    if (input === '') {
        alert('Please provide a phone number');
        return;
    }
};

checkBtn.addEventListener('click', () => {
    checkValidNum(userInput.value);
});

userInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      checkValidNumber(userInput.value);
      userInput.value = '';
    }
  });

clearBtn.addEventListener('click', () => {
    outputTxt.innerText = '';
    userInput.value = '';
});