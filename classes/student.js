const Person = require('./person');

class Student extends Person {
    constructor (name) {
        super(name)
        this.grades = [];
        this.id = null;
        this.setDateOfBirth(null);
    } 
    getName() {
        return this.name
    } 
    setId(id) {
        if (this.id === null) {
            this.id = id;
        }
    }
    getId() {
        return this.id;
    }
    getGrades() {
        return this.grades
    }
    addGrade(course, grade) {
        this.grades.push({ course, grade });
        course.addGrade(this, grade);
    }
    getAverageGrade() {
        if (this.grades.length === 0) {
            return -1;
        } else {
            let gradesSum = this.grades.reduce((acc, grade) => acc + grade, 0);
            return gradesSum / this.grades.length;
        } 
    } 
    description() {
        return `${super.description()} Id: ${this.id}, Grades: ${this.grades.join(", ")}, Average Grade: ${this.getAverageGrade()}`;
    } 
} 

module.exports = Student;