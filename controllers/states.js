const State = require('../models/states')

module.exports = app => {

    
    app.post('/states', (req, res) => {
        const state = req.body

        State.adiciona(state, res)
        
    })

    app.get('/states', (req, res) => {
        State.lista(res)
    });

    app.get('/states/:id', (req, res) => {
        const id = parseInt(req.params.id);
        State.buscaPorId(id, res);
    })

    app.put('/states/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body
        State.altera(id, valores, res)
    })

    app.delete('/states/:id', (req, res) => {
        const id = parseInt(req.params.id)

        State.deleta(id, res)
    })


}

