function changeMe(arr) {
    // you can only write your code here!
   
    var obj = {}
    
    for(var i = 0; i < arr.length; i++){
       
        var namaPertama = arr[i][0] + arr[i][1]

        obj[(i+1) + namaPertama] = {
            firstName : arr[i][0],
            lastName : arr[i][1],
            gender : arr[i][2],
            age : 'Invalid Birth Year'
        }

        if(arr[i].length === 4){
            obj[(i+1) + namaPertama].age = 2018 - arr[i][3]
     
        }

    }
    console.log(obj)
    
  }
  
  // TEST CASES
  changeMe([
      ['Christ', 'Evans', 'Male', 1982], 
  ['Robert', 'Downey', 'Male'] ]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 36 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""