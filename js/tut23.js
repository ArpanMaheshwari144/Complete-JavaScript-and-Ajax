//Object literals for creating objects
let car = {
    name: 'BMW',
    topSpeed: 240,
    run: function () {
        console.log("car is running");
    }
}
console.log(car);
console.log(car.name);
console.log(car.run());

//Creating a constructor for car
function GeneralCar(givenName, givenSpeed) {
    this.name = givenName;
    this.speed = givenSpeed;
    this.run = function () {
        console.log(`${this.name} is running`);
    }
    this.analyze = function () {
        console.log(`${this.name} is slower by ${400 - this.speed}Km/h than LAMBORGHINI`)
    }
}
car1 = new GeneralCar('ROLLS ROYCE', 300);
car2 = new GeneralCar('MERCEDES', 250);
console.log(car1);
console.log(car1.name);
console.log(car1.speed);
console.log(car1.run());
console.log(car1.analyze());
console.log(car2);
console.log(car2.name);
console.log(car2.speed);
console.log(car2.run());
console.log(car2.analyze());