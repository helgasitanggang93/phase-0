function balikkata(text){
    var newarr=''
    
    
    // console.log(text)
    for(i = 0; i < text.length; i++){
        
        for(j = text[i].length-1; j >= 0; j-- ){
            newarr+=text[i][j]
            // console.log(text[i][j])
            

        }

    }
    return newarr
    

}


console.log(balikkata(['hello world!']))