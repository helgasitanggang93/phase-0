function kaliTerusRekursif(angka) {
    // you can only write your code here!
    var conString = String(angka)
    var angkadepan = conString[0]
    var angkasisa = conString.slice(1)

    if(conString.length === 1){
        return angka

    }

    console.log(angkadepan, '<----------INI ANGKA DEPAN' , angkasisa, '<--------------INI ANGKA SISA',  kaliTerusRekursif(Number(angkadepan) * kaliTerusRekursif(Number(angkasisa))), '<---------------FUNGSI KALI')

    return  kaliTerusRekursif(Number(angkadepan) * kaliTerusRekursif(Number(angkasisa)))
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
//   console.log(kaliTerusRekursif(3)); // 3
//   console.log(kaliTerusRekursif(24)); // 8
//   console.log(kaliTerusRekursif(654)); // 0
//   console.log(kaliTerusRekursif(1231)); // 6