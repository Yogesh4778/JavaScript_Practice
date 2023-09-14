//method 1
/*
const promiseOne = new Promise((resolve,reject) => {
    //do an async task
    //DB calls,cryptography, network
    setTimeout(function(){
        console.log('Async task complete');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})
//method 2
new Promise((resolve,reject) => {
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

//method 3
const promiseThird = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Yogesh", email : "Yogesh@india.com"})
    },1000)
})

promiseThird.then(function(user){
    console.log(user);
})

//method 4
const fourPromise = new Promise(function(res,rej){
    setTimeout(function(){
        let error = false;
        if(!error)
        res({username:"yogi", password: "1278"})
    else{
        rej("ERROR")
    }
    },1000)
})
//.then & .catch
fourPromise.then((user) => {
    return user.username
}).then((username) => {
    console.log(username)
}).catch((err)=>{
    console.log(err);
})

//method 5
const promiseFive = new Promise(function(res,rej){
    setTimeout(function(){
        let error = false
        if(!error){
            res({username: 'JS', Engine: "V8"})
        }
        else{
            rej("ERROR in promise 5")
        }
    },1000)
})

async function consumePromiseFive(){
    try{
    const response = await promiseFive
    console.log(response)
    }
    catch(err){
    console.log(err)
   }
}

consumePromiseFive()
*/
// async function getAllUsers() {
//     try{
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json();
//     console.log(data);
//     }
//     catch(err){
//         console.log(err);
//     }
// }

// getAllUsers()

//above code in .then, .catch
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
  console.log(data);  
})
.catch((error) => console.log(error))
