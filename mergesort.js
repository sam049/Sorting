function split(wholeArray) {
    if (wholeArray.length === 0) {
        return
    } else if (wholeArray.length === 1) {
        return wholeArray
    }

    let midpoint = Math.floor((wholeArray.length) / 2)
    let firstHalf = wholeArray.splice(0, midpoint)
    let secondHalf = wholeArray.splice(midpoint, wholeArray.length -1)

  
    return [firstHalf, secondHalf];
  }



