function dataHandling2(arr){
    // console.log(arr)
    arr.splice(2,1)
    arr.splice(2,0, 'Provinsi Bandar Lampung')
    var splitdate = arr[3].split('/')
    console.log(arr)
    console.log(splitdate)

    var buttonpushed = splitdate[1]

    switch(buttonpushed){
        case '01' : {console.log('januari'); break;}
        case '02' : {console.log('februari'); break;}
        case '03' : {console.log('maret'); break;}
        case '04' : {console.log('april'); break;}
        case '05' : {console.log('mei'); break;}
        case '06' : {console.log('juni'); break;}
        default: {console.log('tidak terjadi apa apa');}
    }

    // var stripsplit = splitdate('-')
    // console.log(stripsplit)

    var a= splitdate.join(' - ')
    console.log(a)

    var akhir = arr[1].slice(0,14)
    console.log(akhir)


}




var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);