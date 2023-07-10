// these both functions are async functions i.e,

setTimeout(()=>{
    console.log("Hello world")
},3000);

setInterval(()=>{
    console.log("Hello world from Interval")
},2000);

console.log("this is last line");


/* result look like this 

 *this is lat line
 *Hello world from Interval
 *Hello world
 *Hello world from Interval...................

 */