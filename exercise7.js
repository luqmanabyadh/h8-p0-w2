// No.1

var rows1 = 5
var bintang = 1

while (bintang <= rows1 ) {
    console.log('*')
    bintang++
}

// No.2

var rows2 = 5

for (var i = 1; i <= rows2; i++) {
    var j = '';
    for (var x = 1; x <= rows2; x++) {
        j += '*'
    }
    console.log(j)
}