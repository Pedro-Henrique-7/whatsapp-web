'use strict'





async function listarContatos() {
    const url = 'http://localhost:8080/v1/whatsapp/contato/11966578996'
    const response = await fetch(url)
    const dados = await response.json()
    return dados.contacts
}

async function listarMensagens(numero) {

    const contatos = listarContatos()

    const numeroComExtensao = contatos.foto
    const numero = numeroComExtensao.replace(/\.[^.]+$/, '')
    const url = `http://localhost:8080/v1/whatsapp/userMessages/${numero}`
    const response = await fetch(url)
    const dados = await response.json()
    return dados.
}


async function criarListaContatos() {
    const contatos = await listarContatos()

    const containerMenssagens = document.getElementById('chats-main')


    contatos.forEach(contatos => {

        const message = document.createElement('div')
        message.id = 'message'
        message.classList.add('message')

        containerMenssagens.appendChild(message)

        const messageLeft = document.createElement('div')
        messageLeft.classList.add('message-left')

        const messageRight = document.createElement('div')
        messageRight.classList.add('message-right')

        const img = document.createElement('img')
        img.classList.add('persona-icon')
        img.src = contatos.foto


        const h2 = document.createElement('h2')

        const span = document.createElement('span')

        h2.textContent = contatos.nome
        span.textContent = contatos.descricao

        message.appendChild(messageLeft)
        message.appendChild(messageRight)
        messageLeft.appendChild(img)
        messageRight.appendChild(h2)
        messageRight.appendChild(span)

    });


}

criarListaContatos()