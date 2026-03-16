// tính trùng
function findPairsDivisibleBy17() {
    let count = 0;
    for (let i = 1; i <= 100; i++) {
        for (let x = i; x <= 100; x++) {
            let b = i + x;
            if (b % 17 === 0) {
                count += 1;
                console.log(`(${i} , ${x}) = ${b}`);
            }
        }
    }
    console.log("====");
    console.log(`Tổng cộng: ${count} cặp`);
}

findPairsDivisibleBy17();