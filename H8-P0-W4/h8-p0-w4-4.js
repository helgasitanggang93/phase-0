function cariModus(arr) {
    // you can only write your code here!
    var tamp = 0

    for(var k = 0; k < arr.length; k++){

        tamp += arr[k]

    }

    var a =tamp/arr.length
    if(a == arr[0]){

        return -1

    }

    var temp = []

    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < arr.length; j++){
            if(i !== j){
                if(arr[i] === arr[j]){
                    temp.push(arr[j])
                    return temp[0]
                    
                }
                
            }

        }

    }if(temp.length == 0){
        return -1

    }
    
  }
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1
  