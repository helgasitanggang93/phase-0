function xo(str) {
    // you can only write your code here!
    var kata = str.length-1
    var newkata=''
    var temp =''
    var result
    var newkataX=''
    var newkataO

    for(i=0; i<=kata; i++){
        if(str[i]=='o'){
            newkataX=+str[i]
            

        }
         
    }
    return newkataX

  }
  
//   // TEST CASES
// //   console.log(xo('xoxoxo')); // true
// //   console.log(xo('oxooxo')); // false
//   console.log(xo('oxo')); // false
// //   console.log(xo('xxxooo')); // true
// //   console.log(xo('xoxooxxo')); // true

// // //  str[i]=='x'
//         // //  newkataX+=str[i]
//         // // newkataO = str[i]=='o'
//         // if(str[i]=='o'.length == str[i]=='x'.length){
//         //   result = 'true'
            
//         // }