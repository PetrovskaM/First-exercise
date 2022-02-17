// 1.

const runInOrder = async (arrayOfFunc, arrayOfNum) => {
    for (let i = 0; i < arrayOfFunc.length; i++) {
        setTimeout(arrayOfFunc[i], arrayOfNum[i]);
    }
};

function sayHi() {
    console.log("hi");
}

function sayBye() {
    console.log("bye");
}

function sayHowdy() {
    console.log("howdy");
}

runInOrder([sayHi, sayBye, sayHowdy], [300, 600, 200]);
/* should log: 'hi' (after 300 ms) 'bye' (600 ms after 'hi') 'howdy' (200 ms after 'bye') */

// 2.

let dataReceived;

function ajaxSimulate(id, callback) {
    const database = ['Aaron', 'Barbara', 'Chris'];
    setTimeout(callback(database[id]), 0)
    console.log(dataReceived)
}

function storeData(data) {
    dataReceived = data
}
ajaxSimulate(1, storeData)


// 3. 

lengthOfArray = (array, index = 0) => {
    if (array[index]) {
        return lengthOfArray(array, ++index)
    }
    return index

}
const array1 = ['Aaron', 'Barbara', 'Chris'];
console.log(lengthOfArray(array1))

// 4.

function flow(input, funcArray) {
    if (funcArray.length === 0) {
        return input
    }
    const output = funcArray[0](input);
    return flow(output, funcArray.slice(1))
}

function multiplyBy2(num) {
    return num * 2;
}

function add7(num) {
    return num + 7;
}

function modulo4(num) {
    return num % 4;
}

function subtract10(num) {
    return num - 10;
}
const arrayOfFunctions = [multiplyBy2, add7, modulo4, subtract10];
console.log(flow(2, arrayOfFunctions)); // -> -7

// 5.

const personStore = {
    greet: function () {
        console.log('hello');
    }
}

function personFromPersonStore(name, age) {
    const person = Object.create(personStore)
    person.name = name;
    person.age = age;
    return person;
}

const sandra = personFromPersonStore('Sandra', 26);

console.log(sandra.name); // -> Logs 'Sandra'
console.log(sandra.age); // -> Logs 26
sandra.greet(); // -> Logs 'hello'

// 6.

function PersonConstructor() {
    this.greet = function () {
        console.log('hello');
    }
}

function personFromConstructor(name, age) {
    const person = new PersonConstructor();
    person.name = name;
    person.age = age
    return person

}

const mike = personFromConstructor('Mike', 30);

console.log(mike.name); // -> Logs 'Mike'
console.log(mike.age); // -> Logs 30
mike.greet(); // -> Logs 'hello'

// 7.

class PersonClass {
    constructor(name) {
        this.name = name
    }

    greet() {
        console.log("hello")
    }
}

const george = new PersonClass('George');

george.greet(); // -> Logs 'hello'

// 8.

function once(callback) {
    let called = 0
    let output;

    function inner(num) {
        if (!output && called < 1) {
            called++;
            output = callback(num);
            return output;
        } else {
            return output;
        }
    }


    return inner;
}

const addByTwoOnce = once(function (num) {
    return num + 2;
});

console.log(addByTwoOnce(5)); //should log 7
console.log(addByTwoOnce(10)); //should log 7
console.log(addByTwoOnce(9001)); //should log 7

// 9.

let after = (num, cb) => {

    return fun = (string) => {
        if (num <= 1) {
         return  cb(string);
        } else {
            --num;
        }
    };
};
const called = function (string) {
    return ('hello ' + string);
};
const afterCalled = after(3, called);

console.log(afterCalled('world')); // -> undefined is printed
console.log(afterCalled('world')); // -> undefined is printed
console.log(afterCalled('world')); // -> 'hello world' is printed

// 10.

function dateStamp(func) {
    let todayDate = new Date()
    // console.log(todayDate);

    return object = (num) => {
        return {
            data: todayDate,
            output: func(num)
        }
    }
}
const stampedMultBy2 = dateStamp(n => n * 2);
console.log(stampedMultBy2(4)); // should log: { date: (today's date), output: 8 }
console.log(stampedMultBy2(6)); // should log: { date: (today's date), output: 12 }

// 11.

function censor() {

    let stringPair = new Map();

   return  newFunc = (...strings) => {
        if (strings.length === 2) {

            stringPair.set(strings[0], strings[1]);

        } else {
            let input = strings[0];
            for (let [key, value] of stringPair) {
                let regex = new RegExp(key, "g");
                input = input.replace(regex, value);
                
            }
            return (input);
        }
    }
}

const changeScene = censor();
changeScene('dogs', 'cats');
changeScene('quick', 'slow');
console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // should log: 'The slow, brown fox jumps over the lazy cats.'