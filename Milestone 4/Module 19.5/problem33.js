// ৩৩ তুমি এতদিন যা যা জিনিস শিখছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা for লুপ দিয়ে সেই array এর সব উপাদান কে আউটপুট হিসেবে দেখাও।

var learned = ['Html', 'Github', 'Css', 'Bootstrap', 'Tailwind Css', 'Javascript'];

for (let i = 0; i < learned.length; i++) {
    const element = learned[i];
    console.log(element);
}