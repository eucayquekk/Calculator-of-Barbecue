import { stringParaFloat } from "./helpers.js";

let multiplicadorBovine = 0.4;
let multiplicadorChicken = 0.2;
let multiplicadorPork = 0.2;
let multiplicadorSteakCuts = 0.1;

function calcularCarnes({
  quantidadeConvidados,
  valorBovine,
  valorChicken,
  valorPork,
  valorSteakCuts,
}) {
  let quantidadesCarnes = amount(
    quantidadeConvidados,
    valorChicken,
    valorPork,
    valorSteakCuts
  );
  let valoresCarnes = valor(
    quantidadesCarnes,
    valorBovine,
    valorChicken,
    valorPork,
    valorSteakCuts
  );
  return {
    quantidades: {
      ...quantidadesCarnes,
    },
    valores: {
      ...valoresCarnes,
    },
    totais: {
      ...total(quantidadesCarnes, valoresCarnes),
    },
  };
}

function CalcularMultiplicador(valorChicken, valorPork, valorSteakCuts) {
  if (valorChicken == "" && valorPork == "" && valorSteakCuts == "") {
    multiplicadorBovine = 0.6;
    multiplicadorChicken = 0;
    multiplicadorPork = 0;
    multiplicadorSteakCuts = 0;
    return;
  }
  if (valorChicken == "") {
    multiplicadorBovine = 0.2;
    multiplicadorChicken = 0;
    multiplicadorPork = 0.11;
    multiplicadorSteakCuts = 0.09;
    return;
  }
  if (valorPork == "") {
    multiplicadorBovine = 0.2;
    multiplicadorChicken = 0.11;
    multiplicadorPork = 0;
    multiplicadorSteakCuts = 0.09;
    return;
  }
  if (valorSteakCuts == "") {
    multiplicadorBovine = 0.25;
    multiplicadorChicken = 0.18;
    multiplicadorPork = 0.9;
    multiplicadorSteakCuts = 0;
    return;
  }
}

function amount(convidados, valorChicken, valorPork, valorSteakCuts) {
  CalcularMultiplicador(valorChicken, valorPork, valorSteakCuts);
  let bovine, chicken, pork, steakCuts;

  bovine = convidados * multiplicadorBovine;
  chicken = convidados * multiplicadorChicken;
  pork = convidados * multiplicadorPork;
  steakCuts = convidados * multiplicadorSteakCuts;

  /* This code snippet is defining a function called `amount` that calculates the quantities of different
types of meats (bovine, chicken, pork, steakCuts) based on the number of guests invited to an event.
The quantities of each type of meat are calculated by multiplying the number of guests by their
respective multiplier values (`multiplicadorBovine`, `multiplicadorChicken`, `multiplicadorPork`,
`multiplicadorSteakCuts`). */
  return { bovine, chicken, pork, steakCuts };
}

function valor(
  quantidadesCarnes,
  valorBovine,
  valorChicken,
  valorPork,
  valorSteakCuts
) {
  let bovine, chicken, pork, steakCuts;

  bovine = quantidadesCarnes.bovine * stringParaFloat(valorBovine);
  chicken = quantidadesCarnes.chicken * stringParaFloat(valorChicken);
  pork = quantidadesCarnes.pork * stringParaFloat(valorPork);
  steakCuts = quantidadesCarnes.steakCuts * stringParaFloat(valorSteakCuts);

  return { bovine, chicken, pork, steakCuts };
}

function total(quantidadesCarnes, valoresCarnes) {
  let valor =
    valoresCarnes.bovine +
    valoresCarnes.chicken +
    valoresCarnes.pork +
    valoresCarnes.steakCuts;

  let quantidadeTotal =
    quantidadesCarnes.bovine +
    quantidadesCarnes.chicken +
    quantidadesCarnes.pork +
    quantidadesCarnes.steakCuts;

  return { valor, quantidadeTotal };
}

export { calcularCarnes };
