var ballFrameData = {
	one_three:[0,31],
	three_one:[32,60],
	one_two:[61,91],
	two_one:[92,122],
	two_three:[123,152],
	three_two:[153,182]
	};
var ballImg = new Image();
//ballImg.src = "spriteImages/Ball/Ball_iPhone.png";
ballImg.onload = createBall;
var ballSpriteSheet;
var mcBall;
function createBall()
{
    alert("Creatting ball sprite");
    ballSpriteSheet = new SpriteSheet(ballImg, 244/2, 159/2, ballFrameData);
    mcBall = new BitmapSequence(ballSpriteSheet);
}