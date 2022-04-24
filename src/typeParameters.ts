type HasName = {
    name: string
}

type Family<Parent extends HasName, Child extends HasName> = {
    father: Parent,
    mother: Parent,
    child?: Child,
}

const obj: Family<{ name: string }, { name: string }> = {
    father: { name: 'tarou' },
    mother: { name: 'hanako' },
    child: { name: 'bouya' }
}

type Human<Name = string, Age = number> = {
    name: Name
    age: Age
}

const human: Human = {
    name: 'tarou',
    age: 19,
}