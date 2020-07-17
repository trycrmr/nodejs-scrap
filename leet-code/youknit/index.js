
class Youknit {
  constructor(defaultTestOutputFormat) {
    this.defaultTestOutputFormat = ((defaultTestOutputFormat = 'terminal') => {return defaultTestOutputFormat})(defaultTestOutputFormat)
  }

  // output has the same json schema as the output of the testIt instance method
  prettyIt = (output, dest = this.defaultTestOutputFormat) => { // dest represents the destination medium  by which the test output will be displayed
    switch(dest) {
      case 'terminal': 
        let prettyOutput = output.reduce((prev, curr, currIdx, arr) => {
          return `${prev}
${curr.isPass ? 'Pass' : 'FAIL'}: ${JSON.stringify(curr.actualResult)} (Expected: ${JSON.stringify(curr.expectedResult)}) ${curr.err ? `
${curr.err.stack}
` : ''}` // Purposeful line break to put the stack trace on a separate line. ^JSON.stringify will do :shrug:
        }, `
Test Results:`) // Initial line break is to separate the output from previous terminal logs
        console.info(prettyOutput)
        break
      default:
        console.warn(`
That destination medium, ${dest}, is not supported. The only option is "terminal" at this time.`)
        this.prettyIt(output)
        // :shrug: added to display... extensibility?
    }
  }

  testIt = (funcToTest, arrOfTests) => { // arrOfTests = [{ args: [ arrOfArguments ], expectedResult }]
    return new Promise((resolve, reject) => {
      let testResults = []
      let actualResult = null
      while(testResults.length < arrOfTests.length) {
        try {
          try {
            actualResult = funcToTest(...arrOfTests[testResults.length].args)
          } catch(err) {
            testResults.push({...arrOfTests[testResults.length], actualResult, isPass: false, err})
            if(testResults.length >= arrOfTests.length) {
              resolve(testResults)
              continue // stops the iteration of the while loop, which should not execute again. Could call break, it should have the effect, but that feels heavy handed. :shrug:
            } else {
              continue
            }
          }
          if(actualResult instanceof Array) {
            console.log(arrOfTests[testResults.length].expectedResult)
            if(actualResult.join() === arrOfTests[testResults.length].expectedResult.join()) {
              testResults.push({...arrOfTests[testResults.length], actualResult, isPass: true, err: null})
            } else {
              testResults.push({...arrOfTests[testResults.length], actualResult, isPass: false, err: null})
            }
          } else {
            if(actualResult === arrOfTests[testResults.length].expectedResult) {
              testResults.push({...arrOfTests[testResults.length], actualResult, isPass: true, err: null})
            } else {
              testResults.push({...arrOfTests[testResults.length], actualResult, isPass: false, err: null})
            }
          }
          if(testResults.length >= arrOfTests.length) {
            resolve(testResults)
          } else {
            continue
          }
        } catch(err) {
          console.error(err)
          reject(err)
          break
        }
      }
    })
  }

}

export default Youknit