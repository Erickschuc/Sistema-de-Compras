let res = document.getElementById('res')

let button = document.getElementById('button')

button.addEventListener('click', (e)=>{
    e.preventDefault()
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
        id_produto: produto_id,
        id_usuario: usuario_id,
        quantidade: quant,
        data_compra: dataCompra,
        preco_unitario: unitario,
        desconto: desconto,
        preco_final: precoFinal,
        forma_pagamento: formaPag,
        status_compra: status
    }
    res.innerHTML = ''

    fetch(`http://localhost:3000/compra`,{
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(valores)
    })
    .then(resp => resp.json())
    .then(dados =>{
        res.innerHTML += `O cadastro foi realizado com sucesso <br>`
    })
    .catch((err)=>{
        console.error('Erro ao cadastrar o compra!',err)
    })
})