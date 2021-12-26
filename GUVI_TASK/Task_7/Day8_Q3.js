//Write a “person” class to hold all the details.

class Person{
    constructor(first_name,last_name,mobileno,age,education,occupation){
        this.first_name=first_name;
        this.last_name=last_name;
        this.mobileno=mobileno;
        this.age=age;
        this.education=education;
        this.occupation=occupation;
    }

    getName(){
        console.log(`My Name is ${this.first_name} ${this.last_name}`);
    }
    getMobile(){
        console.log(`My Mobile Number is ${this.mobileno}`);
    }
    getAge(){
        console.log(`My Mobile Number is ${this.age}`);
    }
    getEducation(){
        console.log(`My Education is ${this.education}`);
    }
    getOccupation(){
        console.log(`My Occupation is ${this.occupation}`);
    }

}

let person_obj= new Person("Aishwarya","Gandhi",8983662057,26,"Graduate","Software Engineer");

person_obj.getName();
person_obj.getMobile();
person_obj.getAge();
person_obj.getEducation();
person_obj.getOccupation();

