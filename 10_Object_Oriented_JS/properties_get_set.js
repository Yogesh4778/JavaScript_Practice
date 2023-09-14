function User(email,pwd){
    this._email = email;
    this._pwd = pwd;

    Object.defineProperty(this,'email',{
        get:function(){
            return this._email;
        },
        set:function(val){
            this._email = val 
        }
    })

    Object.defineProperty(this,'pwd',{
        get:function(){
            return this._pwd;
        },
        set:function(val){
            this._pwd = val 
        }
    })
}

const obj = new User("Usr@gmail.com","qwert")

console.log(obj.email)