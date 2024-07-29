let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML =document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
   /* console.log (typeof(numeroSecreto)); // muestra en consola que el tipo de dato que esta variable, esto ayuda mucho a identificar el tipo de dato que este esta guardando
    console.log(numeroDeUsuario);
    console.log(numeroDeUsuario === numeroSecreto);*/ //compara que los numeros sean iguales y que el tipo de dato sean lo mismo.
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`acertaste el numero, lo hiciste en ${intentos} ${(intentos==1) ? "intento" : "intentos"}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{ //el usurio no acerto
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento ('p','el numero es menor');
        }
        else{
            asignarTextoElemento('p','el numero es mayor');
        }
        intentos++;
        reiniciarCaja();
    }
    return;
}

function reiniciarCaja(){
    document.querySelector('#valorUsuario').value = '';
    return;
}

function reiniciarJuego(){
  //Reiniciamos la caja
    reiniciarCaja();
  //Reiniciar el intervalo de mensajes
  //Reiniciar el numero aleatorio
  //Reiniciar el numero de intentos
    condicionesIniciales();
  //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

function condicionesIniciales(){
    asignarTextoElemento("h1","juego del numero secreto");
    asignarTextoElemento ("p", `escribe un numero de 1 al ${numeroMaximo}`);
    intentos = 1;
    numeroSecreto = generadorNumeroSecreto();
    console.log (numeroSecreto);
    return;
}

function generadorNumeroSecreto(){
   let numeroAleratorio = Math.floor(Math.random()*numeroMaximo)+1;
   console.log(listaNumerosSorteados);
   // indicar un limite a nuestro juego
    if(listaNumerosSorteados.length == numeroMaximo){
       asignarTextoElemento('p', "Ya fueron sorteados todos los numeros posibles");
    }

    else{


        // Si el numero esta incluido en la lista
        if(listaNumerosSorteados.includes(numeroAleratorio)){
            return generadorNumeroSecreto();
        }
        else{
            listaNumerosSorteados.push(numeroAleratorio);
            return numeroAleratorio;
        }
    }
}


condicionesIniciales();




// VECTORES
/*
    console.log(frutas[0]); // Salida: "Manzana"
    console.log(frutas[2]); // Salida: "Naranja"

    //AÑADIR ELEMENTOS
    frutas.push("Fresa");
    console.log(frutas); // Salida: ["Manzana", "Uva", "Naranja", "Fresa"]


    //ELIMINAR ELEMENTOS
    frutas.pop();
    console.log(frutas); // Salida: ["Manzana", "Uva", "Naranja"]


*/

                  //DESAFIOS DE REPASO
//*****************************************************************
// PRIMER PUNTO
/*
function solicitarAltura(){
    let alturaUsuario = parseFloat(prompt("ingresa tu estatura en metros"));
    let altura = alturaUsuario;
    return altura;
}

function solicitarPeso(){
    let pesoUsuario = parseInt(prompt("ingresa tu peso en kg"));
    let peso = pesoUsuario;
    return peso;
}

function IMC(altura,peso){
  let IMC = peso/(altura*altura);
  return IMC;
}

alert(`el IMC del usuario es de ${IMC(solicitarAltura(),solicitarPeso())}`);

*/
// SEGUNDO PUNTO
/*
let numero = parseInt(prompt("ingresa un numero cualquiera y te calculare su factorial"));
let factor = 1;  
function numeroFactorial(numero){
    for(let i = numero; i > 0 ; i--){
        factor = factor * i;
    }
    return factor;
}
    alert(`el numero factorial de ${numero} es ${numeroFactorial(numero)}`);

*/

// TABLA DE MULTIPLICAR
/*
let numero = parseInt(prompt("ingresa el numero el cual quieras visualizar la tabla de multiplicar "));


function tablasDeMultiplicar(numero){
  for (let i = 0; i <= 10; i++){
      console.log(`${numero} x ${i} = ${numero*i}`);
  }
  return;
}

tablasDeMultiplicar(numero);
*/

// TERCER PUNTO


                  //DESAFIOS DE REPASO
//*****************************************************************
// PRIMERO PUNTO
/*
function mensajeBienvenida(){
    console.log("Hola Mundo!");
    return;
}

mensajeBienvenida();
*/
//SEGUNDO PUNTO

/*let nombreUsuario = prompt("ingresa tu nombre para darte la bienvenida");

function solicitarNombre(nombreUsuario){
   console.log(`Bienvenido ${nombreUsuario}`);
    return;
}

solicitarNombre(nombreUsuario);
*/

//TERCER PUNTO
/*
let numeroUsuario = parseInt(prompt("ingresa un numero: "));

function dobletearNumero(numeroDeUsuario){
    return numeroDeUsuario*numeroDeUsuario;
}
*/
//QUINTO PUNTO:
/*
let numeroUsuario1 = parseInt(prompt("ingresa el primer numero"));
let numeroUsuario2 = parseInt(prompt("ingresa el segundo numero "));

function numeroMayor (num1,num2){
    if(num1>num2){
        return num1;
    }
    else{
        return num2;
    }
}
alert(`El numero mas grande es ${numeroMayor(numeroUsuario1,numeroUsuario2)}`);
*/






                 //DESAFIOS DE REPASO
//*****************************************************************
// PRIMERO PUNTO
/*
let lenguajesDeProgramacion = ["Javascript","C","C++","Kotlin","Python"];
let listaInvertida = [];
mostrarLista(lenguajesDeProgramacion);
lenguajesDeProgramacion.push("Java","Ruby","GoLang");
mostrarLista(lenguajesDeProgramacion);
mostrarLista(invertirLista(lenguajesDeProgramacion));



function mostrarLista(lista){
   return console.log(lista);
}

function invertirLista(lista){
  for(let i = lista.length-1; i >= 0; i--){
       listaInvertida.push(lista[i]);
  }
  return listaInvertida;
}
*/

// Crea una función que calcule el promedio de los elementos en una lista de números.
/*
let listaNumeros = [2,4,5,7,5,1];
let promedio = 0;
function calculoPromedio(lista){
  for(let i=0; i<lista.length; i++){
      promedio = (promedio+lista[i]);
  }
  return (promedio/lista.length);
}

console.log(calculoPromedio(listaNumeros));

*/

//Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
/*
let listaNumero = [1,2,4,6,85,12,5];
let numeroMax = listaNumero[0];
let numeroMin = listaNumero[0];

function numeroMayor(lista){
 for(let i = 1; i < lista.length; i++){
    if(lista[i]>numeroMax){
        numeroMax = lista[i];
    }
 }
 return numeroMax;
}
function numeroMenor(lista){
  for(let i = 1; i < lista.length; i++){
    if(lista[i] < numeroMin){
       numeroMin = lista[i];
    }
  }
  return numeroMin;
} 

console.log(numeroMayor(listaNumero));
console.log(numeroMenor(listaNumero));
*/

//Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
/*
let buscadorPosicion = parseInt(prompt("ingresa el numero a buscar"));
let listaNumero = [1,2,5,6,18,20];
let posicion = 0;

function posicionesLista(lista,numero){
  for(let i = 0; i < lista.length; i++){
    
    if(lista[i]== numero){
        return i;
    }

  }
  return -1;
}

console.log(`el numero ${buscadorPosicion} esta en la posicion ${posicionesLista(listaNumero,buscadorPosicion)}`);
*/

//Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
/*
let listaNumeros1 = [1,2,3,4,5,6];
let listaNumeros2 = [7,8,9,10,11,12];
let nuevaLista = [];

function sumadorListas(lista1,lista2){
    for(let i = 0; i<lista1.length;i++){
        nuevaLista.push(lista1[i]+lista2[i]);
    }
    return nuevaLista;
}

console.log(sumadorListas(listaNumeros1,listaNumeros2));
*/

//Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número
