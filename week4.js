console.log(`1.  Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93. `)

let ages = [3,9,23,64,2,8,28,93]


console.log(`------------
1a.Programmatically subtract the value of the first element in the array from the value in the last element of the array.   
Do not use numbers to reference the last element, find it programmatically.
a   ges[7] – ages[0] is not allowed!`)

let result = ages[ages.length-1] - ages[0]
console.log(result)


console.log(`---------
1b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
`)
ages.push(10)
console.log(ages)
console.log(ages[ages.length-1] - ages[0]) //How could I write this differently? If I log result again it will still print 90

console.log(`---------1c. Use a loop to iterate through the array and calculate the average age.`)
// find the sum of all elements and / ages.length
let sum = 0
for(let i = 0; i < ages.length; i++){
    sum += ages[i]
} 
let avg = sum / ages.length
console.log(avg)
                                  


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

console.log(`--------
2b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.`) 

console.log(names.join(' ')) // is this a loop? If it's not, why would I use one when I could just use this method?

console.log(`---------
3.  How do you access the last element of any array?`)

console.log(names.slice([]-1))


console.log(`---------
4.  How do you access the first element of any array?`)

console.log(names[0])

console.log(`----------
5.  Create a new array called nameLengths. Write a loop to iterate over the previously created names array 
and add the length of each name to the nameLengths array.`)

let nameLengths = [];
for(let i = 0; i < names.length; i++){
   nameLengths.push(names[i].length) 
}console.log(nameLengths)

console.log(`----------
6.  Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. `)
 
    let sumOfAll = 0
    for(let i = 0; i < nameLengths.length; i++){
        sumOfAll += nameLengths[i]
}
console.log(sumOfAll)


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

console.log(`--------
8.  Write a function that takes two parameters, firstName and lastName,
 and returns a full name.  The full name should be the first and the last name separated by a space.`)

 let fullName = (firstName, lastName) => `${firstName} ${lastName}`
 console.log(fullName('Chelsea', 'Alfaro'))

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
console.log(willBuyDrink(false, 15)) // why is this happening when I'm using the && operand
console.log(willBuyDrink(false, 14))


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

