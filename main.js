function criaCartao('Filosofia',
    'Qual é a frase mais famosa de aristóteles?',
    'O sábio nunca diz tudo o que pensa, mas pensa tudo o que diz',){
    let container = document.getElementById('container');
    let cartao= document.createelement ('article')
    cartao.className='cartao';
    cartao.innerHTML=   `<div class="conteuo-cartao">
    <h3>categoria</h3>
    <div class="pergunta-cartao">
        <p>pergunta</p>
    </div>
    <div class="resosta=cartao">
        <p>resposta</p>
    </div>
</div>`
    
container.appendChild(cartao);
}