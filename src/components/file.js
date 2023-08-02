const fs=require("node:fs/promises")
const path=require("node:path")
fs.copyFile(path.resolve(__dirname,"./t1.txt"),path.resolve(__dirname,"./t2.txt"))
    .then(value=>{
        console.log(value);
    })