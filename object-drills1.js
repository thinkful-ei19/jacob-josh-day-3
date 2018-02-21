const loaf={'flour':300,'water':210,'hydration': function (){return (loaf.water/loaf.flour)*100}};

console.log(loaf.flour,loaf.water);

console.log(loaf.hydration());

let obj = {foo:'hi', bar:'bye',fum:24,quux:true,spam:'wrong'};
for (let key in obj) {
    console.log(`${key} ${obj[key]}`);
}

const meals= ['breakfast','second breakfast','elvenses','lunch','afternoon tea','dinner','supper'];
console.log(meals[5]);

let obj1 = {name:'Jacob',jobTitle:'CSR',boss:'reports to Bob'};
let obj2 = {name:'Bob',jobTitle:'Manager', boss:'doesnt report to anyone'};
let obj3 = {name:'Spongebob',jobTitle:'Frycook',boss:'reports to Bob'};

let arr1 = [obj1, obj2, obj3];

for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i].name +": "+ arr1[i].jobTitle);
}

for(let i=0;i<arr1.length;i++){
    console.log(`${arr1[i].jobTitle} ${arr1[i].name} ${arr1[i].boss}`);
}

function decode(word) {
    const obj = {a:2,b:3,c:4,d:5};
    if (!Object.keys(obj).find(key => key === word[0])) {
        return " ";
    } if (word.charAt(0) === Object.keys(obj)[0]) {
        return word.charAt(1);
    } if (word.charAt(0) === Object.keys(obj)[1]) {
        return word.charAt(2);
    } if (word.charAt(0) === Object.keys(obj)[2]) {
        return word.charAt(3);
    } if (word.charAt(0) === Object.keys(obj)[3]) {
        return word.charAt(4);
    }
}

function decodeWords(words) {
    const array = words.split(" ");
    let word = '';
    for (let i = 0; i < array.length; i++) {
        word += decode(array[i]);
    }
    return word;
}

console.log(decodeWords('craft block argon meter bells brown croon droop'));