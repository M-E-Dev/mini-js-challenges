function mergeArrays(a,b) {
    return merged = (a.concat(b)).sort((a,b) => a-b)
}

console.log(mergeArrays([10,3,45], [45,7,15]))


// empty control