function shoppingTime(memberId, money) {
    // you can only write your code here!
    var obj = {}
    var barang = [['Sepatu Staccatu', 1500000], 
    ['Baju Zorro', 500000], 
    ['Baju H&N', 250000], 
    ['Sweeter Uniklooh', 175000], 
    ['Casing Handphone', 50000]]
    
    if(memberId === '' || memberId === undefined && money === undefined ){  
            return 'Mohon maaf, toko X hanya berlaku untuk member saja'
    }else if(money < 50000){
        return 'Mohon maaf uang tidak cukup'
    }else{
        obj.memberId = memberId
        obj.money = money
    }

    var temp = 0
    obj.listPurchased = []
    
    for(var i = 0; i < barang.length; i++){
        if(money > barang[i][1]){
            obj.listPurchased.push(barang[i][0])
            temp += barang[i][1]
        }
        obj.ChangeMoney = money - temp

    }
    return obj
 
  }
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
//     //{ memberId: '1820RzKrnWn08',
//     // money: 2475000,
//     // listPurchased:
//     //  [ 'Sepatu Stacattu',
//     //    'Baju Zoro',
//     //    'Baju H&N',
//     //    'Sweater Uniklooh',
//     //    'Casing Handphone' ],
//     // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja