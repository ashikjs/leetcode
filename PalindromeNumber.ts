function isPalindrome(x: number): boolean {
    if(x >= 0) {

        // O(Log N)
        const xString: string = x.toString()

        // O(1)
        const xLength: number =  xString.length
        
        // O(N)
        for(let i = 0; i < (xLength / 2); i++) {
            if(xString[i] !== xString[xLength - i - 1]) return false
        }
        return true;
    } else {
        return false;
    }
};

// Time Complexity is O(N) = O(Log N) + O(N)
// Space Complexity is O(1)

/********************

Explanation:

The function starts by checking if the input number x is non-negative. If it's negative, the function immediately returns false because negative numbers can't be palindromes.
If x is non-negative, it's converted to a string xString using the toString() method.
The length of the string xLength is calculated.
The code then iterates through the first half of the string (up to xLength / 2) and compares characters from the beginning and end of the string. If any of the characters don't match, the function immediately returns false, indicating that x is not a palindrome.
If all characters are matched, the function returns true, indicating that x is a palindrome.
Time Complexity:

Converting the integer to a string takes O(log N) time, where N is the value of x.
The loop iterates through the first half of the string, so it runs in O(N/2) = O(N) time in the worst case.
Overall, the time complexity of the function is O(log N) + O(N) = O(N), where N is the value of x.

Space Complexity:

The function uses a constant amount of extra space to store the string xString, the length xLength, and the loop variable. Thus, the space complexity is O(1), constant.
In summary, the code checks if a given non-negative integer is a palindrome. It runs in linear time with constant space complexity.

*********************/
