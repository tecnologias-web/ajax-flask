const botaoFetch = document.querySelector('button.fetch'),
      botaoXmlhttp = document.querySelector('button.xmlhttp'),
      lista = document.querySelector('ol.lista-resultado');

const url = '/sortear';

const validarForm = function(inicio, fim){

    if(!inicio){
        alert('Início é obrigatório!');
        return false;
    }

    if(!fim){
        alert('Fim é obrigatório!');
        return false;
    }

    if(inicio > fim) {
        alert('Início deve ser menor ou igual ao fim!');
        return false;
    }

    return true;
}

botaoXmlhttp.addEventListener('click', function(event){
    let inicio = document.querySelector('#intervalo-inicio').value,
        fim = document.querySelector('#intervalo-fim').value;
    if(validarForm(inicio, fim)){
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `${url}?inicio=${inicio}&fim=${fim}`);

        xhr.onreadystatechange = function(){
            if(this.readyState === 4 && this.status == 200){
                let retorno = JSON.parse(this.responseText);
                lista.innerHTML += `<li>Sorteio entre ${retorno.inicio} e fim ${retorno.fim}: ${retorno.sorteio}`;
            }
        }

        xhr.send();
    }

});

botaoFetch.addEventListener('click', function(event){
    let inicio = document.querySelector('#intervalo-inicio').value,
        fim = document.querySelector('#intervalo-fim').value;
    if(validarForm(inicio, fim)){
        fetch(`${url}?inicio=${inicio}&fim=${fim}`)
            .then(function(resposta){
                return resposta.json();
            }).then(function(dados){
                lista.innerHTML += `<li>Sorteio entre ${dados.inicio} e fim ${dados.fim}: ${dados.sorteio}`;
            });
    }
});