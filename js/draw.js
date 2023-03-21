var player1AutoButton = new button("auto", 50, 400);
var player1ConfirmButton = new button("confirm", 250, 400);
var player2ConfirmButton = new button("confirm", 750, 400);
var player2AutoButton = new button("auto", 550, 400);

var posX = 400, posY = 70;
var singlePlayerButton = new button("Singleplayer", posX + 110, posY + 60);
var multiplayerButton = new button("Multiplayer", posX + 110, posY + 115);
var instructionsButton = new button("Instructions", posX + 110, posY + 170);
var creditsButton = new button("Credits", posX + 110, posY + 225);
var statisticsButton = new button("Statistics", posX + 110, posY + 280);

var anim = new animation();



var draw = function () {

    anim.animationPlay();
    
    if (menu === true){
        menuState();
    }
    else if(makeNewMap === true){
        newMapState();
    }
    else if (singlePlayer === true){
        singlePlayerState();
    }
    else if (credits === true){
        creditsState();
    }
    else if (instructions === true){
        instructionsState();
    }
    else if (multiPlayerOffline === true){
        multiPlayerOfflineState();
    }
    else if (statistics === true){
        statisticsState();
    }
    else if (winState === true){
        winStateCall();
    }

};
