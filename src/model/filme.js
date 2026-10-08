const filmes = new Array (

{
    titulo: "o perneta",
    classificacao: "livre",
    descricao: "o menino que não tinha uma perna",
    lancado: "sim"
},

{
    titulo: "o outro perneta",
    classificacao: "livre",
    descricao: "outro menino que não tinha uma perna",
    lancado: "nao"
},

{
    titulo: "mais um perneta",
    classificacao: "12 anos",
    descricao: "mais um menino que não tinha uma perna",
    lancado: "sim"
}

)

class Filme {

    
    Buscar() {
        return filmes
    }
    
    BuscarUm(id) {
        return filmes[id]
    }

    BuscarClasse(classificacao){
        return filmes[classificacao]
    }
    
    Criar(titulo, classificacao, descricao, lancado) {
        filmes.push(titulo, classificacao, descricao, lancado)

    }
    Alterar(id, titulo, classificacao, descricao, lancado) {
        filmes[id] = titulo,
        filmes[id] = classificacao,
        filmes[id] = descricao,
        filmes[id] = lancado
    }

    AlterarStatus(id, lancado) {
        filmes[id] = lancado
    }

    Deletar(id) {
        filmes.splice(id, 1)
    }


}

export default new Filme()