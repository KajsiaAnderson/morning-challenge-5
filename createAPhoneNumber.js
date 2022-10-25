// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example:
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
// Don’t forget the space after the closing parentheses!

function createPhoneNumber(nums){
    nums = nums.toString()
    // console.log(nums)
    let onlyNums = nums.replace(/\D/g, '')
    // console.log(onlyNums)
    // \D is not a digit
   let match = onlyNums.match(/^(\d{3})(\d{3})(\d{4})$/)
   //^ and $ means the start/end of the string
     if(match){
     return '(' + match[1] + ') ' + match[2] + '-' + match[3]
     }
     return null
}
console.log (createPhoneNumber([1,2,3,4,5,6,7,8,9,0]))



// Jared's solution:
function createPhone(a){
    return '(' + a[0] + a[1] + a[2] + ') ' + a[3] + a[4] + a[5] + '-' + a[6] + a[7] + a[8] + a[9]
}

console.log(createPhone([1,2,3,4,5,6,7,8,9,0]))