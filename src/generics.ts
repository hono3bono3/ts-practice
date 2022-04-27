/* eslint-disable no-lone-blocks */
{
  function repeat<T>(elm: T, len: number): T[] {
    const res: T[] = []
    for (let i = 0; i < len; i++) {
      res.push(elm)
    }
    return res
  }

  console.log(repeat<string>('x', 8))
  console.log(repeat<number>(3, 3))

  const repeat2 = <T>(elm: T, len: number): T[] => {
    const res: T[] = []
    for (let i = 0; i < len; i++) {
      res.push(elm)
    }
    return res
  }

  console.log(repeat2<string>('y', 3))
  console.log(repeat2<number>(1, 12))

  const pair = <L, R>(l: L, r: R): [L, R] => [l, r]
  const p = pair<string, number>('hoge', 123)
  console.log(p)
}
