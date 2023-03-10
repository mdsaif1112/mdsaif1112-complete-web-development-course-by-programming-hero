let num = 0
// document.getElementById('number').innerText = num


function interval() {
    const intervalId = setInterval(() => {
        document.getElementById('number').innerText = ++num
    }, 1000)

    document.getElementById('stop-btn').addEventListener('click', function(){
        clearInterval(intervalId)
    })

    document.getElementById('reset-btn').addEventListener('click', function(){
        num = 0;
        document.getElementById('number').innerText = num
        clearInterval(intervalId)
    })
}

document.getElementById('start-btn').addEventListener('click', function(){
    interval()
})