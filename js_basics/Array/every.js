const array = ['a', 'b', 'c'];
const arrayA = ['a', 'a', 'a'];

const array_1 = array.every((value) =>{
    if(value === 'a'){
        return value
    }
})
const array_2 = arrayA.every((value) =>{
    if(value === 'a'){
        return value
    }
})

console.log(array_1, array_2);