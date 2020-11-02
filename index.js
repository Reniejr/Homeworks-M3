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

