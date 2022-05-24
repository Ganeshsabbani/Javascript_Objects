// Write a function that takes two arrays (a and b) as arguments
// Create an object that has properties with keys 'a' and corresponding values 'b'
// Return the object

function myFunction(a, b) {
    let obj={}
 a.forEach((key, i) => obj[key] = b[i]);
 return obj
    
 }

 //Authors Solution
 function myFunction(a, b) {
    return a.reduce((acc, cur, i) => ({ ...acc, [cur]: b[i] }), {});
 }

// myFunction(['a','b','c'],[1,2,3])
// Expected
// {a:1,b:2,c:3}