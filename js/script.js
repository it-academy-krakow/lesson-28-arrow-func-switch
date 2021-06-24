const person = {
    name: 'John',
    surname: 'Wick',
    getFullName: function () {
        console.log(`${this.name} ${this.surname}`);

        const innerFunction = () => {
            console.log(this);
        }

        innerFunction();
    }
}

const person2 = {
    name: 'John',
    surname: 'Wick',
    getFullName: () => {
        console.log('Text');
        // console.log(`${this.name} ${this.surname}`);
        // console.log(this);
    }
}

const checkMonth = (monthNr) => {
    switch (monthNr) {
        case 1:
            console.log('January');
            break;
        case 2:
            console.log('February');
            break;
        case 3:
            console.log('March');
            break;
        default:
            console.log('Not found')
    }
}
// checkMonth(12);


const checkMonth2 = (monthNr) => {
    switch (monthNr) {
        case 1:
            return 'January';
        case 2:
            return 'February';
        case 3:
            return 'March';
        default:
            return 'Not found';
    }
}

const testFunction = (number) => {
    if (number === 1) {
        return 'January';
    } else if (number === 2) {
        return 'February';
    } else {
        return 'Not found';
    }
}

const func = () => {
    return 'test';
}

const result = checkMonth2(3)
console.log('🚀 ~ result', result)


// const checkMonth = (monthNr) => {
//     if (monthNr === 1) {
//         console.log('January');
//     } else if (monthNr === 2) {
//         console.log('February');
//     } else {
//         console.log('Not found')
//     }
// }

// person2.getFullName();
// person.getFullName();

