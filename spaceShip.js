// 1. Create a class function SpaceShip
// - should set two properties: name and topSpeed
// - should have a method accelerate that logs to the console 
//   `${name} moving to ${topSpeed}`

class SpaceShip {
    constructor(name, topSpeed){
        this.name= name; 
        this.topSpeed = topSpeed; 
    }
    accelerate() { 
        console.log(`${this.name} uses ${this.topSpeed}`);
    }
}

const bubbie = new SpaceShip('Bubbie', 1000)
const stinks = new SpaceShip('Stinks', 'Engaged at Warp 9.9')


// 2. Call the constructor with a couple ships, 
// and call accelerate on both of them.

stinks.accelerate();
bubbie.accelerate();
