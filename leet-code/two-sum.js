import testIt from './youknit/index.js'

const twoSum = (nums, target) => {

  /* ONE-PASS HASH TABLE
  Runtime: 64 ms, faster than 64.64% of JavaScript online submissions for Two Sum.
  Memory Usage: 35.1 MB, less than 26.04% of JavaScript online submissions for Two Sum.
  */

  // let populateMap = (acc, curr, currIdx) => { return acc.set(curr, currIdx) }
  // let numsMap = nums.reduce(populateMap, new Map())
  let numsMap = new Map()

  for(let i = 0; i < nums.length; i++) {
    let complement = target - nums[i]
    if(numsMap.has(complement)) { // returns undefined if not found
      return [numsMap.get(complement), i]
    }
    numsMap.set(nums[i], i)
  }
  

  /* BRUTE FORCE; Works, but could be faster. 
  Runtime: 592 ms, faster than 5.11% of JavaScript online submissions for Two Sum.
  Memory Usage: 34.6 MB, less than 76.03% of JavaScript online submissions for Two Sum.

  let numCompare = (foo, bar) => {
    return foo + bar === target ? true : false 
  }

  let result = nums
  .map((thisNumber, idx) => {
    let compareIdx = idx + 1
    while(nums.length > compareIdx) {
      if(numCompare(thisNumber, nums[compareIdx])) {
        return [idx, compareIdx]
      } else {
        compareIdx++
      }
    }
    return null
  })
  .filter(e => e) // removes nulls

  return result[0]
  */
}




const testData = [
  { args: [[0,1,2,3,4], 3], expectedResult: [0,3] },
  { args: [[1,2,3,4], 3], expectedResult: [0,1] },
  { args: [[3,2,4], 6], expectedResult: [1,2] },
]

const testResult = testIt(twoSum, testData)

console.log(JSON.stringify(testResult, null, 2))


/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].

TERRYS NOTES
I think this presumes all the elements in the array are different integers. The solution on leetcode that uses the hashmap implies that you're able to look up the value of each element as the key in the map. That would make the index the corresponding value for the key. But if two elements in the original array were the same integer you'd have the same key for two different values in the hashmap. Then you wouldn't be able to look up the value for the key. Something like that :-) .
*/
