function digitPerkalianMinimum(angka) {
    // you can only write your code here!

    for(var i = 0; i < angka; i++){
        for(var j = 0; j < angka; j++){
            if(i !== j && j !== i){
                if(i * j === angka){
                    console.log(i, '<------ini adalah i', j, '<--------ini adalah j')
    
                }

            }
            

        }

    }
    

    
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
//   console.log(digitPerkalianMinimum(90)); // 3
//   console.log(digitPerkalianMinimum(20)); // 2
//   console.log(digitPerkalianMinimum(179)); // 4
//   console.log(digitPerkalianMinimum(1)); // 2