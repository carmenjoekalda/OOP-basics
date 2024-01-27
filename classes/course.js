class Course {
    constructor (name) {
        this.name = name;
        this.grades = []; 
    } 
    getName() {
        return this.name
    } 
    getGrades(student, grade) {
        return this.grades
    } 
    addGrade(student, grade) {
        this.grades.push({ student, grade })
    }
    getAverageGrade() {
        if (this.grades.length === 0) {
            return -1;
        } else {
            let total = this.grades.reduce((sum, item) => sum + item.grade, 0);
            return total / this.grades.length;
        }
    }
    description() {
        return `Name of the course: ${this.name}, Grades: ${this.grades}, Average grade: ${this.getAverageGrade()}`;
    } 
} 

module.exports = Course;