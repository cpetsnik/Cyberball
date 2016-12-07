var mcBallOneThree;

var ballOneThreeframeData = {
	one_three:[0,31],
	three_one:[32,60]
	};
var ballOneThreeImg = new Image();
ballOneThreeImg.onload = createBallOneThree;
ballOneThreeImg.src = "spriteImages/Ball/Ball_one_three.png";

function createBallOneThree()
{
    var ballOneThreeImgSpriteSheet = new SpriteSheet(ballOneThreeImg, 244, 60, ballOneThreeframeData);
    mcBallOneThree = new BitmapSequence(ballOneThreeImgSpriteSheet);
    mcBallOneThree.gotoAndPlay(1);
}