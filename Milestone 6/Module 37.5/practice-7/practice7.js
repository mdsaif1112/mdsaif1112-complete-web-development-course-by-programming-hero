// ৭. একদম প্রাথমিক স্টেপ হিসেবে jsonplaceholder এর ওয়েবসাইট থেকে ডাটা fetch করে সেটাকে কনসোল এ দেখাতে হবে। ধরো তুমি তাদের ওয়েবসাইট এ photos এর API এর লিংক কোনটা সেটা জাভাস্ক্রিপ্ট দিয়ে কোড করে সেই ডাটা কনসোল এ দেখতে পারতেছো কিনা। তারপর কয়েকটা কার্ড বানাবে (হতে পারে বুটস্ট্রাপ এর কার্ড) সেগুলা আবার তুমি html দিয়ে ওয়েবসাইট এ ছবি এবং ছবির নিচে ছবির টাইটেল দেখাবে।

const loadPhotos = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/photos')
        const data = await res.json()
        displayPhotos(data);
    } catch (error) {
        console.log(error);
    }
}

const container = document.getElementById('container')

const displayPhotos = (data) => {
    data.forEach(photo => {
        const photoBox = document.createElement('div')
        photoBox.innerHTML = `
            <img src="${photo.url}" onclick="loadPhotoDetails(${photo.id})"><br>
            <h3>${photo.title}</h3>
        `

        container.appendChild(photoBox)
        console.log(photo.url);
        console.log(photo.title);
    });
}

const loadPhotoDetails = async (id) => {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
        const data = await res.json()
        displayDetails(data);
    } catch (error) {
        console.log(error);
    }
}

const displayDetails = (data) => {
    const thumbnail = document.getElementById('thumbnail')
    thumbnail.src = data.thumbnailUrl

    const mainPhoto = document.getElementById('main-photo')
    mainPhoto.src = data.url

    const title = document.getElementById('title')
    title.innerText = data.title
}

loadPhotos()

// ৮. প্রত্যেকটা ফটোতে ক্লিক করলে উপরে আরেকটা div থাকবে। ক্লিক করার পর ডাইনামিকভাবে ওই ফটো এর ডাটা লোড করবে। সেটা করার জন্য আগের ডাটা লোড করার API এর লিংক এর পরে photos এর পরে ডাইনামিকভাবে ${id} বসিয়ে দিবে। এরপর ডিটেইল অংশে photo এর url দিয়ে মেইন ইমেজ এবং thumbnail ইমেজ দুইটাই দেখাবে। সাথে সাথে title প্রপার্টিও দেখাবে।