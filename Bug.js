function Bug(){
	var pos = this.pos = new Vector2(random(screenWidth), random(screenHeight));
	this.color = colors[randomInteger(5)];

	this.radius = random(10,30);

	this.render = function(){
		ctx.fillStyle = hsl(this.color, 100, 50);
		ctx.fillCircle(pos.x, pos.y, this.radius);
	}
	this.update = function(){
		//this.radius *= random(0.97,1.03);
	}

}