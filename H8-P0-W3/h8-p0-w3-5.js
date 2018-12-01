function angkaPalindrome(num) {
    // you can only write your code here!
    var stop = true

    while(stop == true){
        num++
        var constring = String(num)
        var strsplit = constring.split('')
        var balikkata = ''

        for(i = strsplit.length-1; i >= 0; i--){
            balikkata += strsplit[i]

        }

        if(constring == balikkata){
             Number(constring)

             return constring
    
        }
        

        // console.log(balikkata)

    }
    

  }
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001