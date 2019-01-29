function konversiMenit(menit) {
    // you can only write your code here!
     var jam = menit/60
     var conjam = Math.floor(jam)
     var menit=(jam-conjam) * 60
     var conmenit = String(Math.round(menit)) 

     if(conmenit.length === 1){
       return conjam + ':0' + conmenit

     }else{
       return conjam + ':' + conmenit
     }

  }
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00

  