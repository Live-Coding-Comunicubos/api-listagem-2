const express = require('express')
const app = express()

const lista = [
    {
        id: '1',
        nome: 'amanda',
    },
    {
        id: '2',
        nome: 'patrick',
    },
    {
        id: '3',
        nome: 'ygor',
    },
]


app.listen(3000, ()=>{ 
    console.log('servidor rodando na porta 3000')
})