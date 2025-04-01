//Variáveis e Constantes
const PI = 3.14;
let numero = 10;
/* PI = 3.15; - Isso não pode, pois é constante */
numero = 11;
console.log("PI", PI);
console.log("Numero", numero);

//Operador Comparação: == e ===
console.log("Eh igual? ", numero == "11") //true
console.log("Eh igual: ", numero === "11") //false, pois verifica o tipo

//Operador Ternário
const estado = (numero > 12) 
    ? "Maior"
    : "Menor ou igual";
console.log ("Estado: ",estado);

//Operador incremento ++
let ct = 0;
let a = ct++;
console.log("Valor de a: ", a);
console.log("Valor de ct: ", ct);

b = ++ct;
console.log("Valor de b: ", b);
console.log("Valor de ct: ", ct);

//Comandos
//if - semelhante ao Python
let x = 20;
let y = 30;
if(x > y) {
    console.log("Condicao: ", "x > y");   
} else if (x < y) {
    console.log("Condicao: ", "x < y");
} else {
    console.log("Condicao: ", "x = y");
}

//for - algumas pecularidades
for (let i=0; i<5; i++) {
    console.log("i: ", i);
}
//for in e for of
let marcasCarros = ["GM", "Fiat", "Renault"];
for(let indice in marcasCarros) {
    console.log("indice: ", indice+'-'+marcasCarros[indice]);
}
for(let carro of marcasCarros) {
    console.log("Carro: ", carro);
}


//var não é recomendado para variáveis
var varA = 30;
if(varA >= 10) {
	var varA = 10;
}
console.log("Variavel A: ", varA);

let letA = 30;
if(letA >= 10) {
	let letA = 10;
}
console.log("Variavel A (com let): ", letA);

//Tipo de dados
//String - "Texto"
//Number - 10, 3.14
//Boolean - true, false
//Array - [1, 2, 3]
//Object - {nome: "João", idade: 25}
//Null e Undefined
//Sempre verificar variaveis de entrada para não dar erro de undefined
let testeUndefined = {x:"A"}; //Para testar retire depois od igual
if(testeUndefined) {
console.log("Teste Undefined: ", testeUndefined.x);
}

//Funções
//Expressão de Funções
//Arrow Function

//Classes e objetos
//JSON

//Arrays
//métodos de arrays

//Módulos (modulo1.js e modulo2.js - Export)
//Import - require