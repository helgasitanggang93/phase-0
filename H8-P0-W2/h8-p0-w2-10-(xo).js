function xo(str) {
    var hasil=''
    var x=0
    var o=0
    for(var a=0; a<str.length; a++){
        if(str[a]=='o'){
            o+=1
        }else if(str[a]=='x'){
            x+=1
        }

    }
    if(x==o){
        return true
    }else{
        return false
    } 
  }
  
//   // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true

// // //  str[i]=='x'
//         // //  newkataX+=str[i]
//         // // newkataO = str[i]=='o'
//         // if(str[i]=='o'.length == str[i]=='x'.length){
//         //   result = 'true'
            
//         // }