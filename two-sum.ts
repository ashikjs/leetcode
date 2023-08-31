function twoSum(nums: number[], target: number): number[] {

    const indexMap: { [key: number]: number } = {};

    for (let i = 0; i < nums.length; i++) {

        const complement = target - nums[i];

        if (complement in indexMap) {
            return [indexMap[complement], i];
        }

        indexMap[nums[i]] = i;
    }

    return [];
}

// Time Complexity: O(n)
// Space Complexity: O(n)


/*****

Step 1: Initializing the Index Map:
We begin by declaring an object called indexMap. This object will serve as our 'memory,' allowing us to keep track of numbers we encounter and their corresponding indexes in the array.

Step 2: Iterating Through the Array:
Next, we enter a loop that iterates through each element in the nums array. For each element, we calculate its 'complement'—the value needed to reach the target sum. In other words, complement = target - nums[i].

Step 3: Checking for Complement:
Inside the loop, we check if the current complement exists as a key in our indexMap.
If it does, it means we've already encountered a number earlier in the array that can pair up with the current element to achieve the target sum. In that case, we immediately return an array containing the indexes of these two elements.

Step 4: Storing in Index Map:
If the complement doesn't exist in the indexMap, we store the current number and its index in the map. This way, as we continue iterating through the array, we'll be able to quickly check if a required complement has been encountered before.

Step 5: No Solution Found:
If we complete the loop without finding a valid pair that adds up to the target sum, we return an empty array, indicating that no solution was found.

Summary:
To sum it up, our TypeScript solution to the 'Two Sum' problem utilizes a clever index map to efficiently locate pairs of numbers that achieve the target sum. This approach has a time complexity of O(N), where N is the length of the input array.
It's a fantastic example of how strategic data structures can significantly optimize our algorithmic solutions. Don't forget to experiment and practice this technique as you continue your coding journey!"

*****/
