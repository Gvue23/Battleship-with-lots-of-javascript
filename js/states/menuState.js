var menuState = function () {
    fill(96, 174, 225, 220);
    rect(posX + 30, posY + 15, 350, 350, 60);
    fill(255, 255, 255);
    textSize(50);

    multiplayerButton.draw();
    instructionsButton.draw();
    creditsButton.draw();
    statisticsButton.draw();
    singlePlayerButton.draw();

    if (mouseX > singlePlayerButton.x && mouseX < singlePlayerButton.x + singlePlayerButton.width && mouseY > singlePlayerButton.y) {

        if (singlePlayerButton.insideButton()) {

            singlePlayerButton.lightUpButton();

            if (mouseIsPressed) {

                menu = false;
                singlePlayer = true;
                makeNewMap = true;
                initializeRandomMap();
            }    
        }

        else if (multiplayerButton.insideButton()) {

            multiplayerButton.lightUpButton();

            if (mouseIsPressed) {

                menu = false;
                multiPlayerOffline = true;
                makeNewMap = true;  
                initializeRandomMap();
            }    
        }
        else if (instructionsButton.insideButton()) {

            instructionsButton.lightUpButton();

            if (mouseIsPressed) {

                menu = false;
                instructions = true;

            }
        }
        else if (creditsButton.insideButton()) {

            creditsButton.lightUpButton();

            if (mouseIsPressed) {

                menu = false;
                credits = true;
            }    
        }
        else if (statisticsButton.insideButton()) {

            statisticsButton.lightUpButton();

            if (mouseIsPressed) {

                menu = false;
                statistics = true;

            }    
        }
    }

};