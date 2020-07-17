const fetch = require('node-fetch')

const REMINDER_TIME = 500
const TOTAL_WAIT_TIME = 2500

const getKanyeQuote = async () => {
  try {
    waitThisLong(waitingForKanye())
    const response = await fetch('https://api.kanye.rest/')
    const kanyeJSON = await response.json()
    return kanyeJSON
  } catch(err) {
    throw err
  }
}

const waitingForKanye = (ms = REMINDER_TIME) => {
  return setInterval(() => { console.info('Waiting for Kanye to speak...') }, ms)
}

const end = (err = null) => { 
  if(!err) {
    process.exit() 
  } else {
    console.error(`There was an issue getting Kanye's Quote...`)
    throw err
    process.exit()
  }
}

const waitThisLong = (setIntervalFunc, ms = TOTAL_WAIT_TIME) => {
  setTimeout(() => {
    clearInterval(setIntervalFunc)
    return end()
  }, (ms))
}

;(async () => {
  try {
    const kanyeQuote = await getKanyeQuote()
    console.info(kanyeQuote.quote)
    end()
  } catch(err) {
    end(err)
  }

})()