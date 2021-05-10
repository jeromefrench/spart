const countOccurence = (array, value) => {
    const tabResult = array.filter(function(val){
        return val === value;
    })
    return tabResult.length
}

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}

const buildRandomArray = () => {
    //random array valu 1 to 3 include
    // 0 two times occure
    // 1 two times occure
    // 2 three times occure
    let randomArray = [];
    while (randomArray.length < 7) {
        let random = getRandomInt(3);
        if (random === 0 && countOccurence(randomArray, '0') < 2) {
            randomArray.push('0');
        }
        if (random === 1 && countOccurence(randomArray, '1') < 2) {
            randomArray.push('1');
        }
        if (random === 2 && countOccurence(randomArray, '2') < 3) {
            randomArray.push('2');
        }
    }
    randomArray.push(2, 2, 2, 2, 2);
    return randomArray;
}

module.exports = buildRandomArray;
