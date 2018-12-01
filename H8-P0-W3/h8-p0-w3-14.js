function targetTerdekat(arr) {
    // you can only write your code here!
    var result = []
    var indexO = arr.indexOf('o')
  
    if (arr.indexOf('x') == -1) {
      return 0
    }
    
    for (var i = 0; i < arr.length; i++){
      if (arr[i] == 'x') {
        var angka = Math.abs(indexO - i)
        result.push(angka)
      }
    }
  
    var min = result[0]
    for(var j = 0; j < result.length; j++){
      if (result[j] < min) {
        min = result[j]
      }
    }
  
    return min
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2