export default (set1: any[], set2: any[]) => {
    if(set1.length !== set2.length)
        throw new Error("zip: indices do not match.");

    let zipped: Array<Array<any>> = [];

    zipped = set1.map((s1,i)=> [s1,set2[i]] );

    return zipped;
}