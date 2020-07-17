const util = require('util')
const { PerformanceObserver, performance } = require('perf_hooks');

var startMark = 'Start'
var endMark = 'End'

const obs = new PerformanceObserver((items) => {
  console.log(items.getEntries()[0].duration);
  performance.clearMarks();
});
obs.observe({ entryTypes: ['measure'] });

// const start = async (initFunction = wait, ...initArgs) => {
//     try {
//       await initFunction.apply(null, initArgs)
//     } catch(err) {
//       console.log(err)
//     } 
// }

function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
};

const wait = async (duration = 1000) => {
    try {
      await setTimeout(() => console.log(`Timer elapsed in ${duration}`), duration)
    } catch(err) {
      console.log(err)
    }
}

const getPerformanceMetrics = (name = `perf`, startMark, endMark) => {
  return new Promise((resolve, reject) => {
    try {
      performance.measure(name, startMark, endMark)
      resolve()
    } catch(err) {
      reject(err)
    }
  })
}

const end = async () => {
  console.log('Getting perf metrics...')
  performance.mark(endMark);
  getPerformanceMetrics(undefined, startMark, endMark)
    .then(result => {
      console.log('ending...')
    })
    .catch(err => {
      console.log(err)
    })
    .finally(() => {
      process.end
    })
}



// (async function run() {
//   let result = await start(undefined, 2000)
// })()

(async function(x) { // async function expression used as an IIFE
  performance.mark(startMark);
  let p_a = await resolveAfter2Seconds(25);
  return p_a;
})().then(v => {
  console.log(v);  // prints 60 after 2 seconds.
  end()
}); 


