// 1.

forEach = (array, map) => {
  map(array);
}

map = (array) => {
  for (let items of array) {
    array[items];
  }

  return array;
}

console.log(typeof forEach); // should log: 'function'
forEach(["a", "b", "c"], (i) => console.log(i)); // should log: 'a', 'b', 'c'
console.log(typeof map); // should log: 'function'
console.log(map([3, 4, 5], (n) => n - 2)); // should log: [1, 2, 3]

//  2.

eitherFilter = (arrOfNums, integerSquareRoot, over100) =>{
  let newArray = [];
  arrOfNums.map((item) => {
    if (integerSquareRoot(item) || over100(item)) {
      newArray.push(item);
      return newArray;
    }
  });
  return newArray;
}
const arrOfNums = [10, 35, 105, 9];
const integerSquareRoot = (n) => Math.sqrt(n) % 1 === 0;
const over100 = (n) => n > 100;
console.log(eitherFilter(arrOfNums, integerSquareRoot, over100)); // should log: [105, 9]

// 3.

reduce = (nums, cb, initialValue=0) => {
  for(const num of nums){
     initialValue = cb(num, initialValue)
    }  
    return console.log(initialValue)
}
const nums = [4, 1, 3];
const add = function (a, b) {
  return a + b;
};
reduce(nums, add, 0); //-> 8

// 4.

intersection = ([first, ...rest]) => {
  return first.filter((item) => rest.every((arr) => arr.includes(item)));
}

const arr1 = [5, 10, 15, 20];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [1, 10, 15, 5, 20];
console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]

// 5.


function myUnionReducer(prevValue,currentValue){
  
    currentValue.forEach(el => {
      if(!prevValue.includes(el)) {
        prevValue.push(el)
      }
    })
    return prevValue;
  
}

const union = (arrayOfArrays) => {
  // [[1,2,3],[3,2,2]]
const reducedArray= arrayOfArrays.reduce(myUnionReducer, [])
 return reducedArray;
};



const array1 = [5, 10, 15];
const array2 = [15, 88, 1, 5, 7];
const array3 = [100, 15, 10, 1, 5];
console.log(union([array1, array2, array3])); // should log: [5, 10, 15, 88, 1, 7, 100]

// 6.

 groupBy = (decimals, floored) => {

   const obj = {}
  decimals.map((item) => {
    if(typeof obj[floored(item)] === 'undefined'){
      obj[floored(item)] = [item]
    }
    else {
      obj[floored(item)] = [...obj[floored(item)], item]
    }
  })
  return obj
}
const decimals = [1.3, 2.1, 2.4];
const floored = function (num) {
  return Math.floor(num);
}
console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }

// 7.

objOfMatches = (arr7, arr8, uppercaser) => {
  const obj = {};
  arr7.map((item) => {
    arr8.map((itemArr2) => {
      if (itemArr2 === uppercaser(item)) {
        obj[item] = itemArr2;
      }
    });
  });
  return obj;
}
const arr7 = ["hi", "howdy", "bye", "later", "hello"];
const arr8 = ["HI", "Howdy", "BYE", "later", "HELLO"];
function uppercaser(str) {
  return str.toUpperCase();
}
console.log(objOfMatches(arr7, arr8, uppercaser)); // should log: { hi: 'HI', bye: 'BYE', hello: 'HELLO' }

// 8.

goodKeys = (object, callback) =>{
  const newArray = [];
  for (let key in object) {
    if(callback(object[key])){
      newArray.push(key)
    }
  }
  return newArray
}
const sunny = {
  mac: "priest",
  dennis: "calculator",
  charlie: "birdlaw",
  dee: "bird",
  frank: "warthog",
};
function startsWithBird(str) {
  return str.slice(0, 4).toLowerCase() === "bird";
}
console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']
