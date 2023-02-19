const updateBtn = document.getElementById('update-btn');
const inputField = document.getElementById('input-field');
const heading = document.querySelector('h1');

inputField.addEventListener('keypress', function () {
    heading.innerText = inputField.value
})