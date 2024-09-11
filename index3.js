// condition statement
// if , if else, if elesif, nasted if, switch case, ternary oprator

// wap in js to get greater of 4 numbers
let a = 11
let b = 10
let c = 8
let d = 5

//  if(a < b){
//      if(a < c){
//          if(a < d){
//              console.log("A is greater A1!")
//          }else{
//              console.log("D is greater D1!")
//          }
//      }else if(c < d){
//          console.log("C is greater C1!")
//      }else{
//          console.log("D is greater D2!")
//      }
//  }else if(b < c){
//      if(b < d){
//          console.log("B is greater B1!")
//      }else{
//          console.log("D is greater D3!")
//      }
//  }else if(c < d){
//      console.log("C is greater C2!")
//  }else{
//      console.log("D is greater D4!")
//  }

// wap in js to find odd/even numbers

// let number = Number(prompt("Enter me"))
// 4
// if (number % 2 == 0) {
//     console.log(number + " is a even number !")
// }else{
//     console.log(number + " is a odd number !")
// }

// wap in js to check if age of driver is valid or not
let age = Number(prompt("enter the age"))
if(age >=18){
    console.log("You can drive now")
}else{
    console.log("You can't drive")
}

// doing comparision with logics oprators
// && AND , || OR

// if((a > b) && (a > c) && (a > d)){
//     console.log("A is greater of all !")
// }else if( (b > c) && (b > d) ){
//     console.log("B is greater of all !")
// }else if(c > d){
//     console.log("C is greater of all !")
// }else{
//     console.log("D is greater of all !")
// }

// wap in js to check entred year is a leap year or not !
// comes in every 4 years, will not occur in every 100 years, will repeat in every 400 years

// let year = Number(prompt("enter year"))

// if (year % 100 !== 0) {
//     if (year % 4 == 0) {
//         console.log(year + " is a leap year !")
//     } else {
//         console.log(year + " is not a leap year !")
//     }
// } else if (year % 400 == 0) {
//     console.log(year + " is a leap year !")
// } else {
//     console.log(year + " is not a leap year !")
// }

// if ((year % 100 !== 0) && (year % 4 == 0) || (year % 400 == 0)) {
//     console.log(year + " is a leap year !")
// } else {
//     console.log(year + " is not a leap year !")
// }

// ternary oprator

// condition ? true code : false code

// let number = 62

// number % 2 == 0 ? console.log(number + " is a even number !") : console.log(number + " is odd number !")  

// a > b ? 
//     a > c ? 
//         a > d ? 
//             console.log("A is greater of all !") 
//             : console.log("D is greater of all !") 
//         :  c > d ?
//              console.log("C is greater of all") 
//                  : console.log("D is greater of all")
//     : b > c ?
//             b > d ? console.log("B is greater of all") 
//                   : console.log(":C is greater of all")
//             : c > d ? 
//                     console.log("C is greater of all;") 
//                     : console.log("D is greater of all !") 


// a > b ? a > c ? a > d ? console.log("A is greater of all !") : console.log("D is greater of all !") :  c > d ? console.log("C is greater of all") : console.log("D is greater of all") : b > c ? b > d ? console.log("B is greater of all") : console.log(":C is greater of all") : c > d ? console.log("C is greater of all;") : console.log("D is greater of all !") 

// switch case | to make a menu driven program 

// let choice = "a"

// switch(choice){
//     case 'a' : console.log("you choosed case a !")
//     break;
//     case 'e' : console.log("you choosed case e !")
//     break;
//     case 'b' : console.log("you choosed case b !")
//     break;
//     case 'c' : console.log("you choosed case c !")
//     break;
//     case 'd' : console.log("you choosed case d !")
//     break;
//     case 'f' : console.log("you choosed case f !")
//     break;
//     default : console.log("invalid choice please select between a to f")
// }

// wap in js to make a switch case for finding out vowels and consolants

// let choice="i"

// switch(choice){

