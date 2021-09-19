const conexao = require('../infraestrutura/conexao')

class State {

    adiciona(state, res) {
  
        const sql = 'INSERT INTO States SET ?'
        conexao.query(sql, state, (erro, resultados) => {
        if(erro) {
            res.status(400).json(erro)
            } else {
                res.status(201).json(state)
            }
        })
    }

    lista(res) {
        const sql = 'SELECT * FROM States'

        conexao.query(sql, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })

    }

    buscaPorId(id, res) {
        const sql = `SELECT * FROM States WHERE id=${id}`;
    
        conexao.query(sql, (erro, resultados) => {
            const state = resultados[0];
            if(erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json(state);
            }
        })
    }

    altera(id, valores, res) {
        const sql = 'UPDATE States SET ? WHERE id=?'
        conexao.query(sql, [valores, id], (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({id,valores})
            }
        })
    }

    deleta(id, res) {
        const sql = 'DELETE FROM States WHERE id=?'

        conexao.query(sql, id, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({id})
            }
        })
    }

}

module.exports = new State


