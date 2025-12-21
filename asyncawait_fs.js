const fs=require("fs/promises");

const myfile="newfile.txt";

const writeFile=async()=>{
    try{
        await fs.writeFile(myfile,"this is async await fs","utf-8");
        console.log("file created and written successfully");
    }catch(error){
        console.error(error);
    }
}
writeFile();

const readFile=async()=>{
    try{
        const data=await fs.readFile(myfile,"utf-8");
        console.log(data);
    }catch(error){
        console.error(error);
    }
}
readFile();

const apppendFile=async()=>{
    try{
        await fs.appendFile(myfile,"this is appended file","utf-8");
    }catch(error){
        console.error(error);
    }
}
apppendFile();