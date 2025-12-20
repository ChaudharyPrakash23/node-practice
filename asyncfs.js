const fs=require("fs");

const myfile="newfile.txt";

const writeFile=fs.writeFile(myfile,"this is async fs module","utf-8",(error)=>{
  if(error){
    console.log(error);
  }else{
    console.log("file has been written");
  }
})

const readFile=fs.readFile(myfile,"utf-8",(error,data)=>{
    if(error){
        console.log(error);
    }else{
        console.log(data);
    }
})

const updateFile=fs.appendFile(myfile,"this is updated file","utf-8",(error)=>{
   if(error){
    console.log(error);
   }else{
    console.log("file updated successfully")
   }
})

const deleteFile=fs.unlink(myfile,(error)=>{
    if(error){
        console.log(error);
    }else{
        console.log("file has been deleted successfully");
    }
})