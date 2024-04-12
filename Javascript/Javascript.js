// defino la variable potencia (p)
let p = parseFloat (prompt ("ingrese la potencia del circuito en kVA"));

// defino la variable tensión (u)
let u = 0;

// defino el tipo de circuito Monofásico (M) ó Trifásico (T)

let tipodecircuito = prompt ('ingrese el tipo de circuito, monofásico (m) o trifásico (t)')

// defino la variable intensidad de corriente (i)
let i = 0;

// aplico el condicional
while (true){
    if (tipodecircuito == 'm'){
        alert ('el circuito es monofasico');
        u = 220;
        break;
    }
    
    else {
        alert ('el circuito es trifásico');
        u = 380;
        break;
    }
}

// Función que calcula la corriente:
function calcular (p,u) {
    i = p / u;
}

//Función que muestra resultado por consola
function mostrar(i) {
    console.log(i);
}
//Llamamos primero a sumar y luego a mostrar
calcular(p,u);            
mostrar(i);
alert ('El valor de corriente es:  ' +i)