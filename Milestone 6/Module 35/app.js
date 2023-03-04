const loadPhones = async (search, limit) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${search}`;
    try {
        const res = await fetch(url)
        const data = await res.json()
        displayPhones(data?.data, limit);
    } catch (error) {
        console.log(error);
    }
}

const displayPhones = (data, limit) => {
    const phonesContainer = document.getElementById('phones-container')
    phonesContainer.innerHTML = ''
    const showAll = document.getElementById('show-all')
    // Show All button
    if(limit && data.length > limit){
        data = data.slice(0, limit)
        showAll.classList.remove('d-none')
    } else {
        showAll.classList.add('d-none')
    }

    // Validation
    if (data.length === 0) {
        document.getElementById('warning-message').classList.remove('d-none')
    } else {
        document.getElementById('warning-message').classList.add('d-none')
    }

    // Display Phones
    data.forEach(phone => {
        const phoneName = phone?.phone_name
        const phoneImg = phone?.image

        const phoneCard = document.createElement('div')
        phoneCard.classList.add('col')

        phoneCard.innerHTML = `
        <div class="card h-100">
            <img src="${phoneImg}" class="card-img-top img-fluid" alt="...">
            <div class="card-body">
                <h5 class="card-title">${phoneName}</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div class="card-footer">
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#phoneDetails" onclick="loadPhoneDetails('${phone?.slug}')">
                Details
                </button>
            </div>
        </div>
        `

        phonesContainer.appendChild(phoneCard)
    });


    toggleSpinner(false)
}

const searchInput = document.getElementById('searchInput')
const searchBtn = document.getElementById('searchBtn')

searchInput.addEventListener('keyup', function (e) {
    if (e.code === 'Enter') {
        search(10)
    }
})

function search(limit) {
    toggleSpinner(true)
    const searchText = searchInput.value
    if(searchText === ''){
        loadPhones('apple', limit)
    } else {
        loadPhones(searchText, limit)
    }
}

const loadPhoneDetails = async (id) => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`
    try {
        const res = await fetch(url)
        const data = await res.json()
        displayPhoneDetails(data)
    } catch (error) {
        console.log(error);
    }
}

const displayPhoneDetails = (phone) => {
    const phoneDetailsLabel = document.getElementById('phoneDetailsLabel')
    phoneDetailsLabel.innerText = phone?.data?.name

    const modalImg = document.getElementById('modal-img')
    const brand = document.getElementById('brand')
    const chipset = document.getElementById('chipset')
    const sensors = document.getElementById('sensors')
    const storage = document.getElementById('storage')
    const memory = document.getElementById('memory')
    const displaySize = document.getElementById('displaySize')
    const bluetooth = document.getElementById('bluetooth')
    const gps = document.getElementById('gps')
    const nfc = document.getElementById('nfc')
    const radio = document.getElementById('radio')
    const usb = document.getElementById('usb')
    const wlan = document.getElementById('wlan')
    const releaseDate = document.getElementById('releaseDate')


    // UpdateInnerText
    modalImg.src = phone.data.image;
    brand.innerText = `Brand: ${phone?.data?.brand}`;
    chipset.innerText = `Chipset: ${phone?.data?.mainFeatures?.chipSet}`
    sensors.innerText = `Sensors: ${sensorString(phone)}`
    storage.innerText = `Storage: ${phone?.data?.mainFeatures?.storage}`
    memory.innerText = `Memory: ${phone?.data?.mainFeatures?.memory}`
    displaySize.innerText = `Display Size: ${phone?.data?.mainFeatures?.displaySize}`
    bluetooth.innerText = `Bluetooth: ${phone?.data?.others?.Bluetooth ? phone?.data?.others?.Bluetooth : 'Not Anounced'}`
    gps.innerText = `GPS: ${phone?.data?.others?.GPS ? phone?.data?.others?.GPS : 'Not Anounced'}`
    nfc.innerText = `NFC: ${phone?.data?.others?.NFC ? phone?.data?.others?.NFC : 'Not Anounced'}`
    radio.innerText = `Radio: ${phone?.data?.others?.Radio ? phone?.data?.others?.Radio : 'Not Anounced'}`
    usb.innerText = `USB: ${phone?.data?.others?.USB ? phone?.data?.others?.USB : 'Not Anounced'}`
    wlan.innerText = `Wlan: ${phone?.data?.others?.WLAN ? phone?.data?.others?.WLAN : 'Not Anounced'}`
    releaseDate.innerText = `Release Date: ${phone?.data?.releaseDate ? phone?.data?.releaseDate : 'Not Anounced'}`
}

const sensorString = (phone) => {
    const sensorElements = (phone?.data?.mainFeatures?.sensors)
    let string = ''
    sensorElements.forEach(x => {
        string = string + x + ', '
    })
    string = string.slice(0, -2);
    return string;
}

const toggleSpinner = (isLoading) => {
    const spinner = document.getElementById('spinner')
    if (isLoading) {
        const phonesContainer = document.getElementById('phones-container')
        phonesContainer.innerHTML = ''
        document.getElementById('warning-message').classList.add('d-none')
        spinner.classList.remove('d-none')
    } else {
        spinner.classList.add('d-none')
    }
}

document.getElementById('show-all-btn').addEventListener('click', function(){
    search()
})

loadPhones('apple', 10)