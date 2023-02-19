const section = document.createElement('section')

section.innerHTML = `
    <h1>This is Heading</h1>
    <ul>
        <li>item1</li>
        <li>item2</li>
        <li>item3</li>
        <li>item4</li>
        <li>item5</li>
        <li>item6</li>
    </ul>
    <p>Lorem 1000 Words</p>
`

document.body.appendChild(section)
const h1 = document.querySelector('h1');

h1.style.color  = 'blue'