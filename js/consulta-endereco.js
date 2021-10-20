/* Recuperando inputs para eventos */
let cep = document.querySelector('#cep');
let rua = document.querySelector('#rua');
let bairro = document.querySelector('#bairro');
let cidade = document.querySelector('#cidade');
let estado = document.querySelector('#estado');

cep.value = '02047000';

/* Evento de busca de informações */
cep.addEventListener('blur', function(e) {
    let cep = e.target.value;
    let script = document.createElement('script');
    script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=popularForm';
    document.body.appendChild(script);
});

/* Evento de resposta */
function popularForm(resposta) {

    if ("erro" in resposta) {
        alert('CEP inválido!');
        return;
    }

    console.log(resposta);
    rua.value = resposta.logradouro;
    bairro.value = resposta.bairro;
    cidade.value = resposta.localidade;
    estado.value = resposta.uf;











}