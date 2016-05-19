function Particle(x, y, color) { 
	
	var pos = this.pos = new Vector2(x,y); 
	var vel = this.vel = new Vector2(); 
	this.size = random(5,10); 
	this.drag = 0.98; 
	this.shrink = 0.92; 
	this.colour = hsl(color,100,random(50,100)); 
	
	this.update = function() { 
		vel.multiplyEq(this.drag);
		pos.plusEq(vel); 
		this.size*=this.shrink;
	}
	
	this.render = function() { 
		ctx.fillStyle = this.colour; 
		ctx.fillCircle(pos.x, pos.y, this.size);
	}
	
}