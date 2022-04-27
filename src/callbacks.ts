const map = (
  arr: number[],
  callback: (arg: number[]) => number[],
): number[] => {
  return callback(arr)
}

console.log(
  map([1, 2, 3, 4, 5, 6], (arg: number[]): number[] => {
    return arg.filter((a) => a % 2 !== 0)
  }),
)
