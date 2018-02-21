const loaf={'flour':300,'water':210,'hydration': function (){return (loaf.water/loaf.flour)*100}};

console.log(loaf.flour,loaf.water);

console.log(loaf.hydration());

let obj = {foo:'hi', bar:'bye',fum:24,quux:true,spam:'wrong'};
for (let key in obj) {
    console.log(`${key} ${obj[key]}`);
}

const meals= ['breakfast','second breakfast','elvenses','lunch','afternoon tea','dinner','supper'];
console.log(meals[5]);

let obj1 = {name:'Jacob',jobTitle:'CSR'};
let obj2 = {name:'Bob',jobTitle:'Manager'};
let obj3 = {name:'Spongebob',jobTitle:'Frycook'};

let arr1 = [obj1, obj2, obj3];

for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i].name +": "+ arr1[i].jobTitle);
}