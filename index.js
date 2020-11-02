/*
1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/

const specialSum = (num1, num2)=>{
    if(num1===num2){
        return 3*(num1+num2)
    }
    else{
        return num1+num2
    }
}

/* TEST
console.log(specialSum(4,3))
*/

/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/

const check50 = (num1, num2)=>{
    if(num1 === 50 || num2===50 || num1+num2===50){
        return true
    }
    else{
        return 'Both of two numbers are not equal 50 \nAnd the sum is not equal 50'
    }
}

/* TEST
console.log(check50(50,4))
*/

/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/

const removeLetter = (string, position)=>{
    let arrayOfString = string.split('')
    arrayOfString.splice(position, 1)
    return newString = arrayOfString.join('')
}
/*TEST
console.log(removeLetter('Ciao sono una stringa', 5))
*/

/*
4)
 Create a function to find the largest of three given integers.
*/

const biggest = (num1, num2, num3) =>{
    if(num1 > num2 && num1 > num3){
        return num1 + ' is the biggest'
    }
    else if(num2 > num1 && num2 > num3){
        return num2 + ' is the biggest'
    }
    else if(num3 > num1 && num3 > num1){
        return num3 + ' is the biggest'
    }
}

/*TEST
console.log(biggest(7, 6, 1))
*/

/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/

const checkRange = (num1, num2) =>{
    if(num1 >=40 && num1 <= 60 && num2 >=40 && num2 <= 60 || num1 >=70 && num1 <= 100 && num2 >=70 && num2 <= 100 ){
        return 'Both of numbers are in range'
    }
    else{
        return 'One number or both of two are not in range'
    }
}

/*TEST
console.log(checkRange(71, 59))
*/


/*
6) 
Create a function to create a new string of specified copies (positive number) of a given string.
*/

const copies = (string, times) => {

    let array =[]
    for(let a = 0; a < times; a++){
        array.push(string)
    }
    return array.join(' ')
}
/*TEST
console.log(copies('ciao', 3))
*/

/*
7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/

const city = (string) =>{
    if(string.includes('Los')|| string.includes('New')){
        return string
    }
    else{
        return ''
    }
}
/*
console.log(city('York'))
*/

/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/

const sumArraysEl = (array) =>{
    let sum = 0
    for(let num of array){
        sum= sum+num
    }
    return sum
}
/*
console.log(sumArraysEl([7,5,6]))
*/

/*
9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/

const check1Or3 = (array) =>{
    /*if(array.includes(1) || array.includes(3)){
        return 'Number 1 or 3 are included'
    }
    else{
        return 'Number 1 or 3 are not included'
    }*/
    for(let num of array){
        let numArray = (num.toString()).split('')
        if(numArray.includes('1')||numArray.includes('3')){
            return parseInt(numArray.join(''))
        }
        else{
            return `The array of ${array} not include 1 or 3`
        }
    }
}
/*TEST
console.log(check1Or3([6,7]))
*/

/*11)
Create a function to find the longest string from a given array of strings.
*/

const longestString = (array) =>{
    let long = 0
    let selected = ''
    for(let a=0; a < array.length; a++){
        let stringArray = Array.from(array[a])
        if(long < stringArray.length){
            long = stringArray.length
            selected = stringArray.join('').toString()
        }
    }
    return selected
}

/*TEST
console.log(longestString(['ciao', 'ciaone', 'hi']))
*/

/*
12)
Create a function to find the types of a given angle.
Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    btuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.
    */
/*
const checkAngle = (num1) =>{
    let result = ''
    switch(num1){
        case num1 > 0 && num1 < 90:
            result = `The ${num1}° is an Acute angle`
        break;
        case num1 === 90:
            result = `The ${num1}° is a Right angle`
        break;
        case num1 > 90 && num1 < 180:
            result = `The ${num1}° is a Obtuse angle`
        break;
        case num1 === 180:
            result = `The ${num1}° is a Right angle`
        break;
        default: ;
    }
    return result
}

console.log(checkAngle(70))*/

