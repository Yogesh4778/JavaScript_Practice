function setUsername(username){
    //complex DB calls
    this.username = username;
}

function createUser(username, email, pwd){
    setUsername.call(this,username)//it gives reference
    
    this.email = email
    this.pwd = pwd
}

const chai = new createUser("chai",'chai@fb.com','123')

console.log(chai);