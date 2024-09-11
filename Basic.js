
// variables & data types 

// variable: a empty box which may have some name where data can be stored and called.

// ; for termination of a line or statement

// syntax for variable

// scope variable_name assignment-oprator data/value(optional);

// public (var), protected (let, const)
// rules for naming a variable
// the has be unique, no special char(!@#$%^&*),no space in name (first name) (first_name), name can be alpha-numeric (name123) but cannot start with a number name_1(right), 1name(wrong)   
// assignment oprator , = , += , -= , /= , %= , *=

// write a opration adding 2 numbers and store the total in number1

// value = number1 + number2

// number1 += number2
// number1 -= number2
// number1 /= number2
// number1 %= number2
// number1 *= number2

// to write value/data we have some data types
// numbers (integers(1,2,3,4,5,...)and floats(1.1,1.2,1.3,1.4,......)), 
// string (group for charchters) we write string in -> " some string "
// boolean (true/false)
// NaN, Null, Undefined

// let box_1 = 1234
// let box_2 = "this is a string"
// let box_3 = true
// let box_4 = false
// let box_5 = 10.5 

// expersion and statement

// oprators in js

// 1. airthamatic oprators + , - , / , * , %
// increement and decreement oprators ++ , --
// 2. assignment oprators = , +=,-=,/=,%=,*=
// 3. conditional(comparision oprators) oprators < , > , <= , >=, == , === , != 
// 4. logical oprators && (and), ||(or)
// extra oprators, .

// functions, small block of code that can be called again and again as needed !

// built in function , user defined function

// built in function input & output function
// alert(), console.log() - output function

// console.log("this is some message")
// console.log("this is some message")
// console.log("this is some message")
// console.log("this is some message")
// console.log("this is some message")
// console.log("this is some message")
// console.log("this is some message")
// console.log("this is some message")
// console.log("this is some message")

// alert("this is also a message")

// input fuinction in js

// let name = prompt("enter some data !")

// console.log("data from prompt is : ")
// console.log(name)

// function_name("something") , 

// typeof() this function returns the datatype of passed args 

// let data = Number("1a")
// console.log(typeof(data))
// console.log(data)

// let num1=20
// let num2=50
// let sum = num1 + num2
// console.log("the sum of" + num1+"and"+num2+"is"+(num1+num2))
// console.log(num1+num2)

// type casting

// changing a data type of data to other data type
// example casting a number to a string or vice-versa
// number(int, float), string, boolean

// number ->  string, number -> boolean

// string -> number, string -> boolean

// boolean -> number , boolean -> string


// prompt 


//   let answer = Number(prompt("Enter the number 1")) + Number(prompt("Enter the number 2"))
//   console.log(answer)
  
// let a=Number(prompt("enter a"))
// let b=Number(prompt("enter b"))
// let c=a-b
// console.log("the sub" + a + "and" +b +"is"+ c)

  
// let a=Number(prompt("enter a"))
// let b=Number(prompt("enter b"))
// let c=a+b
// console.log("the add" + a + "and" +b +"is"+ c)

  
//  let a=Number(prompt("enter a"))
//  let b=Number(prompt("enter b"))
//  let c=a/b
//  console.log("the divide" + a + "and" +b +"is"+ c)
``
  
// let a=Number(prompt("enter a"))
// let b=Number(prompt("enter b"))
// let c=a*b
// console.log("the multiplication" + a + "and" +b +"is"+ c)

// Concatination

// let Firstname="Mrunal"
// let Lastname="Ghotekar"

// console.log(Firstname+Lastname)

// let Firstname="Mrunal"
// let Lastname="ghotekar"
// console.log(Firstname+Lastname)

// type casting 

// type casting
// changing a data type of data to other data type
// example casting a number to a string or vice-versa
// number(int, float), string, boolean

// number ->  string, number -> boolean

// string -> number, string -> boolean

// boolean -> number , boolean -> string

// 1) number -> string

