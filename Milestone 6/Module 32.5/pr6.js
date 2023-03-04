// ৬. [ চ্যালেঞ্জিং। গুগলে সার্চ দিয়ে বের করো ] অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো 

const numbers = [45, 86, 95, 52, 79, 52, 1];

const odds = numbers.filter(x => x%2 == 1);
console.log(odds);