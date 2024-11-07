
const iterativeSummation = function(limit) {
    let result = 0;
    for (let i = 1; i <= limit; i++) {
        result = result + i;
    }
    return result;
}

console.log(iterativeSummation(4));
