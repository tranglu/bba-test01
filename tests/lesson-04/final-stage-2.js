// không tính các cặp số hoán vị
function findPairsDivisibleBy17() {
    let count = 0;
    for (let i = 1; i <= 100; i++) {
        for (let x = i; x <= 100; x++) {
            if ((i + x) % 17 === 0) {
                count += 1;
                console.log(`(${i} , ${x})`);
            }
        }
    }
    console.log("====");
    console.log(`Tổng cộng: ${count} cặp`);
}

findPairsDivisibleBy17();