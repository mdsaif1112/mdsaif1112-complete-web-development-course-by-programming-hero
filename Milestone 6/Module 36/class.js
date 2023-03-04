// Object Literal
const player1 = {
    name: 'Player1',
    role: 'Batsman',
    play: function (team){
        console.log(`${this.name} can play against ${team}`);
    }
}


// console.log(player1);



// Class
class Player {
    team = 'Argentina';
    constructor(name, role, goals, game) {
        this.name = name;
        this.role = role;
        this.goals = goals;
        this.game = game;
    }
}

const Saif = new Player('Saif', 'Striker', 300, function (team) {
});

const game = Saif.game('Australia')

// Values
const values = Object.values(Saif)
// console.log(values);

// Keys
const keys = Object.keys(Saif)
// console.log(keys);

// Entries
const entries = Object.entries(Saif)
// console.log(entries);

for (const [key, value] of entries) {
    // console.log(key, value);
}


// Seal (cant remove or add properties only can update values)
Object.seal(Saif)
delete Saif.team

// Freeze (cant remove, add or updated values)
Object.freeze(Saif)

// console.log(Saif);

const saifPlay = player1.play.bind(Saif)

const play = saifPlay('canada')
// console.log(saifPlay);

// for (const key in Saif) {
//     console.log(key);
// }

const obj ={a:1, b:7, c:3, length:2};
// console.log(Object.keys(obj).length);

const getGirlFriend= (name = "chokina")=>"name";
console.log(getGirlFriend());