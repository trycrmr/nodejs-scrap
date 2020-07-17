// YES! Working solution. 
// Runtime: 52 ms, faster than 93.96% of JavaScript online submissions for Longest Common Prefix.
// Memory Usage: 35.7 MB, less than 18.75% of JavaScript online submissions for Longest Common Prefix.

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
    if(strs.length === 0) return '' // COOL. A TYPE CHECK. :eyeroll:
    if(strs.length === 1) return strs[0]
    if(strs.join().replace(/\W/g, '').length === 0) return ''
    let firstWord = strs[0]
    let originalStrsLength = strs.length
    
    const wordsWithSameFirstLetter = (arr, letter, position) => { return arr.filter((thisWord) => thisWord.charAt(position) === letter) }

    let positionsChecked = 0 
    while(true) { // :-)
      // not sure how to handle an array that has the same string twice with this approach
      strs = wordsWithSameFirstLetter(strs, firstWord.charAt(positionsChecked), positionsChecked)
      if(strs.length === originalStrsLength) { 
        positionsChecked++
        if(firstWord.length <= positionsChecked) { break }
        else { /* do nothing */ }
      } else { break }
    }
    return positionsChecked === 0 ? '' : firstWord.substring(0, positionsChecked)
    
  }; // LOL ended up being 14 lines

  const tests = [ 
    { args: [["flower","flow","flight"]], expectedResult: "fl" },
    { args: [["dog","racecar","car"]], expectedResult: "" },
    { args: [["",""]], expectedResult: "" },
    { args: [["c","c"]], expectedResult: "c" },
    { args: [["c","c"]], expectedResult: "d" } // Making a test that will definitly fail to test the failure output. Let's CAPS that boi. 
  ]

  testRunner.testIt(longestCommonPrefix, tests)
  .then(result => testRunner.prettyIt(result))
  .catch(err => console.error(err))
  .finally(() => thisProcess.exit())

})()


/* https://leetcode.com/problems/longest-common-prefix/

??? What if there are two common prefixes of the same length? Which one is returned? 
*** NOT MOST FREQUENTLY USED PREFIX
??? Huh? In the example [flower, flow, flight], technically flo is the longest common prefix, but the answer is "fl" on leetcode. OOOOO longest COMMON prefix. So given ALL the strings, what's the most common prefix. Wow. That makes this easier :-) . 
WELL I OVERCOMPLICATED THIS ONE! I had thought initially that the question was asking about the longest prefix in any combination of the strings in the array. That's not the case, hence longest COMMON prefix. :eyeroll:
CLEAN UP TIME!! 
Okey dokey! We're handling an empty array argument! 
PASSED ALL THE LEETCODE TESTS YESYESYESYESYESYES! Next thing is to review their solutions and see if I can improve this one. 
WELL HOT DOG!! Binary Search and Divide and Conquer are also options here. I guess when I'm thinking of looping maybe I could divide and conquer instead, maybe? Interested to see how that thought plays out. 
Anyways, good times today! And it's just 5pm! When I wanted to stop! And my computer is about to melt! Not really, but it's been steady 80 degrees celcius for a bit now with some alerts about CPUs getting too hot. Woo wee!! 
Moving along in my leetcode public profile! XD 
Buh bye.
I should probably copy this into a new file to edit since I'm autosaving. I might try divide and conquer tomorrow. We'll see. 

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

*/