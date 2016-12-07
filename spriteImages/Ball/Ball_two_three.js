var mcBallTwoThree;
var ballTwoThreeFrameData = {
	two_three:[0,29],
	three_two:[30,59]
	};
var ballTwoThreeImage = new Image();
ballTwoThreeImage.onload = createBallTwoThree;
ballTwoThreeImage.src = "spriteImages/Ball/Ball_two_three.png";

function createBallTwoThree()
{
    var spriteSheet = new SpriteSheet(ballTwoThreeImage, 95, 128, ballTwoThreeFrameData);
    mcBallTwoThree = new BitmapSequence(spriteSheet);
    mcBallTwoThree.gotoAndPlay(1);
}