const os=require("os");

console.log("platform:",os.platform());
console.log("user:",os.userInfo());


console.log("architecture",os.arch());
console.log("freememory:",os.freemem(),"bytes");

console.log("total memory:",os.totalmem(),"bytes");