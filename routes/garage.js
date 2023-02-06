const express = require ("express")
const router = express.Router()
const garage = require ("../controllers/garage")

// criar carro
router.post ("/", garage.createOne)

// Exibir todos os carros
router.get("/", garage.getall)

// Exibir um carro pelo ID
router.get ("/:id", garage.getOne)

// Atualizar um carro (parcial)
router.patch("/:id", garage.chargeOne)

// Deletar um carro
router.delete("/:id", garage.delete)

module. exports = router
