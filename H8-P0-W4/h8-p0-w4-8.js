function tukarBesarKecil(kalimat) {
    // you can only write your code here!
    var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-! '
    var lower = 'abcdefghijklmnopqrstuvwxyz0123456789-! '
   
    var temp = []

    for(var i = 0; i < kalimat.length; i++){
        for(var j = 0; j < upper.length; j++){
            if(kalimat[i] === upper[j]){
                temp.push(lower[j])
                
            }else if(kalimat[i] === lower[j]){
                temp.push(upper[j])
                

            }

        }

    }

   var string = ''

   for(var k = 0; k < temp.length; k++){
       string += temp[k]

   }

   return string

  }
  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"