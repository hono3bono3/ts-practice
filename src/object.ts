type BarBaz = {
    bar: number,
    readonly baz: number,
    hoge?: string,
}

const obj1: BarBaz = {
    bar: 456,
    baz: 789,
}

obj1.bar = 445566

const obj2 = {
    foo: 123,
    ...obj1
}

type T = typeof obj2

const obj3: T = {
    foo: 111,
    bar: 222,
    baz: 333,
}

console.log(obj2)