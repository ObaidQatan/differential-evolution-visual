type Store = {
    [key:string]: {
        value: any,
        setter: any
    }
}

var store: Store = {};

export const setPair = (key: string, value: any, setter: any)=>{
    store[key] = {
        value,
        setter
    }
}

export const getPair = (key: string)=>{
    return store[key].value;
}