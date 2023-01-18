// ejercicio 6
function dividir(den, num) {
    return den === 0 ? 'No se puede dividir por 0' : num / den;
}
console.log(dividir(7, 2));
console.log(dividir(0, 2));
// ejercicio 7
function salarioFn(horas, valorDeHora) {
    var extraMoney = 0;
    var extraHours = horas - 40;
    var baseSalary = 0;
    var totalSalary = baseSalary;
    if (extraHours > 0) {
        extraMoney = extraHours * (valorDeHora * 1.5);
        baseSalary = 40 * valorDeHora;
        totalSalary = baseSalary + extraMoney;
    }
    else if (horas <= 40) {
        totalSalary = horas * valorDeHora;
    }
    return "salario ".concat(baseSalary, ", horas extra ").concat(extraHours, ", recargo por horas extra ").concat(valorDeHora * 1.5, ", total recargo por horas extra ").concat(extraMoney, ", Total devengado ").concat(totalSalary);
}
console.log(salarioFn(45, 2000));
// ejercicio 8
// ejercicio 9
var pedro = {
    nombre: 'Pedro',
    edad: 30,
    activo: true,
    hobbies: ['programar', 'squash', 'piano']
};
console.log(pedro.edad);
pedro.estatura = 1.8;
delete pedro.activo;
for (var llave in pedro) {
    if (Object.prototype.hasOwnProperty.call(pedro, llave)) {
        console.log(pedro[llave]);
    }
}
// ejercicio 10
function english(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].idiomas.length; j++) {
            if (arr[i].idiomas[j] === "EN") {
                result.push(arr[i].nombre);
                break;
            }
        }
    }
    return result.join(', ');
}
console.log(english([{
        nombre: "Juana",
        sexo: "F",
        edad: 30,
        idiomas: ["EN", "ES"]
    }, {
        nombre: "Mario",
        sexo: "M",
        edad: 20,
        idiomas: ["ES"]
    }, {
        nombre: "Carla",
        sexo: "F",
        edad: 31,
        idiomas: ["EN"]
    }]));
