const fs=require ("fs");
const Myfile="Test.txt";
const writtenFile=fs.writeFileSync(Myfile,"this is the intital text","utf-8");
const readFile=fs.readFileSync(Myfile,"utf-8");
const newFile="newTest.txt";
const updatename=fs.renameSync(Myfile,newFile);
console.log(updatename);
console.log(writtenFile);
console.log(readFile);

// all are synchronous mthods for curd in fs