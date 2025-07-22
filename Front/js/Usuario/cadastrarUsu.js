let res = document.getElementById("res")
let button = document.getElementById("button")

button.addEventListener("click", (e)=>{
    e.preventDefault()

    let firstName = document.getElementById("firstName").value
    let lastName = document.getElementById("lastName").value
    let age = Number(document.getElementById("age").value)
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let city = document.getElementById("city").value
    let state = document.getElementById("state").value
    let birthDate = document.getElementById("birthDate").value

    const valores = {
        firstName: firstName,
        lastName: lastName,
        age: age,
        email: email,
        phone: phone,
        city: city,
        state: state,
        birthDate: birthDate
    }

    fetch(`http://localhost:3000/usuario`, {
        method: "POST",
        headers: { "content-type":"application/json" },
        body: JSON.stringify(valores)
    })
    .then(resp => resp.body)
    .then(()=>{
        res.innerHTML =` 
            Nome:${firstName} <br>
            Sobrenome:${lastName} <br>
            Idade:${age} <br>
            Telefone:${email} <br>
            Telefone:${phone} <br>
            Cidade:${city} <br>
            Estado:${state} <br>
            Data de Nascimento:${birthDate} <br>
      `
    })
})