var multiPlayerOnlineState = function () {

    var backButton1 = new button("back", 400, 450);
    backButton1.draw();
    var connectButton = new button("connect", 600, 250);

    player1.drawGridActual();

    if (!player1.confirmButtonPushed) {

        player1AutoButton.draw();
    }

    if (player1.shipArranged === false) {

        player1AutoButton.draw();

        if (player1AutoButton.insideButton()) {
            if (!mouseIsPressed) {
                player1AutoButton.lightUpButton();

            }
            if (mouseIsPressed) {

                if (player1.autoButtonPushed === true) {
                    player1.initializeGrid();
                }
                player1.arrangeShip();
                player1.autoButtonPushed = true;
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
            }
        }
    }

    if (player1.confirmButtonPushed && player1.sendHtppRequest) {

        connectButton.draw();

        if (connectButton.insideButton()) {

            if (!mouseIsPressed) {
                connectButton.lightUpButton();
            }
            if (mouseIsPressed) {
                player1.sendHtppRequest = false;
            }
        }
    }


    if ((player1.sendHtppRequest === false) && (player1.startOnlineGame === false)) {

        player1.startOnlineGame = true;

    }

    if (player1.startOnlineGame) {
        if (player1.confirmButtonPushed) {

            if (playerOneTurn) {

                if (player2.play(2) === true) {
                    winState = true;
                    multiPlayerOnline = false;
                }

            }
        }

        player2.drawGridHidden();
        fill(255, 255, 255);
        textSize(80);
        text(" Coming soon ", 470, 250);

    }
    if (backButton1.insideButton()) {
        if (!mouseIsPressed) {
            backButton1.lightUpButton();

        }
        if (mouseIsPressed) {
            multiPlayerOnline = false;
            menu = true;
            player1.initializeGrid();
            player2.initializeGrid();
        }
    }
};