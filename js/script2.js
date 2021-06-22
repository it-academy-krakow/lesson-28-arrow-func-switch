const person1 = {
    name: 'TestName',
    surname: 'TestSurname',
}

const person2 = {
    name: 'TestName2',
    surname: 'TestSurname2'
}

const showName = function (age) {
    console.log(`${this.name} ${this.surname} ${age}`);
}


// bind
const boundShowName = showName.bind(person2);
// boundShowName(15);

//call
showName.call(person1, 14);

//apply
showName.apply(person1, [24]);

