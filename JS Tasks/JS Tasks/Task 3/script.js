/* ------------------------------ TASK 3 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator(a, b) {

    this.sum = function()
    {
        return a+b;
    }
    this.subtraction = function()
    {
        return a - b;
    }
    this.multiplication = function()
    {
        return a*b;
    }
    this.division = function()
    {
        if(b!== 0)
        return a/b;
    else{
        return "Division by zero is not possible";
    }
    };
}

const calculator = new Calculator(10,2);
const calculatorZero = new Calculator(10,0);

console.log('Sum:', calculator.sum());
console.log('Subtraction:', calculator.subtraction());
console.log('Multiplication:', calculator.multiplication());
console.log('Division:', calculator.division());
console.log('Division by zero:', calculatorZero.division());
