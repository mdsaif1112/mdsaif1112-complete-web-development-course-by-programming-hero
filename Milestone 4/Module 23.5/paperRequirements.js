function paperRequirements(firstBookCopies, secondBookCopies, thirdBookCopies) {
    const paperOfFirstBook = 100;
    const paperOfSecondBook = 200;
    const paperOfThirdBook = 300;

    const paperRequiredForFirstBook = paperOfFirstBook * firstBookCopies;
    const paperRequiredForSecondBook = paperOfSecondBook * secondBookCopies;
    const paperRequiredForThirdBook = paperOfThirdBook * thirdBookCopies;


    const totalPapersRequired = paperRequiredForFirstBook + paperRequiredForSecondBook + paperRequiredForThirdBook;

    return totalPapersRequired;
}

const firstBookCopies = 1;
const secondBookCopies = 2;
const thirdBookCopies = 3;

const totalPages = paperRequirements(firstBookCopies, secondBookCopies, thirdBookCopies);

console.log(totalPages);