// importando modulos (dependencias)
const { PORT } = require ("dotenv").config().parsed
const express = require ("express")
const app = express()

// Habilitando CORS
const cors = require ("cors")
app.use (cors())

// Habilitando JSON Parser
app.use(express.json())

const garage = require ("../routes/garage")
app.use("/garage", garage)

app.listen(PORT, () => console.log (`Servidor rodando na porta: ${PORT}...`))
