//Function #1: Array Slice

var foods = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll'];

var modifiedFood = foods.slice(1,4);

console.log(modifiedFood);

// Function #2: Array Splice

var foods = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll'];
foods.splice(2,0,"noodles","icecream");
var modifiedFood = foods;
console.log (modifiedFood);

//Function #3: Filter

var numberArray = [12,324,213,4,2,3,45,4234];

var evenNumbers = numberArray.filter(function isEven(numberArray){
    if(numberArray%2===0){
        return true
    }    
});
console.log(evenNumbers);

var newArray = numberArray.filter(function isPrime(numberArray){
    if(numberArray === 1){
        return false;
    }
    else{
    for (var i = 2; i <= Math.sqrt(numberArray); i++) {           
        if (numberArray % i === 0)   { 
            return false;            
        }        
    }
    return true;     
        }
});
console.log(newArray);

//Function #4: Reject

var numberArray = [12,324,213,4,2,3,45,4234];

function reject(number_Array) {
    var newArray = number_Array.filter(function non_prime_check(number_Array){
        if(number_Array === 1){
            return true;
        }
        else{
        for (var i = 2; i <= Math.sqrt(number_Array); i++) {           
            if (number_Array % i === 0)   { 
                return true;            
            }        
        }
        return false;     
            }
    });
    return newArray;
}
    var not_prime = reject(numberArray,function nonPrime(number){
        return number;
    });
    console.log(not_prime);


// var newArray = _.reject(numberArray, function nonPrime(numberArray){
//     if(numberArray === 2){
//         return true;
//     }
//     else{
//     for (var i = 2; i <= Math.sqrt(numberArray); i++) {           
//         if (numberArray % i === 0)   { 
//             return true;            
//         }        
//     }
//         return false;     
//        }

// });

console.log(newArray);

//Function #5: Lambda

var numberArray = [12,324,213,4,2,3,45,4234];
var evenNumbers = numberArray.filter(numberArray => numberArray%2===0)
     
console.log(evenNumbers);

//Function #6: Map

var myArray = [11, 34, 20, 5, 53, 16];
var newArray = myArray.map(function findSquareOfNumbers(myArray){
    return myArray*myArray;
});

 console.log(newArray);

//Function #7: Reduce

var myArray = [2, 3, 5, 10]
var newArray = myArray.reduce(function multiply(myArray,initial){
    return initial*myArray; 
},1);

console.log(newArray);

var myArray = [11, 34, 20, 5, 53, 16];
var newArray = myArray.reduce(function findSquareOfNumbers(myArray,item,result){
     result =item*item;
     myArray.push(result);
     return myArray;
},[]);
console.log(newArray);

