1. // isBalanced2 - Like the isBalanced function you implemented above, but supports 3 types of braces: curly {}, square [], and round (). A string with interleaving braces should return false.
isBalanced2('(foo { bar (baz) [boo] })') // true
isBalanced2('foo { bar { baz }')         // false
isBalanced2('foo { (bar [baz] } )')      // false

2. // uniq - Takes an array of numbers, and returns the unique numbers. Can you do it in O(N) time?
uniq([])                              // []
uniq([1, 4, 2, 2, 3, 4, 8])           // [1, 4, 2, 3, 8]

3. // intersection - Find the intersection of two arrays. Can you do it in O(M+N) time (where M and N are the lengths of the two arrays)?
intersection([1, 5, 4, 2], [8, 91, 4, 1, 3])    // [4, 1]
intersection([1, 5, 4, 2], [7, 12])             // []

4. // assignDeep - Like Object.assign, but merges objects deeply.
assignDeep({ a: 1 }, {})                                      // { a: 1 }
assignDeep({ a: 1 }, { a: 2 })                                // { a: 2 }
assignDeep({ a: 1 }, { a: { b: 2 } })                         // { a: { b: 2 } }
assignDeep({ a: { b: { c: 1 }}}, { a: { b: { d: 2 }}, e: 3 }) // { a: { b: { c: 1, d: 2 }}, e: 3 }