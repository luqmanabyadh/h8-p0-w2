var nama = ''
var peran = ''

if (nama === '' && peran === '') {
    console.log('Nama Harus Diisi!')
} else if (nama === 'Luqman' && peran === 'Ksatria') {
        console.log('Selamat datang di Dunia Proxytia,' + nama)
        console.log('Halo' + ' ' + peran + ' ' + nama + ', kamu dapat menyerang dengan senjatamu!')
} else if (nama === 'Dani' && peran === 'Tabib') {
        console.log('Selamat datang di Dunia Proxytia,' + nama)
        console.log('Halo' + ' ' + peran + ' ' + nama + ', kamu akan membantu teman mu yang terluka.')
} else if (nama === 'Joni' && peran === 'Penyihir') {
        console.log('Selamat datang di Dunia Proxytia,' + nama)
        console.log('Halo' + ' ' + peran + ' ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu!')
} else {
        console.log ('Halo' + ' ' + nama + ', Pilih peranmu untuk memulai game!')
}