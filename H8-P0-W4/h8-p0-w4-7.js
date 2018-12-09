function urutkanAbjad(str) {
    // you can only write your code here!
    var newarr = str.split('')
    
    for(var i = 0; i < newarr.length; i++){
        for(var j = 0; j < newarr.length; j++){
            if(newarr[i] < newarr[j]){
                var temp = newarr[i]
                newarr[i] = newarr[j]
                newarr[j] = temp

            }

        }

    }
    return newarr.join('')
  }
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'