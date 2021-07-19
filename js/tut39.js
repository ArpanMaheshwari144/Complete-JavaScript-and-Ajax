// Regular Expressions:
// Basic functions 
// Metacharacter Symbols

//const regex = /^a/i;

// Character Sets - We use []
// let regex = /A[a-z]pan/; // can be any character from a to z
// let regex = /A[aty]pan/; // can be an a, t or y
// let regex = /A[^aty]pan/; // cannot be any of a, t or y
// let regex = /A[^aty]pa[yu]/; // cannot be any of a, t or y + can be y or u
// let regex = /A[^aty]pa[yYu]/; // cannot be any of a, t or y + can be y, Y or u
// let regex = /A[a-zA-Z]pa[yu0-9]/; // we can have as many character sets as we want
// let regex = /A[a-zA-Z]pa[yu0-9][0-9]/; // we can have as many character sets as we want

// Quantifiers - We use {}
// let regex = /Arp{2}n/; // p can occur exactly 2 times
// let regex = /Arp{0,2}n/; // p can occur exactly 0 to 2 (0 or 1 or 2) times

// Groupings - We use paranthesis for groupings ()
// let regex = /(Arp){2}/
let regex = /(Arp){2}([0-9]a){3}/

const str = "Arpan Maheshwari";


let result = regex.exec(str);
console.log("The result from exec is ", result);


if (regex.test(str)) {
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else {
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}
