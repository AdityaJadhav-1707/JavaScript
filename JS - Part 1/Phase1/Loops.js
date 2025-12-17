// for loop
// 1 - 10

for (let i = 1; i < 11; i++) {
    console.log(i);
}

console.log("---------------")

// while loop
// 1 - 20

let i = 1;
while(i<21){
    console.log(i);
    i++;
}

console.log("---------------")

// do while

let a = 12;
do{
    console.log(a);
    i++;
}
while(a<2)

console.log("---------------")

// break

for (let i = 1; i < 11; i++){
    console.log(i);
    if (i === 5) {
        break;
    }
}


console.log("---------------")

// continue

for(i = 1; i < 11; i++){
    if (i === 5){
        continue;
    }
    console.log(i);
}