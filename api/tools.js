module.exports = app => {
    const { existsOrError } = app.api.validation

    const hello = (req, res) => {
        res.send('Hello')
    }

    const save = (req, res) => {
        const tool = {...req.body }

        if(req.params.id) tool.id = req.params.id

        try {
            existsOrError(tool.title, "Titulo nao informado")
        } catch {
            return res.status(400).send(msg)
        }

        if(tool.id){
            app.db('tools')
                .update(tool)
                .where({ id: tool.id})
                .then( _ => res.status(204).send(tool) )
                .catch(err => res.status(500).send(err))
        } else {
            app.db('tools')
                .insert(tool)
                .then( _ => res.status(204).send())
                .catch( err => res.status(500).send(err) )
        }
    }
    
    const remove = async (req, res) => {
        try {
            existsOrError(req.params.id, "Id do titulo nao informado")

            const rowsDeleted = await app.db('tools')
                .where({ id: req.params.id }).del()
            existsOrError(rowsDeleted, "Titulo nao encontrado")

            res.status(204).send()
        } catch(msg){
            res.status(400).send(msg)
        }
    }

    const get = (req , res) => {
        app.db('tools')
            .then(tools => res.json(tools))
            .catch( err => res.status(500).send(err))
    }

    const getById = (req, res) => {
        app.db('tools')
            .where({ id: req.params.id })
            .first()
            .then(tool => res.json(tool))
            .catch( err => res.status(500).send(err))
    }

    return {save, remove, get, getById, hello}
    
}