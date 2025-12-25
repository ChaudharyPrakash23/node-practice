import readline from "readline";
import fs, { read } from "fs";

const readl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
const fileCreation=()=>{
    readl.question("enter the file name :",(filename)=>{
        readl.question("enter the content of the file :", (content)=>{
            fs.writeFile(`${filename}.txt`,content,(err)=>{
                if(err){
                    console.log(errr);
                }else{
                    console.log(`file created successfully ${filename}.txt`)
                }
                readl.close();
            })
        })
    })
}
fileCreation()