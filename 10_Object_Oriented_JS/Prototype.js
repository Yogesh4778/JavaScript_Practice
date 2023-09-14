let myName = 'Yogesh    '

// console.log(myName.length);

String.prototype.trueLength = function(){
   console.log(`True Length is: ${this.trim().length}`); 
}
myName.trueLength();
"YogeshPatidar  ".trueLength();

let myHeros = ["Hanumanji",'Bheem']

let heroPower = {
    Hanumanji: "Jay Shree Ram",
    Bheem : "Jay Bheem",

    getPower: function(){
        console.log(`Bheem power is ${this.Bheem}`);
    }

}
//we add new property in Object so that everyone have this new property
Object.prototype.yogi = function(){
    console.log(`Yogesh is present in all objects`);
}

//we add new property in Array 
Array.prototype.heyYogesh = function(){
    console.log(`Hey Yogesh is present`);
}

// heroPower.yogi()
// myHeros.yogi()

// myHeros.heyYogesh()

// heroPower.heyYogesh() :-> Not present in Object because this property is only for Array
 
//inheritance
const User = {
    name : 'Yogesh',
    email : 'Yogesh@india.com'
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport //prototypal inheritance : Accessing other's property
}

Teacher.__proto__ = User //prototypal inheritance

//modern Syntax
Object.setPrototypeOf(TeachingSupport, Teacher)