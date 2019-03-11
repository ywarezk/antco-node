

// oop

// how to create class in js

// function Person() {

// }

class Person {

    constructor(age = 13) {

        this.age = age;

        this._msg = 'hello';

        this.birthday = this.birthday.bind(this);
    }

    set message(value) {
        this._msg = value;
    }

    get message() {
        return this._msg + 'from person';
    }

    birthday() {
        this.age++;
    }

}

const me = new Person(33);



const you = new Person();

console.log(you.age); // 13

me.message = 'foo bar';

console.log(me.message)

// inheritance

class Student extends Person {

    constructor(age, grade) {
        super(age);
        this.grade = grade;
    }

    birthday() {
        super.birthday();
        console.log('this is called from student')
    }


}

//Student.prototype.birthday = function() {}

// this
// 1. this can change
// 2. this is determined from the object that runs the function


console.log(me.age); // 33

me.birthday();

console.log(me.age); // 34

const stamObj = { birthdayFromObject: me.birthday }

stamObj['birthdayFromObject']()

console.log(me.age); // 34  this will be stamObj



exports.Student = Student;
exports.Person = Person;




