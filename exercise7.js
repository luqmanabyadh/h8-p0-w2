// No.1

var rows1 = 5
var bintang = 1

while (bintang <= rows1 ) {
    console.log('*')
    bintang++
}

// No.2

var rows2 = 5

for (var a = 1; a <= rows2; a++) {
    var b = ''
    for (var c = 1; c <= rows2; c++) {
        b += '*'
    }
    console.log(b)
}

// No.3

var rows3 = 5

for (var e = 0; e < rows3; e++) {
    var f = '*'
  for  (var g = 0; g < e; g++) {   
        f +='*'
    }
    console.log(f)
}