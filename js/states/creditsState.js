var creditsState = function () {
    fill(255, 255, 255);
    textSize(50);
    text(" - Gabriel Vue & Jonathan Ayala ", 150, 150);
    var backButton = new button("back", 150, 300);
    backButton.draw();
    //if the mouse is in the same place as the button
    if (mouseX > backButton.x && mouseX < backButton.x + backButton.width && mouseY > backButton.y && mouseY < backButton.y + backButton.height) {
        //check to see if the mouse is pressed
        if (!mouseIsPressed) {
            //if mouse is not pressed then light up button
            fill(240, 218, 240, 100);
            rect(backButton.x, backButton.y, backButton.width, backButton.height);
        }
        if (mouseIsPressed) {
            //if mouse is pressed go to menu
            credits = false;
            menu = true;
        }
    }
};