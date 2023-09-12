// 1 - variáveis
let nome = 'Matheus'
console.log(nome)

nome = 'Matheus Battisti'
console.log(nome)

const idade = 31
console.log(idade)

console.log(typeof nome)
console.log(typeof idade) 

// 2 - Mais sobre variáveis
//let 2teste = 'inválido'
//let @teste = 'inválido'

let a = 10, 
b = 20, 
c = 30
console.log(a, b, c)

const nomecompleto = 'Matheus Battisti'
const nomeCompleto = 'João da Silva'
console.log(nomeCompleto)
console.log(nomecompleto)

let _teste = 'ok'
let $teste = 'ok'
console.log(_teste, $teste)

// 3 - prompt
//const age = prompt('Digite a sua idade:')
//console.log(`Você tem ${age} anos.`)

// 4 - alert
// alert('Testando')

// const z = 10
// alert(`O número é ${z}`)


// 5 - Math
console.log(Math.max(5, 2, 1, 10))
console.log(Math.floor(5.14))
console.log(Math.ceil(5.14))

// 6 - console
console.log('teste!')
console.error('erro!')
console.warn('aviso!')

// 7 - if
const m = 10

if(m > 5){
    console.log('M é maior que 5')
}

const user = 'João'

if(user === 'João'){
    console.log('Olá João!')
}

if(user === 'Maria'){
    console.log('Olá Maria!')
}

console.log(user === 'João', user === 'Maria')

// 8 - else 
const loggedin = false

if(loggedin){
    console.log('Está autenticado!')
} else {
    console.log('Não está autenticado!')
}

const q = 10
const w = 15

if(q > 5 && w > 20){
    console.log('Números mais altos')
} else {
    console.log('Os números não são mais altos')
}

// 9 - else if
if(1 > 2){
    console.log('Teste')
} else if(2 > 3){
    console.log('Teste 2')
} else if(5 > 1) {
    console.log('Agora sim!')
}

const userName = 'Matheus'
const userAge = 31

if(userName === 'José'){
    console.log('Bem vindo José')
} else if(userName === 'Matheus' && userAge === 31){
    console.log('Olá Matheus, você tem 31 anos')
} else {
    console.log('Nenhuma condição foi aceita!')
}