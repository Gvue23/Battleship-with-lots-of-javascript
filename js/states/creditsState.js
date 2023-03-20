var creditsState = function () {
    fill(255, 255, 255);
    textSize(50);
    text(" - Gabriel Vue & Jonathan Ayala ", 150, 150);
    var backButton = new button("back", 150, 300);
    backButton.draw();
    if (mouseX > backButton.x && mouseX < backButton.x + backButton.width && mouseY > backButton.y && mouseY < backButton.y + backButton.height) {
        if (!mouseIsPressed) {
            fill(240, 218, 240, 100);
            rect(backButton.x, backButton.y, backButton.width, backButton.height);
        }
        if (mouseIsPressed) {
            credits = false;
            menu = true;
        }
    }
};