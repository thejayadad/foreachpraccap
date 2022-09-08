
//Two ways to capitalize characters in an array

let name = ["bob", "tom", "johnson", "kenneth"]

// for (let i = 0; i < name.length; i++){
//     console.log(name[i].toUpperCase())
// }

//Second method

name.forEach(function(name) {
    console.log(name.toUpperCase())
})