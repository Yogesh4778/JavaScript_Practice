 const myNums = [1,2,3,4,5,6,7,8]

//  const newNums = myNums.map((num) => {
//     return num + 10;
//  })
//  console.log(newNums)

//same work using for Each

// const newNums = []

// myNums.forEach( (num) => {
//     newNums.push(num+10)
// })

// console.log(newNums)


//************ Chaining */

const newNums = myNums
                    .map((num) => num * 10)
                    .map((num) => num + 1)
                    .filter( (nu) => nu >= 30)

console.log(newNums)                    