const RandomGen = require('seed-random')

module.exports = {
    randomizeAndAssign(personList, seed) {
        let shuffledPersonList = shuffle(personList, seed);
        return shuffledPersonList.map((each, index) => {
            let person = {...each};
            if(index === shuffledPersonList.length -1) {
                person.gifter = shuffledPersonList[0].email;
            }
            else {
                person.gifter = shuffledPersonList[index + 1].email;
            }
            return person;
        });
    }
} 

function shuffle(array, seed) {
    let currentIndex
    let temporaryValue
    let randomIndex
    let random
    if(!seed) {
        random = RandomGen(new Date().toISOString())
    }
    else {
        random = RandomGen(seed.toString())
    }
    if(!Array.isArray(array)) {
        throw new Error('You need to pass an array')
    }
    currentIndex = array.length;
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(random() * (currentIndex --))
    
        // And swap it with the current element.
        temporaryValue = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = temporaryValue
    };
    return array;
}