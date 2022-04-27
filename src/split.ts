type User = {
  name: string
  age: number
  premiumUser: boolean
}

const data: string = `
uhyo,26,1
John Smith,17,0
Mary Sue,14,1
`
const users: User[] = []
for (const d of data.split('\n')) {
  if (d.length === 0) {
    continue
  }
  const [name, age, paremiumUser] = d.split(',')
  users.push({
    name,
    age: +age,
    premiumUser: !!+paremiumUser,
  })
}

for (const user of users) {
  user.premiumUser === true
    ? console.log(`${user.name}(${user.age})はプレミアムユーザーです`)
    : console.log(`${user.name}(${user.age})はプレミアムユーザーではありません`)
}
