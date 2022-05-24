// Write a function that takes an object as argument
// It should return an object with all original object properties
// except for the property with key 'b'


function myFunction(obj) {
   
    delete obj.b
   return obj
 }



 //Auhtors Solution
 function myFunction(obj) {
    const { b, ...rest } = obj;
    return rest;
  }

// myFunction({ a: 1, b: 7, c: 3 })
// Expected
// { a: 1, c: 3 }