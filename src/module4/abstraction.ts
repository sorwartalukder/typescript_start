
interface IVehicle {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
}

class Vehicle implements IVehicle {
    constructor(
        public name: string,
        public brand: string,
        public model: number
    ) { }
    startEngine(): void {
        console.log('I am starting engine....');
    }
    stopEngine(): void {
        console.log('I am stoping engine...');
    }
    move(): void {
        console.log('I am moving')
    };
}

const vehicle1 = new Vehicle('car', 'toyota', 2000);

// abstract class

abstract class Vehicle2 {
    constructor(
        public name: string,
        public brand: string,
        public model: number
    ) { }
    abstract startEngine(): void;
    abstract stopEngine(): void;
    move(): void {
        console.log('I am moving')
    }
}

class Car extends Vehicle2 {
    startEngine(): void {
        console.log('I am starting engine....');
    };
    stopEngine(): void {
        console.log('I am stoping engine...');
    }
}
