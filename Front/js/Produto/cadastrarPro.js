let res = document.getElementById("res")
let button = document.getElementById("button")

button.addEventListener("click", (e)=>{
    e.preventDefault()

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

    fetch(`http://localhost:3000/produto`, {
        method: "POST",
        headers: { "content-type":"application/json" },
        body: JSON.stringify(valores)
    })
    .then(resp => resp.body)
    .then(()=>{
        res.innerHTML = 
        `
            Nome:${title}<br>
            descrição:${description}<br>
            categoria:${category}<br>
            preço:${price}<br>
            desconto:${discountPercentage}<br>
            estoque:${stock}<br>
            marca:${brand}<br>
            <img src="${thumbnail}"<br>
        `
    })
})