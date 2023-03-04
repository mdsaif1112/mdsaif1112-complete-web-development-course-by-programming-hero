// ২. একটা টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং ভেরিয়েবল ডিক্লেয়ার করো। সেটার মধ্যে উপরের অবজেক্ট এর একটা তিনটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। এর মধ্যে একটা প্রপার্টি সেট করবে--যেটা নেস্টেড অবজেক্ট আছে সেটার প্রপার্টি থেকে। আরেকটা প্রপার্টি হবে যে প্রপার্টি এর মান একটা array সেটার সেকেন্ড পজিশন এর উপাদান দিয়ে। আর বাকি একটা তোমার ইচ্ছা মতো বসাতে পারো।

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

const myString = `
    Brand: ${phone.brand}
    myVariant: ${phone.variants[1]}
    Camera: ${phone.features.camera}
`

console.log(myString);