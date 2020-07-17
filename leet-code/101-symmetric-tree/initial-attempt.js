/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

/*
Runtime: 60 ms, faster than 79.73% of JavaScript online submissions for Symmetric Tree.
Memory Usage: 35.5 MB, less than 100.00% of JavaScript online submissions for Symmetric Tree.
*/

// WOO HOO!!!! I was on...kind of...the right track. I tried to go too far down in the binary tree before kicking off the recursion. This made it heavy on the brain to comprehend. Their solution was much more concise and accomplished the same thing. I think I'm going to try the queuing solution tomorrow and set a timer for an hour. I don't expect that one to take an hour, but for subsequent problems, I find myself deep in the problem space sometime between the half hour to hour mark. If it is taking me more than an hour I'm either on the wrong path or handling edge cases anyways. Then the second hour I can implement one of the solutions they describe. That's certainly the way to go. Slogging through the problem space, after awhile, doesn't yield any learning. But reading the solution after forcing myself to live in the problem space for a bit of time certainly does. So I think setting the timer will really pay off. Ideally, I'd start finding a solution before the hour is up, then be able to move onto another solution or writing a solution to the same problem a different way. Apparently memorizing solutions to problems isn't really beneficial, so trying to beat the clock with old problems is probably reinforcing the wrong mentality, but if I naturally start completing new problems faster than an hour that's a sign I'm becoming a more efficient problem solver. Each problem is different, so it's tough to say "I'm going to finish every problem faster than a half hour", but I should see a general improvement in the amount of time it takes me to solve a new problem. After awhile, I should feel pretty confident approaching the problems thrown my way. At some point I'm going to feel confident enough with coding interviews to submit for jobs. Realistically, at that point, I'd probably play with new technologies again, the ones I have the catch-22 level of experience with. Then I'd probably build a thing or two so I can show people some recent things I've built, then hit the job market hard, I guess! Cool! Saving this and buh bye! 
// So after working on this for somewhere around two hours I'm getting somewhere, but, it's about time to throw in the towel and look at the solution. I'm fading and I feel like I have a conditional messed up or something somewhere. I also think there is an easier way to do this without all these conditionals. Maybe not though. Let's see!! 
// Ha! Wow! They did end up writing their own function, then called that function recursively. Dang -- That's way better than what I was doing. I was doing a similar thing but with way more steps. Going to get rid of what I've done, toggle away from the solution, and write the answer in the way they did it for the recursive solution. The other way is a queue, which is pretty neat. I guess I could do that too, but tomorrow. 
var isSymmetric = function(root) { 
  const isMirror = (nodeLeft, nodeRight) => {
    if(!nodeLeft && !nodeRight) {
      return true // both of them are null
    } else {
      if(!nodeLeft || !nodeRight) {
        return false // one of them are null
      } else {
        if(nodeLeft.val === nodeRight.val) {
          return isMirror(nodeLeft.left, nodeRight.right) && isMirror(nodeLeft.right, nodeRight.left)
        } else { return false }
      }
    }
  }
  return !root ? true : isMirror(root.right, root.left)
};