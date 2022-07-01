export default (num: number)=>{
    let range: number[] = [];
    [...Array(num)].map((_,i) => range.push(i));

    return range;
}