const loaf={'flour':300,'water':210,'hydration': function (){return (loaf.water/loaf.flour)*100}};

console.log(loaf.flour,loaf.water);

console.log(loaf.hydration());

let obj = {foo:'hi', bar:'bye',fum:24,quux:true,spam:'wrong'};
for (let key in obj) {
    console.log(`${key} ${obj[key]}`);
}

const meals= ['breakfast','second breakfast','elvenses','lunch','afternoon tea','dinner','supper'];
console.log(meals[5]);