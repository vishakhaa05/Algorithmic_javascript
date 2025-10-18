// Group Anagrams Challenge
/*
   Given an array of strings strs, group the anagrams together. 
   You can return the answer in any order.

   Example:
   Input: ["eat","tea","tan","ate","nat","bat"]
   Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
*/

// ----------------------------------------------------------------
// 1st Method: Sorting characters in each word
/*
   Idea:
   - Anagrams have the same letters when sorted.
   - Use sorted word as a key in a hashmap.
   - Group words with the same key together.
*/

function groupAnagrams(strs) {
    let map = new Map();

    for (let str of strs) {
        // Step 1: Sort characters of the word
        let key = str.split("").sort().join("");

        // Step 2: Add to hashmap
        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(str);
    }

    // Step 3: Return grouped values
    return Array.from(map.values());
}

// Example usage
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
// Output: [["eat","tea","ate"],["tan","nat"],["bat"]]


// ----------------------------------------------------------------
// 2nd Method: Frequency count as key
/*
   Idea:
   - Instead of sorting, build a frequency count (26 letters).
   - Use that frequency array as a unique key.
   - Faster for very long strings because no sorting is required.
*/

function groupAnagramsFreq(strs) {
    let map = new Map();

    for (let str of strs) {
        // Step 1: Count frequency of characters
        let count = new Array(26).fill(0);
        for (let ch of str) {
            count[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

        // Step 2: Convert count array to a string key
        let key = count.join("#"); // join with separator to avoid ambiguity

        // Step 3: Add to hashmap
        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(str);
    }

    // Step 4: Return grouped values
    return Array.from(map.values());
}

// Example usage
console.log(groupAnagramsFreq(["eat","tea","tan","ate","nat","bat"]));
// Output: [["eat","tea","ate"],["tan","nat"],["bat"]]
