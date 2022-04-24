const nums: number[] = [1,2,3]
const strs: string[] = ['1','2','3']
const strOrNums: (number|string)[] = [1, '2', 3]
const consts: readonly string[] = ['1']
// consts.push('2') //=> Property 'push' does not exist on type 'readonly string[]'.

// tuple types
let tuple: [string, number] = ['foo', 1]
tuple = ['bar', 2]
// tuple[2] //=> Tuple type '[string, number]' of length '2' has no element at index '2'
