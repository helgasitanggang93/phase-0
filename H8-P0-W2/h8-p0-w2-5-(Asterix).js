console.log('---------------------1. Menyusun Barisan Bintang-----------------------')

for(i=0; i<5; i++){
    console.log('*')

}

console.log('----------------------------------------------------------------------')

console.log('---------------------2. Menyusun Barisan Bintang Dengan Nested Looping-----------------------')

var row=5
var a=''
for(var i=1; i<=row; i++)
{
    // a=''
    
    for(var j=1; j<=row; j++){ 
           
        a+='*'
            
    }
    a+='\n'
    
}
console.log(a)

console.log('----------------------------------------------------------------------')

console.log('---------------------3. Menyusun Barisan Tangga Bintang Dengan Nested Looping-----------------------')

var row=5;
var spasi=''
for(i=1; i<=row; i++){
    // console.log(i, 'loop i')
    for(j=1; j<=i; j++){

        spasi+='*'
        // console.log(j, 'loop j')
        

    }
    
    spasi+='\n'
        
}
console.log(spasi)








       













