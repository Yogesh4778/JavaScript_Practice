/*const user = {
    username:"Yogi",
    loginCount: 7,
    signedIn: true
}

console.log(user.loginCount);

*/

function User(username,loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this  //bydefault it is implicitly defined so we need not to write return here
}

const userOne =new User("Yogesh",7,true);
const userTwo = new User("Patidar",10,true)

console.log(userOne)
console.log(userTwo)