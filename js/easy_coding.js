1. // isPrime - Returns true or false, indicating whether the given number is prime.
isPrime(0)                          // false
isPrime(1)                          // false
isPrime(17)                         // true
isPrime(10000000000000)             // false

isPrime(149) 

/////////////////////////////////Solving////////////////////////////////////
console.log('');
function isPrime(n) {
    if (n>1) {
        if (n === 2 || n === 3 || n === 5 || n === 7) {
            return console.log(n+' isPrime ' + true);
            } else if (n % 1 === 0 && n %2 !== 0 && n %3 !== 0 && n %5 !== 0) {
                return console.log(n+' isPrime ' + true);
            }
    }
    return console.log(n+' isPrime ' + false);
}
////////////////////////////////////////////////////////////////////////////

2. // factorial - Returns a number that is the factorial of the given number.
factorial(0)                        // 1
factorial(1)                        // 1
factorial(6)                        // 720

factorial(-1)

/////////////////////////////////Solving////////////////////////////////////
console.log('');
function factorial(n) {
    let result=1;
    if (n < 0) return console.log(n+' is incorrect value, please insert the correct value that is >=0');
    if (n === 0) return console.log('Factorial to number '+ n +' is '+result);
    else {
        for (let i=1; i<=n; i++) {
            result *=i;
        }
    }
    return console.log('Factorial to number '+ n +' is '+result);
}
////////////////////////////////////////////////////////////////////////////

3. // fib - Returns the nth Fibonacci number.
fib(0)                              // 0
fib(1)                              // 1
fib(10)                             // 55
fib(20)                             // 6765

fib(-10)

/////////////////////////////////Solving////////////////////////////////////
console.log('');
function fib(n) {
    let result = 0;
    if (n === 0) return console.log(n+'th fibonacci number is '+0);
    if (n === 1) return console.log(n+'th fibonacci number is '+1);
    if (n > 1) {
        let prev = 0;
        let current = 1;
        for (let i=0; i<n-1; i++) {
            result = current + prev;
            prev = current;
            current = result;
        }
        return console.log(n+'th fibonacci number is '+result);
    };
    if (n < 0) {
        let prev = 1;
        let current = 0;
        for (let i=0; i>n; i--) {
            result = prev - current;
            prev = current;
            current = result;
        }
        return console.log(n+'th fibonacci number is '+result);
    };
}
////////////////////////////////////////////////////////////////////////////

4. // isSorted - Returns true or false, indicating whether the given array of numbers is sorted.
isSorted([])                        // true
isSorted([-Infinity, -5, 0, 3, 9])  // true
isSorted([3, 9, -3, 10])            // false

isSorted([-Infinity, null, Infinity])

/////////////////////////////////Solving////////////////////////////////////
console.log('');
function isSorted(arr) {
    for (let i=1; i<arr.length; i++) {
        if (arr[i-1]>arr[i]) return console.log('Array ['+arr+'] is sorted? '+false);
    }
    return console.log('Array ['+arr+'] is sorted? '+true);
}
////////////////////////////////////////////////////////////////////////////

5. // reverse - Reverses the given string (yes, using the built in reverse function is cheating).
reverse('')                         // ''
reverse('abcdef')                   // 'fedcba'

reverse('21324')

/////////////////////////////////Solving////////////////////////////////////
console.log('');
function reverse(str) {
    let reversed=[];
    for (let i=0; i<str.length; i++) {
        reversed.unshift(str[i]);
    }
    reversed=reversed.join('')
    return console.log('reversed to "'+str+'" would be "'+reversed+'"');
}
////////////////////////////////////////////////////////////////////////////

6. //indexOf - Implement the indexOf function for arrays.
indexOf([1, 2, 3], 1)               // 0
indexOf([1, 2, 3], 4)               // -1

indexOf([1, 2, 3, 2, 3], 2) 

/////////////////////////////////Solving////////////////////////////////////
console.log('');
function indexOf(arr, chr) {
    let indexes=[];

    for (let i=0; i<arr.length; i++) {
        if (arr[i] == chr) {
            indexes.push(i)
        }
    }
    if (indexes.length === 0) {
        indexes.push(-1)
    }

    return console.log('Index(es) of "'+chr+'" in array ['+arr+'] is/are ['+ indexes+']');
}
////////////////////////////////////////////////////////////////////////////

7. // isPalindrome - Return true or false indicating whether the given string is a plaindrone (case and space insensitive).
isPalindrome('')                                // true
isPalindrome('abcdcba')                         // true
isPalindrome('abcd')                            // false
isPalindrome('A man a plan a canal Panama')     // true

isPalindrome('tenet')

/////////////////////////////////Solving////////////////////////////////////
console.log('');
function isPalindrome(str) {
    let result=true;
    let unspacedStr = str.split(' ').join('').toLowerCase();

    for (let i=0; i<unspacedStr.length; i++) {
        if (unspacedStr[i] !== unspacedStr[unspacedStr.length-1-i]) {
            result=false;
        }
    }

    return console.log('['+str+'] is a polindrome? '+ result);
}
////////////////////////////////////////////////////////////////////////////

8. // missing - Takes an unsorted array of unique numbers (ie. no repeats) from 1 through some number n, and returns the missing number in the sequence (there are either no missing numbers, or exactly one missing number). Can you do it in O(N) time? Hint: There’s a clever formula you can use.
missing([])                         // undefined
missing([1, 4, 3])                  // 2
missing([2, 3, 4])                  // 1
missing([5, 1, 4, 2])               // 3
missing([1, 2, 3, 4])               // undefined

missing([1, 2, 3])

/////////////////////////////////Solving////////////////////////////////////
console.log('');
function missing(arr) {
    let sortedArr = arr;
        sortedArr = sortedArr.sort();

    if (sortedArr.length === 0) return  console.log('arr ['+arr+'] is missing '+ undefined);
    if (sortedArr[0] !== 1) return  console.log('arr ['+arr+'] is missing '+ 1);

    for (let i=0; i<sortedArr.length; i++) {
        if (sortedArr[i] !== i+1) return  console.log('arr ['+arr+'] is missing '+ (i+1));
    }

    return  console.log('arr ['+arr+'] is missing '+ undefined);
}
////////////////////////////////////////////////////////////////////////////

9. // isBalanced - Takes a string and returns true or false indicating whether its curly braces are balanced.
isBalanced('}{')                      // false
isBalanced('{{}')                     // false
isBalanced('{}{}')                    // false
isBalanced('foo { bar { baz } boo }') // true
isBalanced('foo { bar { baz }')       // false
isBalanced('foo { bar } }')           // false

/////////////////////////////////Solving////////////////////////////////////
console.log('');
function isBalanced(str) {
    let sortedArr = arr.sort();

    if (sortedArr.length === 0) return  console.log('arr ['+arr+'] is missing '+ undefined);
    if (sortedArr[0] !== 1) return  console.log('arr ['+arr+'] is missing '+ 1);

    for (let i=0; i<sortedArr.length; i++) {
        if (sortedArr[i] !== i+1) return  console.log('arr ['+arr+'] is missing '+ (i+1));
    }

    return  console.log('String "'+arr+'" is missing '+ undefined);
}
////////////////////////////////////////////////////////////////////////////