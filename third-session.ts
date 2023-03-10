// ejercicio 6

function dividir(den: number, num: number): number | string {
  return den === 0 ? 'No se puede dividir por 0': num / den;
}
  
  console.log(dividir(7,2));
  console.log(dividir(0,2));

// ejercicio 7
function salarioFn(horas: number, valorDeHora: number): string {
    let extraMoney = 0;
    let extraHours = horas - 40;
    let baseSalary = 0;
    let totalSalary = baseSalary;
    if (extraHours > 0) {
      extraMoney = extraHours * (valorDeHora * 1.5);
      baseSalary = 40 * valorDeHora;
      totalSalary = baseSalary + extraMoney;
    } else if (horas <= 40) {
      totalSalary = horas * valorDeHora;
    }
    return `salario ${baseSalary}, horas extra ${extraHours}, recargo por horas extra ${valorDeHora*1.5}, total recargo por horas extra ${extraMoney}, Total devengado ${totalSalary}`
  }
  
  console.log(salarioFn(45,2000));
  
// ejercicio 8
const asistentes = ['Gina', 'Juan', 'Luz', 'Michael'];
const asistencia = [true, false, true, true];

function listarAsistencia(asistentes: string[], asistencia: boolean[]) {
  for (const i in asistentes) {
      const asistio = asistencia[i];
      console.log( `${asistentes[i]}${asistio ? ' asistio': ' no asistio'}`)
    }
  }
listarAsistencia(asistentes, asistencia)

// ejercicio 9
const pedro = {
  nombre: 'Pedro',
  edad: 30,
  activo: true,
  hobbies: ['programar', 'squash', 'piano']
}
console.log(pedro.edad);
pedro.estatura = 1.8;
delete pedro.activo;
for (const llave in pedro) {
  if (Object.prototype.hasOwnProperty.call(pedro, llave)) {
      console.log(pedro[llave]);
      
  }
}


// ejercicio 10
function english(arr:any[]):string {
    let result :string[] = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].idiomas.length; j++) {
            if(arr[i].idiomas[j] === "EN") {
                result.push(arr[i].nombre)
                break;
            }
        }
    }
    return result.join(', ')
}


console.log(english([{
    nombre: "Juana",
    sexo: "F",
    edad: 30,
    idiomas: ["EN","ES"]
  },{
    nombre: "Mario",
    sexo: "M",
    edad: 20,
    idiomas: ["ES"]
  },{
    nombre: "Carla",
    sexo: "F",
    edad: 31,
    idiomas: ["EN"]
  }]));
