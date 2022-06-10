class Despesa {
    constructor(ano, mes, dia, tipo, descricao, valor){
        this.ano = ano
        this.mes = mes
        this.dia = dia
        this.tipo = tipo
        this.descricao = descricao
        this.valor = valor
    }

    validarDados() {
        for(let i in this) {
            if(this[i] == undefined || this[i] == '' || this[i] == null) {
                return false
            }
        } return true
    }

    modalDespesaValida() {
        document.getElementById('modal-texto-principal').innerHTML = 'Dados cadastrados com sucesso !!'
        document.getElementById('exampleModalLabel').innerHTML = 'Sucesso na gravação !!'
        document.getElementById('exampleModalLabel').className = 'modal-title text-success'
        document.getElementById('modal-botao').innerHTML = 'Continuar'
        document.getElementById('modal-botao').className = 'btn btn-success'
    }

    modalDespesaInvalida() {
        document.getElementById('modal-texto-principal').innerHTML = 'Faltam alguns itens obrigatórios para o cadastro !!'
        document.getElementById('exampleModalLabel').innerHTML = 'Erro na gravação !!'
        document.getElementById('exampleModalLabel').className = 'modal-title text-danger'
        document.getElementById('modal-botao').innerHTML = 'Voltar e Corrigir'
        document.getElementById('modal-botao').className = 'btn btn-danger'
    }

}

class Bd {

    constructor() {

        let id = localStorage.getItem('id')

        if(id === null) {
            localStorage.setItem('id', 0)
        }

    }

    getProximoId() {
        let proximoId = localStorage.getItem('id')
        return parseInt(proximoId) + 1
    }

    gravar(d) {
        let id = this.getProximoId()
        localStorage.setItem(id, JSON.stringify(d))
        localStorage.setItem('id', id)
    }
}

let bd = new Bd()

function cadastrarDespesa() {

    let ano = document.getElementById('ano')
    let mes = document.getElementById('mes')
    let dia = document.getElementById('dia')
    let tipo = document.getElementById('tipo')
    let descricao = document.getElementById('descricao')
    let valor = document.getElementById('valor')

    let despesa = new Despesa(
        ano.value,
        mes.value,
        dia.value,
        tipo.value,
        descricao.value,
        valor.value
    )

    if(despesa.validarDados()) {
        bd.gravar(despesa)
        despesa.modalDespesaValida()
        $('#modalRegistraDespeza').modal('show')
    } else {
        despesa.modalDespesaInvalida()
        $('#modalRegistraDespeza').modal('show')
    }
}

function zeraCampos() {
    let ano = document.getElementById('ano').value = ''
    let mes = document.getElementById('mes').value = ''
    let dia = document.getElementById('dia').value = ''
    let tipo = document.getElementById('tipo').value = ''
    let descricao = document.getElementById('descricao').value = ''
    let valor = document.getElementById('valor').value = ''
}



