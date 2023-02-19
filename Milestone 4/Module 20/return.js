function avarageMarks(mark1, mark2, mark3) {
    var totalMarks = mark1 + mark2 + mark3;
    var avarageMarks = totalMarks / 3;
    var fixedAvarage = avarageMarks.toFixed(2);
    return parseFloat(fixedAvarage);
}

var saifsAvarageMarks = avarageMarks(55, 56, 60);
var jubayersAvarageMarks = avarageMarks(60, 20, 40);
var hossainsAvarageMarks = avarageMarks(45, 60, 50);
var allAvarageMarks = avarageMarks(saifsAvarageMarks, jubayersAvarageMarks, hossainsAvarageMarks);

console.log(saifsAvarageMarks);
console.log(jubayersAvarageMarks);
console.log(hossainsAvarageMarks);
console.log(allAvarageMarks);