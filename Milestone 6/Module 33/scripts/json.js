const member = {
    name: 'Saif',
    55: 12,
    marks: {
        physics: {
            firstPaper: 80,
            secondPaper: 88
        },
        math: {
            firstPaper: 80,
            secondPaper: 88
        },
        chemistry: {
            firstPaper: 80,
            secondPaper: 88
        }
    }
}

console.log(typeof member);
const stringified = JSON.stringify(member)

console.log(typeof stringified);
const objectified = JSON.parse(stringified)
console.log(objectified.name);

// {"55":12,"name":"Saif","marks":{"physics":{"firstPaper":80,"secondPaper":88},"math":{"firstPaper":80,"secondPaper":88},"chemistry":{"firstPaper":80,"secondPaper":88}}}