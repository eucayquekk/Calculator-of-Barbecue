import { inserirValores, inserirQuantidades, obterElementoId } from "./helpers.js";

function obterFormulario() {
  return document.forms.camposFormulario;
}
function mostrarBebida(drink) {
  inserirValores("valor-soda", drink.valores.soda);
  inserirValores("valor-beer", drink.valores.beer);
  inserirValores("valor-spirits", drink.valores.spirits);
  inserirValores("valor-total-drinks", drink.total.valor);

  inserirQuantidades("qtd-soda", drink.quantities.soda.toFixed(0), "liters");
  inserirQuantidades(
    "qtd-beer",
    drink.quantities.beer.toFixed(0),
    "can or bottle (355ml)"
  );
  inserirQuantidades(
    "qtd-spirits",
    drink.quantities.spirits.toFixed(0),
    "liters"
  );
}

function mostrarCarnes(meats) {
  inserirValores("valor-bovine", meats.valores.bovine);
  inserirValores("valor-chicken", meats.valores.chicken);
  inserirValores("valor-pork", meats.valores.pork);
  inserirValores("valor-steakCuts", meats.valores.steakCuts);
  inserirValores("valor-total-meats", meats.totais.valor);

  inserirQuantidades("qtd-bovine", meats.quantidades.bovine.toFixed(3), "g");
  inserirQuantidades("qtd-chicken", meats.quantidades.chicken.toFixed(3), "g");
  inserirQuantidades("qtd-pork", meats.quantidades.pork.toFixed(3), "g");
  inserirQuantidades(
    "qtd-steakCuts",
    meats.quantidades.steakCuts.toFixed(3),
    "g"
  );
  inserirQuantidades(
    "qtd-total-meats",
    meats.totais.quantidadeTotal.toFixed(3),
    "g"
  );
}

function zerarCampos(inputs){
  for(let i=0; i<inputs.length; i++){
    inputs[i].value = "";
  }
}

function apresentarResposta(){
  const resposta = obterElementoId("resultado");
  resposta.style.display = "block";
  resposta.offsetHeight;

  resposta.style.maxHeight = "1000px";
  resposta.style.opacity = "1";
}

export { obterFormulario, mostrarBebida, mostrarCarnes, zerarCampos,  apresentarResposta };
