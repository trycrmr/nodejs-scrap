// Gonna do a queue

(async (randomAmount = (Math.floor(Math.random()*1000))) => {
  console.log('randomAmount', randomAmount)
  const addSome = num => num + Math.floor(Math.random()*10)
  const queue = []
  do {
    queue.push(addSome)
    console.info(randomAmount, queue.pop()(randomAmount))
    --randomAmount
    console.log(queue.length)
  } while(randomAmount > 0)
  // doesn't need to be anything actually useful

})(process.argv[2])

// Huzzah! That's a queue!! It's also a...?functional? queue? Add a function to the queue, then pop the function off and call it with an argument. I have no idea when this would be useful, but it's neat that the array stays small. It probably won't scale because of the logs, but otherwise it should do pretty well. I'm going to google how other's actually do this in the real life. 