
var paddle1, paddle2;
var paddle1_Vel, paddle2_Vel;
var paddle1Scr, paddle2Scr;

var ball, ballV;

function setup(){

	createCanvas(800,600);
	

	paddle1 = paddle2=height/2-50;

	paddle1_Vel=paddle2_Vel=0;
	paddle1Scr=paddle2Scr=0;

	ball=createVector(width/2,height/2);
	ballV=createVector(random(-1,1),random(-1,1));
	ballV.mult(3);

	textAlign(CENTER);
	textSize(30);
	fill(255);
}

function draw(){

	background (5);

	//draw paddles
	rect(20,paddle1,10,100);
	rect(width-30,paddle2,10,100);

	//draw ball
	ellipse(ball.x,ball.y,20);

	//draw scorebord
	text(paddle1Scr + " | "+paddle2Scr,width/2,50);
	//handle paddeles
	handleMov();

	handleBall();
}

function handleBall(){

	ball.x+=ballV.x;
	ball.y+=ballV.y;

	// y axis collisions
	if(ball.y>height || ball.y<0)
		ballV.y*=-1;

		//paddle collisions
		if(ball.x<=30 ){

			//out of bounds
			if(ball.x<=10){
				paddle2Scr++;
				reset();
				return;
			}

			//left paddle
			if(ball.y>paddle1 && ball.y<paddle1+100){
				if(ballV.x<0){
				ballV.x*= -1;
				ballV.mult(random(1,1.1));
				}
			}
			

			//right paddle
		}else if(ball.x>=width-30){

			//out of bounds
			if(ball.x>=width-10){
				paddle1Scr++;
				reset();
				return;

			}
			//collision right paddle
			if(ball.y>paddle2 && ball.y<paddle2+100){
				if(ballV.x>0){
				ballV.x*=-1;
				ballV.mult(random(1,1.1));
				}
			}
			


		

	}	
	
}

function reset(){

	ball=createVector(width/2, height/2);
}
	
function handleMov(){

	//player one controls
	if(keyIsDown(87)){
		//move up
		paddle1_Vel-=5;

	}else if (keyIsDown(83)){

		//move down
		paddle1_Vel+=5;

	}
	//player two controles
	if(keyIsDown(UP_ARROW)){
		//move up
		paddle2_Vel-=5;

	}else if (keyIsDown(DOWN_ARROW)){
		//move down
		paddle2_Vel+=5;
	}

	paddle1+=paddle1_Vel;
	paddle2+=paddle2_Vel;

	//friction 
	paddle1_Vel*=0.4;
	paddle2_Vel*=0.4;

	

	//constrain paddles
	paddle1=constrain(paddle1,0,height-100);
	paddle2=constrain(paddle2,0,height-100);


}