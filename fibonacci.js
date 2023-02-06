// solution to generating the fibonacci sequence iteratively

function fibIterative(n) {
    const arr = [0,1]

    while (arr.length < n ) {
        arr.push(arr[arr.length - 2] + arr[arr.length - 1])
    }

    return arr;
}

console.log(fibIterative(8));



// solution to generating the fibonacci sequence recursively


function fibRecursive(n, a = [0,1]) {
    if (a.length >= n) return a;
    return fibRecursive(n, [...a, a[a.length - 2] + a[a.length - 1]])
}

console.log(fibRecursive(8))