const db = require ("../infra/conect")
const { ulid } = require ("ulid")

class Garage {
    create(data, callback) {
        const { nome, marca, ano, cor, estilo, combustivel } = data
        const sql = `INSERT INTO garagem (id, nome, marca, ano, cor, estilo, combustivel) VALUES 
        ('${ulid()}', '${nome}', '${marca}', '${ano}', '${cor}', '${estilo}', '${combustivel}')`
        
        db.run(sql, callback)
    }

    findAll(callback) {
        const sql = `SELECT * FROM garagem`
        db.all(sql, callback)
    }

    findOne (id, callback) {
        const sql = `SELECT * FROM garagem WHERE id = '${id}'`
        db.get (sql, callback)
    }

    delete(id,callback) {
        const sql = `DELETE FROM garagem WHERE id = '${id}'`
        db.run (sql, callback)
    }

    updateParcial(id, data, callback) {
        let garageData = Object.entries(data)
        let fields = []
        for (let i = 0; i < garageData.length; i++) {
            fields.push(`${garageData[i][0]} = '${garageData[i[1]]}'`)
        }
        const sql = `UPDATE garagem SET ${fields.join(",")} WHERE id = '${id}'`
        db.run(sql, callback)
    }
}

module.exports = new Garage()