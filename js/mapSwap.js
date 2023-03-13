var player1 = new player("p1", 1);
var player2 = new player("p2", 2);
var bot = new botClass();


var createNewMultiplayerObject = function(){

	player1 = new player("p1", 1);
	player1.initializeGrid();

	player2 = new player("p2", 2);
	player2.initializeGrid();

};


var createNewSinglePlayerObject = function(){

	player1 = new player("p1", 1);
	player1.initializeGrid();

	densityLens = false;
	bot = new botClass();
	bot.initializeGrid();

};

var mapSwap = function (gameType) {

    var temp = new Array(10);
    for(var i = 0; i < 10; i++){
	 temp[ i ] = new Array(10);   
    }
	
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            temp[i][j] = player1.gridActual[i][j];
        }
    }
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            if (gameType === "singlePlayer") {
                player1.gridActual[i][j] = bot.gridActual[i][j];
            }
            else {
                player1.gridActual[i][j] = player2.gridActual[i][j];

            }
        }
    }
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            if (gameType === "singlePlayer") {
                bot.gridActual[i][j] = temp[i][j];
            }
            else {
                player2.gridActual[i][j] = temp[i][j];
            }
        }
    }

};