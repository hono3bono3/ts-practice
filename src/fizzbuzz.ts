let res = ''
for (let i = 1; i <= 100; i++) {
  if (i % 15 === 0) {
    res += ' FizzBuzz'
    continue
  }
  if (i % 5 === 0) {
    res += ' Buzz'
    continue
  }
  if (i % 3 === 0) {
    res += ' Fizz'
    continue
  }
  res += ' ' + String(i)
}
console.log(res.trim())
