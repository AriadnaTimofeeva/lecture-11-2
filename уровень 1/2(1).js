/*
Задача2:
Создайте функцию-конструктор Person, которая принимает два аргумента: имя (name) и возраст (age).
Каждый объект, созданный через эту функцию, должен:
Иметь метод greet(), который выводит: "Привет, меня зовут [имя], мне [возраст] лет.".
Создайте два экземпляра Person с разными именами и возрастами.
Выведите приветствия для обоих экземпляров.
*/


// функция-конструктор:
function Person(name, age) {
    this.name = name; 
    this.age = age;
}

// метод greet():
Person.prototype.greet = function() {
    console.log(`Привет, меня зовут ${this.name}, мне ${this.age} лет.`);
};


const person1 = new Person("SCP-7777", 7777);
const person2 = new Person("SCP-999", 999);
const person3 = new Person("SCP-173", 173);

person1.greet(); 
person2.greet(); 
person3.greet();