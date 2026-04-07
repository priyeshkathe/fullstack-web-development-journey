console.log("Hello World!!")
let a =10
let b =20 
console.log(a+b)

// Template Literals 
console.log("Total Addition is :",a+b ,"units");

let sum = `Total Addition is : ${a+b} units`;  //back tick
console.log(sum);

//conditional statements 

let age=14;
if (age>=18){
    console.log("You can drive a car");
    console.log("You can vote");
}
else{
    let aa = `Your age is ${age} Your cannot vote and drive`;
    console.log(aa);
}

let marks = 999;

if(marks==100){
    console.log("Outoff Greate you got 100");
}
else if (marks>=80){
    console.log("A+");
}
else if (marks<80){
    console.log("Average");
}

//Switch Statement
let color = "green";

switch(color){
    case "yellow":
        console.log("Stop");
        break;
    case "red":
        console.log("wait");
        break;
    case "green":
        console.log("goo.....");
        break;
    default:
        console.log("Signal broken");
        alert("Enter valid Signal");
    
}

//Alerts and promts
alert("This is alert")

console.error("This is console error type");
console.warn("This is warning type console");

//Method Chaining

let chain ="  Priyesh Kathe                 "
console.log(chain.trim().toUpperCase());

//Slicing 

let slc="My name is Priyesh Kathe"

console.log(slc.slice(10));
console.log(slc.slice(11,17))
console.log(slc.slice("name","Fullname"))

//ARRAY 

// push pop unshift shift
let arr=["Priyesh","amey","bhargav"]

arr.push("Vedant")
console.log("After Push :",arr)

arr.pop()
console.log("After pop :",arr)

arr.shift()
console.log("After Shift",arr)

arr.unshift("Vedant")
console.log("After unshift",arr)


console.log(arr.indexOf("Vedant"))

console.log(arr.includes("Priyesh"))

arr1 = ["Priyesh","Amey","Bhargav","Vedant"]
arr2 = ["BMW","Audi","Gwagon","KIA"]

console.log(arr1.concat(arr2))
console.log(arr1.reverse())

//SLICING IN ARRAY 
let colors = ["red","yellow","green","blue"]
console.log(colors.slice(2))

let colors1 = ["red","yellow","green","blue"]
console.log(colors1.slice(0,1))

let colors2 = ["red","yellow","green","blue"]
console.log(colors2.slice(-2))

//SPLICE IN ARRAY 
let name = ["Ayush","Kunal","Yash","Sham"]
console.log(name.splice(2))

let name1 = ["Ayush","Kunal","Yash","Sham"]
console.log(name1.splice(0,1))

let name2 = ["Ayush","Kunal","Yash","Sham"]
console.log(name2.splice(0,2,"Bhargav","Rushya"))

//ARRAY SORT 

console.log("Array Without Sorting : ",name2)
console.log("With Sorting :",name2.sort())

//FOR LOOP 
for (i=1;i<=5;i++){
    console.log(i)
}

for (i=5;i>=1;i--){
    console.log(i)
}

for (let  i = 1; i<=15;i=i+2){
    console.log(i)
}

for(let i = 2;i<=16;i=i+2){
    console.log(i)
}

for (i=16;i>=2;i=i-2) {
    console.log(i)
}


// object literal 

const student = {
    name : "Priyesh",
    age : "20",
    gender:"Male"
};

console.log ("Real object",student)
student.name = "PPPPriyesh"; //update name 

student.year = "TE";
delete student.age;

console.log(student);

//Object if objects (nested object)

const classinfo = {
    priyesh  : {
        grade: "A+",
        age :"20"
    },
    amry :{
        grade:"A",
        age:"67"
    },
    bhargav : {
        grade : "B+",
        age : "10"
    }
};

console.log(classinfo)
console.log(classinfo.amry)
console.log(classinfo.priyesh.grade);

//Array of Objects 

const arob =[
    {
        name :"Priyesh",
        city:"Tapovan"
    },
    {
        name:"Amey",
        city:"Road"
    },
    {
        name:"Bhargav",
        city:"Satana"
    }
];

console.log(arob)

//Functions 

function hello(){
    console.log("Priyesh Kathe function");
}

hello();

function arguments(arg1,arg2){
    console.log(arg1 + arg2);
}

arguments("Priyesh","Kathe");  //function calling


// TRY AND CATCH BLOCK
try {
    console.log(error)
}

catch(err) {                                      // err is error   (e,err,error can be written)
    console.log("Caught an error")
    console.log(err);
}

//ARROW FUNCTION 

const sum1 = (aa,bb) =>{
    console.log(aa+bb);
}
 
//timerrrr & INTERVAL

let id1 = setTimeout( ()=> {
    console.log("Print after 5 Sec "); 
},5000);

let id = setInterval (()=>{
    console.log("repeate")
},3000)

clearInterval(id)

// ARRAY METHODS 

let arr12 = [1,2,3,4,5,6];
function print(el){
    console.log(el);
}
arr12.forEach(print);

let newww = arr12.map((el1)=>{
    return el1*2;
})

arr12.every((el)=> {
    el%2 ===0;
})

final11 = arr12.reduce((sum11,currentvalue)=> sum11 +currentvalue);
console.log(final11);