/*
13)
Create a function to find the index of the greatest element of a given array of integers
*/

const findIndex = (array) =>{
    let index = 0
    let selected = 0
    for(let int of array){
        let arrayInt = Array.from(int.toString())
        if(arrayInt.length > index){
            index = arrayInt.length
            selected = parseInt(arrayInt.join(''))
        }
    }
    return `${selected} is the longest with ${index} digits`
}

/*TEST
console.log(findIndex([13, 456, 77890, 1, 43]))
*/

/*
14)
Create a function to get the largest even number from an array of integers.
*/

const largestEven = (array) =>{
    let selected = 0
    for(let int of array){
        if(int % 2 === 0){
            if(int > selected){
                selected = int
            }
        }
        
    }
    return selected
}

/*
console.log(largestEven([1, 88, 3, 37, 9]))
*/

/*
16)
Create a function to check from two given integers, whether one is positive and another one is negative.*/

const checkPositive = (num1,num2)=>{
    if(num1>0 && num2 >0){
        return `${num1} is positive\n${num2} is positive`
    }
    else if(num1>0 && num2 < 0){
        return `${num1} is positive\n${num2} is negative`
    }
    else if(num1<0 && num2 > 0){
        return `${num1} is negative\n${num2} is positive`
    }
}
/*TEST
console.log(checkPositive(5,8))*/

/*
17)
Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 
*/

const resizeString = (string) =>{
    let arrayString = Array.from(string)
    if(arrayString.length > 3){
        let lower = string.split('').splice(0,3)
        let newLower = lower.join('').toLowerCase()
        let upper = string.split('').splice(3,string.split('').length)
        let newUpper = upper.join('').toUpperCase()
        return newLower+newUpper
    }
    else{
        return string.toUpperCase()
    }
}

/*TEST
console.log(resizeString('TREcento'))
*/

/*
18)
Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.
 */

const the65 = (num1, num2)=>{
    let sum = num1 + num2
    if(sum > 50 && sum < 80){
        return 65
    }
    else{
        return 80
    }
}
/*TEST
console.log(the65(50,2))
*/

/*
19)
Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:
If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34". 
*/

const factorName = (num1)=>{
    let array = []
    let factor = 0
    let name = ''
    for(let b=0; b<num1;b++){
        factor = factor+1
        if(num1%factor===0){
            array.push(factor)
        }
    }
    for(let c = 0; c < array.length; c++){
        if(array[c]===3){
            name = name + 'Diego'
        }
        else if(array[c]===5){
            name =name + 'Riccardo'
        }
        else if(array[c]===7){
            name= name + 'Stefano'
        }
        else{
            name = num1
        }
    }
    return name
}
/*TEST
console.log(factorName(34))
*/

/*
20)
Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC
*/

const getAcronym = (phrase)=>{
    let arrayPhrase = phrase.split(' ')
    let acronym = ''
    for(let word of arrayPhrase){
        word.split('')
        if(word[0]===word[0].toUpperCase()){
            acronym = acronym+word[0]
        }
    }
    return acronym
}

/*TEST
console.log(getAcronym('Hi I Am A String'))
*/

/*ADVANCE------------------------------------------- */

/* 1) MAX CHAR
Given a string, return the character that is most
commonly used in the string.
--- Examples
    maxChar("abcccccccd") === "c"
    maxChar("apple 1231111") === "1"
*/

/*
const getMaxChar = (string) => {
    let arrayString = string.split('')
    let times =[]
    let char=[]
    let prev = []
    char.push(arrayString[0])
    prev = char
    for(let d = 1; d < arrayString.length; d++){
        if(prev.includes(arrayString[d])){
            prev.push(arrayString[d])
        }
        else{
            char[d] = []
            char[d].push(arrayString[d])
        }
    }
    return char
}

console.log(getMaxChar('ciaooooneeeeee'))*/

