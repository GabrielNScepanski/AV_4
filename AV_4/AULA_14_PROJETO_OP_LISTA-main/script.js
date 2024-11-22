
let numero = [2, 3, 5];

let total = numero.reduce((acumulador, numero, indice, original) => {
  console.log(`${acumulador} - total ate agora`);
  console.log(`${numero} - valor atual`);

  console.log(
    "-----------------------------------------------------------------------"
  );

  return (acumulador += numero);
});

console.log(`total do reduce ${total}`);



let listagem = [2, 3, 4, 5, 6];

let busca = listagem.find((item2) => {
  return item2 > 4;
});

console.log(busca);


let palavras = ["alface", "beterraba", "cenoura", "dill"];

let filtro = palavras.filter((item) => {
  return item.length < 7;
});

console.log(filtro);

let maioresque4 = palavras.filter((item) => {
  return item.length > 4;
});

console.log(maioresque4);
