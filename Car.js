class Car{
    constructor(color, convertible){
        this.color = color;
        this.convertible = convertible;
        this.speed = 0;
    }
    accelerate(a){
	this.speed +=a;
    }
    decelerate(d){
	this.speed -=d;
    }
}

module.exports = Car;
