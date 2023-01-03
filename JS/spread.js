// treinado o uso do spread conceito muito importante para evitar bugs na aplicação.
// devemos sempre lembrar que apenas é feito uma cópia rasa dos objetos, então devemos tomar cuidado com seu uso.
const car= {
    cor: 'red',
    portas: 4,
    KM: 0 ,
    marca: {name: 'Volvo', modelo:'V40', preco:'R$ 98.196,00'}
}

const copyCar = {
    ...car,
    marca:{...car.marca}
}
car.cor = 'blue'
car.KM = `${10}km rodados`

console.log(car, copyCar)

const numbers = [7,8,9,10,12,15,14]

const highernumber = Math.max(...numbers) //usando o spread para desencapsular os valores do array de números e pássalos como argumentos da função

console.log(highernumber)

const copyArr = [...numbers] // usando o spread para fazer uma cópia do array de números

numbers[0] = 150

console.log(numbers, copyArr)