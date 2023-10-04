function filterBy(arr, dataTypes) {
    let filterArr = [];


    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== dataTypes) {
            filterArr.push(arr[i]); 
        }
    }

    return filterArr
}



const inputArray = ['hello', 'world', 23, '23', null];
const filteredResult = filterBy(inputArray, 'string');
console.log(filteredResult); 

