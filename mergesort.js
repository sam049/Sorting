function split(wholeArray) {
    if (wholeArray.length === 0) {
        return
    } else if (wholeArray.length === 1) {
        return wholeArray
    }

    let midpoint = Math.floor((wholeArray.length) / 2)
    let firstHalf = wholeArray.slice(0, midpoint)
    let secondHalf = wholeArray.slice(midpoint, wholeArray.length)

  
    return [firstHalf, secondHalf];
  }
//this splits it, want to keep splitting until arrays are length 2


// [1, 18], [5, 7]
function merge(arr1, arr2) {
    let mergedArray = []
    let finalArray = []
    
    while (arr1.length !== 0 && arr2.length !== 0) {
        if (arr1.length === 0) {
            finalArray = mergedArray.push(arr2)
        } else if (arr2.length === 0) {
            finalArray = mergedArray.concat(arr1)
        }
        if (arr1[0] < arr2[0]) {
            mergedArray.push(arr1.shift())
        } else {
            mergedArray.push(arr2.shift())
        }
    }

    return finalArray
}

// 1, 5,  30, 70, 100

// function mergeSort(array) {
//     if (array[array.length].length === 1) {
//         return array
//     } else {
//         split(array)
//     } 
  
//   }

