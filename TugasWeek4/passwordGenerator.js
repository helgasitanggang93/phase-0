function changeVocals (str) {
    //code di sini
    var kamus = 'aiueoAIUEO'
    var ubah  = 'bjvfpBJVFP' 
    var result = ''
    for(var i = 0; i < str.length; i++){
        var flag = true
        for(var j = 0; j < kamus.length; j++){
            if(str[i] === kamus[j]){
                result += ubah[j]
                flag = false
                
                
            }
            
        }if(flag === true){
            result += str[i]

        }

    }
    return result
  }
  
  function reverseWord (str) {
    //code di sini
    var gantiVocal = changeVocals(str)
    var result = ''
    for(var i = gantiVocal.length-1; i >= 0; i--){
        result += gantiVocal[i]


    }
    return result

  }
  
  function setLowerUpperCase (str) {
    //code di sini
    var reverse = reverseWord(str)
    var result = ''
    for(var i = 0; i < reverse.length; i++){
        if(reverse[i] === reverse[i].toLowerCase()){
            result += reverse[i].toUpperCase()

        }if(reverse[i] === reverse[i].toUpperCase()){
            result += reverse[i].toLocaleLowerCase()

        }

    }
    return result
  }
  
  function removeSpaces (str) {
    //code di sini
    var lowerUpper = setLowerUpperCase(str) 
    var result = ''
    for(var i = 0; i < lowerUpper.length; i++){
        if(lowerUpper[i] !== ' '){
            result += lowerUpper[i]

        }

    }
    return result
  }
  
  function passwordGenerator (name) {
    //code di sini
    var result = removeSpaces(name)
    if(result.length < 5){
        return 'Minimal karakter yang diinputkan adalah 5 karakter'

    }else{
        return result
    }
    
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'