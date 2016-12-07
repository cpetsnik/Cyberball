var mcBallOneTwo;
var ballOneTwoFrameData = {
	one_two:[0,30],
	two_one:[31,61]
	};
var ballOneTwoImg = new Image();
ballOneTwoImg.onload = createBallOneTwo;
ballOneTwoImg.src = "spriteImages/Ball/Ball_one_two.png";

function createBallOneTwo()
{
    var spriteSheet = new SpriteSheet(ballOneTwoImg, 88, 126, ballOneTwoFrameData);
    mcBallOneTwo = new BitmapSequence(spriteSheet);
    mcBallOneTwo.gotoAndPlay(1);
}
