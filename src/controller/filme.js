import ServiceFilme from '../service/filme.js'

class ControllerFilme {
    Buscar(req, res) {
        try {
            const filmes = ServiceFilme.Buscar()

            res.send({ filmes })
        } catch (e) {
            res, send({ message: e.message })
        }
    }

    BuscarUm(req, res) {
        try {
            const id = req.params.id

            const titulo = ServiceFilme.BuscarUm(id)

            res.send({ titulo })
        } catch (erros) {
            res.send({ message: erros.mesage })
        }
    }


    BuscarClasse(req, res) {
        try {
            const classificacao = req.params.classificacao

            const titulo = ServiceFilme.BuscarUm(classificacao)

            res.send({ titulo })
        } catch (erros) {
            res.send({ message: erros.mesage })
        }
    }


    Criar(req, res) {
        try {
            const filme = req.body.titulo
            const classificacao = req.body.classificacao
            const descricao = req.body.descricao
            const lancado = req.body.lancado



            ServiceFilme.Criar(titulo)
            res.send({ message: "Criado com sucesso!" })
        } catch (erros) {
            res.send({ message: erros.message })
        }



    }

    Alterar(req, res) {
        try {
            const id = req.params.id
            const titulo = req.body.titulo
            const classificacao = req.body.classificacao
            const descricao = req.body.descricao
            const lancado = req.body.lancado

            ServiceFilme.Alterar(id, titulo, classificacao, descricao, lancado)

            res.send({ message: "Alterado com sucesso" })
        } catch (error) {
            res.send({ message: error.message })
        }

    }

    AlterarStatus(req, res) {
        try {
            const id = req.params.id
            const lancado = req.body.lancado
        
            ServiceFilme.AlterarStatus(id, lancado)

            res.send({ message:"Status alterado com sucesso"})
        } catch (erros) {
            res.send({message: error.message})
        }
    }


    Deletar(id) {
        try {
            const id = req.params.id

            ServiceFilme.Deletar(id)
            res.send({ message: "Deletado com sucesso" })
        } catch (error) {
            res.send({ message: error.message })
        }
    }
}

export default new ControllerFilme()