let res = document.getElementById("res")
let button = document.getElementById("button")

button.addEventListener("click", (e) => {
    e.preventDefault()

    fetch(`http://localhost:3000/compra`, {
        method: "GET",
        headers: { "content-type": "application/json" }
    })
        .then(resp => resp.json())
        .then(dados => {

            dados.forEach(dad => {
                res.innerHTML =
            `  
                <td>Produto ID:${dad.produto_id}
                <td>Usuário ID:${dad.usuario_id}
                <td>Quantidade:${dad.quant}
                <td>Data da Compra:${dad.dataCompra}
                <td>Preço Unitário:${dad.unitario}
                <td>Desconto${dad.desconto}
                <td>Preço Final:${dad.precoFinal}
                <td>Forma de Pagamento:${dad.formaPag}
                <td>Status:${dad.status}
           `
                console.log(dad)
            })
        })
})