const fs = require("fs");

const MYfile = "promise.txt";

fs.promises
  .writeFile(MYfile, "this is fspromise practice", "utf-8")
  .then(console.log("file created successfully"))
  .catch((err) => {
    console.log("unable to write");
  });

  fs.promises.readFile(MYfile,"utf-8")
  .then((data)=>console.log(data))
  .catch((err)=>console.log(err))

  fs.promises.appendFile(MYfile,"this is updated fspromeises pracice","utf-8")
  .then(console.log("data updated successfully"))
  .catch((err)=>console.log(err))

  fs.promises.unlink(MYfile)
  .then(console.log("file deleted successfully"))
  .catch((err)=>console.log(err));


//   note to stop writing fs.promise repeatidily just require as   const fs=require("fs/promises")