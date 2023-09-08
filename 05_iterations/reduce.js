const myNums = [1,2,3,4]

//using regular fn
// const total = myNums.reduce(function (acc,curr)
// {
//     return acc + curr
// },0)

//using arrow fn
const total = myNums.reduce((acc, curr) => acc + curr, 0)

console.log(total)