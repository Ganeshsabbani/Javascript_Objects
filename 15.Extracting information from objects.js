// Write a function that takes an object as argument containing properties with personal information
// Extract firstName, lastName, size, and weight if available
// If size or weight is given transform the value to a string
// Attach the unit cm to the size
// Attach the unit kg to the weight
// Return a new object with all available properties that we are interested in

function myFunction(obj) {
    const { fn, ln, size, weight, ...rest } = obj;
      const newObj = { fn, ln };
      if (size) newObj.size = `${size}cm`;
      if (weight) newObj.weight = `${weight}kg`;
      return newObj;
    
 }


 //Authors Solution
 function myFunction(obj) {
    return {
      fn: obj.fn,
      ln: obj.ln,
      ...(obj.size && { size: `${obj.size}cm` }),
      ...(obj.weight && { weight: `${obj.weight}kg` }),
    };
  }





// myFunction({fn: 'Lisa', ln: 'Müller', age: 17, size: 175, weight: 67})
// Expected
// {fn: 'Lisa', ln: 'Müller', size: '175cm', weight: '67kg'}
// myFunction({fn: 'Martin', ln: 'Harper', age: 26, email: 'martin.harper@test.de', weight: 102})
// Expected
// {fn: 'Martin', ln: 'Harper', weight: '102kg'}
// myFunction({fn: 'Andrew', ln: 'Harper', age: 81, size: 175, weight: 71})
// Expected
// {fn: 'Andrew', ln: 'Harper', size: '175cm', weight: '71kg'}
// myFunction({fn: 'Matthew', ln: 'Müller', age: 19, email: 'matthew@mueller.de'})
// Expected
// {fn: 'Matthew', ln: 'Müller'}