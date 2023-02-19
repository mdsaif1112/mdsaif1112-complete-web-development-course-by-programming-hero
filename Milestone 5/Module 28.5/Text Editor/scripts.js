const textElement = document.getElementById('text-input');
const text = textElement.value

document.getElementById('bold-btn').addEventListener('click', function(){
    textElement.classList.toggle('bold');
})

document.getElementById('italic-btn').addEventListener('click', function(){
    textElement.classList.toggle('italic');
})

document.getElementById('underline-btn').addEventListener('click', function(){
    textElement.classList.toggle('underline');
})

document.getElementById('transform-btn').addEventListener('click', function(){
    textElement.classList.toggle('transform');
})

// Update Font Size
const fontSizeInput = document.getElementById('font-size-input');
const fontSizeValue = fontSizeInput.value

textElement.style.fontSize = `${fontSizeValue}px`;

fontSizeInput.addEventListener('keyup', function(e){
    const fontSize = e.target.value;
    textElement.style.fontSize = `${fontSize}px`;
    if(fontSize === ''){
        textElement.style.fontSize = '16px';
    }
})

// update Color
const colorInput = document.getElementById('text-color-input')
const color = colorInput.value

textElement.style.color = color;

colorInput.addEventListener('change', function(e){
    const newColor = e.target.value;
    textElement.style.color = newColor;
})