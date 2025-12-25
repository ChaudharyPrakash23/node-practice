import readline from "node:readline";


const readl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const todo=[];
const showmenu=()=>{
    console.log("1. Add a task");
    console.log("2. view tasks");
    console.log("3. exit");
    readl.question("choose your option:",(option)=>{
        if(option==="1"){
           readl.question("Enter a task",(task)=>{
            todo.push(task);
            console.log("task added",task);
            showmenu()
           })
        }else if(option==="2"){
          console.log("todos are:");
          todo.forEach((task,index)=>{
            console.log(`${index+1}:${task}`);
            showmenu()
          })
        }else if(option==="3"){
            console.log("good bye");
            readl.close();
        }else{
            console.log("invalid option");
            showmenu()
        }
    })
}
showmenu();