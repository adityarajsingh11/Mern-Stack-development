// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

// by using for loop
// for(let i = 1;i<=5;i++){
//     console.log(i);
// }
// for(let i = 5;i>=0;i--){
//     console.log(i);
// }

// practice question odd number
// for(let i =1;i<=15;i=i+2){
//     console.log(i);
// }

// practice question even number
// for(let i = 2; i<=15;i = i+2){
//     console.log(i);
// }

// print multiplication table of 5
// for(let i= 5;i<=50;i= i+5){
//     console.log(i);
// }

// multiplication of any number 
// let n = prompt("Enter the number:");
// n = parseInt(n);
// for(let i = n;i<=n*10;i = i+n){
//     console.log(i);
// }

// nested for loop
// for(let i =1;i<=4;i++){
//     console.log(`outer loop ${i}`);
//     for(let j =1;j<=4;j++){
//         console.log(j);
//     }
// }

// while loop 
// let i =1;
// while(i<10){
//     console.log(i);
//     i++;
// }

// favourite movie
// let favmovie = "Avatar";
// let guess = prompt("Guess the movie:");
// while((guess != favmovie) && (guess != "Quit")){
    
//     guess = prompt("Wrong guess! Please try again")
// }
// if(guess == favmovie){
//     console.log("congrats");
// }
// else{
//     console.log("You Quit");
// }

// break keyword
// let i =1;
// while(i<=10){
//     if(i==5){
//         break;
//     }
//     console.log(i);
//     i++;
// }

// loop with array  data structure 
// let fruits = ["apple","mango","guava","banana","pineapple","papaya"];
// for(let i =0;i< fruits.length;i++){
//     console.log(i, fruits[i]);
// }

// nested with array
// let heroes = [
//     ["ironman","spiderman","thor"],
//     ["batman","wonderwomen","flash","superman"]
// ]
// for(let i = 0;i<heroes.length;i++){
//     console.log(i,heroes[i]);
//     for(let j =0;j<heroes[i].length;j++){
//         console.log(j,heroes[i][j]);
//     }
// }

// for of loop
// let fruits = ["apple","mango","guava","banana","pineapple","papaya"];
// for(fruit of fruits){
//     console.log(fruit);
// }

// let string = "apnacollege";
// for(char of string){
//     console.log(char);
// }

// nested for of loop
let heroes = [
        ["ironman","spiderman","thor"],
        ["batman","wonderwomen","flash","superman"]
    ];
for(list of heroes){
    for(hero of list){
        console.log(hero);
    }
}    