class Person {
    constructor (name) {
        this.name = name;
    } 
    setDateOfBirth(year) {
        this.year = year;
    } 
    getDateOfBirth() {
        return this.year;
    } 
    age() {
        return new Date().getFullYear() - this.year;
    } 
    getName() {
        return this.name
    }
    description() {
        return `Name: ${this.name}, Year of Birth: ${this.year}, Age: ${this.age()}`;
    } 
} 

module.exports = Person