// No.1 

function shoutOut() {
    console.log('Halo Function!')
}

console.log(shoutOut())

// No.2

function calculateMultiply(num1, num2) {
    hasilPerkalian = num1 * num2
    return hasilPerkalian
}

var num1 = 5
var num2 = 6

var hasilPerkalian = calculateMultiply(num1, num2)
console.log(hasilPerkalian)

// No.3

function processSentence(name, age, adress, hobby) {
    fullSentence = 'Nama saya ' + name + ', umur saya ' + age + ' tahun,' + ' alamat saya di ' + adress + ', dan saya punya hobby yaitu ' + hobby + '!'
    return fullSentence
}

var name = 'Agus'
var age = 30
var adress = 'Jln. Malioboro, Yogjakarta'
var hobby = 'Gaming'

var fullSentence = processSentence(name, age, adress, hobby)
console.log(fullSentence)