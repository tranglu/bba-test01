let count = 0;
//let arr = new Array();
// function taoMangObject(a) {
//     for (let i = 1; i <= a; i++) {
//         for (let x = 1; x <= a; x++) {
//             let b = i + x;
//             if (b % 17 === 0) {

//                 count = count + 1;
//                 console.log(`(${i} - ${x}) = ${b}`);
//                 //console.log(`Tổng cộng: ${count} cặp`);

//             }
//         }
//     }
//     console.log("====");
//     console.log(`Tổng cộng: ${count} cặp`);
// }
// taoMangObject(100);

function findPairsDivisibleBy17() {
    for (let i = 1; i <= 100; i++) {
        for (let x = 1; x <= 100; x++) {
            let b = i + x;
            if (b % 17 === 0) {
                count = count + 1;
                console.log(`(${i} - ${x}) = ${b}`);
            }
        }
    }
    console.log("====");
    console.log(`Tổng cộng: ${count} cặp`);
}

findPairsDivisibleBy17();