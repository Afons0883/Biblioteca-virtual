const carrinho = [];
const listaCarrinho = document.getElementById('lista-carrinho');
const totalDisplay = document.getElementById('total');

// Simulando item ao clicar no botão
const botoes = document.querySelectorAll('button');
botoes.forEach(botao => {
  botao.addEventListener('click', () => {
    const item = {
      nome: botao.parentElement.querySelector('h4').innerText,
      preco: parseFloat(botao.parentElement.querySelector('p').innerText.replace('R$', '').replace(',', '.'))
    };
    carrinho.push(item);
    atualizarCarrinho();
  });
});

function atualizarCarrinho() {
  listaCarrinho.innerHTML = '';
  let total = 0;
  carrinho.forEach(item => {
    const li = document.createElement('li');
    li.innerText = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
    listaCarrinho.appendChild(li);
    total += item.preco;
  });
  totalDisplay.innerText = total.toFixed(2);
}