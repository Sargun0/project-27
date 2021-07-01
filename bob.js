class bob
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:1,
			friction:0,
			density:0.8
			
			}
		this.x=x;
		this.y=y;
		this.r=r
		
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
		World.add(world, this.body);

	}
		bob1 = new bob (400,545,40)
		rope1 = new rope(bob1.body,roofObject.body, -80,0 )

		bob2 = new bob (400,560,40)
		rope2 = new rope(bob2.body,roofObject.body, -80,0 )

		bob3 = new bob (400,575,40)
		rope3 = new rope(bob3.body,roofObject.body, -80,0 )

		bob4 = new bob (400,590,40)
		rope4 = new rope(bob4.body,roofObject.body, -80,0 )

		bob5 = new bob (400,605,40)
		rope5 = new rope(bob5.body,roofObject.body, -80,0 )
	display()
	{
			
			var paperpos=this.body.position;
			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(255,0,255)
			//imageMode(CENTER);
			//image(this.image, 0,0,this.r, this.r)
			ellipse(0,0,this.r, this.r);
			pop()
			
	}

}

