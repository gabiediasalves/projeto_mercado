var lista = []
var template_cadastro = document.querySelector('.template_cadastro')
var carouselExampleIndicators = document.querySelector('#carouselExampleIndicators')
var x = document.getElementById("options_venda")

function mostra_template_home() {
    carouselExampleIndicators.style.display = 'block'
    template_relatorio.style.display = 'none'
    template_venda.style.display = 'none'
    template_sacola.style.display = 'none'
    template_cadastro.style.display = 'none'
}

function mostra_template_cadastro() {
    if (template_cadastro.style.display === 'block') {
        template_cadastro.style.display = 'none'
        carouselExampleIndicators.style.display = 'block'
    } else {
        template_cadastro.style.display = 'block'
        template_relatorio.style.display = 'none'
        template_sacola.style.display = 'none'
        template_venda.style.display = 'none'
        carouselExampleIndicators.style.display = 'none'

    }
}

var template_relatorio = document.querySelector('.template_relatorio')
function mostra_template_relatorio() {
    if (template_relatorio.style.display === 'block') {
        template_relatorio.style.display = 'none'
        carouselExampleIndicators.style.display = 'block'
    } else {
        template_relatorio.style.display = 'block'
        template_cadastro.style.display = 'none'
        template_sacola.style.display = 'none'
        template_venda.style.display = 'none'
        carouselExampleIndicators.style.display = 'none'

    }
}

var template_venda = document.querySelector('.template_venda')
function mostra_template_venda() {
    if (template_venda.style.display === 'block') {
        template_venda.style.display = 'none'
        carouselExampleIndicators.style.display = 'block'
    } else {
        template_venda.style.display = 'block'
        template_relatorio.style.display = 'none'
        template_cadastro.style.display = 'none'
        template_sacola.style.display = 'none'
        carouselExampleIndicators.style.display = 'none'
    }
}
var template_sacola = document.querySelector('.template_sacola')
function mostra_template_sacola () {
    if (template_sacola.style.display === 'block') {
        template_sacola.style.display = 'none'
        carouselExampleIndicators.style.display = 'block'
    } else {
        template_sacola.style.display = 'block'
        template_relatorio.style.display = 'none'
        template_cadastro.style.display = 'none'
        template_venda.style.display = 'none'
        carouselExampleIndicators.style.display = 'none'
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
        alert("Produto cadastrado com sucesso!")
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

        var option = document.createElement("option")
        option.text = `${lista[lista.length - 1][0]}`
        option.value = `${lista[lista.length - 1][0]}`
        x.add(option)
    }

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

var mostra_produto_venda = () => {
    var prod_select = x.selectedIndex;
    document.getElementById("dados_produto")

    for (let i = 0; i < lista.length; i++) {
        if (prod_select == lista[i][0]) {
            dados_produto.innerHTML = `Código:${lista[i][0]} - Produto:${lista[i][1]} - Valor unitário:${lista[i][2]} - Estoque:${lista[i][3]}`
        }
    }
}

var sacola = []
function venda() {
    var prod_select = x.selectedIndex;
    var estoque_venda = document.querySelector('#estoque_venda').value

    for (let i = 0; i < lista.length; i++) {
        if (prod_select == lista[i][0]) {

            if (estoque_venda <= lista[i][3] && estoque_venda > 0) {
                alert("Produto adicionado na sacola!")

                sacola.push([lista[i][0], lista[i][1], lista[i][2], lista[i][3], estoque_venda * lista[i][2]])
                lista[i][3] = lista[i][3] - estoque_venda

                console.log(sacola)
                var table_t = document.querySelector('.table_venda')

                var row = table_t.insertRow(1)
                var cell1 = row.insertCell(0)
                var cell2 = row.insertCell(1)
                var cell3 = row.insertCell(2)
                cell1.innerHTML = `Qnt.${estoque_venda}`
                cell2.innerHTML = `Uni ${sacola[i][2]}`
                cell3.innerHTML = `Total${sacola[i][4]}`

                var row = table_t.insertRow(1)
                var cell1 = row.insertCell(0)
                var cell2 = row.insertCell(1)
                var cell3 = row.insertCell(2)
                cell1.innerHTML = `Produto ${sacola[sacola.length - 1][1]}`
                cell2.innerHTML = ``
                cell3.innerHTML = ``




            } else {
                alert("Estoque insuficiente ou não informado!")
            }
        }
    }
}
