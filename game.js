
var screenWidth, 
	screenHeight,
	canvas, 
	ctx; 
var	particles = [];
var bugs = [];
var player;
var colors = [0, 60, 120, 180, 240, 300];
// set up automatically called on load by creative.js
function setup(){
	initVars(); 
	initCanvas(); 
	initObjects(); 
	KeyTracker.addKeyDownListener(Key.LEFT, moveLeft);
	KeyTracker.addKeyDownListener(Key.RIGHT, moveRight);
	KeyTracker.addKeyDownListener(Key.UP, moveUp);
	KeyTracker.addKeyDownListener(Key.DOWN, moveDown);
}

function moveLeft(){
	player.vel.y = 0;
	player.vel.x = -3;
}

function moveRight(){
	player.vel.y = 0;
	player.vel.x = 3;
}

function moveUp(){
	player.vel.y = -3;
	player.vel.x = 0;
}
function moveDown(){
	player.vel.y = 3;
	player.vel.x = 0;
}
// MAIN GAME LOOP
// draw automatically called by creative.js
function draw() { 

	ctx.clearRect(0,0,canvas.width, canvas.height); 
	player.update();

	checkCollisions();

	renderParticles();
	renderBugs();
	player.render();
	
}	
function checkCollisions(){
	for (var i = 0; i < bugs.length; i++) {
		var bug = bugs[i];
		if(bug.pos.isCloseTo(player.pos, bug.radius+player.radius)) {
			if(player.color === bug.color){
				player.segments++;
			}else{
				--player.segments;
			}
			makeParticle(100, bug.pos.x, bug.pos.y, bug.color);
			bugs.splice(i,1); 
			i--;
			player.setColor();
		}
	};
	
}
function renderBugs(){
	for (var i = 0; i < bugs.length; i++) {
		var bug = bugs[i];
		bug.update();
		bug.render();
	};
}
function initObjects() { 
	
	for (var i = 0; i < 0.1*screenHeight; i++) {
		bugs.push(new Bug());
	}
	player = new Caterpillar(screenWidth/2, screenHeight/2);
	player.setColor();

}

function initVars() { 
	screenWidth = window.innerWidth; 
	screenHeight = window.innerHeight; 	
}

function initCanvas() { 

	canvas = document.createElement('canvas'); 
	ctx = canvas.getContext('2d'); 

	document.body.appendChild(canvas); 
	canvas.width = screenWidth; 
	canvas.height = screenHeight;
}

function renderParticles(){
	while(particles.length>500) { 
		particles.shift();
	}
	
	for(var i = 0; i<particles.length; i++ ) { 
		var p = particles[i]; 
		p.update(); 
		p.render(); 		
	}
}

function makeParticle(numParticles, x, y, color) { 
	
	for(var i = 0; i<numParticles; i++) { 
		var p = new Particle(x, y, color); 
		p.vel.reset(random(0,5),0);
		p.vel.rotate(random(360));
		particles.push(p); 
	}	
}