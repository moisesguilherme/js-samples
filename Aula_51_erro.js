function tratarErroELancar(erro) {
    //throw new Error('.....')
    //throw 10
    //throw true
    //throw 'mensagem'
    throw {
        erro: erro.name,
        msg: erro.message,
        date: new  Date
    }
}

function imprimirNomeGritado(obj) {
    try{
        console.log(obj.nome.toUpperCase() + '!!!')
    }catch (e){
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }
    
    
}

const obj = {name:'Roberto'}
imprimirNomeGritado(obj)
