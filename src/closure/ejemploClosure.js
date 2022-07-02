function closureExample() {
    let _number = 0;

    function increase(num) {
        return _number += num;
    }

    function decrease(num) {
        if(num >= _number){
            return _number = 0;
        } else {
            return _number -= num;
        }
    }
    function getNumber(){
        return _number;
    }

    function setNumber(num){
        return _number = num;
    }

    return {
        increase,
        decrease,
        getNumber,
        setNumber,
    }
};

const calc = closureExample();

calc.setNumber(12)
calc.increase(4);
calc.decrease(6);
//console.log(calc.setNumber(25));
console.log(calc.getNumber());

const calc1 = closureExample();
calc1.setNumber(30);
console.log(`la calculadora 2 tiene como numero: ${calc1.getNumber()}`)