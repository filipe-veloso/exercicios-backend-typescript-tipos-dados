// Crie uma função que recebe um array de números como argumentos. A funcão deverá montar uma tabuada de multiplicação para cada número do array passado no argumento da função. O resultado da tabuada deverá ser impresso conforme exemplo abaixo.

const num = [1, 5, 2];

const table = (numero: number[]): string => {
  let resultado: string = '';

  for (const n of numero) {
    for (let i = 0; i <= 10; i++) {
      resultado += `${n} x ${i} = ${n * i}\n`;
      if (i === 10) {
        resultado += '--------------------- \n';
      }
    }
  }

  return resultado;
};
console.log(table(num));
