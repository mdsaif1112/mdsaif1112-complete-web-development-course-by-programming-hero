// ৩৬. তোমার যত বই আছে সেগুলার দাম নিয়ে একটা array লিখে ফেলো। যে বই গুলোর দাম ২০০ টাকার উপরে সেগুলাকে স্কিপ করবে। অর্থাৎ সেগুলাকে আউটপুট হিসেবে দেখাবে না। বাকিদের কে আউটপুট হিসেবে দেখাবে। দেখো করতে পারো কিনা।

var bookPrices = [120, 220, 150, 360, 450, 200, 196, 560, 170];

for (let i = 0; i < bookPrices.length; i++) {
    const price = bookPrices[i];
    if (price > 200) {
        continue;
    }
    console.log(price);
}