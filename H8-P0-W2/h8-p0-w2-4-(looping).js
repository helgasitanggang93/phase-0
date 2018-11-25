console.log('----------------------------1. Melakukan Looping Menggunakan While--------------------------------')

var count= 2
console.log('Looping Pertama')
while(count <=20){
    
    console.log(count + ' -  I LOVE CODING')
    count+=2

}

var count2=20
console.log('Looping Kedua')
while(count2 >= 2){
    console.log(count2 + ' -  I will become fullstack developer')
    count2-=2
}

console.log('---------------------------------------------------------------------------------------------------')

console.log('---------------------------2. Melakukan Looping Menggunakan For-------------------------')

console.log('Looping Pertama')
for(count =1; count<=20; count++){
    console.log(count + ' - I Love Coding')

}

console.log('Looping Kedua')
for(count2 = 20; count2>=1; count2--){
    console.log(count2 + ' - I Will Become Fullstack Developer')

}

console.log('-----------------------------------------------------------------------------------------')

console.log('--------------------------------------3. Angka Ganjil dan Genap---------------------------------------------------')

for(var i=1; i<=100; i++){
    if(i%2==0){
        console.log(i + ' ini adalah angka genap')
    }if(i%2!==0){
        console.log(i + ' ini adalah angka ganjil')

    }

}


for(var i = 1; i<=100; i+=2){
    if(i%3==0){
        console.log(i + ' kelipatan 3')

    }else{
        console.log(i)
    }

}

for(var i=1; i<=100; i+=5){
    if(i%6==0){
        console.log(i + ' kelipatan 6')

    }else{
        console.log(i)
    }

}

for(var i=1; i<=100; i+=9){
    if(i%10==0){
        console.log(i + ' kelipatan 10')

    }else{
        console.log(i)
    }

}