{
    function range(min: number, max: number): number[] {
        const result = []
        for (let i = min; i <= max; i++) {
            result.push(i)
        }

        return result;
    }
    // console.log(range(5, 10)) //=> [ 5, 6, 7, 8, 9, 10 ]
    // range("5", "10") Argument of type 'string' is not assignable to parameter of type 'number'.

    type Name = {
        familyName: string
        firstName: string
    }

    const fullName = ({ familyName, firstName }: Name): void => {
        console.log(`${familyName} ${firstName}`)
    }

    fullName({ familyName: 'tanaka', firstName: 'tarou' })

    const person = {
        birthDate: new Date('2001/07/21'),
        age(): number {
            const currentDate = new Date()
            const currentDateNum = currentDate.getFullYear() * 10000
                + (currentDate.getMonth() + 1) * 100
                + currentDate.getDate()
            const birthDateNum = this.birthDate.getFullYear() * 10000
                + (this.birthDate.getMonth() + 1) * 100
                + this.birthDate.getDate()

            return Math.floor((currentDateNum - birthDateNum) / 10000)
        },
    }
    // console.log(person.age()) //=> 21

    // rest parameters
    const sum = (base: number, ...args: number[]): number => {
        for (const num of args) {
            base += num
        }
        return base
    }
    console.log(sum(100, 1, 2, 3, 4, 5)) //=> 115
    console.log(sum(100, 2, 4, 6, 8, 10)) //=> 130

    type F = (repeatNum: number) => string
    const xRepeat: F = (num: number): string => "x".repeat(num)

    // call signature
    type MyFunc = {
        (arg: number): void
        isused?: boolean
    }

    const double: MyFunc = (arg: number) => {
        console.log(arg * 2)
    }
    double(128)
    double.isused = true
    console.log(double.isused)

    type HasName = {
        name: string
    }

    type HasNameAndAge = {
        name: string
        age: number
    }

    const fromAge = (age: number): HasNameAndAge => ({
        name: "John Smith",
        age,
    })

    const f: (age: number) => HasName = fromAge
    const obj: HasName = f(100)
    console.log(obj)
}
