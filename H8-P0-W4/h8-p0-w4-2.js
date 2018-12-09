function fpb(angka1, angka2) {
    // you can only write your code here!
    
    var counter = 0
    var limit = 0
    var newarr = []

    if (angka1 > angka2){
        limit = angka1

    }else if(angka2 > angka1){
        limit = angka2

    }

    while(counter < limit){
        counter++
        if(angka1 % counter == 0 && angka2 % counter == 0){
            newarr.push(counter)
        }
       
        
       
    }
    return newarr[newarr.length-1]
  
   
  }
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1