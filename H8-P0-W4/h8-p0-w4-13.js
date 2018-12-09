function sorting(arrNumber) {
    // code di sini
    
    var urut = arrNumber.sort(function(a, b){return a > b})
    return urut

  }
  
  function getTotal(arrNumber) {
    // code di sini
    var temp = []
    for(var i = 0; i < sorting(arrNumber).length; i++){
       if(sorting(arrNumber)[i] === sorting(arrNumber)[(sorting(arrNumber).length)-1]){
           temp.push(sorting(arrNumber)[i])

       }
           
    }
    if(temp[0] === undefined){

        return ''

    }else{

        return 'angka paling besar adalah ' + temp[0] + ' dan jumlah kemunculannya adalah ' + temp.length

    }
    
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
//   //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));