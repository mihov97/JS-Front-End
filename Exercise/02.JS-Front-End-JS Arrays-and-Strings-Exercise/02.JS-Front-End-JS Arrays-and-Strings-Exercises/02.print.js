function solve(array, rotations) {
    let result = [];
    for (let i=0; i < array.length; i+= rotations ){
        result.push(array[i])
    }
    
    return result;

}