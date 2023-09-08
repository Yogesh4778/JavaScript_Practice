const coding = ["js","ruby","java","cpp","python"]

// coding.forEach( function (val)
// {
//     console.log(val)
// })

// coding.forEach( (val) => {
// console.log(val);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

//arrow fn have access of item,index & arr itself 
// coding.forEach( (item, index, arr) => {
//     console.log(item,index, arr);
// })

// [{},{},{}]
const myCoding = [
    {
        languageName: "JavaSCript",
        languageFileName: "js"
    },
    {
        languageName: "C++",
        languageFileName: "cpp"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
]

// myCoding.forEach( (item) => {
//     console.log(item.languageName);
// })

//Investigation with for each

const myNums = [1,2,3,4,5]

//for each loop does not return value
// const val = myNums.forEach((item) => {
//     return item;
// })

// console.log(val);

//filter return value depends on condition given
// const newNums = myNums.filter( (num) => num > 3)
// console.log(newNums)

//if we want to do the same work with for each

// const newNums = []

// myNums.forEach( (num) => {
//     if(num > 3){
//         newNums.push(num)
//     }
// })

// console.log(newNums)