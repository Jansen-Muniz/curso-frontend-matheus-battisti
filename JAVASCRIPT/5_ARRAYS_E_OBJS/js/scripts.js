// 1 - arrays
const lista = [1, 2, 3, 4, 5]

console.log(lista)
console.log(typeof lista)

const itens = ['Matheus', true, 2, 4.12, []]

console.log(itens)

// 2 - mais sobre arrays
const arr = ['a', 'b', 'c', 'd', 'd']

console.log(arr[0])
console.log(arr[2])
console.log(arr[83])

// 3 - propriedades
const numbers = [5, 3, 4]

console.log(numbers.length)
console.log(numbers['length'])

const myName = 'Matheus'

console.log(myName.length)

// 4 - métodos
const otherNumbers = [1, 2, 3]
const allNumbers = otherNumbers.concat(numbers)

console.log(allNumbers)

const text = 'algum texto'

console.log(text.toUpperCase())
console.log(typeof text.toLowerCase)
console.log(text.indexOf('g'))

// 5 - objetos
const person = {
  name: 'Matheus',
  age: 31,
  job: 'Programador'
}

console.log(person)
console.log(person.name)
console.log(person.name.length)
console.log(typeof person)

// 6 - criando e deletando propriedades
const car = {
  engine: 2.0,
  brand: 'VW',
  model: 'Tiguan',
  km: 20000
}

console.log(car)

car.door = 4

console.log(car)

delete car.km

console.log(car)

// 7 - mais sobre objetos
const obj = {
  a: 'teste',
  b: true
}

console.log(obj instanceof Object)

const obj2 = {
  c: []
}

Object.assign(obj2, obj)

console.log(obj2)
console.log(obj)

// 8 - conhecendo melhor os objetos
console.log(Object.keys(obj))
console.log(Object.keys(obj2))
console.log(Object.keys(car))
console.log(Object.entries(car))

// 9 - mutação
const a = {
  name: 'Matheus'
}

const b = a

console.log(a)
console.log(b)

a.age = 31

console.log(a)
console.log(b)

delete b.age

console.log(a)
console.log(b)


// 10 - loops em arrays
const users = ['Matheus', 'João', 'Pedro', 'Miguel']

for(let i = 0; i < users.length; i++){
  console.log(`Listando usuário: ${users}`)
}

// 11 - push e pop
const array = ['a', 'b', 'c']

array.push('d')

console.log(array)
console.log(array.length)

array.pop()

console.log(array)

const itemRemovido = array.pop()

console.log(itemRemovido)
console.log(array)

array.push('z', 'x', 'y')

console.log(array)

// 12 - shift e unshift
const letters = ['a', 'b', 'c']
const letter = letters.shift('a')

console.log(letter)
console.log(letters)

letters.unshift('p', 'q', 'r')
letters.unshift('z')

console.log(letters)

// 13 - indexOf e lastIndexOf

const myElements = ['Morango', 'Maçã', 'Abacate', 'Pêra', 'Abacate']

console.log(myElements.indexOf('Maçã'))
console.log(myElements.indexOf('Abacate'))

console.log(myElements[2])
console.log(myElements[myElements.indexOf('Abacate')])

console.log(myElements.lastIndexOf('Abacate'))

console.log(myElements.indexOf('Mamão'))

console.log(myElements.lastIndexOf('Uva'))

// 14 - slice
const testeSlice = ['a', 'b', 'c', 'd', 'e', 'f']

const subArray = testeSlice.slice(2, 4)

console.log(subArray)
console.log(testeSlice)

const subArray2 = testeSlice.slice(2, 4 + 1)

console.log(subArray2)

const subArray3 = testeSlice.slice(10, 20)

console.log(subArray3)

const subArray4 = testeSlice.slice(2)

console.log(subArray4)