function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    const charCount: { [key: string]: number } = {};

    for (let i = 0; i < s.length; i++) {
        if (!charCount[s[i]]) charCount[s[i]] = 0;
        charCount[s[i]]++;

        if (!charCount[t[i]]) charCount[t[i]] = 0;
        charCount[t[i]]--;
    }

    for (const key in charCount) {
        if (charCount[key] !== 0) return false;
    }

    return true;
};


/**

Function Signature

The function is named isAnagram, and it takes two string parameters: s and t.
It returns a boolean value (true if s and t are anagrams, otherwise false).
Initial Length Check

The function starts by comparing the lengths of the input strings s and t. If their lengths are not equal, it immediately returns false, as anagrams must have the same number of characters.
Initialization of charCount Object

An object named charCount is declared. This object will be used to keep track of the character counts in the strings.
Loop Through Strings

The next section involves looping through the characters of both strings. The loop iterates i from 0 to the length of the strings, s.length.

For each character at index i in s:

If the character doesn't exist in the charCount object, it's initialized to 0.
The count of the character in charCount is incremented by one.
The same operations are performed for the corresponding character at index i in t, but this time, the count is decremented.

Counting Character Occurrences

As the loop progresses, the charCount object is updated to keep track of the counts of characters in both strings.
Checking for Anagram

After both loops complete, the code enters another loop using for...in to iterate through the keys (characters) in the charCount object.

If any character's count is not zero, it means that the frequencies of that character in the two strings are different, which would disqualify them from being anagrams. In this case, the function returns false.

Returning the Result

If all character counts in the charCount object are zero, it indicates that both strings have the same characters with the same frequencies, making them anagrams. In this case, the function returns true.
Summary
In summary, this TypeScript function uses an object (charCount) to count the occurrences of characters in two input strings s and t. It compares the character counts to determine if the strings are anagrams. The algorithm efficiently checks for anagrams with a time complexity of O(N), where N is the length of the strings.

**/
