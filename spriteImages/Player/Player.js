var playerFrameData = {
    one_three: [0, 11],
    one_three_thrown: [12, 15],
    three_one: [16, 27],
    three_one_thrown: [28, 31],
    catch_1: [32, 32],
    catch_3: [33, 33],
    wait_3: [34, 34],
    wait_1: [35, 35]
};
var playerImg = new Image();
playerImg.src = "spriteImages/Player/Player.png";
var playerSpriteSheet = new SpriteSheet(playerImg, 106, 87, playerFrameData);