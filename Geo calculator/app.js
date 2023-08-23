document.getElementById('tri-calc').addEventListener('click', function(){
    const baseInput = document.getElementById('base-input');
    const baseInputValueString = baseInput.value;
    const baseInputValue = parseFloat(baseInputValueString);
    baseInput.value = '';

    const HeightInput = document.getElementById('height-input');
    const HeightInputValueString = HeightInput.value;
    const HeightInputValue = parseFloat(HeightInputValueString);
    HeightInput.value = '';

    const area = 0.5 * baseInputValue * HeightInputValue;

    const message = document.getElementById('message');
    message.style.display = 'none';

    const historyContainer = document.getElementById('history-container');
    const p = document.createElement('p');
    p.innerText = 'The area of triangle is:' + ' ' + area;
    historyContainer.appendChild(p);
});

document.getElementById('rec-calc').addEventListener('click', function(){
    const lengthInput = document.getElementById('length-input');
    const lengthInputValueString = lengthInput.value;
    const lengthInputValue = parseFloat(lengthInputValueString);
    lengthInput.value = '';

    const widthInput = document.getElementById('width-input');
    const widthInputValueString = widthInput.value;
    const widthInputValue = parseFloat(widthInputValueString);
    widthInput.value = '';

    const area = lengthInputValue * widthInputValue;

    const message = document.getElementById('message');
    message.style.display = 'none';

    const historyContainer = document.getElementById('history-container');
    const p = document.createElement('p');
    p.innerText = 'The area of rectangle is:' + ' ' + area;
    historyContainer.appendChild(p);
});