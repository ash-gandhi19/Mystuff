

// let additon = (a, b) => {
//   sum = Number(a) + Number(b);

//   document.getElementById("printoutput").innerHTML = sum;
// };

document.getElementById("add").addEventListener("click", function () {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let sum = Number(num1) + Number(num2);
    document.getElementById("printoutput").innerHTML = sum;
    console.log(sum);
});
let x=2000;
const y=40;
if (100 === 100) {
    var a = 1000;
    let x = 10;
    const y = 100;
    
}

//console.log(a); //1000 var will overrider with latest value 
//console.log(x); //2000 it's block scope ,so will take outside declred global value
//console.log(y); //40 const will also take outside declard value


// let employee =
// {
//     name: "Shiva",
//     age: 25,
//     designation: "Software Engineer",
// };
// console.log(employee);
// employee.designation = "Senior Software Engineer";
// console.log(employee);

// let greeting = () => {
//     var a = 10;
//     let b = 20;
//     const c = 30;
// };
// greeting();
// console.log(a);
// console.log(b);
// console.log(c);


let greeting = () => {
    var test = 10;
    let test1 = 20;
    const test2 = 30;
};
greeting();
//console.log(test);
//console.log(test1);
//console.log(test2);


let numbers=[1,3,5,7,8,65,43,23];
let minimum=Math.min(...numbers);
console.log(minimum);



let obje={
    name12:"aish",
    age:22,
}
let newobj={
    name12:"test",
    loca:"mahad"
};

let merger=[{...obje,...newobj}];
console.log(merger);
//Class object creation by using contrustor

//example 1
class Vehicle{
    constructor(type,modal){
        this.type=type;
        this.modal=modal;
    }
    getpropertyvalue(){
        return `${this.type} ${this.modal}`;
    }
}
let objetcrea= new Vehicle("car","honda");
let accessdata=objetcrea.getpropertyvalue();
console.log(accessdata);

//example 2

class Car{

    constructor(colorofcar,fuel,rpm,speed,year){
        this.colorofcar=colorofcar;
        this.fuel=fuel;
        this.rpm=rpm;
        this.speed=speed;
        this.year=year;
    }

    specification(){
        let spec=`
        colorofcar:${this.colorofcar}
        Fuel:${this.fuel}
        `;
        return spec;
    }

}

let carobj=new Car('white','petrol',80,120,2016);

console.log(carobj.specification());

//example 3


class Product{
    //constructor should hold the data that u have created in object
    constructor(id,name,price,quantity,status){
        this.id=id;
        this.name=name;
        this.price=price;
        this.quantity=quantity;
        this.status=status;
    }
    getTotal(){
        let total = this.price * this.quantity;
        let get_total=`Total Price of ${this.name} Product is ${total}`;
        return get_total;

    }
}

let prodobj=new Product(1,'booster',150,2,'available'); //object creation
console.log(prodobj.getTotal());

let produc2=new Product(1,'booster',100,2,'available'); //object creation
console.log(produc2.getTotal());


//example 4
class Calc{
  
    getAvarage(...arrayobj){

        console.log(arrayobj);
       // [num1[0],num2,num3,num4,num5]=arrayobj;
        let sum =0;
        for(let i in arrayobj){
            sum += arrayobj[i];
        }
        console.log(sum);
        return (sum /arrayobj.length);
    }
}
let calcobj=new Calc();
 console.log(calcobj.getAvarage(1,2,3,4,5));

//Inhertiance =>transfer parent class to child class
//instance method access using referance

// parent :Superclass /base
// child : derived / Subclass
//super is keyword which is used to call parent class constructor
// Extends we require to achieve inhertiance. inherit property from parent class to child class
// if you create a object for parent class then u can access only parent class to child class, but if u create a object of child class then u can access child and parent class too.

class Man{
constructor(name){
    this.name=name;
}
}
class Employee extends Man{
    constructor(name,position){
        super(name); // Must call super constructor in derived class before accessing 'this' or returning from derived constructor
        this.position=position;
    }

}

//creating object for child class
let Empobj=new Employee("aishwarya","Software Developer");

console.log((Empobj.name));
console.log((Empobj.position));


 //example 2 of inheritance

    //parent class
    class Car1{
        constructor(type){
            console.log("i am car constructor");
        }

        getType(){
            return "My type is: " +  this.type;
        }
    }
    //child class whos extends car
    class Baleno extends Car1{
        constructor(type){
            super(type);
            console.log("I am baleno class construcotr " + type);
        }
        getType(){
            return super.getType();
        }
       
    }
    //child class whos extends baleno
    class Omni extends Baleno{
        constructor(type){
            super(type);
            console.log("I am Omni class construcotr " + type);
        }
        getType(){
            return super.getType();
        }
       
    }

   let balenoobj= new Baleno("Air conditioner");
   let omniobj = new Omni("Non AC");


   class Rectangle{
        constructor(length,bredth){
            this.length=length;
            this.bredth=bredth;
        }

        getArea(){
            return this.length * this.bredth;
        }
    }

   class Square extends Rectangle{
    constructor(length){
        super(length,length);
    }

    //getperimeterofrectangle

    getPerimeterrectangle(){
        return 2 * ( this.length + this.bredth);
    }
   }

   let rectobj=new Rectangle(10,20);
   console.log(rectobj.getArea());
   let squareobj=new Square(60);
   console.log(squareobj.getPerimeterrectangle());


   //Polymorphism => we have same method but we  used on diff objects...many + forms

    //multiple bhehaviours
    //class should be inherited,else u ll not acheive polymorphism


    class CarPol{
        drive(){
            return "this is running slow";
        }
    }
    class Motorcycyle extends CarPol{
        drive(){
            return "this is running fast";
        }
    }
    let carobjpol=new CarPol();
        console.log(carobjpol.drive()); //this is running slow
    let motorobjpol=new Motorcycyle();
        console.log(motorobjpol.drive()); //this is running fast

