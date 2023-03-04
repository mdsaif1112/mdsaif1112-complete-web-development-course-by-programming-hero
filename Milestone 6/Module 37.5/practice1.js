// ১. একটা অবজেক্ট ডিক্লেয়ার করো। সেই অবজেক্ট এর মিনিমাম পাঁচটা প্রপার্টি থাকবে। তারপর একটা প্রপার্টি এর মান হবে অন্য আরেকটা অবজেক্ট , আরেকটা প্রপার্টি এর মান হবে একটা array । একটা প্রপার্টি এর মান হবে একটা ফাংশন(মেথড) । এই মেথড কে কল করলে সে মেথড এর ভিতর থেকে অবজেক্ট এর যেকোন একটা প্রপার্টি রিটার্ন করবে। আর বাকি দুইটা তোমার ইচ্ছা মতো।

const phone = {
    brand: 'xiaomi',
    model: 'Redmi Note 5',
    ram: 4,
    rom: 64,
    variants: ['3/32', '4/64'],
    features: {
        camera: '5 Mega Pixel',
        fingerprint: true
    },
    functionalities: function(){
        return this.brand;
    }
}

const brand = phone.functionalities();
console.log(brand);