let res = document.getElementById("res")
let button = document.getElementById("button")

button.addEventListener("click", (e)=>{
    e.preventDefault()

    let compraId = Number(document.getElementById("compraId").value)
    let produto_id = document.getElementById("produto_id").value
    let usuario_id = document.getElementById("usuario_id").value
    let quant = document.getElementById("quant").value
    let dataCompra = document.getElementById("dataCompra").value
    let unitario = document.getElementById("unitario").value
    let desconto = document.getElementById("desconto").value
    let precoFinal = document.getElementById("precoFinal").value
    let formaPag = document.getElementById("formaPag").value
    let status = document.getElementById("status").value

    const valores = {
        produto_id: produto_id,
        usuario_id: usuario_id,
        quant: quant,
        dataCompra: dataCompra,
        unitario: unitario,
        desconto: desconto,
        precoFinal: precoFinal,
        formaPag: formaPag,
        status: status
    }

    fetch(`http://localhost:3000/compra/${compraId}`, {
        method: "PUT",
        headers: { "content-type":"application/json" },
        body: JSON.stringify(valores)
    })
    .then(resp => resp.body)
    .then(()=>{
        res.innerHTML = 
        `
            Produto ID:${produto_id}><br>
            Usuário ID:${usuario_id}><br>
            Quantidade:${quant}><br>
            Data da Compra:${dataCompra}><br>
            Preço Unitário:${unitario}><br>
            Desconto:${desconto}><br>
            Preço Final:${precoFinal}><br>
            Forma de Pagamento:${formaPag}><br>
            Status:${status}><br>
            `
    })
})

let buscar = document.getElementById("buscar")

buscar.addEventListener("click", (e) => {
    e.preventDefault()

    let compraId = Number(document.getElementById("compraId").value)
    
    let quant = document.getElementById("quant")
    let dataCompra = document.getElementById("dataCompra")
    let unitario = document.getElementById("unitario")
    let desconto = document.getElementById("desconto")
    let precoFinal = document.getElementById("precoFinal")
    let formaPag = document.getElementById("formaPag")
    let status = document.getElementById("status")

    fetch(`http://localhost:3000/compra/${compraId}`, {
        method: "GET",
        headers: { "content-type": "application/json" }
    })
        .then(resp => resp.json())
        .then(dados => {

            console.log(dados)

            quant.value = dados.quant
            dataCompra.value = dados.dataCompra
            unitario.value = dados.unitario
            desconto.value = dados.desconto
            precoFinal.value = dados.precoFinal
            formaPag.value = dados.formaPag
            status.value = dados.status

        })
})