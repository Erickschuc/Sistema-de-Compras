let res = document.getElementById('res')
let button = document.getElementById('button')

button.addEventListener('click', (e)=>{
    e.preventDefault()
    const id = Number(document.getElementById('id').value)
    console.log(id)

    res.innerHTML = ''

    fetch(`http://localhost:3000/compra/${id}`,{
        method: 'DELETE',
        headers: {
            'Content-Type':'application/json'
        }
    })
    .then(resp=> {
        if(resp.status === 204){
            res.innerHTML += `Os dados foram excluídos!`
        }else{
            res.innerHTML += `Fabricante não encontrado!`
        }
    })
    .catch((err)=>{
        console.error('Erro ao apagar o fabricante!',err)
    })

})