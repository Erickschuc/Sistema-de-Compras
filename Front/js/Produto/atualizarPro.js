let res = document.getElementById("res")
let button = document.getElementById("button")

button.addEventListener("click", (e)=>{
    e.preventDefault()

    let produtoId = Number(document.getElementById("produtoId").value)
    let title = document.getElementById("title").value
    let description = document.getElementById("description").value
    let category = document.getElementById("category").value
    let price = document.getElementById("price").value
    let discountPercentage = document.getElementById("discountPercentage").value
    let stock = document.getElementById("stock").value
    let brand = document.getElementById("brand").value
    let thumbnail = document.getElementById("thumbnail").value

    const valores = {
        titulo: title,
        descricao: description,
        categoria: category,
        preco: price,
        percentual_desconto: discountPercentage,
        estoque: stock,
        marca: brand,
        thumbnail: thumbnail
    }

    fetch(`http://localhost:3000/produto/${produtoId}`, {
        method: "PUT",
        headers: { "content-type":"application/json" },
        body: JSON.stringify(valores)
    })
    .then(resp => resp.body)
    .then(()=>{
        res.innerHTML = 
    `
        Titulo${title}<br>
        Descrição${description}<br>
        Categoria${category}<br>
        Preço${price}<br>
        Desconto${discountPercentage}<br>
        Estoque${stock}<br>
        Marca${brand}<br>
        <td><img src="${thumbnail}<br>
    ` 
    })
})
