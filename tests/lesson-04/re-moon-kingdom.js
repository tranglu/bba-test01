
const arr = [
    {
        name: "mario",
        level: 1,
        health: 400
    },
    {
        name: "peter",
        level: 2,
        health: 100
    },
    {
        name: "tom",
        level: 3,
        health: 350
    },
]

// const newArr=arr.map((name,index) =>({
//     name: name,
//     level: index
// }));

// console.log(newArr);

const numbers = [1, 2, 3, 4, 5];

// const doubled = numbers.map(num => num*2);

// console.log(doubled);
// //const a = ["tom", "lemon", "apple"];
// const a= "tom";
// const newArr= a.toUpperCase();
// //const newArr=a.map(name => name = name.toUpperCase())
// console.log(newArr);

let users = [
    { firstName: "Susan", lastName: "Steward" },
    { firstName: "Daniel", lastName: "Longbottom" },
    { firstName: "Jacob", lastName: "Black" }
];

let userFullnames = users.map(function (element) {
    return `${element.firstName} ${element.lastName}`;
})

//console.log(userFullnames);
// ["Susan Steward", "Daniel Longbottom", "Jacob Black"]

// let newArr2= arr.map( element => element.name=function(element){ 
//     //console.log(element);
//     return `${element.name.toUpperCase()}`;
//     // element.name=element.name.toUpperCase();
//     // element.health= element.health*1000;
//     // element.level=element.level*2
//     // console.log(element);
// })

let newArr3 = arr.map(function (element) {
    //console.log(element);
    const updatedUserArray = Object.entries(element).map(([key, value]) => {
        if (key === "name") {
            return [key, value.toUpperCase()];
        } else if (key === "level") {
            return [key, value * 2];
        }else{
            return [key, value * 1000];

        }

    }); // Ví dụ: thêm '-updated' vào cuối giá trị
    const updatedUserObject = Object.fromEntries(updatedUserArray);
    return updatedUserObject;
});
console.log(newArr3);
const user = { name: 'An', age: 25, role: 'Admin' };

// 1. Chuyển object thành mảng và map
//const updatedUserArray = Object.entries(user).map(([key, value]) => {
//   return [key, `${value}-updated`]; // Ví dụ: thêm '-updated' vào cuối giá trị
// });

// 2. Chuyển ngược về object
//const updatedUserObject = Object.fromEntries(updatedUserArray);

//console.log(updatedUserObject);
// Kết quả: { name: 'An-updated', age: '25-updated', role: 'Admin-updated' }


