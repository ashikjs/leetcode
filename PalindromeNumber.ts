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
