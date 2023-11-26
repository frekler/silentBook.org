/* 

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false

*/


function isIsogram(str) {
    // Convert the string to lowercase to ignore letter case
    str = str.toLowerCase();

    // Create an object to store the frequency of each letter
    const letterFrequency = {};

    // Iterate through each letter in the string
    for (let i = 0; i < str.length; i++) {
        const letter = str[i];

        // If the letter is already in the frequency object, it's not an isogram
        if (letterFrequency[letter]) {
            return false;
        }

        // Otherwise, add the letter to the frequency object
        letterFrequency[letter] = true;
    }

    // If the loop completes without returning false, the string is an isogram
    return true;
}

// Test cases
console.log(isIsogram("Dermatoglyphics")); // true
console.log(isIsogram("moose")); // false
console.log(isIsogram("aba")); // false