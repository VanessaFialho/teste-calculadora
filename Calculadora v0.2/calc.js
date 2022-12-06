let operand1 = [] //vetor para guardar o primeiro operando
let operand2 = [] //vetor para guardar o segundo operando
let num1 = 0      //var para guardar o operando quando for convertido para numero
let num2 = 0
let operacao = '' //var para guardar o indicador da operação
let visor = document.querySelector('div#caixa') //var representando a div da "caixa de texto" da calculadora
let btdiv = document.querySelector('input#opdiv') //var representando o botao da divisão
let btmul = document.querySelector('input#opmul') //var representando o botao da multiplicação
let btsub = document.querySelector('input#opsub') //var representando o botao da subtração
let btsom = document.querySelector('input#opsom') //var representando o botao da soma
let btporc = document.querySelector('input#opporc') //var representando o botao da porcentagem

var n1 = window.document.getElementById('bt1') //var representando o botao do numero '1'
var n2 = window.document.getElementById('bt2')
var n3 = window.document.getElementById('bt3')
var n4 = window.document.getElementById('bt4')
var n5 = window.document.getElementById('bt5')
var n6 = window.document.getElementById('bt6')
var n7 = window.document.getElementById('bt7')
var n8 = window.document.getElementById('bt8')
var n9 = window.document.getElementById('bt9')
var n0 = window.document.getElementById('bt0')
var virg = window.document.getElementById('virgula')

n1.addEventListener('click', apertou1) //eventListener para quando o botao for clicado, chamar a função correspondente
n2.addEventListener('click', apertou2)
n3.addEventListener('click', apertou3)
n4.addEventListener('click', apertou4)
n5.addEventListener('click', apertou5)
n6.addEventListener('click', apertou6)
n7.addEventListener('click', apertou7)
n8.addEventListener('click', apertou8)
n9.addEventListener('click', apertou9)
n0.addEventListener('click', apertou0)
virg.addEventListener('click', apertouvirg)


function limpar() { //quando o botao 'C' for clicado, o visor vai zerar, assim como as variaveis
    visor.innerText = 0
    operand1 = []
    operand2 = []
    operacao = ''
}

function somar() { //quando o botao de operação for clicado, o valor que estiver no visor vai ser salvo no 'num1'
    operacao = '+'
    num1 = Number(visor.innerText)
    visor.innerText = 0
}

function subtrair() {
    operacao = '-'
    num1 = Number(visor.innerText)
    visor.innerText = 0
}

function multiplicar() {
    operacao = 'x'
    num1 = Number(visor.innerText)
    visor.innerText = 0
}

function dividir() {
    operacao = '/'
    num1 = Number(visor.innerText)
    visor.innerText = 0
}

function porcentagem() {
    operacao = '%'
    num1 = Number(visor.innerText)
    visor.innerText = 0
}

function apertou1() { //quando um numero for clicado ele vai ser salvo no vetor 1 ou 2 (dependendo da variavel operacao)
    if (operacao == '') {
        operand1.push(1)
        visor.innerText = operand1.join('')
    } else {
        operand2.push(1)
        visor.innerText = operand2.join('')
    }
}

function apertou2() {
    if (operacao == '') {
        operand1.push(2)
        visor.innerText = operand1.join('')
    } else {
        operand2.push(2)
        visor.innerText = operand2.join('')
    }
}

function apertou3() {
    if (operacao == '') {
        operand1.push(3)
        visor.innerText = operand1.join('')
    } else {
        operand2.push(3)
        visor.innerText = operand2.join('')
    }
}

function apertou4() {
    if (operacao == '') {
        operand1.push(4)
        visor.innerText = operand1.join('')
    } else {
        operand2.push(4)
        visor.innerText = operand2.join('')
    }
}

function apertou5() {
    if (operacao == '') {
        operand1.push(5)
        visor.innerText = operand1.join('')
    } else {
        operand2.push(5)
        visor.innerText = operand2.join('')
    }
}

function apertou6() {
    if (operacao == '') {
        operand1.push(6)
        visor.innerText = operand1.join('')
    } else {
        operand2.push(6)
        visor.innerText = operand2.join('')
    }
}

function apertou7() {
    if (operacao == '') {
        operand1.push(7)
        visor.innerText = operand1.join('')
    } else {
        operand2.push(7)
        visor.innerText = operand2.join('')
    }
}

function apertou8() {
    if (operacao == '') {
        operand1.push(8)
        visor.innerText = operand1.join('')
    } else {
        operand2.push(8)
        visor.innerText = operand2.join('')
    }
}

function apertou9() {
    if (operacao == '') {
        operand1.push(9)
        visor.innerText = operand1.join('')
    } else {
        operand2.push(9)
        visor.innerText = operand2.join('')
    }
}

function apertou0() {
    if (operacao == '') {
        operand1.push(0)
        visor.innerText = operand1.join('')
    } else {
        operand2.push(0)
        visor.innerText = operand2.join('')
    }
}

function apertouvirg() { //quando a virgula for clicada ela vai ser salva no vetor 1 ou 2
    if (operacao == '') {
        operand1.push('.')
        visor.innerText = operand1.join('')
    } else {
        operand2.push('.')
        visor.innerText = operand2.join('')
    }
}

function resultado() { //o valor que estiver no visor vai ser salvo em 'num2' e a operação vai ser realizada
    num2 = Number(visor.innerText)

    switch (operacao) {
        case '+':
            visor.innerText = num1 + num2
            operand1 = []
            operand2 = []
            break
        case '-':
            visor.innerText = num1 - num2
            operand1 = []
            operand2 = []
            break
        case 'x':
            visor.innerText = num1 * num2
            operand1 = []
            operand2 = []
            break
        case '/':
            visor.innerText = num1 / num2
            operand1 = []
            operand2 = []
            break
        case '%':
            visor.innerText = (num1 / 100) * num2
            operand1 = []
            operand2 = []
            break
    }
}
