"use strict";
{
    function repeat(elm, len) {
        const res = [];
        for (let i = 0; i < len; i++) {
            res.push(elm);
        }
        return res;
    }
    console.log(repeat("x", 8));
    console.log(repeat(3, 3));
    const repeat2 = (elm, len) => {
        const res = [];
        for (let i = 0; i < len; i++) {
            res.push(elm);
        }
        return res;
    };
    console.log(repeat2("y", 3));
    console.log(repeat2(1, 12));
    const pair = (l, r) => [l, r];
    const p = pair("hoge", 123);
    console.log(p);
}
