const flatten = (list) =>{
    // reduce the array
    let result = list.reduce((result, item) => {
        // is the item an array?
        if (Array.isArray(item)) {
            // then add its flattened results to the result
            return result.concat(flatten(item))
        } else {
        // otherwise add the item to the flattened result
            return result.concat([item]);
        }
    }, []);
    return result;
}

module.exports = flatten;