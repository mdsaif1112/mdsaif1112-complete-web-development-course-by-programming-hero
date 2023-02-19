function totalCost(apple, komola, angur) {
    const perKgApplePrice = 250;
    const perKgKomolaPrice = 150;
    const perKgAngurPrice = 200;

    const applePrice = apple * perKgApplePrice;
    const komolaPrice = komola * perKgKomolaPrice;
    const angurPrice = angur * perKgAngurPrice;

    const total = applePrice + komolaPrice + angurPrice;
    return total;
}

const total = totalCost(1,1,1);
console.log(total);