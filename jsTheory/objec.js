//for creating object

//object created
let obj = {};

let cap ={
    //properties
    fName : "Steve",
    lName : "Rogers",
    friends : ["Peter","Bruce","thor","Tony"],
    age : 34,
    isAvenger : true,
    sayHi : function (){
        console.log("cap say's hi");
    },
    10 : "my id value 10",
    address:{
        state : "New York",
        city : "NY city"
    },
}

//print

// console.log(obj);
// console.log(cap);

// access -> notation key -> value get 
// console.log("FirstName ",cap.fName);
// console.log("LastName ",cap.lName);
// console.log("friends",cap.friends);
// console.log("age",cap.age);
// console.log("isAvenger",cap.isAvenger);

//method call 

// cap.sayHi();

//access way -> [] operator 
//1. you have to acces  key has space in it
//2. you have to access key is of type of number 

// console.log("last Name ", cap["lName"]);
// console.log("10 value ", cap[10]);

//
// let varName = 10;
// console.log("value is ",cap[varName]);
// varName = "address";
// console.log("vaue is ",cap[varName]);

//loop over an object 
// for(let key in cap){
//     console.log(key, " : ", cap[key]);
// }


//it's take as it your value 
console.log(cap.age);

//[] age will taken [] as varible
// console.log(cap[age]);

//not found
// diff . and [] 
// 


//set and update

// console.log("old cap ",cap)


//set 
// cap.movies = 
//     ["favenger","civilWar","ageofUltron"];
//update
// cap.age = 43;

//delete
// delete cap.friends;

// console.log("new cap ", cap);


