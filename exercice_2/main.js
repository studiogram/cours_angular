class Car {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }
  accelerate(val) {
    this.speed += val;
  }
  brake(val) {
    this.speed -= val;
  }
  status() {
    return `${this.brand} running at ${this.speed} km/h`;
  }
  accelerateStatus(val) {
    this.accelerate(val);
    return this.status();
  }
}

const car1 = new Car("Ford", 0);
console.log(car1.brand);
car1.accelerate(100);
console.log(car1.speed);
car1.brake(50);
console.log(car1.speed);
console.log(car1.status());

const car2 = new Car("Ferrari", 0);
console.log(car2.accelerateStatus(200));
car2.brake(100);
console.log(car2.status());
