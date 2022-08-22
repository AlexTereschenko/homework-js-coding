1. // permute - Return an array of strings, containing every permutation of the given string.
permute('')             // []
permute('abc')          // ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']

2. // seq - Resolve an array of promises in sequence (as opposed to Promise.all, which does it in parallel).
let a = Promise.resolve('a')
let b = Promise.resolve('b')
let c = Promise.resolve('c')
await seq([a, b, c])                  // ['a', 'b', 'c']
await seq([a, c, b])                  // ['a', 'c', 'b']