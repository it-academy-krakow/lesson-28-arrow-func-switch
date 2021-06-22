const Person = function (name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.showName = function () {
        console.log(this.name)
    }
}

class PersonUpdated {
    constructor(name) {
        this.name = name;
    }

    showName() {
        console.log(this.name)
    }
}

const testPerson = function (name, surname, age) {
    return {
        name: name,
        surname: surname,
        age: age
    }
}

const person1 = new Person('Mike', 'Test', 12);
person1.showName();
// const person2 = new Person('Mike2', 'Test2', 22);
// const person3 = new Person('Mike3', 'Test3', 32);

// const person4 = testPerson('Mike4', 'Test4', 52);

const person5 = new PersonUpdated('Mike4');
person5.showName();

console.log(person1);
console.log(person2);
console.log(person3);
console.log(person4);
console.log(person5);
