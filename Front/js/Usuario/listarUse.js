let res = document.getElementById("res")
let button = document.getElementById("button")

button.addEventListener("click", (e) => {
    e.preventDefault()

    fetch(`http://localhost:3000/usuario`, {
        method: "GET",
        headers: { "content-type": "application/json" }
    })
        .then(resp => resp.json())
        .then(dados => {
            dados.forEach(dad =>{
            res.innerHTML =
        `
            Codigo unico:${dad.id} <br>
            Nome:${dad.primeiro_nome} <br>
            Sobrenome:${dad.sobrenome} <br>
            Idade:${dad.idade} <br>
            Email:${dad.email} <br>
            Telefone:${dad.telefone} <br>
            Endereço:${dad.endereco} <br>
            Cidade:${dad.cidade} <br>
            Estado:${dad.estado} <br>
            Data de Nascimento:${dad.data_nascimento} <br>
        `
        })
    })
})