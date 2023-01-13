var lista = []
var template_cadastro = document.querySelector('.template_cadastro')

function mostra_template_cadastro() {
    if (template_cadastro.style.display === 'block') {
        template_cadastro.style.display = 'none'
    } else {
        template_cadastro.style.display = 'block'
        template_relatorio.style.display = 'none'
    }
}

var template_relatorio = document.querySelector('.template_relatorio')
function mostra_template_relatorio() {
    if (template_relatorio.style.display === 'block') {
        template_relatorio.style.display = 'none'
    } else {
        template_relatorio.style.display = 'block'
        template_cadastro.style.display = 'none'
    }
}

function cadastrar() {
    var cod = document.querySelector("#cod").value
    var produto = document.querySelector("#produto").value
    var valuni = document.querySelector("#valuni").value
    var estoque = document.querySelector("#estoque").value
    lista.push([cod, produto, valuni, estoque])


    if (valida_codigo(lista)) {
        alert("Código inválido!")

    } else if (valida_input(lista[lista.length - 1][0]) && valida_input(lista[lista.length - 1][1]) && valida_input(lista[lista.length - 1][2]) && valida_input(lista[lista.length - 1][3])) {

        var table = document.querySelector('.table')
        var row = table.insertRow(1)
        var cell1 = row.insertCell(0)
        var cell2 = row.insertCell(1)
        var cell3 = row.insertCell(2)
        var cell4 = row.insertCell(3)

        cell1.innerHTML = `${lista[lista.length - 1][0]}`
        cell2.innerHTML = `${lista[lista.length - 1][1]}`
        cell3.innerHTML = `${lista[lista.length - 1][2]}`
        cell4.innerHTML = `${lista[lista.length - 1][3]}`

    }
console.log(lista)


}

var valida_input = (s) => {
    if (s <= 0 || s == null || s == '') {
        alert("Valor(es) inserido(s) inválido(s)!")
        lista.splice(lista.length - 1, 1)
        return false
    } else {
        return true
    }
};


var valida_codigo = (lista) => {
    var codi = []
    for (let i = 0; i < lista.length; i++) {
        codi.push(lista[i][0])
    }

    function hasDuplicates(codi) {
        return new Set(codi).size !== codi.length;
    }

    if (hasDuplicates(codi)) {
        console.log("Duplicate elements found.");
        lista.splice(lista.length - 1, 1)
        return true
    }
}



