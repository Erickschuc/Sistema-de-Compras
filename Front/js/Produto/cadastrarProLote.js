let resLote = document.getElementById("res")
let lote = document.getElementById("lote")

lote.addEventListener("click", (e)=>{
    e.preventDefault()

    fetch("https://dummyjson.com/products",{
        method: "GET",
        headers: { "content-type":"application/json" }
    })
    .then(resp => resp.json())
    .then(dados=> {
        dados.products.forEach(dad => {
            console.log(dad)
            const valores = {
                titulo: dad.title,
                descricao: dad.description,
                categoria: dad.category,
                preco: dad.price,
                percentual_desconto: dad.discountPercentage,
                estoque: dad.stock,
                marca: dad.brand,
                thumbnail: dad.thumbnail
            }

            fetch(`http://localhost:3000/produto`, {
                method: "POST",
                headers: { "content-type":"application/json" },
                body: JSON.stringify(valores)
            })
            .then(resp => resp.body)
            .then(()=>{
                resLote.innerHTML = "lote registrado com sucesso"
            })
        })
    })
    .catch((err)=>{
        console.error("erro: ", err)
    })
})