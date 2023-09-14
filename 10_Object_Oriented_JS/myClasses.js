//ES 6
/*
class User {
    constructor(username,email,pwd){
        this.username = username;
        this.email = email;
        this.pwd = pwd
    }

    encryptPwd(){
        return `${this.pwd}abc`
    }
}

const chai = new User("chai","chai@google.com","789")

console.log(chai.encryptPwd())
*/

// behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());