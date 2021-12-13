/*=============================================================================
Prueba uno */

const phrase = " Pepe pepe";
let ToUpper = phrase.toUpperCase();
let ToLower = phrase.toLowerCase();
// let ToSnakeCase = ;
// let ToPascalCase = phrase;
// let ToCammelCase = ;
// let Pack = ;
// LTrim = ;
// RTrim = ;
// Trim = ;

String.prototype.toPascalCase = function() {
    const words = this.match(/[a-z]+/gi);
    if (!words) return "";
    return words
        .map(function(word) {
            return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
        })
        .join("");
};

function transform(phrase, transformations)
{
    return ToUpper;
}

console.log(ToUpper);
console.log(ToLower);
console.log(ToSnakeCase);
console.log(word);
console.log(Pack);
console.log(LTrim);
console.log(RTrim);
console.log(Trim);
console.log(transform());
