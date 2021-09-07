let fs = require("fs");

//file -> create , delete , update , append
// folder create , delete, 

// path - string that is a address to a particular  folder or file

// file -> actual asset


//reading the file data
// let content = fs.readFileSync("f1.txt");
// console.log(content+" ");

//writing in  file 
// fs.writeFileSync("f2.txt","i am f2");



//append data in file
// fs.appendFileSync("f2.txt","\nand i am appended");

//delete file 
// fs.unlinkSync("f2.txt");


//!  directory
//for making dir
// fs.mkdirSync("dir");

//for deleting dir
// fs.rmdirSync("dir");


//for checking current file or folder exit or not
// let isFolder = fs.existsSync("/media/ramanand/UUI/PP12Web/fs2");
// console.log(isFolder)



// for checking isFile() or isDirectory()
// let pat = fs.lstatSync("f2.txt");
// console.log("is File ",pat.isFile());
// console.log("is Directory ", pat.isDirectory());



//fs.copyFileSync(srcPath, destPath);
//srcPath-> file from wich content has to be copy
//destPath -> path of the file into you want to copy the content 
// let copyContent = fs.copyFileSync("f2.txt","dir/f2.txt");



