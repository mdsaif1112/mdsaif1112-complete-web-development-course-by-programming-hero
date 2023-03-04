const loadData = async () => {

    try {
        const res = await fetch('https://restcountries.com/v3.1/all')
        const data = await res.json()
        displayData(data)
    } catch (error) {
        console.log(error);
    }
}

function displayData(data) {
    const countrySection = document.getElementById('country-section');
    data.forEach(country => {

        const countryContainer = document.createElement('div');
        countryContainer.id = 'country'

        const countryName = document.createElement('h3');
        countryName.innerText = 'Name: ' + country?.name?.common;
        countryContainer.appendChild(countryName)

        const capital = document.createElement('h5')
        capital.innerText = `Capital: ${country?.capital ? country?.capital[0] : 'No Capital'}`
        countryContainer.appendChild(capital)

        const detailsBtn = document.createElement('button')
        detailsBtn.innerText = 'Details';
        detailsBtn.addEventListener('click', function () {
            loadCountryDetails(`${country?.cca2}`)
        })
        countryContainer.appendChild(detailsBtn)

        countrySection.appendChild(countryContainer)
    });
}

const loadCountryDetails = async (code) => {
    try {
        const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`)
        const data = await res.json()
        displayDetails(data)
    } catch (error) {
        console.log(error);
    }
}

function displayDetails(data) {
    const countryDetailsName = document.getElementById('country-name')
    const countryFlag = document.getElementById('country-flag')

    countryDetailsName.innerText = `Name: ${data[0]?.name?.common}`

    countryFlag.src = data[0]?.flags?.png
}

loadData()