export default (arr: any[], num: number) => {
    let result = new Array(num),
        len = arr.length,
        taken = new Array(len);

    if(num > len)
        throw RangeError("Numer of sample out of range.")
    
        while(num--){
            let x = Math.floor(Math.random() * len);
            result[num] = arr[x in taken ? taken[x] : x];
            taken[x] = --len in taken ? taken[len] : len;
        }

        return result;
}