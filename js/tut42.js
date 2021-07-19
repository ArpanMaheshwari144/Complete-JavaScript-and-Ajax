// Generators in JavaScript

// function* numbersGen() {
//     let i = 0;

//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
// }

// const gen = numbersGen();

// this will return object
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

// this will return object value
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);


function* numbersGen() {
    let i = 0;

    while (true) {
        yield i;
        i++;

        // yield i.toString();
        // i++;
    }
}

const gen = numbersGen();

// this will return object
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

// this will return object value
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
