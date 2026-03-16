
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
    const charactersPowerUp = characters.map(element => (
        {
            name: element.name.toUpperCase(),
            level: element.level * 2,
            health: element.health * 3
        })
    );
    const posibleWinners = charactersPowerUp.filter(user => user.health > 1000);
    return posibleWinners;
}
console.log(createCharacters());