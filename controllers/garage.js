const garage = require ("../dao/garage")

exports.createOne = (req, res) => {
    garage.create(req.body, (err) => {
        if (!err) {
            res.status(201).send("Carro inserido com sucesso")
        }else {
            res.status(400).send(`${err} `)
        }
    })
}

exports.getall = (req, res) => {
    garage.findAll((err, data) => res.send(data))
}

exports.getOne = (req, res) => {
    garage.findOne(req.params.id, (err, data) => {
        if (data) {
            res.status(200).send(data)
        }else {
            res.status(404).send({errMsg: "Carro não encontrado!!"})
        }
    })
}

exports.chargeOne = (req, res) => {
    garage.updateParcial(req.params.id, req.body, (err) => {
        if (err) {
            res.status(400).send({ msg: err})
        }else {
            res.status(204).end()
        }
    })
}

exports.delete = (req, res) => {
    garage.delete(req.params.id, (err) => {
        if (err) {
            res.status(400).send(`${err} Carro não encontrado`)
        } else {
            res.status(200).send(`Carro não encontrado`)
        }
    })
}