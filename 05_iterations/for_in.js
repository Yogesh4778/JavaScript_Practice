//for_in loop returns key 

const myObj = {
    js : "javaScript",
    cpp : "C++",
    py : "Python",
}

// for(const key in myObj){
//     console.log(key);
// }

for(const key in myObj){
    console.log(`${key} shortcut is for ${myObj[key]}`);
}