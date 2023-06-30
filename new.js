// function Costumer(nome,email){
//     this.nome = nome
//     this.email = email

//     this.exibirInfos = function(){
//         return `${this.nome}, ${this.email}`
//     }
// }

//const novoCostumer = new Costumer ('Alvaro', 'alvaro@gmail.com')
//console.log(novoCostumer.exibirInfos())

// function Admin (role) {
//     Costumer.call(this, 'Álvaro', 'alvaro@gmail.com')
//     this.role = role || 'cliente'
// }

// Admin.prototype = Object.create(Costumer.prototype)
// const novoCostumer = new Admin('admin')
// console.log(novoCostumer.exibirInfos())
// console.log(novoCostumer.role)

const user = {
    init: function(nome, email){
        this.nome = nome
        this.email = email
    },

    exibirInfos: function (){
        return this.nome
    }
}

const novoUser = Object.create(user)
novoUser.init('Álvaro', 'alvaro@gmail.com')
console.log(novoUser.exibirInfos())

// console.log(user.isPrototypeOf(novoUser))