// let a = 11
// let b = 10
// let c = 8
// let d = 5

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


//  if(a > b){
//      if(a > c){
//          if(a > d){
//              console.log("A is smaller A1!")
//          }else{
//              console.log("D is smaller D1!")
//          }
//      }else if(c > d){
//          console.log("C is smaller C1!")
//      }else{
//          console.log("D is smaller D2!")
//      }
//  }else if(b > c){
//      if(b > d){
//          console.log("B is smaller B1!")
//      }else{
//          console.log("D is smaller D3!")
//      }
//  }else if(c > d){
//      console.log("C is smaller C2!")
//  }else{
//      console.log("D is smaller D4!")
//  }


// wap in js to check if age of driver is valid or not
// let age = Number(prompt("enter the age"))
// if(age >=18){
//     console.log("You can drive now")
// }else{
//     console.log("You can't drive")
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

//  let numbe = 1

// while(numbe <= 1000){
//     // if(number % 2 == 0){
//     //     console.log(number)
//     // }
//     console.log(numbe)
//     // increment by 1
//     numbe+
// }

// print 1 to 1000 even number print

// it is even number

// let number=2

// while(number <= 1000){
//     if(number % 2==0){   
//     console.log(number)}

//     number++
// }

// it is odd number 

// let number = 1

// while(number <= 1000){
// if (number % 2!==0){
//     console.log(number)
// }
//  number++
// }

// // wap to check years for leap year or not from 0 - now(2024)

// // function checkYear(year) {

    // let answer = ""

    // if ((year % 100 !== 0) && (year % 4 == 0) || (year % 400 == 0)) {
    //     answer = year + " is a leap year !"
    // } else {
    //     answer = year + " is not a leap year !"
    // }

//     return answer

// }

// make it reverse i.e. 2024 - 0

// let inputYear = 0

// while(inputYear >= 2024){
//     console.log(checkYear(inputYear))
//     inputYear++
// }


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


// let leapYearCounter = (start, end) => {

//     let startingYear = start
//     let counter = 0
//     let notCounter = 0

//     while (start <= end) {
//         (start % 100 !== 0) && (start % 4 == 0) || (start % 400 == 0) ? counter++ : notCounter++
//         start++
//     }

    // console.log("from " + startingYear + " to " + end + " total leap years are : " + counter + " and comman years are : " + notCounter)
    // this is a template litral es6 module
    // console.log(`from ${startingYear} to ${end} total leap years are : ${counter} and comman years are : ${notCounter}`)

    // '' "" ``

// }

// leapYearCounter(1000, 2024)
// // leapYearCounter(2000,2024)

// let number = 1000

// while (number >= 0) {
//     console.log(number)
//     number--
// }

// //1. make it reverse i.e. 2024 - 0
// function reverseYear(year) {

//     let output = ""

//     if ((year % 100 !== 0) && (year % 4 == 0) || (year % 400 == 0)) {
//         output = year + " is a leap year !"
//     } else {
//         output = year + " is not a leap year !"
//     }

//     return output

// }


// let leapyear= 2024
// while(leapyear >= 0){
//     console.log(reverseYear(leapyear))
//     leapyear--
// }

// // wap in js to calculate factorial of any number



//  let number = 10
//  let orginalNumber = number
//  let factorial = 1 

//  while(number != 0){
//      factorial = factorial * number
//      number --
//  }

// // console.log("factorial of "+orginalNumber+ " is: " + factorial)


//   let number = 5
//   let orginalNumber = number
//   let factorial = 1 

//   while(number != 0){
//       factorial = factorial * number
//       number --
//   }

// console.log("factorial of "+orginalNumber+ " is: " + factorial)

// // function calculateFactorial(number) {
// //     let orginalNumber = number
// //     let factorial = 1

// //     while (number != 0) {
// //         factorial = factorial * number
// //         number--
// //     }
// //     console.log("factorial of " + orginalNumber + " is: " + factorial)
// // }

// //2. wap in js to check a number is palindrome or not make a function for it 

// let number = samenumber = 141
// let reverse = 0
// let d = 0
// while(number != 0){
//     d = number % 10
//     reverse = reverse * 10 + d
//     number=parseInt(number/10)
// }
// console.log(reverse)

// // calculateFactorial(5)

// // reverse of number and string

// let number = originalNumber = 1201

//  let reverse = 0

// let dse = 0

// while (number != 0) {

//     d = number % 10

//     reverse = reverse * 10 + d

//     number = parseInt(number / 10)


// }

// console.log(reverse)

// // wap in js to check a number is palindrome or not make a function for it 

// template letral
// es6 module

// let string="Mrunal"

// let length = string.length 
// revstr=""

// while(length!=0){
//     revstr=revstr+string[length-1]
//     length--
// }
// console.log(revstr)



// Function to calculate the length of a string manually
function calculateStringLength(str){
    let length = 0;
    // Iterate over each character until the null terminator is found
    while (str[length] != undefined) {
        length++;
    }
    return length;
}
console.log(calculateStringLength("dfjbjsfnjksnjkf"))



