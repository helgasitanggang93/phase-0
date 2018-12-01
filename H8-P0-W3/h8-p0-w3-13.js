function groupAnimals(animals) {
    // you can only write your code here!
    

    for(var i = 0; i < animals.length; i++){
        for(j = 0; j < animals.length; j++){
            if(animals[i] < animals[j]){
                var temp = animals[i]
                animals[i] = animals[j]
                animals[j] = temp
            }
            

        }
    }

    // console.log(animals)

    var kandang = []
    var counter = 0
    
    for(k = 0; k < animals.length; k++){

        if(kandang.length == 0){

            kandang.push([animals[k]])

        }else if(kandang[counter][0][0] == animals[k][0]){

            kandang[counter].push(animals[k])

        }else {
            kandang.push([animals[k]])
            counter++

        }


    }

    return kandang

  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]