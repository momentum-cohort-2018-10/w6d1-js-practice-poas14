


let arrayTest = [5, 4, 3, 9, 8, 2, 4]

function SelectionSort(array) {
    let x = 0
    //this is the current lowest element being tested//
    let y = 1
    //this is the element x is being compared to//
    let loopCount = 0
    //this is how it knows how many times to loop over the array//
    while (loopCount < (array.length - 1)) {
        console.log(`${array[x]} or ${array[y]}?`)
        if (array[x] <= array[y]) {
            y += 1
            console.log(x)
            console.log(y)
            loopCount += 1
            continue
        }
        if (array[x] > array[y]) {
            x = y
            y += 1
            console.log(x)
            console.log(y)
            loopCount += 1
            continue
        }
    }
    // console.log(x)
    // if (array[x] <= array[loopCount]) {
    //     array.splice(loopCount, 0, array[x])
    // } if (array[x] <= array[loopCount]) {
    //     array.splice((loopCount + 1), 0, array[x])
    // }
    console.log(array)
}

SelectionSort(arrayTest)