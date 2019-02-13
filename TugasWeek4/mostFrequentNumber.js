function sorting(arrNumber) {
    // code di sini
    for(var i = 0; i < arrNumber.length; i++){
        for(var j = 0; j < arrNumber.length; j++){
            if(arrNumber[i] < arrNumber[j]){
                var temp = arrNumber[i]
                arrNumber[i] = arrNumber[j]
                arrNumber[j] = temp

            }

        }

    }
    return arrNumber
  }
  
  function getTotal(arrNumber) {
    // code di sini
    if(sorting(arrNumber).length === 0){

        return ''

    }
    var zoo = []
    for(var i = 0; i < sorting(arrNumber).length; i++){
        var flag = true
        var kandang = []
        for(var j = 0; j < zoo.length; j++){
            if(sorting(arrNumber)[i] === zoo[j][0]){
                zoo[j].push(sorting(arrNumber)[i])
                flag = false

            }

        }if(flag === true){
            kandang.push(sorting(arrNumber)[i])
            zoo.push(kandang)

        }

    }
    
    var max = zoo[0].length
    for(var i = 0; i < zoo.length; i++){
        if(zoo[i].length > max){
            max = zoo[i].length

        }

    }

    var result = []
   for(var i = 0; i < zoo.length; i++){
       if(max === zoo[i].length){
           result.push(zoo[i][0])

       }

   }
   return 'angka paling besar adalah ' + result[0] + ' dan jumlah kemunculan sebanyak ' + max + ' kali' 

  }
  
  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
  }

  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''