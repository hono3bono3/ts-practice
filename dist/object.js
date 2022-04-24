"use strict";
const obj1 = {
    bar: 456,
    baz: 789,
};
obj1.bar = 445566;
const obj2 = {
    foo: 123,
    ...obj1
};
const obj3 = {
    foo: 111,
    bar: 222,
    baz: 333,
};
console.log(obj2);
