const carrinho = [
  { nome: "Coca Cola Zero", preco: 8.0, quantidade: 2 },
  { nome: "Arroz Fantastico 5kg", preco: 21.6, quantidade: 2 },
  { nome: "Chocolate Garoto ao Leite 120g", preco: 5.5, quantidade: 7 },
  { nome: "Bote Inflável", preco: 252.34, quantidade: 2 },
  { nome: "Bolacha Trakinas", preco: 5.0, quantidade: 2 },
  { nome: "Bolacha Oreo", preco: 3.59, quantidade: 4 },
  { nome: "Batata Palha Yoki", preco: 5.49, quantidade: 2 },
  { nome: "Bombom Ouro Branco", preco: 1.5, quantidade: 3 },
  { nome: "Kitkat", preco: 2.5, quantidade: 6 },
  { nome: "Leite ninho", preco: 16.0, quantidade: 1 },
];

function contarItens() {
  let produtos = document.querySelector(".produtos");
  let totalItem;
  carrinho.map((index) => {
    produtos.innerHTML += `
    <tr>
            <td>${index.nome}</td>
             <td>${index.quantidade}</td>
             <td>${index.preco.toFixed(2)}</td>
             <td>${(totalItem = (index.preco * index.quantidade).toFixed(
               2
             ))}</td>
    <tr>
        `;
  });
  let totalCarrinho = 0;
  for (let i = 0; i < carrinho.length; i++) {
    let total = carrinho[i].preco * carrinho[i].quantidade;
    totalCarrinho += total;
  }
  let valorTotal = document.querySelector(".valorTotal");
  valorTotal.innerHTML = `
  <h2>O valor total do carrinho é: ${totalCarrinho}</h2>
  `;
}
contarItens();
