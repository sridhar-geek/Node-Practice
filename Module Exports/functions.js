// this file is intended to show different way of  exports 
module.exports.hello=function sayHello (name){
         console.log(`Hello ${name} how are you today??`)
}

module.exports.hi= sayHi=(name)=>{
    console.log(`Hi ${name} how are you today??`)
}


const Hi=(name)=>{
    console.log(`Hi ${name} `)
}
function Hello(name){
    console.log(`Hello ${name}`)
}

module.exports={Hi,Hello};