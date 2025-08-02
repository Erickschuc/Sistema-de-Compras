let res = document.getElementById("res")
let button = document.getElementById("button")

button.addEventListener("click", (e) => {
    e.preventDefault()

    fetch(`http://localhost:3000/produto`, {
        method: "GET",
        headers: { "content-type": "application/json" }
    })
        .then(resp => resp.json())
        .then(dados => {
            dados.forEach(dad => {
                res.innerHTML += 
                `
                Titulo: ${dad.titulo} <br>
                Descrição: ${dad.descricao} <br>
                Categoria: ${dad.categoria} <br>
                Preço: ${dad.preco} <br>
                Desconto: ${dad.percentual_desconto} <br>
                Estoque: ${dad.estoque} <br>
                Marca: ${dad.marca} <br>
                <img src="${dad.thumbnail}" <br>
                `
            })

        })
        
})