// Write a function that takes an object (a) as argument
// Return the sum of all object values

function myFunction(a) {
    let result=[];
    result=Object.values(a);
    
    let sum=0
    for(let ele in result){
        sum=sum+result[ele]
    
    }return sum
   
}


//Authors Solution
function myFunction(a) {
    return Object.values(a).reduce((sum, cur) => sum + cur, 0);
 }





// myFunction({a:1,b:2,c:3})
// Expected
// 6