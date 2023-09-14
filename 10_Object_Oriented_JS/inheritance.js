class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.group(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, pwd){
        super(username) //replacer of call
        this.email = email
        this.pwd = pwd
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai","chai@code.com",'789')

chai.addCourse() 

const usr = new User('NewUser')

usr.logMe()

console.log(chai === Teacher) 
console.log(chai instanceof Teacher)