const Teacher = require('./module_teacher');
const Student = require('./module_student');

let teacher1 = new Teacher('Ted', '32', 'male', 'hokey', 'biology');
let student1 = new Student('Maria', '18', 'female', 'joga');

console.log(teacher1);
console.log(student1);