/* 2) ANAGRAMS
Check to see if two provided strings are anagrams of each other.
One string is an anagram of another if it uses the same characters
in the same quantity. Only consider characters, not spaces
or punctuation.  Consider capital letters to be the same as lower case
--- Examples
  anagrams('rail safety', 'fairy tales') --> True
  anagrams('RAIL! SAFETY!', 'fairy tales') --> True
  anagrams('Hi there', 'Bye there') --> False
*/

/*const getAnagrams = (string1, string2) =>{
}

let string1 ='Hello World'
let string2 ='olleH dlroW'
let array=string1.split(' ')
let array1 = array[0]+array[1]
let array2=string2.split(' ')
let array3 = array2[0]+array2[1]
if(array1.split('').includes(array3.split(''))){
    console.log(true)
}
else{
    console.log(false)
}*/

/* 3) ANAGRAMS 2
Given a word and a list of possible anagrams, select the correct sublist.
--- Examples 
    "listen" and a list of candidates like "enlists" "google" "inlets" "banana" the program should return a list containing "inlets".
*/

/* 4) PALINDROME
Given a string, return true if the string is a palindrome
or false if it is not.  Palindromes are strings that
form the same word if it is reversed. Do include spaces
and punctuation in determining if the string is a palindrome.
--- Examples:
    palindrome("abba") === true
    palindrome("abcdefg") === false
 */

 const checkPalindrome = (string)=>{
     let array1 = string.split('')
     let array2 = array1.reverse()
     let palindrome = array2.join('')
     return string===palindrome
 }

/*TEST
 console.log(checkPalindrome('abba'))
 */

/* 5) REVERSE INT
Given an integer, return an integer that is the reverse
ordering of numbers.
--- Examples
    reverseInt(15) === 51
    reverseInt(981) === 189
    reverseInt(500) === 5
    reverseInt(-15) === -51
    reverseInt(-90) === -9
 */

const reverseInt = (num1)=>{
    if(num1>0){
        let stringNum = num1.toString()
        let arrayString = stringNum.split('')
        let newNum = -(parseInt(arrayString.reverse().join('')))
        return newNum
    }
    else{
        let stringNum = num1.toString()
        let arrayString = stringNum.split('')
        let newNum = (parseInt(arrayString.reverse().join('')))
        return newNum

    }
}
/*TEST
console.log(reverseInt(-289))
*/

/* 6) STEPS
Write a function that accepts a positive number N.
The function should console log a step shape
with N levels using the # character.  Make sure the
step has spaces on the right hand side!
--- Examples
    steps(2)
        '# '
        '##'
    steps(3)
        '#  '
        '## '
        '###'
    steps(4)
        '#   '
        '##  '
        '### '
        '####' */
/*
const steps = (num1) =>{
    let shape = '#'
    let space = ' '
    let counter = 0
    for(let i = 1; i <= num1; i++){
        console.log(3*(shape))
        counter = counter+1
    }
}
console.log(steps(2))*/

/* 7) REVERSE STRING
Given a string, return a new string with the reversed
order of characters
--- Examples
    reverse('apple') === 'leppa'
    reverse('hello') === 'olleh'
    reverse('Greetings!') === '!sgniteerG'
 */

const reverseString = (string)=>{
    let arrayString = string.split('')
    return(arrayString.reverse().join(''))
}
/*TEST
console.log(reverseString('Ciao!'))
*/

/* 8) CHUNK
Given an array and chunk size, divide the array into many subarrays
where each subarray is of length size
--- Examples
    chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
    chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
    chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
    chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
    chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
*/

const chunk = (array, num1)=>{
    let array1 = []
    let times = Math.floor(array.length/num1)
    let rest = array.length%num1
    
    for(let x = 0; x<times; x++){
        array1[x]=[]
        array1[x].push(array.splice(0, num1))
    }
    if(rest!==0){
        array1.push(array)
    }
    return array1
}
/*TEST
console.log(chunk([1,2,3,4,5],3))
*/