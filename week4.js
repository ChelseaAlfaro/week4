console.log(`1.  Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93. `)

let ages = [3,9,23,64,2,8,28,93]
//declared a new variable "ages", defined it as an array with square brackets, entered the 
// elements to create an array of the nummers

console.log(`------------
1a.Programmatically subtract the value of the first element in the array from the value in the last element of the array.   
Do not use numbers to reference the last element, find it programmatically.
a   ges[7] – ages[0] is not allowed!`)

let result = ages[ages.length-1] - ages[0]
console.log(result)

// declared a new variable "result". I made the value of "result" equal to the last
// number of the array minus the first number of the array. To pull the last number of the 
// array I referenced the array "ages" then called the specific location of the last number
// of the array using ages.length-1. I used ages[0] to reference the first number in the array
// because 0 is the first index in any array.


console.log(`---------
1b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
`)
ages.push(10)
console.log(ages)
console.log(ages[ages.length-1] - ages[0]) 

// had to use the .push() method to add the number 10 to the end of the array. 

console.log(`---------1c. Use a loop to iterate through the array and calculate the average age.`)
// find the sum of all elements and / ages.length
let sum = 0
for(let i = 0; i < ages.length; i++){
    sum += ages[i]
} 
let avg = sum / ages.length
console.log(avg)

// declared a new variable "sum". Wrote a for loop that started at index 0; ran as long as
// the iteratations were less than the length of the array; and moved down the index by one through
// each iteration. Through each iteration the sum is totaled and then added to the value of the next number.
// created a variable avg, made avg equal to the total sum of the array divided by the length of the array.
                                  


console.log(`--------
2.Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.`)

let names = ['Sam','Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
console.log(names)

console.log(`--------
2a. Use a loop to iterate through the array and calculate the average number of letters per name.`)
let letters = 0
for(let i = 0; i < names.length; i++){
   letters += names[i].length
} 
let avgLetters = letters / names.length
console.log(avgLetters)
// Same process as 1c except I had to find a way to evaluate the length of each element. I used names[i].length to reference the
// length of each element rather than the length of the element itself. It took me a few tries to figure this one out.

console.log(`--------
2b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.`) 

console.log(names.join(' ')) 
// had to use google to find ways to automatically concatenate the elements in the array.

console.log(`---------
3.  How do you access the last element of any array?`)

console.log(names.slice([]-1))
// used google to find this answer

console.log(`---------
4.  How do you access the first element of any array?`)

console.log(names[0])
// I remembered this answer from the video lessons. 

console.log(`----------
5.  Create a new array called nameLengths. Write a loop to iterate over the previously created names array 
and add the length of each name to the nameLengths array.`)

let nameLengths = [];
for(let i = 0; i < names.length; i++){
   nameLengths.push(names[i].length) 
}console.log(nameLengths)

// I was able to get this to run, but had to come back to this problem and change it because the answer I was getting 
// was a string rather than an array which caused me problems in problem 6. I learned I had to push the answer of 
// each iteration into my empty array rather than use +=.

console.log(`----------
6.  Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. `)
 
    let sumOfAll = 0
    for(let i = 0; i < nameLengths.length; i++){
        sumOfAll += nameLengths[i]
}
console.log(sumOfAll)

// I struggled with this one for awhile. I kept getting an answer of 1. Realized that the problem was because nameLengths was a string of 
// numbers rather than an array that my for loop could iterate through. 

console.log(`------ 
7.  Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. 
(i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).`)

let questionSeven = (word, n) => {
    let result = ''
    for(let i = 0; i < n; i++){
        result += word;
    }
    console.log(result)
}

console.log(questionSeven('Chelsea',5))

// Used a fat arrow to create a function that iterates through a for loop and prints my variable "result" after iterating
// through the loop a number of times based on whatever argument is passed through the parameter n. 

console.log(`--------
8.  Write a function that takes two parameters, firstName and lastName,
 and returns a full name.  The full name should be the first and the last name separated by a space.`)

 let fullName = (firstName, lastName) => `${firstName} ${lastName}`
 console.log(fullName('Chelsea', 'Alfaro'))

 // used a fat arrow function and a template literal to concatenate the arugments passed through when the fumction is called.

 console.log(`---------
 9.  Write a function that takes an array of numbers and returns true 
 if the sum of all the numbers in the array is greater than 100.`)

 let numbersFunction = (array) => {
    let sumOfArray = 0
    for(let i = 0; i < array.length; i++ ){
        sumOfArray += array[i]
        if(sumOfArray > 100){
            return true
        }
    } return false
 }

 console.log(numbersFunction([90, 15]))

 // created numbersFunction to take a single parameter. Used a for loop to iterate through the array that is entered as the argument for numbersFunction. 
 // used an if statement to determine whether or not the return should be true or false based on the total of the numbers in the array.

 console.log(`---------
 10.  Write a function that takes an array of numbers and returns the average of all the elements in the array.`)
 let avgElement = (array) => {
    let average = 0
    for(i = 0; i < array.length; i++ ){
        average += array[i]
    } 
    average /= array.length
    console.log(average)
 }
 console.log(avgElement([10, 5, 12, 7]))

 // I was able to use almost the exact same code that I had written in for 2a. This time I used a fat arrow function so that this code could be called 
 // later.

 console.log(`--------
 11.  Write a function that takes two arrays of numbers and returns true if the average of the elements 
 in the first array is greater than the average of the elements in the second array.`)

 let twoArrays = (a, b) => {
    let averageA = 0
    let averageB = 0
    for(let i = 0; i < a.length; i++){
        averageA += a[i] 
    } averageA /= a.length
        for(let i = 0; i < b.length; i++){
            averageB += b[i]
        } averageA /= b.length
            if(averageA > averageB){
                console.log(true)
            }else{console.log(false)}
    }

console.log(twoArrays([12, 4, 9, 7], [8, 3, 5, 1]))

// Created one function that took two parameters. Created two variables so that I could use them in the two for loops I needed to run for each argument 
// The for loops were the same but I used a different variable in each so that after the loops were done running I could compare the two. 

 console.log(`-------
 12.  Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket,
  and returns true if it is hot outside and if moneyInPocket is greater than 10.50.`)

let willBuyDrink = (isHotOutside, moneyInPocket) => {
    if(isHotOutside == true && moneyInPocket > 10.50){
        return true
    } else{
        return false
    }
}

console.log(willBuyDrink(true, 11.50))
console.log(willBuyDrink(false, 9.50))
console.log(willBuyDrink(false, 15)) 
console.log(willBuyDrink(false, 14))

// Had to pass through multiple tests to make sure that it would return the correct answer for each. 
// I had to rewrite my code a couple times because I had properly put together both boolean statements
// and I was getting a true return as long as the first boolean value was true. Realized I had to put them
// both in one set of parenthesis rather than separating them.


console.log(`--------13.  Create a function of your own that solves a problem. 
In comments, write what the function does and why you created it.`)

let canTakeANap = (isTired, hasTime) => {
    if(isTired && hasTime == true){
        console.log("I can take a nap!")
    }else{ 
        console.log("Sad, no nap today")

    }
}

console.log(canTakeANap(true,true))
console.log(canTakeANap(false,true))
console.log(canTakeANap(true, false))

// This functions takes two boolean values as arguments to determine whether or not I can take a nap.
// If both values are equal to true than I can take a nap, otherwise I will get a return of "Sad, no nap today"
// I wrote this code because I was having problems getting consistenly accurate returns in problem 12 and wanted to try 
// writing something similar.
