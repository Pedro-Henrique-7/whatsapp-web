'use strict'



async function listarContatos() {
    const url = 'http://localhost:8080/v1/whatsapp/listarContatos'
    const response = await fetch(url)
    const contatos = await response.json()
    console.log(contatos.users)
}

listarContatos()