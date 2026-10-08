import Filme from '../model/filme.js'

class ServiceFilme {

    Buscar() {

        return Filme.Buscar()
    }

    BuscarUm(id) {
        if (!id || isNaN(id)) {
            throw new Error("Favor informar somente números")
        }
        return Filme.BuscarUm(id)
    }

    BuscarClasse(classificacao) {
        if (!classificacao || isNaN(classificacao)) {
            throw new Error("Favor informar a classificação certa")
        }
        return Filme.BuscarUm(classificacao)
    }

    Criar(titulo, classificacao, descricao, lancado) {
        if (!titulo) {
            throw new Error("Favor informar o título do filme")
        }

        Filme.Criar(titulo)

        if (!classificacao) {
            throw new Error("Favor informar a classificação do filme")
        }

        Filme.Criar(classificacao)

        if (!descricao) {
            throw new Error("Favor informar a descrição do filme")
        }

        Filme.Criar(descricao)

        if (!lancado) {
            throw new Error("Favor informar se o filme foi lançado")
        }

        Filme.Criar(lancado)

    }

    Alterar(id, titulo, classificacao, descricao, lancado) {
        if (!id || isNaN(id) || !titulo) {
            throw new Erros("Favor informar todos os dados")
        }
        Filme.Alterar(id, titulo)

        if (!id || isNaN(id) || !classificacao) {
            throw new Erros("Favor informar todos os dados")
        }
        Filme.Alterar(id, classificacao)

        if (!id || isNaN(id) || !descricao) {
            throw new Erros("Favor informar todos os dados")
        }
        Filme.Alterar(id, descricao)

        if (!id || isNaN(id) || !lancado) {
            throw new Erros("Favor informar todos os dados")
        }
        Filme.Alterar(id, lancado)
    }

    AlterarStatus(id, lancado) {
        if (!id || isNaN(id) || !lancado) {
            throw new Erros("Favor informar todos os dados")
        }
        Filme.Alterar(id, lancado)
    }

    Deletar(id) {
        if (!id || isNaN(id)) {
            throw new Error("Favor informar o id corretamente")
        }
        Filme.Deletar(id)
    }

}

export default new ServiceFilme()