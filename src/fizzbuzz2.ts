{
    const getFizzBuzzStr = (num: number): string => {
        if (num % 15 === 0) {
            return 'FizzBuzz'
        }
        if (num % 5 === 0) {
            return 'Buzz'
        }
        if (num % 3 === 0) {
            return 'Fizz'
        }
        return String(num)
    }

    const sequence = (start: number, count: number): number[] => {
        const res: number[] = []
        const len: number = count + start
        for (let i = start; i < len; i++) {
            res.push(i)
        }
        return res
    }

    for (const i of sequence(10, 10)) {
        console.log(getFizzBuzzStr(i))
    }
}