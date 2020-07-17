/*
Runtime: 44 ms, faster than 98.32% of JavaScript online submissions for Same Tree.
Memory Usage: 34.3 MB, less than 6.67% of JavaScript online submissions for Same Tree.
*/

// huh, that queue solution is really neat. I guess I don't know the java queue api but it seems to make sense. I notice diptanu checks the left then the right. I guess it doesn't matter which way. Also presumes either treenodes or null in the tree, but that seems like a safe bet. Anyways, this was fun! Consider 100 handled! Onto another one! Yup, buh bye!! 

import Youknit from '../youknit/index.js'
import ProcessContainer from '../statz/index.js'

(async () => { // for awaits, just in case
  const testRunner = new Youknit()
  const thisProcess = new ProcessContainer(process)
  thisProcess.watch()

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  if(p instanceof TreeNode && q instanceof TreeNode) { // short circuit check
    if(p.val === q.val) {
      let isRightMatch = isSameTree(p.right, q.right)
      let isLeftMatch = isSameTree(p.left, q.left)
      console.log(isRightMatch, isLeftMatch)
      if(isRightMatch && isLeftMatch) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  } else {
    if(p === q) {
      return true
    } else {
      return false
    }
  }
};

  
  const tests = [ // Tests take a bunch of writing up of TestNodes in order to test, and leetcode kind of represents the trees funny, so, future Terry, don't bother. Just run it on leetcode. 
    { args: [[1,2,3],[1,2,3]], expectedResult: true },
  ]

  testRunner.testIt(isSameTree, tests)
  .then(result => testRunner.prettyIt(result))
  .catch(err => console.error(err))
  .finally(() => thisProcess.exit())

})()

/* 
Given two binary trees, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical and the nodes have the same value.
*/