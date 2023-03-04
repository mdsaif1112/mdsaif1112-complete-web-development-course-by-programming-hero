const loadData = async () => {
    try {
        const res = await fetch('https://randomuser.me/api/?gender=female')
        const data = await res.json()
        displayData(data)
    } catch (error) {
        console.log(error);
    }
}

const displayData = (data) => {
    const infoContainer = document.getElementById('info');
    const userImg = document.getElementById('user-img');
    const name = document.getElementById('name');
    const gender = document.getElementById('gender');
    const email = document.getElementById('email');
    const results = data?.results[0];

    userImg.src = results?.picture?.large

    name.innerText = `Name: ${results?.name?.title}. ${results?.name?.first} ${results?.name?.last}`;

    gender.innerText = `Gender: ${results?.gender}`;
    email.innerText = `Email: ${results?.email}`;

    const cell = document.createElement('h3');
    cell.innerText = `Cell: ${results?.cell}`;
    infoContainer.appendChild(cell)

    const phone = document.createElement('h3');
    phone.innerText = `Phone: ${results?.phone}`;
    infoContainer.appendChild(phone)

    const id = document.createElement('h3');
    id.innerText = `ID: ${results?.id.name} ${results?.id.value}`;
    infoContainer.appendChild(id)

    const registered = document.createElement('h3');
    registered.innerText = `Registered: ${results?.registered?.date} at the age of ${results?.registered?.age}`;
    infoContainer.appendChild(registered)
}

loadData()