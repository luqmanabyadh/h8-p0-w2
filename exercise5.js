// No.1

var word = 'Javascript'
var second = 'is'
var third =  'awesome'
var fourth = 'and'
var fifth = 'I'
var sixth = 'love'
var seventh = 'it!'

console.log (word + ' ' + second + ' ' + third + ' ' + fourth + ' ' + fifth + ' ' + sixth + ' ' + seventh)

// No.2

var word = 'wow Javascript is so cool'
var exampleFirstWord = word[0] + word[1] + word[2]
var secondWord = word[4] + word[5] + word[6] + word[7] + word[8] + word[9] + word[10] + word[11] + word[12] + word[13]
var thirdWord = word[15] + word[16]
var fourthWord = word[18] + word[19]
var fifthWord = word[21] + word[22] + word[23] + word[24]

console.log('First Word:' + exampleFirstWord)
console.log('Second word:' + secondWord)
console.log('Third word:' + thirdWord)
console.log('Fourth word:' + fourthWord) 
console.log('Fifth word:' + fifthWord)

// No.3 

var word3 = 'wow Javasript is so cool'
var exampleFirstWord3 = word3.substring(0, 3)
var secondWord3 = word3.substring(4, 13)
var thirdWord3 = word3.substring(14, 16)
var fourthWord3 = word3.substring(17, 19)
var fifthWord3 = word3.substring(20)

console.log('First Word:' + exampleFirstWord3)
console.log('Second Word:' + secondWord3)
console.log('Third Word:' + thirdWord3)
console.log('Fourth Word:' + fourthWord3)
console.log('Fifth Word:' + fifthWord3)

// No.4

var word4 = 'wow Javasript is so cool'
var exampleFirstWord4 = word4.substring(0, 3)
var secondWord4 = word4.substring(4, 13)
var thirdWord4 = word4.substring(14, 16)
var fourthWord4 = word4.substring(17, 19)
var fifthWord4 = word4.substring(20)

var firstWordLength = exampleFirstWord4.length
var secondWordLength = secondWord4.length
var thirdWordLength = thirdWord4.length
var fourthWordLength = fourthWord4.length
var fifthWordLength = fifthWord4.length

console.log('First Word:' + exampleFirstWord4 + ', with length: ' + firstWordLength)
console.log('Second Word:' + secondWord4 + ', with length: ' + secondWordLength)
console.log('Third Word:' + thirdWord4 + ', with length: ' + thirdWordLength)
console.log('Fourth Word:' + fourthWord4 + ', with length: ' + fourthWordLength)
console.log('Fifth Word:' + fifthWord4 + ', with length: ' + fifthWordLength)
