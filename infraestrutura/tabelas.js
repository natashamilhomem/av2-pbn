class Tabelas {
    init(conexao) {
        this.conexao = conexao
        this.criarStates()
    }

    criarStates() {
        const sql = 'CREATE TABLE IF NOT EXISTS States (id int NOT NULL AUTO_INCREMENT, nome varchar(50) NOT NULL, regiao varchar(50), populacao int (50), capital varchar(50), area int (50), PRIMARY KEY(id))'
                  
        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabela States criada com sucesso')
            }
        })
    }
}

module.exports = new Tabelas