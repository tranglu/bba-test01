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

let newArr = arr.map(function (element) {
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
console.log(newArr);