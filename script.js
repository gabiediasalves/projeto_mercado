var lista = []

function cadastrar() {
    var cod = document.querySelector("#cod").value
    var produto = document.querySelector("#produto").value
    var valuni = document.querySelector("#valuni").value
    var estoque = document.querySelector("#estoque").value

    lista.push([cod ,produto, valuni, estoque])
}
