function naikAngkot(arrPenumpang) {
    var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var harga = [0, 2000, 4000, 6000, 8000, 10000]

    //your code here
    var result = []
    for(var i = 0; i < arrPenumpang.length; i++){
        var obj = {}
        obj.penumpang = arrPenumpang[i][0]
        obj.naikDari = arrPenumpang[i][1]
        obj.tujuan = arrPenumpang[i][2]
        obj.bayar = 0
        for(var j = 0; j < rute.length; j++){
            if(obj.naikDari === rute[j]){
                obj.bayar -= harga[j]

            }if(obj.tujuan === rute[j]){
                obj.bayar += harga[j]

            }

        }
        result.push(obj)

    }
    return result
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]