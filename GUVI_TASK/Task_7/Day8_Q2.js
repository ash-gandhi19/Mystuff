// Q2.UML diagram to Javascript class
class Circle{
    constructor(radius=1.0, color="red"){
        this.radius = radius;
        this.color =color;
    }
    
    getRadius(){
        console.log(this.radius);
    }

    setRadius(rad){
        this.radius = rad;
    }

    getColor(){
        console.log(this.color);
    }

    setColor(col){
        this.color = col;
    }

    toString(){
        console.log(`Radius: ${this.radius},  Color: ${this.color}`);
    }

    getArea(){
        let area = Math.PI * this.radius * this.radius;
        console.log(`Area of the circle is: ${area}`);
    }

    getCircumference() {
        let circumference = 2 * Math.PI * this.radius;
        console.log(`Circumference of the circle is ${circumference}`);
      }
}


let circle= new Circle();
circle.getRadius();
circle.setRadius(2.0);
circle.getColor();
circle.setColor("blue");
circle.toString();
circle.getArea();
circle.getCircumference();

/*
    1
    red
    Radius: 2,  Color: blue
    Area of the circle is: 12.566370614359172
    Circumference of the circle is 12.566370614359172
*/