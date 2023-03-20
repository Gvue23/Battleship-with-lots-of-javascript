var multiPlayerOfflineState = function () {
    var backButton1 = new button("back", 400, 450);
    backButton1.draw();


    if (!player1.confirmButtonPushed) {

        player1.drawGridActual();
        player1AutoButton.draw();
    }
    else {
        player1.drawGridHidden();
    }

    if (!player2.confirmButtonPushed) {

        player2.drawGridActual();
        player2AutoButton.draw();
    }
    else {
        player2.drawGridHidden();
    }

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
                mouseIsPressed = false;                
            }
        }
    }

    if (player2.shipArranged === false) {

        player2AutoButton.draw();

        if (player2AutoButton.insideButton()) {
            if (!mouseIsPressed) {
                player2AutoButton.lightUpButton();
            }
            if (mouseIsPressed) {

                player2.initializeGrid();                
                player2.arrangeShip();
                player2.autoButtonPushed = true;
                mouseIsPressed = false;                
            }
        }
    }

    if (player2.autoButtonPushed) {

        player2ConfirmButton.draw();

        if (player2ConfirmButton.insideButton()) {
            if (!mouseIsPressed) {
                player2ConfirmButton.lightUpButton();

            }
            if (mouseIsPressed) {

                player2.autoButtonPushed = false;
                player2.confirmButtonPushed = true;
                player2.shipArranged = true;
                mapSwap("multiPlayer");
                mouseIsPressed = false;                
            }
        }
    }

    if (player1.confirmButtonPushed && player2.confirmButtonPushed) {

        if(playerSwitching){

            playerSwitchingIterator ++;

                if(playerOneTurn){
                anim.showMessage("PLAYER 1 TURN");
                }
                else{
                anim.showMessage("PLAYER 2 TURN");
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


            if (player2.play(2) === true) {
                winState = true;
                multiPlayerOffline = false;
                player2.win = true;
                singlePlayerWin = false;
            }
        }
        else {
            if (player1.play(1) === true) {

                winState = true;
                multiPlayerOffline = false;
                player1.win = true;
                singlePlayerWin = false;

            }
        }

    }
    if (backButton1.insideButton()) {
        if (!mouseIsPressed) {
            backButton1.lightUpButton();

        }
        if (mouseIsPressed) {
            multiPlayerOffline = false;
            menu = true;
            createNewMultiplayerObject();
            player1.initializeGrid();
            player2.initializeGrid();
            mouseIsPressed = false;
        }
    }
};