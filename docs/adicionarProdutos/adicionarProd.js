let produtos = [
    {id: 1, nome:"Produto 1", descricao:"Descrição do Produto 1" },
    {id: 2, nome:"Produto 2", descricao:"Descrição do Produto 2" },
];

if (window.location.pathname.endsWith("index.html")){
    const params = new URLSearchParams(window.location.search);
    const produtoid = params.get("produto");

    const produto = produtos.find(p => p.id == produtoid);

    if (produto){
        document.getElementById("detalhes").innerHTML =`
        <h2>${produto.nome}</h2>
        <p>${produto.descricao}</p>
        `;
    } else {
        document.getElementById("detalhes").innerHTML ="<p>Produto não encontrado.</p>";
        }
    }

    if (window.location.pathname.endsWith("adicionarProd.html")) {
        const form = document.getElementById("form-produto");
    const mensagem = document.getElementById("mensagem");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value;
        const descricao = document.getElementById("descricao").value;

        const novoProduto = {
            id: produtos.length + 1,
            nome: nome,
            descricao: descricao,
        };

        produtos.push(novoProduto);
        mensagem.innerHTML = <p>Produto "${nome}" adicionado com sucesso!</p>;

        // Limpa o formulário
        form.reset();
    });
}
