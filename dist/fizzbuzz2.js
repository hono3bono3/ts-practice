"use strict";
{
    const getFizzBuzzStr = (num) => {
        if (num % 15 === 0) {
            return 'FizzBuzz';
        }
        if (num % 5 === 0) {
            return 'Buzz';
        }
        if (num % 3 === 0) {
            return 'Fizz';
        }
        return String(num);
    };
    const sequence = (start, count) => {
        const res = [];
        const len = count + start;
        for (let i = start; i < len; i++) {
            res.push(i);
        }
        return res;
    };
    for (const i of sequence(10, 10)) {
        console.log(getFizzBuzzStr(i));
    }
}
