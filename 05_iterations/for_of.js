//for_of loop returns values

// const arr = [1,2,3,4,5]

// for(const num of arr){
//     console.log(num);
// }


//maps
const map = new Map()
map.set('IN', 'India')
map.set('SL', 'Sri Lanka')
map.set('FR', 'France')
map.set('SA', 'South Africa')


// for(const key of map){
//     console.log(key);
// }

for(const [key,value] of map){
    console.log(key + ' :- ' + value);
}