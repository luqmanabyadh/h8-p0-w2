// No.1 (looping dengan while)

var looping = 2
var looping2 = 20

console.log ('LOOPING PERTAMA')
while (looping < 21) {
    console.log(looping + ' ' + '- I love coding')
    looping+=2
}

console.log('LOOPING KEDUA')
while (looping2 > 0) {
    console.log(looping2 + ' ' + '- I will become fullstack developer')
    looping2-=2
}

// No.2 (looping dengan for)

console.log('LOOPING PERTAMA')
for(var looping3 = 1; looping3 < 21; looping3++) {
    console.log(looping3 + ' ' + '- I love coding')
}

console.log('LOOPING KEDUA')
for(var looping4 = 20; looping4 > 0; looping4--) {
    console.log(looping4 + ' ' + '- I will become fullstack developer')
}

// No.3 (looping angka)

// GENAP GANJIL

for (var angka = 1; angka <= 100; angka++) {
    if (angka % 2 == 0) {
        console.log(angka + ' ' + '- GENAP')
    } else {
        console.log(angka + ' ' + '- GANJIL')
    }
}

// TAMBAH 2

for (var tambah2 = 1; tambah2 < 100; tambah2 += 2) {
    if (tambah2 % 3 == 0) {
        console.log(tambah2 + ' ' + 'Kelipatan 3')
    } else {
        console.log('')
    }
}

// TAMBAH 5 

for (var tambah5 = 1; tambah5 < 100; tambah5 += 5) {
    if (tambah5 % 6 === 0) {
        console.log(tambah5 + ' ' + 'Kelipatan 6')
    } else {
        console.log('')
    }
}

// TAMBAH 9

for (tambah9 = 1; tambah9 <= 100; tambah9 += 9) {
    if (tambah9 % 10 === 0) {
        console.log(tambah9)
    } else {
        console.log('')
    }
}
