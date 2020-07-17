/* Hooray!! Completed solution!
Runtime: 64 ms, faster than 43.24% of JavaScript online submissions for Longest Common Prefix.
Memory Usage: 37.1 MB, less than 12.50% of JavaScript online submissions for Longest Common Prefix.
*/

import Youknit from '../youknit/index.js'
import ProcessContainer from '../statz/index.js'

(async () => { // for awaits, just in case
  const testRunner = new Youknit()
  const thisProcess = new ProcessContainer(process)
  thisProcess.watch()

  /**
   * @param {string[]} strs
   * @return {string}
  //  */
  const longestCommonPrefix = (strs) => {

    if(strs.length === 0) return '' 
    if(strs.length === 1) return strs[0]

    let half = Math.floor(strs.length / 2)
    let a = longestCommonPrefix(strs.slice(0, half))
    let b = longestCommonPrefix(strs.slice(half, strs.length)) 

    let commonString = '' 
    for (let i = 0; i < a.length && i < b.length; i++) {
      if(a[i] !== b[i]) {  
        break
      } else {
        commonString += a[i]
      }
    }
    return commonString
  }; 

  const tests = [ 
    { args: [["leetcode","le","lee","leet"]], expectedResult: "le" },
    { args: [["backyard","backbard"]], expectedResult: "back" },
    { args: [["flower","flow","flight"]], expectedResult: "fl" },
    { args: [["dog","racecar","car"]], expectedResult: "" },
    { args: [["",""]], expectedResult: "" },
    { args: [["c","c"]], expectedResult: "c" },
    { args: [["c","c"]], expectedResult: "d" }, // Making a test that will definitly fail to test the failure output. Let's CAPS that boi. 
    // { args: [Array(1000).fill('samsmith')], expectedResult: "samsmith" },
    { args: [Array(100000).fill('samsmith')], expectedResult: "samsmith" },
    { args: [Array(100000).fill('samsmith')], expectedResult: "samsmith" },
    { args: [Array(100000).fill('samsmith')], expectedResult: "samsmith" },
  ]

  testRunner.testIt(longestCommonPrefix, tests)
  .then(result => testRunner.prettyIt(result))
  .catch(err => console.error(err))
  .finally(() => thisProcess.exit())

})()


/* https://leetcode.com/problems/longest-common-prefix/

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
Note:

All given inputs are in lowercase letters a-z.

// DIVIDE AND CONQUER details

well forget that. https://leetcode.com/problems/longest-common-prefix/solution/


*/

/* SUPER SECRET SOLUTION! DON'T LOOK!! GO AWAY!!!! 
    if (strs.length === 0) { return '' }
    if (strs.length === 1) { return strs[0]; } // It will keep splitting the array until it returns this line. Otherwise, setting "a" sets it with a function instead of a value. That's we get the subproblems of subproblems, i.e. the top part of this...Once those are both set with actual values instead of functions, the function can move along to iterating over the two words to see if there is a common prefix. Setting something to a recursive function call is, I guess, a way of looping, in a way. The "loop" is broken when a value is assigned, which happens when the recursive function returns a value. 

    let half = Math.floor(strs.length/2);
    let a = longestCommonPrefix(strs.slice(0, half));
    let b = longestCommonPrefix(strs.slice(half, strs.length));
    let commonStr = '';
    for (let i = 0; i < a.length && i < b.length; i++){
      // console.log(i)
        if (a[i] !== b[i]) {
            break;
        }
        commonStr += a[i];
    }
    console.log(commonStr)
    return commonStr; 
*/