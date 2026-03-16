const arr = [
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
function createCharacters (arr1){
var newArr = arr1.map(element => (
    { name: element.name.toUpperCase(), 
    level: element.level * 2,
     health: element.health * 3 })
    );
   return newArr;
}

let newArr3 = createCharacters(arr);

console.log(newArr3);
