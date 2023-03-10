const apiKey = '23c48489e9ed5a4d81d96f4f7a9cc1c4'

const loadCityTemperature = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

    try {
        const res = await fetch(url)
        const data = await res.json()
        displayTemperature(data);
    } catch (error) {
        console.log(error);
    }
}

const displayTemperature = (data) => {
    const cityName = document.getElementById('city-name')
    const temperature = document.getElementById('temperature')
    const lead = document.getElementById('lead')
    cityName.innerText = data.name
    temperature.innerText = data.main.temp
    lead.innerText = data.weather[0].main
    console.log(data);
}

const inputLocation = document.getElementById('input-location')


inputLocation.addEventListener('keyup', function(e){
    const myLocation = inputLocation.value
    if(e.code === 'Enter'){
        if(myLocation === ''){
            loadCityTemperature('pabna')
        } else{
            loadCityTemperature(myLocation)
        }

        console.log(myLocation);
    }
})

const searchBtn = document.getElementById('search-btn')

searchBtn.addEventListener('click', function(){
    const myLocation = inputLocation.value
    if(myLocation === ''){
        loadCityTemperature('pabna')
    } else{
        loadCityTemperature(myLocation)
    }
    console.log(myLocation);
})


loadCityTemperature('pabna')