/*
Задача 2:
1.Создайте базовый конструктор Pet, который принимает параметры:
name — имя питомца.
age — возраст питомца.
2.Методы в Pet:
describe() — возвращает строку вида "Имя: [name], Возраст: [age]".
isOld() — метод, который возвращает true, если возраст питомца больше 10 лет, иначе false.
3.Создайте конструктор Dog, который наследует от Pet и добавляет новое свойство:
breed — порода собаки.
4.Методы в Dog:
describe() — переопределите метод describe(), чтобы он возвращал строку вида "Имя: [name], Возраст: [age], Порода: [breed]".
bark() — возвращает строку "[name] лает!".
fetch(item) — метод, который возвращает строку "[name] приносит [item]".
5.Создайте конструктор GuardDog, который наследует от Dog и добавляет новое свойство:
trainingLevel — уровень подготовки собаки.
6.Методы в GuardDog:
guard() — возвращает строку "[name] охраняет территорию на уровне [trainingLevel]".
Переопределите метод bark(), чтобы он возвращал строку "[name] лает громко!", если уровень подготовки выше 5.
7.Добавьте статический метод compareAges(pet1, pet2) в Pet:
Метод сравнивает возраст двух питомцев и возвращает, кто старше.
8.Проверьте систему:
Создайте объекты для Pet, Dog и GuardDog.
Проверьте наследование методов, добавление новых свойств, а также работу переопределённых методов.
*/


// 1.базовый конструктор Pet:
function Pet(name, age) {
    this.name = name;
    this.age = age;
}

// 2.метод describe и isOld:
Pet.prototype.describe = function() {
    return `Имя: ${this.name}, Возраст: ${this.age}`;
};

Pet.prototype.isOld = function() {
    return this.age > 10;
};


// 7. статический метод compareAges:
Pet.compareAges = function(pet1, pet2) {
    if (pet1.age > pet2.age) {
        return `Питомец ${pet1.name} старше ${pet2.name}`;
    } else if (pet1.age < pet2.age) {
        return `Питомец ${pet2.name} старше ${pet1.name}`;
    } else {
        return `Питомцы ${pet1.name} и ${pet2.name} одного возраста`;
    }
};


// 3.конструктор Dog, наследующий от Pet:
function Dog(name, age, breed) {
    Pet.call(this, name, age); // вызов конструктора Pet
    this.breed = breed;
}

// 3.установка прототипа Dog:
Dog.prototype = Object.create(Pet.prototype);
Dog.prototype.constructor = Dog;


// 4.переопределение метода describe:
Dog.prototype.describe = function() {
    return `Имя: ${this.name}, Возраст: ${this.age}, Порода: ${this.breed}`;
};

// 4.метод bark и fetch:
Dog.prototype.bark = function() {
    return `${this.name} лает!`;
};

Dog.prototype.fetch = function(item) {
    return `${this.name} приносит ${item}.`;
};


// 5.конструктор GuardDog, наследующий от Dog:
function GuardDog(name, age, breed, trainingLevel) {
    Dog.call(this, name, age, breed); // вызов конструктора Dog
    this.trainingLevel = trainingLevel;
}

// 5.установка прототипа GuardDog:
GuardDog.prototype = Object.create(Dog.prototype);
GuardDog.prototype.constructor = GuardDog;


// 6.метод guard:
GuardDog.prototype.guard = function() {
    return `${this.name} охраняет территорию на уровне ${this.trainingLevel}.`;
};
// 6.переопределение метода bark:
GuardDog.prototype.bark = function() {
    if (this.trainingLevel > 5) {
        return `Питомец ${this.name} лает очень громко!`;
    } else {
        return `Питомец ${this.name} лает!`;
    }
};


// 8.проверка системы:
const pet = new Pet("Cнежок", 7);
console.log(pet.describe()); 
console.log(`Питомец старше 10 лет? - ${pet.isOld()}`); 

const dog = new Dog("Маленькая ярость", 3, "Чихухуа");
console.log(dog.describe());
console.log(dog.bark()); 
console.log(dog.fetch("мячик")); 

const guardDog = new GuardDog("Пушок", 1, "Шпиц", 99);
console.log(guardDog.describe()); 
console.log(guardDog.bark()); 
console.log(guardDog.guard()); 

console.log(Pet.compareAges(pet, dog)); 
console.log(Pet.compareAges(dog, guardDog)); 