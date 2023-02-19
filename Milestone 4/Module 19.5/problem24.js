// ২৪. তোমার কাছে: ৮০০০০ টাকার বেশি হলে তুমি mac কিনবে, ৬০ টাকার বেশি হলে gaming ল্যাপটপ কিনবে, ৪০ হাজার টাকার বেশি হলে lenovo yoga কম্পিউটার কিনবে , ২০ হাজার টাকার বেশি হলে পুরান ল্যাপটপ কিনবে। না হয় তুমি মোবাইল দিয়ে কাজ চালাবে।

var myBalance =89999;

if (myBalance >= 80000) {
    console.log('I will buy Mac');
} else if(myBalance >= 60000){
    console.log('I will Buy a Gaming Laptop');
} else if(myBalance >= 40000){
    console.log('I will buy lenovo yoga');
} else if(myBalance >= 20000){
    console.log('I will buy used Laptop');
} else {
    console.log('I will work through Mobile Phone :(');
}