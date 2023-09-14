class User{
    constructor(email,pwd){
        this.email = email;
        this.pwd = pwd;
    }

    get email(){
        return this._email;
    }

    set email(val){
        this._email = val
    }

    get pwd(){
        return this._pwd
    }

    set pwd(val){
        this._pwd = val 
    }
}

const yogi = new User("Yogi@ind.ai",3797)

console.log(yogi)

//here object can access _email, _Pwd which is private property but new proposal is req. in ES22 of using # in place of _ which is not accessible 