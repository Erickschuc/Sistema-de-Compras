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
                res.innerHTML = `Titulo: ${dad.title} <br>
                Descrição: ${dad.description} <br>
                Categoria: ${dad.category} <br>
                Preço: ${dad.price} <br>
                Desconto: ${dad.discountPercentage} <br>
                Estoque: ${dad.stock} <br>
                Marca: ${dad.brand} <br>
                <img src="${dad.thumbnail}"> <br>`
            })

        })
        
})