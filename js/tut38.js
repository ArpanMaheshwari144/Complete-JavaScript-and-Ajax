//let regex = /Arpan/;
// Lets look into some metacharacter symbols
//let regex = /^A/; // ^ means expression will match if string starts with
//let regex = /ari$/; // $ at the end of the string means "string ends with"
//let regex = /A.pan/; //matches any one character
//let regex = /A*pan/; //matches any 0 or more characters
//let regex = /Ar?pani?/; // ? after character means that character is optional
let regex = /A\*pan/

let str = "A*pan means ArpanMaheshwari"; // 

let result = regex.exec(str);
console.log("The result from exec is ", result);

if (regex.test(str)) {
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else {
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}
