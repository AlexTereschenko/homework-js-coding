1. // permute - Return an array of strings, containing every permutation of the given string.
permute('')             // []
permute('abc')          // ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']

/////////////////////////////////Solving////////////////////////////////////
console.log('');
function permute(str) {
    let result=[];
    let counterOfRepeats = str.length-1;
    let indexOfChr = 0;

    if (counterOfRepeats<0) return console.log('All possible permutaging of string "'+str+'" are ['+result+']')

    permuteInner(str, indexOfChr)

    function permuteInner(str, indexOfChr) {

        if (indexOfChr == counterOfRepeats) result.push(str);
        else {
           for (let i = indexOfChr; i <= counterOfRepeats; i++) {
                str = swap(str, indexOfChr, i);
                permuteInner(str, indexOfChr + 1);
                str = swap(str, indexOfChr, i);
            }
        }
    }

    function swap(arr, index, newIndex) {
        let temp;
        let charArray = arr.split('');

        temp = charArray[index] ;
        charArray[index] = charArray[newIndex];
        charArray[newIndex] = temp;

        return (charArray).join('');
    }

    return console.log('All possible permutaging of string "'+str+'" are ['+result+']')
}
////////////////////////////////////////////////////////////////////////////

// 2. // seq - Resolve an array of promises in sequence (as opposed to Promise.all, which does it in parallel).
// let a = Promise.resolve('a')
// let b = Promise.resolve('b')
// let c = Promise.resolve('c')
// await seq([a, b, c])                  // ['a', 'b', 'c']
// await seq([a, c, b])                  // ['a', 'c', 'b']



