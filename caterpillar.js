function Caterpillar(x,y){
	this.radius = 10;
	var pos = this.pos = new Vector2(x,y); 
	var vel = this.vel = new Vector2(3,0);
	var positions = [];
	this.segments = 4;
	skipNumber = 5;

	this.setColor = function(){
		this.color = bugs[randomInteger(bugs.length-1)].color;
	}

	this.update = function(){
		if(pos.x > screenWidth){
			vel.x = -3;
		}else if(pos.x < 0){
			vel.x = 3;
		}
		if(pos.y > screenHeight){
			vel.y = -3;
		}else if(pos.y < 0){
			vel.y = 3;
		}
		pos.plusEq(vel);
		positions.unshift(pos.clone());
		while(positions.length>this.segments*skipNumber){
			positions.pop();
		}

	}
	this.render = function(){
		ctx.fillStyle=hsl(this.color, 100, 50);
		for (var i = 0; i < positions.length; i+=skipNumber) {
			var p = positions[i];
			ctx.fillCircle(p.x, p.y, this.radius);
		}
	}
	
}
