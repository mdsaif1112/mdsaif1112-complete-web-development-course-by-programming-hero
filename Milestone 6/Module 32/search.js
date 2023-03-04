const products = [
    {
        name: 'something',
        age: 32
    }
]

const data = {
    count: 5000,
    data: [
        {id: 1, job: 'leader'},
        {id: 2, job: 'co', child: ['abul', 'babul', 'dabul']},
    ]
}

console.log(data.data[2]?.child);