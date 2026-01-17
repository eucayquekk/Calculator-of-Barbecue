import { obterFormulario, mostrarBebida, mostrarCarnes, zerarCampos,  apresentarResposta } from "./dom.js";
import { calcularBebida } from "./drinks.js";
import { formatarMoeda } from "./mascara.js";
import { calcularCarnes } from "./meats.js";
import { validacoes, validacoesCampos } from "./validations.js";

const informacoesDeEntrada = obterFormulario();

//Mascara monetaria
/* The `formatarMoeda(informacoesDeEntrada);` function call is applying a currency format to the
monetary values entered in the form fields. This function is likely defined in the `mascara.js` file
and is responsible for formatting the currency input fields to make them more user-friendly and
visually appealing. */

formatarMoeda(informacoesDeEntrada);

//validations of EventListener(fields)
validacoesCampos(informacoesDeEntrada);

function drinks() {
  const valores = {
    quantidadeConvidados: informacoesDeEntrada.convidados.value,
    quantidadePessoasBebemCerveja:
      informacoesDeEntrada.quantidadePessoasBebemCerveja.value,
    valorSoda: informacoesDeEntrada.soda.value,
    valorBeer: informacoesDeEntrada.beer.value,
    valorSpirits: informacoesDeEntrada.spirits.value,
  };

  let valoresBedidaCalculado = calcularBebida(valores);
  mostrarBebida(valoresBedidaCalculado);
}

function meats() {
  let valores = {
    quantidadeConvidados: informacoesDeEntrada.convidados.value,
    valorBovine: informacoesDeEntrada.bovine.value,
    valorChicken: informacoesDeEntrada.chicken.value,
    valorPork: informacoesDeEntrada.pork.value,
    valorSteakCuts: informacoesDeEntrada.steakCuts.value,
  };
  let valoresCarnesCalculado = calcularCarnes(valores);
  mostrarCarnes(valoresCarnesCalculado);
}

informacoesDeEntrada.addEventListener("submit", (event) => {
  event.preventDefault();
  if (validacoes(informacoesDeEntrada)) {
    drinks();
    meats(); 
    zerarCampos(informacoesDeEntrada);
    apresentarResposta(); // 👈 AGORA SIM
  }
});
