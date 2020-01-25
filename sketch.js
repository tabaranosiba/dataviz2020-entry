var rectMax = 800;

function setup() {
	createCanvas(800,800); // make an HTML canvas element width x height pixels
}

function draw() {
	background(201, 233, 246); //sky background
	var h = map(hour(), 0, 24, 0, rectMax); 
	
	fill('#222222');
	rect(0,0, 800, h);
	
	noStroke();
	fill(220,220,220);
	ellipse(400, 300, 280, 280);
	fill(255, 255, 255);
	arc(400,300,280,280,0,(minute()/30*PI));
	
	noStroke();
  	fill(245, 243, 206);
	ellipse(400,300,180,180);
	fill(255, 223, 0);
	arc(400,300,180,180,0,(second()/30*PI));
	// seconds();

	// textSize(32);
	// fill(180);
	// text(hour(), 10, 30);
	// fill(100);
	// text(minute(), 10, 60);
	// fill(0);
	// text(second(), 10, 90);
}




