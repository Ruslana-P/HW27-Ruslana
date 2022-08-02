const Person = require('./module_person');

class Student extends Person {
    constructor (name, age, gender, interests) {
        super(name, age, gender, interests)
    }
}

module.exports = Student;

