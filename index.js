require('dotenv').config();
const RandomWords = require('random-words');
const CryptoJS = require('crypto-js');
const {randomizeAndAssign} = require('./src/randomize');

let {personList} = require('./personList');
let seed = process.env.RANDOM_SEED;
if(!seed) seed = RandomWords();

let randomizedList = randomizeAndAssign(personList, seed);
randomizedList = randomizedList.map((each) => {
    let person = {...each};
    let key = RandomWords();
    let ciphertext = CryptoJS.AES.encrypt(person.name, key).toString();
    let checktxt = CryptoJS.AES.encrypt('christmas', person.gifter);
    let url = process.env.BASE_URL+ '/' + encodeURIComponent(key) + '/' + encodeURIComponent(ciphertext) + '/' + encodeURIComponent(checktxt);
    person.url = url;
    return person;
})
