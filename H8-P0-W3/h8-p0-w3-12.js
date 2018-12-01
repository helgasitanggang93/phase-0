function pasanganTerbesar(num) {
    // you can only write your code here!
    var constring = String(num)
    var pecah = constring.split('')
    var max = 0
    // console.log(pecah)
    // var gabung = pecah.join(pecah[0]+pecah[1])
    for(var i = 0; i < pecah.length-1; i++){
        var couple = Number(pecah[i] + pecah[i+1])
        if(couple > max){
            max = couple


        }

    }
    return max
    
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
//   console.log(pasanganTerbesar(12783456)); // 83
//   console.log(pasanganTerbesar(910233)); // 91
//   console.log(pasanganTerbesar(71856421)); // 85
//   console.log(pasanganTerbesar(79918293)); // 99