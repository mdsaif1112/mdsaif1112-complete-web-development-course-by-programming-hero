// ৬. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর সেকেন্ড পজিশন এর উপাদান কে destructuring করে 'balance' নামক একটা ভেরিয়েবল এ রাখবে।

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

const {brand, model, ram, variants, features, functionalities} = phone

const myFriends = ['saif', 'jubayer', 'hossain']

const [saif, balance, hossain] = myFriends
console.log(balance);