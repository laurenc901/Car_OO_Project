class Vehicle {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk(){
        return('Beep.');
    }

    toString(){
        return(`The vehicle is a ${this.make} ${this.model} from ${this.year}.` );
    }
};

let myCar = new Vehicle('Hyundai', 'Elantra', 2016);

class Car extends Vehicle {
    numWheels(){
        return(4);    
    }
}


let myFirstCar = new Car("Toyota", "Corolla", 2005);



class Motorcycle extends Vehicle {
    numWheels(){
        return(2);
    }

    revEngine(){
        return('VROOM!!!');
    }
}

let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);

class Garage {
    constructor(capacity){
        this.vehicles = [];
        this.capacity = capacity;
    }

    add(newVehicle){
        if (!(newVehicle instanceof Vehicle)) {
            return('Only vehicles are allowed in here!');
        }
        if (this.vehicles.length >= this.capacity) {
            return("Sorry, we're full.");
        }
        this.vehicles.push(newVehicle);
      return('Vehicle added!');
    }
}

let garage = new Garage(2);
