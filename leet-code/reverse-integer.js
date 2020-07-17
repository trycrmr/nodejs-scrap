import testIt from './youknit/index.js'
import printStats from './statz/index.js'

const reverseInt = (x) => {
  let rev = 0
  while(x != 0) {
    let pop = x % 10
    x = Number.parseInt(x/10)
    rev = Number.parseInt(rev * 10 + pop)
    if(1 > x && x > -1) x = 0
  }
  return rev



  // Can't handle negative cases
  // return x
  //       .toString()
  //       .split('')
  //       .reverse()
  //       .join('')
}

const tests = [
  { args: [-123], expectedResult: -321 },
  { args: [456], expectedResult: 654 },
  { args: [789], expectedResult: 987 },
]

console.log(testIt(reverseInt, tests))
console.log(printStats(process))