"use strict";
class Vehicle {
    constructor(name, brand, model) {
        this.name = name;
        this.brand = brand;
        this.model = model;
    }
    startEngine() {
        console.log('I am starting engine....');
    }
    stopEngine() {
        console.log('I am stoping engine...');
    }
    move() {
        console.log('I am moving');
    }
    ;
}
const vehicle1 = new Vehicle('car', 'toyota', 2000);
// abstract class
class Vehicle2 {
    constructor(name, brand, model) {
        this.name = name;
        this.brand = brand;
        this.model = model;
    }
    move() {
        console.log('I am moving');
    }
}
class Car extends Vehicle2 {
    startEngine() {
        console.log('I am starting engine....');
    }
    ;
    stopEngine() {
        console.log('I am stoping engine...');
    }
}
