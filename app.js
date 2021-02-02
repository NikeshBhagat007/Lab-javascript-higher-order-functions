//Function #1: Array Slice
//var modifiedFood = ["butter","chicken","Aloo","Peanuts","Burger"]
const modifiedFood = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];

slice(modifiedFood);

function slice(modifiedFood)
{  
    //console.log(modifiedFood.slice(1,4));
    return modifiedFood.slice(1,2);  // slice returns value at index 1 and from that next 2 values
}



//Function #2: Array Splice
//const foods = [pizza, burger, fingerShips, donuts, springRoll];

const foods = ["pizza", "burger", "fingerShips", "donuts", "springRoll"];
splice()
function splice()
{  
    foods.splice(2,0,"noodles","icecream");
    console.log(foods);
    return foods.splice(2,0,"noodles","icecream");  // slice returns value at index 1 and from that next 2 values
}


//Function #3: Filter

const numberArray = [12,324,213,4,2,3,45,4234];

function isEven(numberArray)
{
    return numberArray.filter(item=> item % 2 == 0);
}
isEven(numberArray);

 //console.log(isEven(numberArray));

 //Function #4: Reject
 //7.square value of numbers using map
 function findSquareOfNumbers(array)
 {
      return array.map(data=>data*data)
 }
 findSquareOfNumbers(numberArray)
 
 //reduce function
 function multiply(numberArray)
 {
       return numberArray.reduce((total,data)=>total*data)
 }
 multiply(numberArray)