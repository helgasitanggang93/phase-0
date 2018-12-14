function changeVocals (str) {
    //code di sini
    temp = ''
    var voc = 'aiueoAIUEO'
    var vocChange = 'bjvfpBJVFP'
    
    var flag = false
    for(var i = 0; i < str.length; i++){
        for(var j = 0; j < voc.length; j++){
            if(str[i] === voc[j]){
                temp += vocChange[j]
                flag = true
                
            }

        }
        if(flag === false){
            temp += str[i]

        }
        flag = false
    }
    return temp

  }
  
  function reverseWord (str) {
    //code di sini
    var balik = changeVocals(str)
    var temp = ''
    for(var i = balik.length-1; i >= 0; i--){
        temp += balik[i]
    }
    return temp
  }
  
  function setLowerUpperCase (str) {
    //code di sini
    var rev = reverseWord(str)
    var low = 'abcdefghijklmnopqrstuvwxyz '
    var up = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ '
    var temp = ''
    for(var i = 0; i < rev.length; i++){
        for(var j = 0; j < up.length; j++){
            if(rev[i] === up[j]){
                temp += low[j]

            }if(rev[i] === low[j]){
                temp += up[j]

            }

        }

    }
    return temp
    
  }
  
  function removeSpaces (str) {
    //code di sini
    var remove = setLowerUpperCase(str)
    var temp = ''
    for(var i = 0; i < remove.length; i++){
        if(remove[i] !== ' '){
            temp += remove[i]

        }

    }
    return temp
  }

    function passwordGenerator (name) {
     //code di sini
     if(name.length < 5){
         return 'Minimal karakter yang diinputkan adalah 5 karakter'

     }
        var listRemove = removeSpaces(name)
        return listRemove
   }
  
  console.log(passwordGenerator('Sergei DrAgunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'