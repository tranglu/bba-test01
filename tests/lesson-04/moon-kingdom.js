// bài 1 - tạo hàm

function createCharacters() {
    const characters = [
        {
            name: "mario", level: 1, health: 400
        },
        {
            name: "peter", level: 2, health: 100
        },
        {
            name: "tom", level: 3, health: 350
        },
    ]

    const charactersPowerUp = characters.map(function (element) {
        const updatedUserArray = Object.entries(element).map(([key, value]) => {
            if (key === "name") {
                return [key, value.toUpperCase()];
            } else if (key === "level") {
                return [key, value * 2];
            } else {
                return [key, value * 3];
            }
        });
        const updatedUserObject = Object.fromEntries(updatedUserArray);
        return updatedUserObject;
    });
    const posibleWinners = charactersPowerUp.filter(user => user.health > 1000);
    return posibleWinners;
}

console.log(createCharacters());



// bài 2
const players = [
    { name: "Mario", score: 1000 },
    { name: "Mario2", score: 1003 },
    { name: "Mario3", score: 100 },
    { name: "Mario4", score: 200 },
    { name: "Mario5", score: 190 },
    { name: "Mario6", score: 900 },
    { name: "Mario7", score: 300 },
]


function printLeaderBoard(player) {
    players.sort((a, b) => b.score - a.score);
    for (let i = 0; i < player.length; i++) {
        if (i === 0) {
            console.log(` 🥇 ${i + 1}. ${player[i].name} - ${player[i].score} pts`)
        }
        else if (i === 1) {
            console.log(` 🥈 ${i + 1}. ${player[i].name} - ${player[i].score} pts`)
        }
        else if (i === 2) {
            console.log(` 🥉 ${i + 1}. ${player[i].name} - ${player[i].score} pts`)
        } else {
            console.log(`   ${i + 1}. ${player[i].name} - ${player[i].score} pts`)
        }
    }
}
printLeaderBoard(players);