// events are created and there are listening/waiting for the response
// once events are activated it executes the callback functions 

const EventEmitter = require ("events");
const customEmitter = new EventEmitter();  // this will create new object instanance 
 
// this is simple event 
/*
customEmitter.on("start",()=>{
    console.log("Event started")
});

customEmitter.emit("start");
*/


customEmitter.on("response",(user,message)=>{
    console.log(`Data received from ${user},${message}`)
});
customEmitter.on("response",()=>{
    console.log("random message")
});

customEmitter.emit("response","Sridhar","Hi there");  //we can pass arguments to the callBack functions