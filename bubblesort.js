// if arr.length is 0 don't push it onto the array
// but if 1 push it on



  function bubbleSort(array) {
    if (array.length === 1 || array.length === 0) {
        return array
    } else {
        let count = 0
        let swappedArray;
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i+1]) {
                swappedArray = swap(array, i)
                count++
            }
        }
        if (count !== 0) {
            return bubbleSort(swappedArray)
        } else {
            return array
        }
    }
  }

  function swap(array, index) {
    let temp1 = array[index]
    let temp2 = array[index+1]
    array[index] = temp2
    array[index + 1] = temp1
    console.log(array + '\n')
    return array
  }

  //swap returns array with sawpped out elements, 