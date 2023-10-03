console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

// for (let i = 1; i <= 100; i++){
//     if (i % 2 != 0){
//         console.log(i);
//     }
// }

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

// for (let i = 1; i <= 100; i++){
//     if (i % 3 == 0 && i % 5 == 0){
//         console.log("FIZZBUZZ")
//     }
//     else if (i % 3 == 0){
//         console.log("FIZZ")
//     }
//     else if (i % 5 == 0){
//         console.log("BUZZ")
//     }
//     else{
//         console.log(i);
//     }
// }

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n")

// let num = 1;
// while (num <= 100){
//     if (num % 2 != 0){
//         console.log(num);
        
//     }
//     num++;

// let num = 1;
// do{
//     if (num % 2 != 0){
//         console.log(num);
//     }
//     num ++;
// } while (num <= 100);
    
// }
// let num = 1;
// while (num <= 100){
//     let output = "";

//     if (num % 3 == 0){
//         output += "FIZZ";
//     }
//     if (num % 5 == 0){
//         output += "BUZZ";
//     }
//     console.log(`${num} ${output}`);
//     num++;
// }

// let num = 1;
// do {
//     let output = "";

//     if (num % 3 == 0){
//         output += "FIZZ";
//     }
//     if (num % 5 == 0){
//         output += "BUZZ";
//     }
//     console.log(`${num} ${output}`);
//     num++;
// } while (num <= 100);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n")

// let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
// let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500


// for (let i = 1; i <= n; i++){
//     if (i == value){
//         console.log(`Found ${value}!`);
//         break;
//     } 
//     if (i == n){
//         console.log(`Did not find ${value}..`);  
//     }      
// }



// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n")

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let end = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);


for (let i = start; i <= end; i++ ){
    if (i % fizzDivisor == 0 && i % buzzDivisor == 0){
        console.log("FIZZBUZZ");
    }
    else if (i % fizzDivisor == 0){
        console.log("FIZZ");
    }
    else if (i % buzzDivisor == 0){
        console.log("BUZZ")
    }
    else{
        console.log(i);
    }
}
