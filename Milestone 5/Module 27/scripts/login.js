const emailField = document.getElementById('input__email')
const passField = document.getElementById('input__pass')
const loginBtn = document.getElementById('login__btn')

loginBtn.addEventListener('click', function(e){
    const emailValue = emailField.value
    const passValue = passField.value

    if(emailValue === 'mdsaif1116667@gmail.com' && passValue === 'jubayer'){
        window.location.href = 'bank.html'
    } else {
        alert('Invalid User');
    }
})