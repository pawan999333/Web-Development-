
// 1. ways to print in javascript *******************************************************
 // // document.write("hii pawan sharma");
 // // alert("me");
 // console.log("Hello World");
 // console.log("pawan",9,"sharma");


 //2.Javascript console API   **************************************************************************
//  console.log("Hello World");
//  console.warn('this is warning');
//  console.error("this is error");
//  console.error(9);
//  console.log("pawan",9,"sharma");

/* 
multi line comment
 console.assert(9==(23-1));
 console.assert(9==(20-11));

 */

//  3.Javascript variables    ****************************************************************
// /what are variable? --->   Containers to store data values
var number1=36;
var number2=660;
// console.log(number1+number2);

// 4. Data types in javascript


//String
var str1="This is a string";
var str2="This is also a string";

//Number
var num1=450;
var num2=89.0999993

//Object
var obj={
    pawan:33,
    sharma:78,
    iitian:99.999
}

// console.log(obj);

//Boolean
var a=true;
var b=false;
// console.log(a,b);

//Undefined
var und;
// console.log(und);
// console.log(undefined);


//Null
var n=null;
// console.log(n);


/*
At a very high level, there are two types of data types in Javascript
1. Primitive data types: undefined, null, number, string, boolean, Symbol
2. Reference data types: Arrays and Objects
*/

var arr=[1,2,"string",4,5]
// console.log(arr);
// console.log(arr[0]);

//Operators in javascript

var a=34;
var b=63;
// console.log("The value of a+b is: ", a+b);
// console.log("the value of a-b is:",b-a);
// console.log("the value of b/a is:",b/a);

// Assignment operators
var c=b;
// console.log(c);
// c += 2;// c=c+2
// c -= 2;// c=c-2
// c *= 2;// c=c*2
c /= 2;// c=c/2
// console.log(c);


//Comparison operators
var x=36;
var y=63;
// console.log(x==y);
// console.log(x>=y);
// console.log(x<=y);
// console.log(x<y);
// console.log(x>y);

// Logical operators


// Logica and
// console.log(true && true);
// console.log(true && false);
// console.log(false && false);
// console.log(false && true);

// Logical or
// console.log(true || true);
// console.log(true || false);
// console.log(false || false);
// console.log(false || true);

// Logical not
// console.log(!false);
// console.log(!true);



// Function
// DRY = Do not repeat yourself
function avg(a,b){
    return (a+b)/2;
}

c1=avg(3,6);
c2=avg(6,4);

// console.log(c1,c2);


// Conditionals in javascript

var age=19;
age=27;
// if(age>8){
//     console.log("you are not a kid");
// }
// else{
//     console.log("you are a kid");
// }

// if-else ladder
// if(age>33){
//     console.log("you are not a kid");
// }

// else if(age>26){
//     console.log("Bacche ni rahee");
// }

// else if(age>18){
//     console.log("18 bacche ni rahe");
// }

// else{
//     console.log("not bacche");
// }

// function agefunction(a){

// }

var arr=[1,2,3,4,5,6,7];
// console.log(arr);
// for(var i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

//----------------------for each for array---------------------------------------
// arr.forEach(function(ele){
//     console.log(ele);
// })
{
let j=0;
}
// j++;

const k=0;
// k++;
// k=k+1;

let l=10;
// while(l<arr.length){
//     console.log(arr[l]);
//     l++;
// }

// do{
//     console.log(arr[l]);
//     l++;
// }while(l<arr.length);

// for (var i=0;i<arr.length;i++){

//     if(i==2){
//         // break;
//         continue;
//     }

//     console.log(arr[i]);
// }

//Array methods
let myArr=["Fan", "sharma", 3, 99, null, true];
console.log(myArr.length);

myArr.pop();
console.log(myArr);

myArr.push(undefined);
console.log(myArr);

myArr.shift();
console.log(myArr);

myArr.unshift("srk");
console.log(myArr);

const newlen=myArr.unshift("kkk");
console.log(myArr);
console.log(newlen);
console.log(myArr[0]);

// ******************************************
// console.log(myArr.toString());   ----------------------------------
// console.log(myArr.sort());     //-------------------------------------
// let arr2=[222,31,1,678,9,5,0.9,1.2];
// console.log(arr2.sort());   -----------------------------------------

// String methods in javascript
var str3="pawanis a good boy good good pawan";
// console.log(str3.length);
// // console.log(str3.length());
// console.log(str3.indexOf("a"));
// console.log(str3.indexOf("good"));
// console.log(str3.lastIndexOf("good"));

// console.log(str3.slice(1,3));
// console.log(str3.replace("pawan","harry"));
// console.log(str3);
// console.log(str3.replace("pawan","kat"));

let myDate=new Date();
// console.log(myDate);
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());

//DOM Manipulation

let elem=document.getElementById('click');
// console.log(elem);

let elemClass=document.getElementsByClassName("container");
// console.log(elemClass);
// elemClass[0].style.background="yellow";
elemClass[0].classList.add("pawan");
elemClass[0].classList.add("sharma");
elemClass[0].classList.remove('pawan');

// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);

// let elemTag=document.getElementsByTagName('div');
// console.log(elemTag);
// createdElement=document.createElement('h1');
// createdElement.innerText='This is a created para';
// elemTag[0].appendChild(createdElement);
// createdElement2=document.createElement('b');
// createdElement2.innerText='hii pawan sharma999';
// elemTag[0].replaceChild(createdElement2,createdElement);
// console.log(document.title);

// //Selecting using Query
// sel=document.querySelector('.container');
// console.log(sel);
// sel2=document.querySelectorAll('.container');
// console.log(sel2);


function clicked(){
    console.log("The button was clicked");
}

window.onload=function(){
    console.log("The document was loaded");
}

// Events in javascript
// firstContainer.addEventListener('click',function() {
//     document.querySelectorAll('.container')[1].innerHTML="iron man Avengers";
//     console.log("Click hua");
// })

// firstContainer.addEventListener('mouseover',function(){
//     console.log('Mouse on contanier');
// })

// firstContainer.addEventListener('mouseout',function(){
//     console.log("Mouse out of container");
// })

let prevHTML=document.querySelectorAll('.container')[1].innerHTML;
firstContainer.addEventListener('mouseup',function(){
    document.querySelectorAll('.container')[1].innerHTML=prevHTML;
    console.log("mouse up on container when release mouse");
})

firstContainer.addEventListener('mousedown',function(){
    document.querySelectorAll('.container')[1].innerHTML="iron man Avengers";
    console.log("mouse down when release cursor from container");
})

// Arrow function
// function summm(a,b){
//     return a+b;
// }

// summm=(a,b)=>{
//     return a+b;
// }

//setTimeout and setInterval

logkaro=()=>{
    console.log("hii buddy");
    document.querySelectorAll('.container')[1].innerHTML="Avengers";
}

// clr=setTimeout(logkaro, 5000);
// clearTimeout(clr);
// clr=setInterval(logkaro, 2000);
// clearInterval(clr);


// local storage
localStorage.setItem('pawan', 'iron');
// localStorage.getItem('pawan');   --->'iron'
localStorage.removeItem('pawan');
localStorage.setItem('name', 'iron');
localStorage.clear();

//Json
obj={name:"harry", sirname:"sharma", a:{hii:'worl"d'}}
jso=JSON.stringify(obj);
// console.log(jso);
console.log(typeof obj);
console.log(typeof jso);
parsed=JSON.parse(`{"name":"harry", "sirname":"sharma", "a":{hii:'world'}}`);
console.log(parsed);