function groupAnagrams(strs: string[]): string[][] {

    const anagramGroups = new Map<string, string[]>();

    for (const str of strs) {

        const letters = str.split("").sort().join("");

        if (anagramGroups.has(letters)) {
            anagramGroups.get(letters)!.push(str);
        } else {
            anagramGroups.set(letters, [str]);
        }
    }

    return Array.from(anagramGroups.values());

}

// Time Complexity: O(N * K * log K)
// Space Complexity: O(n)


/*****
Code Explanation:
"Let's break down the TypeScript solution step by step:

Step 1: Initializing the Map:
We start by creating a Map named anagramGroups. This Map will serve as our data structure to store anagrams in groups. The key will be the sorted letters of an anagram, and the value will be an array of strings that belong to that anagram group.

Step 2: Iterating Through Strings:
We then loop through each string in the input array strs.

Step 3: Sorting and Key Creation:
For each string, we perform the following steps:

Split the string into an array of its characters.
Sort the characters alphabetically to create a key that represents the anagram group.
Join the sorted characters back into a string to get the key.
Step 4: Grouping Anagrams:
Next, we check if the anagramGroups map already has an entry for the current key (sorted letters). If it does, we add the current string to the array of that key. If not, we create a new entry with the current string as the first element in the array.

Step 5: Returning Grouped Anagrams:
Finally, we use Array.from(anagramGroups.values()) to convert the values of the map (arrays of anagrams) into a two-dimensional array, which represents the grouped anagrams.

Summary:
To sum it up, this TypeScript solution elegantly groups anagrams by sorting the letters of each string and using a Map to efficiently manage and organize the anagram groups. This approach showcases the power of data structures in solving complex problems with ease. Feel free to experiment with different inputs and understand how the algorithm efficiently handles anagrams. Don't forget to like, share, and subscribe if you found this video helpful!"

Conclusion:
"That's a wrap for today's video! We've uncovered the art of grouping anagrams using TypeScript and a strategic use of the Map data structure. I hope you enjoyed this coding journey. Stay curious, keep practicing, and I'll catch you in the next video. Happy coding!"
******/
