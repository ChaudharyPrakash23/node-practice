const eventEmitter= require("events");

const emitter=new eventEmitter();

emitter.on("greet",(args)=>{
    console.log(`hello, ${args.username}, and iam a ${args.role}`)
})

emitter.emit("greet",{username:"prakash chaudhary",role:"full stack developer"});