import { stringParaFloat } from "./helpers.js";

function calcularBebida({
  quantidadeConvidados,
  quantidadePessoasBebemCerveja,
  valorSoda,
  valorBeer,
  valorSpirits,
}) {
  let quantidadeBebida = amount(
    quantidadeConvidados,
    quantidadePessoasBebemCerveja
  );
  let valorBebida = valor(quantidadeBebida, valorSoda, valorBeer, valorSpirits);
  return {
    quantities: {
      ...quantidadeBebida,
    },
    valores: {
      ...valorBebida,
    },
    total: total(valorBebida),
  };
}

function amount(quantidadeConvidados, quantidadePessoasBebemCerveja) {
  let soda, beer, spirits;

  soda = (quantidadeConvidados - quantidadePessoasBebemCerveja) * 1;

  beer = (quantidadePessoasBebemCerveja * 2.1) / 0.355;

  spirits = (quantidadeConvidados - quantidadePessoasBebemCerveja) * 1;

  return { soda, beer, spirits };
}

function valor(quantidades, valorSoda, valorBeer, valorSpirits) {
  let soda, beer, spirits;

  soda = quantidades.soda * stringParaFloat(valorSoda);

  beer = quantidades.beer * stringParaFloat(valorBeer);

  spirits = quantidades.spirits * stringParaFloat(valorSpirits);

  return { soda, beer, spirits };
}

function total(valores) {
  let valor = valores.soda + valores.beer + valores.spirits;

  return { valor };
}

export { calcularBebida };
