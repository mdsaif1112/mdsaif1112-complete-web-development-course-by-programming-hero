// ৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো।

const products = [
    {name: 'Xiaomi', price: 6000},
    {name: 'Xiaomi2', price: 5000},
    {name: 'Xiaomi3', price: 5000},
]

const product = products.find(x => x.price == 5000)
console.log(product);

// ৭.৫ [এক্সট্রা] জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয়। সেটার একটা সামারি লিখে ফেলো। 