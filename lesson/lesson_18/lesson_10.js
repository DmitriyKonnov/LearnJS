// Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:

// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму введённых свойств.
// mul() возвращает произведение введённых свойств.
// Например:

function Calculator() {
    this.read = () => {
        this.x = +prompt('x', '');
        this.y = +prompt('y', '');
    }
    this.sum = () => {
        return this.x + this.y;
    }
    this.mul = () => {
        return this.x * this.y;
    }
}

let calculator = new Calculator();
calculator.read();


alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());