// let data = 56485156
// console.log(" data type before "+typeof(data))
// data = String(data)
// data = data.toString()
// 
//  console.log(" data type after "+typeof(data))

// 2) number to boolean

 console.log(" data type before "+typeof(data))

 data = Boolean(data)
 console.log(data)

// if value if greater than 0 then true else false

 console.log(" data type after "+typeof(data))

// 3) string -> number

// let data = ""

// console.log(" data type before "+typeof(data))

// // // if a string is alpha numeric then the value will become NaN.
// // data = Number(data)

// // console.log(data)

// // console.log(" data type after "+typeof(data))

// // 4) string -> boolean
 
// // if empty string then false, if the string has only false then false and if it has true then true

// data = Boolean(data)
// console.log(data)

// console.log(" data type after "+typeof(data))


// 5) Boolean -> number

// let data = true

// console.log(" data type before "+typeof(data))

// data = Number(data)

// // if boolean has true then number will be 1 else 0

// console.log(data)

// console.log(" data type after "+typeof(data))

// 6) boolean -> string

// let data = false
// console.log(" data type before "+typeof(data))
// data = String(data)

// data = data.toString()
// if boolean has true then string will be true else false

// console.log(data)
// console.log(" data type after "+typeof(data))

// let userInput = Number(prompt("enter number"))
// console.log(typeof(userInput))
// console.log(userInput)

// Date 30-8-24

// Function

// Type of function

// 1. No argument-No return 
// 2. Argument-No return 
// 3. Argument - return 
// 4. No return- argument 


// Arrow Function

// scope function_name=(arg)=>{
    // function body 
    // return statement
// }

// let dosomething = (name)=>{
    // console.log("Hello!"+name)
// }
// dosomething("Mrunal")
// 
// function redmi (name){
    // console.log("Hello!"+name+"how are you")
// }
//  redmi("MrunalGhotekar")

// function 

// 1. No argument-No return 

// function data(){
    // console.log("This is Function !")
    // console.log("This is no arg and no return function")
// }
// data()

// 2. Argument-No return 

// function data(num1,num2){
    // console.log(num1+num2)
// }
// data(20,60)

// Date 31-08-24

// * String manupulation

// let data = "some string"

// console.log(data.length)
// console.log(data.toUpperCase())
// console.log(data.toLowerCase())

// * Trim Function

// Trim () it remove leading and trailing spaces from the string
 
// let value ="some string"

//  input = input .trim()
//  console.log(input.length)

// the charc. of string has indexes
//  [0] [1] [2] [3] [4] [5]

// string.chartAt(index no.) returns the char at passed index

// console.log(input.charAt(0))
// console.log(input.charAt(1))
// console.log(input.charAt(2))
// console.log(input.charAt(3))
// console.log(input.charAt(4))
// console.log(input.charAt(5))
// console.log(input.charAt(6))
// console.log(input.charAt(7))
// console.log(input.charAt(8))
// console.log(input.charAt(9))
// console.log(input.charAt(10))
// console.log(input.charAt(11))

// string.indexOf("char") return the index of char
// return first index of a char in string
// console.log(input.indexOf("e"))
// console.log(input.lastIndexOf("e"))

// string.match() is to compare 2 strings return boolean
// console.log(input.match("string"))
// console.log(input.localeCompare("some string"))

// string.replace() first find the char to replace 
// input = input.replace("s","W")
// input = input.replaceAll("s","W")
// console.log(input)

// Do divide a string we have 2 methods Slice,SubString

// * String.slice (Starting index , Ending index)

    //  let input ="my name is mrunal"
    //  let value = input.slice(0,-5)
    //  console.log(value)
    //  console.log(input)


// * String.substring (Starting index , Ending index)

    //  let mrunal ="my name is mrunal"
    //  let my = mrunal.substring(0,-9)
    //  console.log(my)
    //  console.log(mrunal)

// let str = "Hello, World!";
// let result = str.substring(7, 12);  // Extracts "World"
// console.log(result);  // Output: "World"
