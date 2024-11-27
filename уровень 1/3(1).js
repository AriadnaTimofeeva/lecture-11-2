/*
Задача3:
Создайте MathHelper, в котором есть:
Статический метод add(a, b), возвращающий сумму двух чисел.
Статический метод subtract(a, b), возвращающий разность двух чисел.
Статический метод multiply(a, b), возвращающий произведение двух чисел.
Демонстрируйте использование каждого метода, не создавая экземпляры класса.
*/


class MathHelper {
    // сумма:
    static add(a, b) {
        return a + b;
    }
    // разность:
    static subtract(a, b) {
        return a - b;
    }
    // умножение:
    static multiply(a, b) {
        return a * b;
    }
}

const sum = MathHelper.add(5.2, 1/3);
console.log(`Сумма = ${sum}`);

const difference = MathHelper.subtract(5, 3);
console.log(`Разность = ${difference}`); 

const product = MathHelper.multiply(5, 3);
console.log(`Произведение = ${product}`); 