//     case 'a' : console.log("you choosed vowels a !")
//     break;
//     case 'e' : console.log("you choosed vowels e !")
//     break;
//     case 'i' : console.log("you choosed vowels i !")
//     break;
//     case 'o' : console.log("you choosed vowels o !")
//     break;
//     case 'u' : console.log("you choosed vowels u !")
//     break;
//     default : console.log("invalid choice please select between a to i")
// }

// Date 09-09-24


// // while, do-while ,for

// // while loop

// // syntax
// // while(condition){
// //     // while condition is true do this
// //     // updation/change in condition
// // }

// // wap in js to print 1 - 1000 even/odd numbers

// // let number = 1

// // while(number <= 1500){
// //     // if(number % 2 == 0){
// //     //     console.log(number)
// //     // }
// //     console.log(number)
// //     // increment by 1
// //     number++
// // }

// // wap to check years for leap year or not from 0 - now(2024)

// // function checkYear(year) {

// //     let answer = ""

// //     if ((year % 100 !== 0) && (year % 4 == 0) || (year % 400 == 0)) {
// //         answer = year + " is a leap year !"
// //     } else {
// //         answer = year + " is not a leap year !"
// //     }

// //     return answer

// // }

// // make it reverse i.e. 2024 - 0

// // let inputYear = 0

// // while(inputYear <= 2024){
// //     console.log(checkYear(inputYear))
// //     inputYear++
// // }


// // wap to count leap year from 0 - 2024

// // let year = 0    
// // let counter = 0
// // let notCounter = 0

// // while (year <= 2024) {
// //     if ((year % 100 !== 0) && (year % 4 == 0) || (year % 400 == 0)) {
// //        counter++
// //     }else{
// //         notCounter++
// //     }
// //     year++
// // }

// // console.log("from 0 to 2024 total leap years are : "+ counter + " and comman years are : " + notCounter)


// // let year = 0    
// // let counter = 0
// // let notCounter = 0

// // while (year <= 2024) {
// //     (year % 100 !== 0) && (year % 4 == 0) || (year % 400 == 0) ? counter++ : notCounter++
// //     year++
// // }

// // console.log("from 0 to 2024 total leap years are : "+ counter + " and comman years are : " + notCounter)


let leapYearCounter = (start, end) => {

    let startingYear = start
    let counter = 0
    let notCounter = 0

    while (start <= end) {
        (start % 100 !== 0) && (start % 4 == 0) || (start % 400 == 0) ? counter++ : notCounter++
        start++
    }

    // console.log("from " + startingYear + " to " + end + " total leap years are : " + counter + " and comman years are : " + notCounter)
    // this is a template litral es6 module
    console.log(`from ${startingYear} to ${end} total leap years are : ${counter} and comman years are : ${notCounter}`)

    // '' "" ``

}

leapYearCounter(1000, 2024)
// // leapYearCounter(2000,2024)

// // let number = 1000

// // while (number >= 0) {
// //     console.log(number)
// //     number--
// // }

// // wap in js to calculate factorial of any number

// // 5! = 5 * 4 * 3 * 2 * 1 = 120

// // let number = 5
// // let orginalNumber = number
// // let factorial = 1 

// // while(number != 0){
// //     factorial = factorial * number
// //     number --
// // }

// // console.log("factorial of "+orginalNumber+ " is: " + factorial)

// // function calculateFactorial(number) {
// //     let orginalNumber = number
// //     let factorial = 1

// //     while (number != 0) {
// //         factorial = factorial * number
// //         number--
// //     }
// //     console.log("factorial of " + orginalNumber + " is: " + factorial)
// // }

// // calculateFactorial(5)

// // reverse of number and string

// let number = originalNumber = 1201

// let reverse = 0

// let d = 0

// while (number != 0) {

//     d = number % 10

//     reverse = reverse * 10 + d

//     number = parseInt(number / 10)
//     // this will get as a float/double we have to reduce the decimal by type casting it into a integer

// }

// console.log(reverse)

// // wap in js to check a number is palindrome or not make a function for it 

// template letral
// es6 module
