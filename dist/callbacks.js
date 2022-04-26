"use strict";
{
    const map = (arr, callback) => {
        return callback(arr);
    };
    console.log(map([1, 2, 3, 4, 5, 6], (arg) => {
        return arg.filter(a => (a % 2) !== 0);
    }));
}
