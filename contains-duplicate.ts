function containsDuplicate(nums: number[]): boolean {

    const numbObject: any = {}; // We'll use an object to keep track of numbers we've encountered

    for (let i = 0; i < nums.length; i++) {  
        if (numbObject[nums[i]]) { // If the number is already in the object, we've found a duplicate
            return true;
        }
        numbObject[nums[i]] = 1; // Otherwise, we mark this number as encountered
    }
    return false; // If no duplicates are found, we return false
};

/******

## [Explanation]

We begin by declaring an empty object named numbObject. This object will serve as our tracking mechanism to detect duplicate numbers.

We then enter a loop that iterates through the nums array. For each element in the array, we perform the following steps:

a. We check if the current number nums[i] already exists as a key in numbObject. The !! in front of numbObject[nums[i]] is a shorthand way to convert the value to a boolean. If it's truthy, it means we've already encountered this number, indicating a duplicate.

b. If we find a duplicate, we immediately return true, as our goal is achieved.

c. If the number is not already in the numbObject, we add it as a key to the object and assign the value 1. This marks the number as encountered.

After looping through all the elements, if no duplicates are found, the function returns false.


## Time Complexity:

The loop iterates through each element in the nums array exactly once.
Inside the loop, the key lookup and insertion into the numbObject object are constant-time operations, O(1).
Therefore, the overall time complexity of the loop is O(N), where N is the number of elements in the nums array.

## Space Complexity:

The space used by the numbObject object depends on the number of unique elements encountered in the nums array.
In the worst case, if there are no duplicates, the object will store all N elements, leading to O(N) space complexity.
In the best case, if there are many duplicates, the object might store fewer elements, but still up to O(N) in space complexity.

******/
