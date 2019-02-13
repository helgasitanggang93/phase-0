function changeMe(arr) {
    // you can only write your code here!
    for(var i = 0; i < arr.length; i++){
        console.log(i+1 + '.', arr[i][0], arr[i][0] + ':')
        var obj = {}
        obj.firstName = arr[i][0]
        obj.lastName = arr[i][1]
        obj.gender = arr[i][2]
        obj.age = 'invalid years'

        if(arr[i][3] !== undefined){
            obj.age = 2019 - arr[i][3]

        }
        console.log(obj)

    }
  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""