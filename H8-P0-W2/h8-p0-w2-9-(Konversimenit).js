function konversiMenit(menit) {
    // you can only write your code here!
    var jam
    var conjam
    var menit
    var conmenit
    var result

    jam = menit/60
    conjam = Math.floor(jam)
    menit=(jam-conjam) * 60
    conmenit = Math.round(menit)
    result = conjam + ':' + conmenit

    return result
  }
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00

  