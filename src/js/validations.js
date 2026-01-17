//validations of Alert

function validacoes(informacoesDeEntrada){
    let valorBeer = informacoesDeEntrada.beer.value;
    let quantidadePessoasBebemCerveja = 
    informacoesDeEntrada.quantidadePessoasBebemCerveja.value;

    if(
        verificarValorBeer(valorBeer, quantidadePessoasBebemCerveja)&& 
        verificarValorPessoas(valorBeer, quantidadePessoasBebemCerveja)
    ){
        return true;
    }
    return false;
}

function verificarValorBeer(valorBeer, quantidadePessoasBebemCerveja){
    if(quantidadePessoasBebemCerveja !== '' && valorBeer === ''){
        alert('please, inform the value of beer, thank you, Bro!');
        return false;
    }
    return true;
}

function verificarValorPessoas(valorBeer, quantidadePessoasBebemCerveja){
    if(valorBeer !== '' && quantidadePessoasBebemCerveja === ''){
        alert('oh, you messed up! You already made a mistake above you want to make it again?');
        return false;
    }
    return true;
}

// validations of fields
function validacoesCampos(informacoesDeEntrada){
    verificarNumeroDePessoasBebem(
        informacoesDeEntrada.quantidadePessoasBebemCerveja,
        informacoesDeEntrada.convidados
    );
    verificarQuatidadeConvidados(informacoesDeEntrada.convidados);
}

function verificarNumeroDePessoasBebem(pessoasBebem, convidados){
    pessoasBebem.addEventListener('input', ()=>{
        if(parseInt(pessoasBebem.value) > parseInt(convidados.value)){
            pessoasBebem.setCustomValidity(
                'The number of people drinking needs to be less than the number of guests.'
        );
            return;
        } 
    });
           pessoasBebem.setCustomValidity('');
}

function verificarQuatidadeConvidados(convidados){
    convidados,addEventListener('input', ()=>{
        if(parseInt(convidados.value) < 3){
            convidados.setCustomValidity(
                'I understand you don\'t have friends for the barbecue, bro. But you need 3 people.'
            );
            return;
        }
            convidados.setCustomValidity('');
    });

}

export { validacoes, validacoesCampos };