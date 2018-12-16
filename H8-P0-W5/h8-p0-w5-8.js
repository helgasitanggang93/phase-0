function cariPelaku(str) {
    // you can only write your code here!
    var splitabc = (str.match(/abc/g));
    var abclength = splitabc.length
    return abclength
  }
  
  // TEST CASES
  console.log(cariPelaku('mabcvabc')); // 2
  console.log(cariPelaku('abcdabdc')); // 1
  console.log(cariPelaku('bcabcac')); // 1
  console.log(cariPelaku('abcabcabc')); // 3
  console.log(cariPelaku('babcbacabc')); // 2