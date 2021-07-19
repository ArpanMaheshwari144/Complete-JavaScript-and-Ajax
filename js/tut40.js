// Character classes
// let regex = /\wan/;            // word character - _ or alphabet or numbers
// let regex = /\w+a/;            // \w+ means one or more word characters
// let regex = /\Wbhai/;          // Non word character
// let regex = /\W+bhai/;         // \W+ means more than one Non word character
// let regex = /\d999/;           // \d means digit
// let regex = /bhai \d999/;      // \d means digit
// let regex = /bhai \d+/;        // \d+ means more than one digit
// let regex = /\D999/;           // \D means non digit
// let regex = /\D+999/;          // \D+ means more than one non digit
// let regex = /\sbhai/;        // Match whitespace character
// let regex = /\s+bhai/;    // \s+ means match one or more than one whitespace characters
// let regex = /\Sbhai/;     // Match non whitespace character
// let regex = /\S+ka number/;    // Match one or more than one non whitespace character
// let regex = /bhai\b/;          // word boundary

// Assertions
// let regex = /A(?=r)/;  // A ke baad theek r hona chahiye
let regex = /A(?!n)/;     // A ke baad kuch bhi ho lekin n na ho

let str = "Arpan bhai 89999Arpan9999";

let result = regex.exec(str);
console.log("The result from exec is ", result);

if (regex.test(str)) {
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else {
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}
