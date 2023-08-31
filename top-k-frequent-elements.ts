function topKFrequent(nums: number[], k: number): number[] {
    const freqMap = new Map();
    
    // Populate the frequency map
    for (let num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }
    
    const uniqueNums = Array.from(freqMap.keys());

    // QuickSelect to find the top k frequent elements
    const result = quickSelect(uniqueNums, 0, uniqueNums.length - 1, k, freqMap);

    return result;
}

function quickSelect(nums: number[], left: number, right: number, k: number, freqMap: Map<number, number>): number[] {
    const pivotIndex = partition(nums, left, right, freqMap);

    if (pivotIndex === k - 1) {
        return nums.slice(0, k);
    } else if (pivotIndex < k - 1) {
        return quickSelect(nums, pivotIndex + 1, right, k, freqMap);
    } else {
        return quickSelect(nums, left, pivotIndex - 1, k, freqMap);
    }
}

function partition(nums: number[], left: number, right: number, freqMap: Map<number, number>): number {
    const pivotFreq = freqMap.get(nums[right])!;
    let i = left;
    
    for (let j = left; j < right; j++) {
        if (freqMap.get(nums[j])! >= pivotFreq) {
            swap(nums, i, j);
            i++;
        }
    }

    swap(nums, i, right);
    return i;
}

function swap(nums: number[], i: number, j: number) {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

// Time Complexity: O(N)
// Space Complexity: O(N)

/*****

Code Explanation:
"Let's walk through the TypeScript code step by step:

Step 1: Populating the Frequency Map:
We start by constructing a frequency map using a Map data structure. For each element in the input array nums, we increment its frequency count in the map.

Step 2: Prepare Unique Elements:
We extract the unique elements from the frequency map and store them in the uniqueNums array.

Step 3: QuickSelect Algorithm:
Now comes the heart of our approach – the QuickSelect algorithm. We call the quickSelect function, passing in the uniqueNums array, the left and right indices, the desired k value, and the frequency map.

Step 4: Partitioning for QuickSelect:
Within quickSelect, the partition function rearranges the elements in the nums array based on their frequencies. Elements with higher frequencies are moved towards the beginning.

Step 5: Finding Top k Elements:
The pivotIndex calculated by partition helps us decide whether we've found the top k frequent elements or if we need to narrow our search. 
If pivotIndex matches k - 1, we return the first k elements as the result. If it's less than k - 1, we continue searching in the right half, and if it's greater, we search in the left half.

******/




