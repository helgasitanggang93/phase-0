var nama='helga'
var peran ='tabib'

if(nama=='' && peran == ''){
    console.log('nama harus diisi')

}else if(nama !=='' && peran ==''){
    console.log('hallo ' +nama+ ' pilih peranmu untuk memulai game')

}else if(nama !=='' && peran== 'ksatria'){
    console.log('selamat datang didunia Proxytia, ' + nama)
    console.log('Halo, '+ ' ' + peran + ' ' + nama + ' kamu dapat menyerang dengan senjatamu!')

}else if(nama !== '' && peran == 'tabib'){
    console.log('selamat datang didunia Proxytia, ' + nama)
    console.log('Halo, '+ ' ' + peran + ' ' + nama + ' kamu akan membantu temanmu yang terluka')

}else if(nama !== '' && peran == 'penyihir'){
    console.log('selamat datang didunia Proxytia, ' + nama)
    console.log('Halo, '+ ' ' + peran + ' ' + nama + ' ciptakan keajaiban yang membantu kemenanganmu')

}else{
    console.log('cek kembali data yang anda isi :)')
}