require('dotenv').config()
const express = require('express')
const app = express()
const knex = require('./conexao')

app.use(express.json())


app.get('/', async (req, res) => {
    try {
        const carros = await knex('carros')
        res.json(carros)

    } catch (error) {
        console.log(error);
    }
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(port);
})