//Enapsulation => where you acheive a security .bind a data using getter and setters method...wrapping or binding data into single unit is called encapsulation

//getter =>to read or a define method to get a value
//setter =>to set a value
// make it public so u can access outside of a class


class Encapcar{
    setAttr(modal,year){
        this.modal=modal;
        this.year=year;
    }
    getmodel(){
        console.log(this.modal);
    }

    getyear(){
        console.log(this.year);
    }
    
}

let enccarobj=new Encapcar();

enccarobj.setAttr("honda",2019);

enccarobj.getmodel();
enccarobj.getyear();


//Static method example 
//static method access by using class name and it will executes 

class PersonStatic{
constructor(type){
    this.type=type;
    console.log("hiee");
}
static displaytype1(type){
    console.log(`${type}`);
}
}

let personstatobj=new PersonStatic();

PersonStatic.displaytype1("honda");



// Return all the palindromes in an array
//Anonymous 
let palindrome=function(arr){
    let notpalin=[]
    let palin=[]
     for(i=0;i<arr.length;i++){
         let string=arr[i].toString()
          let l=string.length
         for (let j = 0; j < l/ 2; j++) {
           if (string[j] !== string[l-1-j]) {notpalin.push(arr[i])}
 
         }
     }
     for(i=0;i<arr.length;i++){
         if(notpalin.includes(arr[i])){continue}
         else(palin.push(arr[i]))
     }
 
     console.log(palin)
    }
  palindrome(['madam','test','abba']);
 
 

//IIFE

(function palindrome(arr){
    let notpalin=[]
    let palin=[]
     for(i=0;i<arr.length;i++){
         let string=arr[i].toString()
          let l=string.length
         for (let j = 0; j < l/ 2; j++) {
           if (string[j] !== string[l-1-j]) {notpalin.push(arr[i])}
 
         }
 
     }
     for(i=0;i<arr.length;i++){
         if(notpalin.includes(arr[i])){continue}
         else(palin.push(arr[i]))
     }

    console.log(palin);
})(['madam','test','abba'])

//Arrow Function:

let palindromearrow=((arr)=>{
    let notpalin=[]
    let palin=[]
     for(i=0;i<arr.length;i++){
         let string=arr[i].toString()
          let l=string.length
         for (let j = 0; j < l/ 2; j++) {
           if (string[j] !== string[l-1-j]) {notpalin.push(arr[i])}
 
         }
     }
     for(i=0;i<arr.length;i++){
         if(notpalin.includes(arr[i])){continue}
         else(palin.push(arr[i]))
     }
 
     console.log(palin)
    });

let arr=['madam','test','abba'];
palindromearrow(arr);

//Output:  ['madam', 'abba']

// Return median of two sorted arrays of same size
//IIFE
(function med(array1,array2){
    let arr=array1.concat(array2).sort()
    let l=arr.length
    median=(arr[(l/2)-1]+arr[l/2])/2
    console.log(median)
})([10,22,50,41],[11,80,1,4])

//Ananymous Function
let Mediananon=function(arr1,arr2){
    let arr=arr1.concat(arr2).sort()
    let l=arr.length
    median=(arr[(l/2)-1]+arr[l/2])/2
    console.log(median)
}
Mediananon([10,22,50,41],[11,80,1,4]);

//Output:13

// Remove duplicates from an array

//IIFE
(function duplicate(arr){
    let obj={}
   arr.map(b=>obj[b]=1)
   console.log(Object.keys(obj))
})([1,2,4,52,1,3])

//Ananymous Function
let duplicateanon=function(arr){
    let obj={}
   arr.map(b=>obj[b]=1)
   console.log(Object.keys(obj))
}
duplicateanon([1,2,4,52,1,3]);

//output: ['1', '2', '3', '4', '52']


// Rotate an array by k times

//IIFE
(function rotate(arr,k){
    for(i=1;i<=k;i++){
        arr.unshift(arr[arr.length-1])
        arr.pop()}
     console.log(arr)
    })([12,45,3,5],1);

//Ananymous Function
let rotate = function (arr,k){
    for(i=1;i<=k;i++){
        arr.unshift(arr[arr.length-1])
        arr.pop()}
     console.log(arr)
    }
rotate([12,45,3,5],5)


  let iife_odd=[];
     let iife_oddarray=((oddnum)=>{
         for(let i in oddnum){
             if(oddnum[i] % 2 !== 0){
                 iife_odd.push(oddnum[i]);
             }
         }
         return iife_odd;
         });
arr=[1,2,3,4,5,6,7,8,9,10];
output=iife_oddarray(arr);
console.log(output);


let iifeStrCap=[];
let iife_Strarray=((strcapobj)=>{
    for(let i in strcapobj){
            iifeStrCap.push(strcapobj[i].toUpperCase());
    }
    return iifeStrCap;
});
let arrow_str=["s","f","q","r"];
console.log(iife_Strarray(arrow_str));

