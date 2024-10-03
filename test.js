// let tech = [{
//     name:'html',
//     developer: 'Tim berner lee'
// },{
//     name:'Css',
//     developer: 'Hakon wium lee'
// },{
//     name:'javascript',
//     developer:'brendon eich'
// }]

// let replaceTech = {
//     name:'Css',
//     developer: 'Hakon'
// }

// // console.log(Object.entries(tech))

// // tech = tech.map(e=>{
// //     if(e.name === replaceTech.name){
// //         return e = replaceTech
// //     }else{
// //         return e
// //     }
// // })

// // console.log(tech)

// let write = tech.filter(e=>{
//     return e.name !== replaceTech.name
// })

// write[0].developer = 'tim'

// console.log(write);
// console.log(tech)


let heros = [
    {
        name: 'bruce wayne',
        hero: 'Batman',
        status: true
    }, {
        name: 'Clark Kent',
        hero:'Superman',
        status: false
    }, {
        name: 'Barry',
        hero: 'Flash',
        status: true
    }
]

let changeHero = {
    name: 'bruce wayne',
    hero: 'Batman',
    status: true
}

let newData = {
    "name": "Tony stark",
    "hero": "Batman"
}

for (const k in changeHero) {
    for (const key in newData) {
        // console.log(k)
        // console.log(key)
        if (key === k) {
            console.log(changeHero[k])
            console.log(newData.key)
            changeHero[k] = newData[key];
            console.log(changeHero)
            break;
        }
    }
}

console.log(changeHero)