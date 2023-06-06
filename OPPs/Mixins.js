
const canEat = {	// Mixin
	eat(){	// Method
		console.log('Eating...');	// Eating...
	}
};

const canSleep = {	// Mixin
	sleep(){	// Method
		console.log('Sleeping...');	// Sleeping...
	}
};

const canPlay = {	// Mixin
	play() {	// Method 
		console.log('Playing...'); // Playing...
	}
};

function mixin(target, ...sources){	// Mixin function that copies all the properties and methods from the source objects to the target object. 
	Object.assign(target, ...sources);	// Copies all the properties and methods from the source objects to the target object.
}

class Animal{} 		// Empty class

mixin(Animal.prototype, canEat, canSleep)	// Mixin canEat and canSleep to Animal class prototype object.

const animal = new Animal(); // Create a new Animal object.
animal.eat();	// Eating...
animal.sleep();	// Sleeping...
