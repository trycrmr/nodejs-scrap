// console.log(...process.argv)

function getRandomCharacter(phrase = 'abcdefghijklmnopqrstuvwxyz') {
  let maxIndex = phrase.length

  return phrase.charAt(getRandomInt(maxIndex))
}

function getRandomInt(max = 10) {
  return Math.floor(Math.random() * Math.floor(max));
}

const data = {
  number: getRandomInt(),
  letter: getRandomCharacter()
}

function constructMessage({letter, number} = data) {
  return `The random letter is "${letter}" and the random number is "${number}".`
}

let message = constructMessage()

function say(message = `This is the default message. ${constructMessage()}`) {
  console.log(message)
}

say()
say(process.argv[2])