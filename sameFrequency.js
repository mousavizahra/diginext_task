function sameFrequency(first,second) {
    let str1 = first.toString() ;
    let str2 = second.toString() ; 

   if(str1.length !== str2.length){
    return false;
    }
    

    let count1 = {}
    let count2 = {}
    for(let i = 0; i< str1.length; i++){
        let digit = str1[i];
        if(count1[digit]){
            count1[digit]++;
        }else{
            count1[digit] = 1;
        }
    }

    for(let i = 0; i< str2.length; i++){
        let digit = str2[i];
        if(count2[digit]){
            count2[digit]++;
        }else{
            count2[digit] = 1;
        }
    }
    for(let key in count1){
        if(count1[key] !== count2[key]){
            return false;
        }
    }

    return true
}

const result =sameFrequency(122,212)
console.log(result)