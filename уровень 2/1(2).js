/*
Задача 1:
Создайте объект Vehicle с полем speed и методом move, который выводит сообщение о том, что транспортное средство движется с заданной скоростью.
Создайте объект-наследник Car, который наследует свойства и методы от Vehicle и добавляет новое поле fuelLevel (уровень топлива). Также добавьте метод refuel, который увеличивает уровень топлива.
Используйте прототипное наследование через Object.create для связи объектов Vehicle и Car.
Создайте объект myCar и вызовите его методы. Проверьте, что myCar имеет доступ как к методам, так и к свойствам родительского объекта.
*/


// cоздаем объект Vehicle:
const Vehicle = {
    speed: 0,
    move: function() {
        console.log(`Транспортное средство движется со скоростью: ${this.speed} км/ч.`);
    }
};

// cоздаем объект Car, наследующий от Vehicle:
const Car = Object.create(Vehicle);
Car.fuelLevel = 100; 

// добавляем метод refuel (уровня топлива):
Car.refuel = function(amount) {
    this.fuelLevel += amount;
    console.log(`Уровень топлива увеличен на: ${amount}. Текущий уровень топлива: ${this.fuelLevel}.`);
};

// создаем объект myCar:
const myCar = Object.create(Car);
myCar.speed = 60; 

// реализация:
myCar.move(); 
myCar.refuel(20); 
console.log(`Уровень топлива моего автомобиля: ${myCar.fuelLevel}`); 