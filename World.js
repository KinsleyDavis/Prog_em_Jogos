class World {
	static canvas;
	static canvasContext;
	static score;
	
	constructor() {
		//variables for game loop
		this.frameRate = 45;
		this.timeStep = 1000/this.frameRate;
		this.lastFrameTimeMs = 0;
		this.delta = 0;
		//this.achievementSystem = new Achievements();
		/*
		this.ballPhysics = new BallPhysics();
		this.ballPhysics.addObserver(this.achievementSystem);
		*/
		//game entities
		/*
		this.paddle = new Paddle();
		this.ball = new Ball(this.ballPhysics);
		this.bricks = new Bricks(8,3);
        */
		this.entities = [this.ship] /*paddle,this.ball,this.bricks]; */
	
		
		//init stuff
		World.canvas = document.getElementById('gameCanvas');
		World.canvasContext = World.canvas.getContext('2d');
		/*
		requestAnimationFrame(this.mainLoop.bind(this));
		World.canvas.addEventListener('mousemove',MouseInput.updateMousePos);
		*/

	}
	
	mainLoop(timeStamp) {
		//Pattern Game Loop
		this.delta += timeStamp - this.lastFrameTimeMs;
		this.lastFrameTimeMs = timeStamp;
		
		while(this.delta >= this.timeStep) {
			this.move(this.timeStep);
			this.delta -= this.timeStep;
		}
		this.draw();
		requestAnimationFrame(this.mainLoop.bind(this));
	}

	move(deltaTime) {
		//Update game pattern
		for(let i = 0; i<this.entities.length;i++)
			this.entities[i].move(this,deltaTime);
	}

	draw() {
		//Update game pattern
		Utils.clearScreen();
		for(let i = 0; i<this.entities.length;i++)
			this.entities[i].draw();
	}


}