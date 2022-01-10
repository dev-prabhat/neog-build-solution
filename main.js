// Easy Level

//1 - power Function that takes two input like 2 and 3 , return 2's power 3 which is 8

const power = (a, b) => {
    for (let i = 0; i < b; i++) {
        if (i < b) {
            a * power(a, b)
            console.log(a)
        }
        else break

    }
    return a;
}

console.log(power(2, 3))


//2- Area of hexagon

const areaOfHexagon = a => ((Math.sqrt(3) * 3 * a * a) / 2).toFixed(2)

console.log(areaOfHexagon(10))

// 3- Function which gives number of words in a string

const noOfWords = a => {
    let counter = 0;
    for (let i = 0; i < a.length; i++) {
        // console.log(a[i], ++counter)
        if (a[i] === " ") ++counter;
    }
    counter++
    return counter
}

console.log(noOfWords("Given n numbers, your function should return the minimum of them all"))

//4- find minimum among the array elements

const findMin = (...rest) => {
    let min = rest[0];
    for (let i = 1; i <= rest.length; i++) {
        if (min > rest[i]) min = rest[i]
    }
    return min;
}

console.log(findMin(6, -5, 1, 8))

//5- find maximum among the array elements

const findMax = (...rest) => {
    let max = rest[0]
    for (let i = 1; i <= rest.length; i++) {
        if (max < rest[i]) max = rest[i]
    }
    return max
}

console.log(findMax(6, -5, 1, 8))

//6-Is triangle or Not if it is then what type

const typeOfTriangle = (a1, a2, a3) => {
    let triangleType;
    if (a1 + a2 + a3 !== 180) {
        triangleType = "Not a Triangle at all"
    }
    else {
        if (a1 === 60 && a2 === 60 && a3 === 60)
            triangleType = "Equilateral Triangle"
        else if (a1 === a2 || a2 === a3 || a1 === a3)
            triangleType = "Isosceles Triangle"
        else
            triangleType = "Scalene Triangle"
    }
    return triangleType;
}

console.log(typeOfTriangle(60, 40, 80))

// Medium Level

//1-Length of array without array.length

const arrayLength = Arr => {
    let length = 0
    while (Arr[length] !== undefined) length++
    return length
}

console.log(arrayLength([1, 2, 4, 5]))

//2-Index of amy item in an array

const indexOf = (array, item) => {
    let index = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            index = i;
            break
        }
    }
    return index;
}

console.log(indexOf([1, 6, 3, 5, 8, 9], 3))

//3- Replacing first item to second item

const replace = (array, item1, item2) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item1) array[i] = item2;
    }
    return array
}

console.log(replace([1, 5, 3, 5, 6, 8], 5, 10))

//4- Merge Two different array into one array

const mergeArray = (array1, array2) => [...array1, ...array2]

console.log(mergeArray([1, 3, 5], [2, 4, 6]))

//5-Function gives the index of character in the given string

const charAt = (str, index) => {
    let ch1
    for (let i = 0; i < str.length; i++) {
        if (index > str.length) return "Length is smaller than index"
        else if (str[i] === str[index]) {
            ch1 = str[i]
            break;
        }
        else {
            return "Length is negative"
        }
    }
    return ch1;
}

console.log(charAt("neoGcamp", -10))

//6-

const minDate = (Date1, Date2) => {
    console.log(typeof Date1, typeof Date2)
}

minDate('02/05/2021', '24/01/2021')

//Advance Level

//1- Generates a secret code from a given string

const encodeString = (str, num) => {
    let Str = ""
    const alphaToNum = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26 },
        alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']


    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        (alphaToNum[char] + num <= 26) ? (char = alphabets[alphaToNum[char] + num - 1]) : (char = alphabets[alphaToNum[char] + num - 26 - 1])
        Str = Str.concat(char)
    }
    console.log(Str)
}

encodeString("abcdefgh", 2)