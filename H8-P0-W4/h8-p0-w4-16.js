function totalDigitRekursif(angka) {
    // you can only write your code here!
    
    var conString = String(angka)
    var angkadepan = conString[0]
    var angkasisa = conString.slice(1)
    if(conString.length === 1){
        return angka

    }

    // console.log(angkadepan, '<-------INI ANGKA DEPAN', '+', angkasisa, '<---------INI ANGKA SISA')
    
    return Number(angkadepan) + totalDigitRekursif(Number(angkasisa))

    console.log(angkadepan)
  }
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5