import ProcessContainer from '../leet-code/statz/index.js'
const thisProcess = new ProcessContainer(process)
thisProcess.watch()
Array(1e7).fill('one byte!!') // should be 10 mb, but showing up as 50mb

setTimeout(() => { thisProcess.exit() }, 5000)

// let arr = Array(1e6).fill("some string");
// arr.reverse();
// const used = process.memoryUsage().heapUsed / 1024 / 1024;
// console.log(`The script uses approximately ${used} MB`);
