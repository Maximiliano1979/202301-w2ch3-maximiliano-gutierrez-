const numero1 = Number(prompt("Ingresa un numero"));
const numero2 = Number(prompt("Ingresa otro numero"));
const resultados = [];

if (
  isNaN(numero1 * numero2) ||
  numero1 === " " ||
  numero2 === " " ||
  (numero1 === " " && numero2 === " ")
) {
  console.warn("Debes introducir al menos un número");
} else if (numero1 === 0) {
  const sqrt = Math.sqrt(numero2);
  resultados.push(sqrt);
  console.log(`Resultado de la raíz cuadrada de ${numero2} es ${sqrt}`);
} else if (numero2 === 0) {
  const sqrt2 = Math.sqrt(numero1);
  resultados.push(sqrt2);
  console.log(`Resultado de la raíz cuadrad de ${numero1} es ${sqrt2}`);
} else {
  const sumar = (numero1, numero2) => {
    const resultadoSuma = (numero1 + numero2).toFixed(3);
    resultados.push(resultadoSuma);
  };

  sumar(numero1, numero2);

  const restar = (numero1, numero2) => {
    const resultadoResta = (numero1 - numero2).toFixed(3);
    resultados.push(resultadoResta);
  };

  restar(numero1, numero2);

  const multiplicar = (numero1, numero2) => {
    const resultadoMultiplicar = (numero1 * numero2).toFixed(3);
    resultados.push(resultadoMultiplicar);
  };

  multiplicar(numero1, numero2);

  const dividir = (numero1, numero2) => {
    const resultadoDividir = (numero1 / numero2).toFixed(3);
    resultados.push(resultadoDividir);
  };

  dividir(numero1, numero2);

  console.log(`El resultado de la suma es: ${resultados[0]} 
El resultado de la resta es: ${resultados[1]} 
El resultado de la multiplicación es ${resultados[2]} 
El resultado de la división es: ${resultados[resultados.length - 1]}`);
}
