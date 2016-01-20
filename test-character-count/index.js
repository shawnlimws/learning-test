function characterOccurenceCounter (words, character) {
  if (typeof words !== 'string' && typeof character !== 'string') {
    throw Error ('must be a string')
  }
  var counter = 0
  words.split('').forEach(letter => {
    if (letter === character) {
      counter = counter + 1
    }
  })
  return counter
}

// var characterOccurenceCounter = (strings, character) =>
//   strings.split('').filter(letter => letter === character).length

module.exports = characterOccurenceCounter
