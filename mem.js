function Arrays2D(arr , index = 0, dembien=1 ,newArr = []){
    if(index > arr.length -1){
        return newArr;
    }
    var count =0;
    for(var i=0 ; i< arr[index].length ; i++){
        if(arr[index][i] == 0){
            count+=1;
            dembien = dembien * count;
            for(var j=0 ; j< dembien; j++){
                if(Array.isArray(newArr[j]) == false){
                    if(newArr.length == 0){
                        newArr[j] = [];
                    }
                    else{
                        let vl = dembien - j - 1;
                        newArr[j] = [... newArr[vl]];
                        newArr[j][newArr[j].length-1] = i;  
                        continue;
                    }
                }
                if(newArr[j].length == index+1){
                    continue;
                }
                else{
                    newArr[j].push(i);  
                }
            }   
        }
    }
    index ++;
    return Arrays2D(arr , index ,dembien, newArr);
}