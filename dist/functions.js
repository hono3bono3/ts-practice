"use strict";
{
    function range(min, max) {
        const result = [];
        for (let i = min; i <= max; i++) {
            result.push(i);
        }
        return result;
    }
    const fullName = ({ familyName, firstName }) => {
        console.log(`${familyName} ${firstName}`);
    };
    fullName({ familyName: 'tanaka', firstName: 'tarou' });
    const person = {
        birthDate: new Date('2001/07/21'),
        age() {
            const currentDate = new Date();
            const currentDateNum = currentDate.getFullYear() * 10000
                + (currentDate.getMonth() + 1) * 100
                + currentDate.getDate();
            const birthDateNum = this.birthDate.getFullYear() * 10000
                + (this.birthDate.getMonth() + 1) * 100
                + this.birthDate.getDate();
            return Math.floor((currentDateNum - birthDateNum) / 10000);
        },
    };
    // console.log(person.age()) //=> 21
    // rest parameters
    const sum = (base, ...args) => {
        for (const num of args) {
            base += num;
        }
        return base;
    };
    console.log(sum(100, 1, 2, 3, 4, 5)); //=> 115
    console.log(sum(100, 2, 4, 6, 8, 10)); //=> 130
    const xRepeat = (num) => "x".repeat(num);
    const double = (arg) => {
        console.log(arg * 2);
    };
    double(128);
    double.isused = true;
    console.log(double.isused);
    const fromAge = (age) => ({
        name: "John Smith",
        age,
    });
    const f = fromAge;
    const obj = f(100);
    console.log(obj);
}
