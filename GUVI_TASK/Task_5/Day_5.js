//Question : Print odd numbers in an array

    //Anonymous Function
    let arr = [];
    let oddNum = function (oddnum) {
        for (let i in oddnum) {
            if (oddnum[i] % 2 !== 0) {
                arr.push(oddnum[i]);
            }
        }
        return arr;
    };
    let getOddNo = oddNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    console.log(getOddNo);

    //IIFE
    let iife_odd = [];
    let iife_oddarray = (function (oddnum) {
        for (let i in oddnum) {
            if (oddnum[i] % 2 !== 0) {
                iife_odd.push(oddnum[i]);
            }
        }
        return iife_odd;
    })([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    console.log(iife_oddarray);

    //Arrow Function
    let iife_odd = [];
    let iife_oddarray = ((oddnum) => {
        for (let i in oddnum) {
            if (oddnum[i] % 2 !== 0) {
                iife_odd.push(oddnum[i]);
            }
        }
        return iife_odd;
    });
    arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    output = iife_oddarray(arr);
    console.log(output);

    //  Output: [1, 3, 5, 7, 9]

//Question : Convert all the strings to title caps in a string array

    //Anonymous Function
    let stringArr = [];
    let StringtitleCap = function (stringobj) {
        for (let i in stringobj) {
            stringArr.push(stringobj[i].toUpperCase());
        }
        return stringArr;
    };
    let StringCaps = StringtitleCap(['aishwarya', 'neha', 'pooja', 'seema']);
    console.log(StringCaps);

    //IIFE
    let iifeStrCap = [];
    let iife_Strarray = (function (strcapobj) {
        for (let i in strcapobj) {
            iifeStrCap.push(strcapobj[i].toUpperCase());
        }
        return iifeStrCap;
    })(["s", "f", "q", "r"]);
    console.log(iife_Strarray);

    //Arrow Function
    let iifeStrCap = [];
    let iife_Strarray = ((strcapobj) => {
        for (let i in strcapobj) {
            iifeStrCap.push(strcapobj[i].toUpperCase());
        }
        return iifeStrCap;
    });
    let arrow_str = ["s", "f", "q", "r"];
    console.log(iife_Strarray(arrow_str));


//Question : Sum of all numbers in an array

    //Anonymous Function
    let addition = (function (objadd) {
        sum = 0;
        for (let i in objadd) {
            sum += objadd[i];
        }
        return sum;
    });
    const SumofNum = addition([1, 2, 3, 4, 5]);
    console.log(SumofNum);

    //IIFE
    let iifeadditon = (function (sumobj) {
        sumIife = 0;
        for (let i in sumobj) {
            sumIife += sumobj[i];
        }
        return sumIife;
    })([1, 2, 3, 4, 5, 6]);

    console.log(iifeadditon);

    //IIFE
    let iifeadditon_arrow = ((sumobj) => {
        sumIife = 0;
        for (let i in sumobj) {
            sumIife += sumobj[i];
        }
        return sumIife;
    });

    let iif_add_arr = [1, 2, 3, 4, 5, 6];
    console.log(iifeadditon_arrow(iif_add_arr));

//Question : Return all the prime numbers in an array

    //Anonymous Function
    let primearr = [];
    let check_prime = (function (primeobj) {
        for (i = 0; i < primeobj.length; i++) {
            if (primeobj[i] == 2) {
                primearr.push(primeobj[i]);
            }
            if (primeobj[i] % 2 === 0) {
            } else {
                primearr.push(primeobj[i]);
            }
        }
        return primearr;
    });
    let getPrimeNo = check_prime([1, 2, 3, 4, 5, 20, 9]);
    console.log(getPrimeNo);

    //IIFE
    let primearr = [];
    let check_prime = (function (primeobj) {
        for (i = 0; i < primeobj.length; i++) {
            if (primeobj[i] == 2) {
                primearr.push(primeobj[i]);
            }
            if (primeobj[i] % 2 === 0) {
            } else {
                primearr.push(primeobj[i]);
            }
        }
        return primearr;
    })([1, 2, 3, 4, 5, 6]);

    console.log(check_prime);

    //Arrow Function
    let primearr = [];
    let check_prime = ((primeobj) => {
        for (i = 0; i < primeobj.length; i++) {
            if (primeobj[i] == 2) {
                primearr.push(primeobj[i]);
            }
            if (primeobj[i] % 2 === 0) {
            } else {
                primearr.push(primeobj[i]);
            }
        }
        return primearr;
    });
    let iif_add_arr = [1, 2, 3, 4, 5, 6];
    console.log(check_prime(iif_add_arr));

    //Output: [1,2,3,5]

//Question : Return all the palindromes in an array
    //Anonymous 
    let palindrome = function (arr) {
        let notpalin = []
        let palin = []
        for (i = 0; i < arr.length; i++) {
            let string = arr[i].toString()
            let l = string.length
            for (let j = 0; j < l / 2; j++) {
                if (string[j] !== string[l - 1 - j]) { notpalin.push(arr[i]) }

            }
        }
        for (i = 0; i < arr.length; i++) {
            if (notpalin.includes(arr[i])) { continue }
            else (palin.push(arr[i]))
        }

        console.log(palin)
    }
    palindrome(['madam', 'test', 'abba']);

    //IIFE

    (function palindrome(arr) {
        let notpalin = []
        let palin = []
        for (i = 0; i < arr.length; i++) {
            let string = arr[i].toString()
            let l = string.length
            for (let j = 0; j < l / 2; j++) {
                if (string[j] !== string[l - 1 - j]) { notpalin.push(arr[i]) }

            }

        }
        for (i = 0; i < arr.length; i++) {
            if (notpalin.includes(arr[i])) { continue }
            else (palin.push(arr[i]))
        }

        console.log(palin);
    })(['madam', 'test', 'abba'])

    //Arrow Function:

    let palindromearrow = ((arr) => {
        let notpalin = []
        let palin = []
        for (i = 0; i < arr.length; i++) {
            let string = arr[i].toString()
            let l = string.length
            for (let j = 0; j < l / 2; j++) {
                if (string[j] !== string[l - 1 - j]) { notpalin.push(arr[i]) }

            }
        }
        for (i = 0; i < arr.length; i++) {
            if (notpalin.includes(arr[i])) { continue }
            else (palin.push(arr[i]))
        }

        console.log(palin)
    });

    let arr = ['madam', 'test', 'abba'];
    palindromearrow(arr);

    //Output:  ['madam', 'abba']

//Question : Return median of two sorted arrays of same size
    
    //IIFE
    (function med(array1, array2) {
        let arr = array1.concat(array2).sort()
        let l = arr.length
        median = (arr[(l / 2) - 1] + arr[l / 2]) / 2
        console.log(median)
    })([10, 22, 50, 41], [11, 80, 1, 4])

    //Ananymous Function
    let Mediananon = function (arr1, arr2) {
        let arr = arr1.concat(arr2).sort()
        let l = arr.length
        median = (arr[(l / 2) - 1] + arr[l / 2]) / 2
        console.log(median)
    }
    Mediananon([10, 22, 50, 41], [11, 80, 1, 4]);

    //Output:13

//Question : Remove duplicates from an array

    //IIFE
    (function duplicate(arr) {
        let obj = {}
        arr.map(b => obj[b] = 1)
        console.log(Object.keys(obj))
    })([1, 2, 4, 52, 1, 3])

    //Ananymous Function
    let duplicateanon = function (arr) {
        let obj = {}
        arr.map(b => obj[b] = 1)
        console.log(Object.keys(obj))
    }
    duplicateanon([1, 2, 4, 52, 1, 3]);

    //output: ['1', '2', '3', '4', '52']


//Question : Rotate an array by k times

    //IIFE
    (function rotate(arr, k) {
        for (i = 1; i <= k; i++) {
            arr.unshift(arr[arr.length - 1])
            arr.pop()
        }
        console.log(arr)
    })([12, 45, 3, 5], 1);
    //OUTPUT: [5, 12, 45, 3];
    
    //Ananymous Function
    let rotate = function (arr, k) {
        for (i = 1; i <= k; i++) {
            arr.unshift(arr[arr.length - 1])
            arr.pop()
        }
        console.log(arr)
    }
    rotate([12, 45, 3, 5], 5);
    //OUTPUT: [5, 12, 45, 3];



