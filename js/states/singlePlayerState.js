var singlePlayerState = function () {
    var backButton1 = new button("  back", 350, 450);
	
    backButton1.draw();
	

    if (!player1.confirmButtonPushed) {

        player1.drawGridActual();
        player1AutoButton.draw();
    }
    else {
        player1.drawGridHidden();
           
    }

      bot.drawGridHidden();

    if (player1.shipArranged === false) {

        player1AutoButton.draw();

        if (player1AutoButton.insideButton()) {

            if (!mouseIsPressed) {

                player1AutoButton.lightUpButton();

            }
            if (mouseIsPressed) {

                player1.initializeGrid();                
                player1.arrangeShip();
                player1.autoButtonPushed = true;
		mouseIsPressed = false;   

            }
        }
    }


    if (player1.autoButtonPushed) {

        player1ConfirmButton.draw();

        if (player1ConfirmButton.insideButton()) {

            if (!mouseIsPressed) {
                player1ConfirmButton.lightUpButton();
            }
            if (mouseIsPressed) {

                player1.autoButtonPushed = false;
                player1.shipArranged = true;
                player1.confirmButtonPushed = true;

                bot.initializeGrid();
                bot.arrangeShip();
                mapSwap("singlePlayer");
		mouseIsPressed = false;   
            }
        }
    }


    if (player1.confirmButtonPushed) {

        if(playerSwitching){

            playerSwitchingIterator ++;

                if(playerOneTurn){
                anim.showMessage("PLAYER 1 TURN");
                }
                else{
                anim.showMessage(" BOT TURN");
                }

            if(playerSwitchingIterator > 50){

                playerSwitchingIterator = 0;

                playerSwitching = false;

                if(playerOneTurn === true){
                playerOneTurn = false;
                }
                else{
                    playerOneTurn = true;
                }

             }
        }

        else  if (playerOneTurn) {

            if (bot.play() === true) {
                winState = true;
                singlePlayer = false;

                bot.win = true;
                singlePlayerWin = true;
            }
        }
        else {

            if (player1.play(1) === true) {

                winState = true;
                singlePlayer = false;
                
                player1.win = true;
                singlePlayerWin = true;
            }
        }
        
        if(densityLens === true){
            bot.drawProbabilityDensityGrid();
        }
        

    }

    if (backButton1.insideButton()) {
        if (!mouseIsPressed) {
            backButton1.lightUpButton();

        }
        if (mouseIsPressed) {
            singlePlayer = false;
            menu = true;
            createNewSinglePlayerObject();
            player1.initializeGrid();
            bot.initializeGrid();

            mouseIsPressed = false;
        }
    }

};