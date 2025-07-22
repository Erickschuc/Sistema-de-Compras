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
                Código:${dad.usuarioId}><br>
                Primeiro nome:${dad.firstName}><br>      
                Sobrenome:${dad.lastName}><br>
                idade:${dad.age}><br>
                email:${dad.email}><br>
                telefone${dad.phone}><br>
                cidade:${dad.city}><br>
                estado${dad.state}><br>
                data de nascimento:${dad.birthDate}
            `
        })
    })
})