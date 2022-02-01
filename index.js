// 1.

const x = 2;
const y = 5;
const solution = x + y;
console.log(solution);

// 2.

const fb = [];

fizzBuzzArray = () => {
  for (let numbers = 1; numbers <= 16; numbers++) {
    if (numbers % 3 == 0 && numbers % 5 == 0) {
      fb.push("fizzbuzz");
    } else if (numbers % 3 == 0) {
      fb.push("fizz");
    } else if (numbers % 5 == 0) {
      fb.push("buzz");
    } else {
      fb.push(numbers);
    }
  }
  console.log(fb);
};

fizzBuzzArray();

// 3.

const checkObj = {
  oddNum: 1,
  evenNum: 2,
  foundNum: 5,
  randomNum: 18,
};

let found = 0;

for (foundNum in checkObj) {
  found = 1;
}
console.log(found);

// 4.

const sumMe = {
  hello: "there",
  you: 8,
  are: 7,
  almost: "10",
  done: "!",
};
let total = 0;

for (let value in sumMe) {
  if (Number.isInteger(sumMe[value])) {
    total += sumMe[value];
  }
}
console.log(total);

// 5.
function addTwo(number) {
  return number + 2;
}

console.log(typeof addTwo); // should log: 'function'
console.log(addTwo(10)); // should log: 12

// 6.

let friendsAvailable = true;

function makePlans(name) {
  callFriend(friendsAvailable, name);
}

function callFriend(bool, name) {
  let result;
  if (bool) {
    console.log(`Plans made with ${name} this weekend`);
  } else {
    console.log("Everyone is busy this weekend.");
  }
}
makePlans("Mary"); // should return: "Plans made with Mary this weekend'
friendsAvailable = false;
makePlans("James"); //should return: "Everyone is busy this weekend."

// 7.

function getTheSum(array) {
  let sum = 0;
  array.forEach((element) => (sum += element));
  return sum;
}

console.log(getTheSum([3, 6, 9])); // expected log 18
console.log(getTheSum([10, 11, 12])); // expected log 33

// 8.

function disemvowel(string) {
  let newWord = "";

  for (let i = 0; i < string.length; i++) {
    let letter = string[i].toLowerCase();
    if (
      letter != "a" &&
      letter != "e" &&
      letter != "i" &&
      letter != "o" &&
      letter != "u"
    ) {
      newWord += string[i];
    }
  }
  return newWord;
}

console.log(disemvowel("CodeSmith")); // => 'CdSmth'
console.log(disemvowel("BANANA")); // => 'BNN'
console.log(disemvowel("hello world")); // => 'hll wrld'

//  9.

function arrayBuilder(obj) {
  const array = [];

  for (const key in obj) {
    for (let i = 0; i < obj[key]; i++) {
      array.push(key);
    }
  }
  return array;
}

console.log(arrayBuilder({ cats: 2, dogs: 1 })); // => ['cats', 'cats', 'dogs']
console.log(arrayBuilder({})); // => []

// 10.

function add20(num) {
  return num + 20;
}
console.log(add20);

// 11.

findWaldo = (object) => {
  for (var property in object) {
    if (property == "Waldo") {
      return object[property];
    }
  }
  return "Where's Waldo?";
};

const DC = { Bruce: "Wayne", Harley: "Quinn" };
const supernatural = {
  Sam: "Winchester",
  Dean: "Winchester",
  Waldo: "unknown",
};
console.log(findWaldo(DC)); // should log: 'Where's Waldo?'
console.log(findWaldo(supernatural)); // should log: 'unknown'

//  12.

subtractTwo = (number) => {
  return number - 2;
};

function map(list, subtractTwo) {
  let newItem = [];

  for (let items of list) {
    newItem.push(subtractTwo(items));
  }
  
  console.log(newItem);
}
map([3, 4, 5], subtractTwo); //-> [1,2,3]
console.log(subtractTwo(10)); //-> 8
console.log(subtractTwo(12)); //-> 10
