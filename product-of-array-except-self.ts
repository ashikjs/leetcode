function productExceptSelf(nums: number[]): number[] {
  // Get the length of the input array.
  const n: number = nums.length;
  
  // Initialize an output array to store the results.
  const output: number[] = new Array(n);
  
  // Initialize a variable to keep track of the product of elements to the left.
  let leftProduct = 1;

  // Calculate the product of elements to the left of each element.
  for (let i = 0; i < n; i++) {
    // Store the product of elements to the left of the current element in the output array.
    output[i] = leftProduct;

    // Update the leftProduct for the next iteration.
    leftProduct *= nums[i];
  }
  
  // Initialize a variable to keep track of the product of elements to the right.
  let rightProduct = 1;

  // Calculate the product of elements to the right of each element and update the final result.
  for (let i = n - 1; i >= 0; i--) {
    // Multiply the product of elements to the left (output[i]) by the product of elements to the right (rightProduct).
    output[i] *= rightProduct;

    // Update the rightProduct for the next iteration.
    rightProduct *= nums[i];
  }
  
  // Return the final output array, where each element represents the product of all elements except itself.
  return output;
}


/*********

## Code Explanation:

The function productExceptSelf takes an array of numbers nums as input.

We initialize two arrays: output to store the final results and n to store the length of the input array nums.

We initialize leftProduct to 1. This variable will keep track of the product of elements to the left of the current element.

In the first loop, we iterate through the input array from left to right. For each element at index i, we calculate the product of elements to the left of it and store it in the output array. We then update leftProduct by multiplying it by the current element nums[i].

We reset rightProduct to 1. This variable will keep track of the product of elements to the right of the current element.

In the second loop, we iterate through the input array from right to left. For each element at index i, we multiply the value in the output array (which contains the product of elements to the left) by rightProduct (the product of elements to the right). We then update rightProduct by multiplying it by the current element nums[i].

Finally, we return the output array, which now contains the product of all elements except itself.

This algorithm calculates the desired product efficiently in O(n) time complexity and uses only O(1) extra space apart from the output array.

*******/
