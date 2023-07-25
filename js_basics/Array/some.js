const array = ['a', 'b', 'c'];
const arrayA = ['a', 'a', 'a'];
const arrayB = ['b', 'b', 'b'];

const array_1 = array.some((value) =>{
    if(value === 'a'){
        return value
    }
})
const array_2 = arrayA.some((value) =>{
    if(value === 'a'){
        return value
    }
})
const array_3 = arrayB.some((value) =>{
    if(value === 'a'){
        return value
    }
})

console.log(array_1, array_2, array_3);