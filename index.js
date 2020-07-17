((sayThis) => {
  if(!sayThis) {
    console.error('No string argument passed on execution. Pass a string argument to print that string. Example - `node index.js "Foo"`')
  }

})(process.argv[2])