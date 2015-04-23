//Game constant

var CANVAS_WIDTH = 900;
var CANVAS_HEIGHT = 900;
var FPS = 30;
var GAME_STATE = 'start';
var time=0;
var score = 0;
//Key codes: A=65, W=87, D=68, S=83, Space=32, Enter=13
var KEY_A=65, KEY_W=87, KEY_D=68, KEY_S=83, KEY_SPACE=32, KEY_ENT=13, KEY_END=80;

document.onkeydown = keyDownTest;
document.onkeyup = keyUpTest;

var squares = [];

var corridorHoriz = Boolean(false);
var corridorVert = Boolean(false);
var cornerRight = Boolean(false);
var cornerLeft = Boolean(false);
var cornerDownL = Boolean(false);
var cornerDownR = Boolean(false);

var mouseColor = 1;
var mouseCode = 1;

var canvas, stage, queue;

var mouseX, mouseY, timer, scoreCount;
var museX, museY;
var drawCursor, drawCursor2, drawCursor3, drawCursor4, drawCursor5, drawCursor6, drawCursor7, drawCursor8;
var gridWidth = 0, gridHeight = 0;

var mapBlocks;

var mouseEvt = Boolean(false);

var title, instructionScreen, gameOver;
var playButton, tutorialButton, menuButton, medium, large; //Menu Buttons

//opens a canvas and tells CreateJS to use it as a Stage. Remember, CreateJS does everything on it's stage similar to the way ActionScript works.
function openCanvas() {
    
    canvas = document.createElement("canvas");
    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;
	var div = document.getElementById("levelCreator");
    div.appendChild(canvas);
    
}


function setupStage()
{
	stage = new createjs.Stage(canvas);
	stage.enableDOMEvents(true);
	stage.enableMouseOver();
    
	stage.on("stagemousemove",function(evt) {
				//console.log(evt.stageX + ", " + evt.stageY);
                //mouseX.text = "mouseX: " +  evt.stageX;
                //mouseY.text = "mouseY: " +  evt.stageY;
				
				
				
				museX = Math.floor(evt.stageX);
				museY = Math.floor(evt.stageY);
				mouseOverStuff();
			});
			
	stage.on("stagemousedown", stageMouseControls);
	stage.on("stagemouseup", stageMouseControls);
	stage.update();
}


//This displays the sprites on the screen. Notice that I am putting clones of the blocks into an array. This is a really efficient way to duplicate sprite content and the preferred method.
function displaySprites() {
	
	//This draws the objects the first time. It isn't really needed because we have a loop that redraws every frame.
	stage.update();
}


//This is the loop that updates the stage every frame. Remember, any changes you make to the stage don't show up until update is called.
function loop() {
    switchGameState();
	stage.update();
	mouseChecking();
    //console.log(GAME_STATE);
}



function switchGameState()
{
    switch(GAME_STATE)
    {
        case 'start':
            startScreen();
            break;
        case 'startGame':
            init();
            break;
        case 'inGame':
            break;
        case 'Pause':
            console.log("pause");
            instructScreen();
            break;
        case 'gameOver':
            console.log("gameOver");
            gameOverScreen();
            break;
    };
}

//This creates the loop that workes like setInterval
function startLoop() {
	createjs.Ticker.addEventListener("tick", loop);
    createjs.Ticker.setFPS(FPS);
}




function main() {
    switchGameState();
}

//Checks to make sure the DOM is loaded and ready and then runs main()
if( !!(window.addEventListener)) {
    window.addEventListener ("DOMContentLoaded", main);
}else{ //MSIE
    window.attachEvent("onload", main);
}




//Mouse Controls
function mouseChecking()
{
	changeX = Math.floor(museX / 10);
	changeY = Math.floor(museY / 10);

	checkMouseColor();
	
	if(!mouseEvt)
	{
		if(corridorHoriz)
		{
			squares[changeX][changeY].gotoAndStop(mouseColor);
			squares[changeX][changeY].code = mouseCode;
			squares[changeX][changeY-3].gotoAndStop(mouseColor);
			squares[changeX][changeY-3].code = mouseCode;
		}
		else if(corridorVert)
		{
			squares[changeX][changeY].gotoAndStop(mouseColor);
			squares[changeX][changeY].code = mouseCode;
			squares[changeX-3][changeY].gotoAndStop(mouseColor);
			squares[changeX-3][changeY].code = mouseCode;
		}
		else if(cornerLeft)
		{
			squares[changeX][changeY].gotoAndStop(mouseColor);
			squares[changeX][changeY].code = mouseCode;
			
			squares[changeX-3][changeY].gotoAndStop(mouseColor);
			squares[changeX-3][changeY].code = mouseCode;
			
			squares[changeX-3][changeY-1].gotoAndStop(mouseColor);
			squares[changeX-3][changeY-1].code = mouseCode;
			
			squares[changeX-3][changeY-2].gotoAndStop(mouseColor);
			squares[changeX-3][changeY-2].code = mouseCode;
			
			squares[changeX-3][changeY-3].gotoAndStop(mouseColor);
			squares[changeX-3][changeY-3].code = mouseCode;
			
			squares[changeX-2][changeY-3].gotoAndStop(mouseColor);
			squares[changeX-2][changeY-3].code = mouseCode;
			
			squares[changeX-1][changeY-3].gotoAndStop(mouseColor);
			squares[changeX-1][changeY-3].code = mouseCode;
			
			squares[changeX][changeY-3].gotoAndStop(mouseColor);
			squares[changeX][changeY-3].code = mouseCode;
		}
		else if(cornerRight)
		{
			squares[changeX][changeY].gotoAndStop(mouseColor);
			squares[changeX][changeY].code = mouseCode;
			
			squares[changeX+3][changeY].gotoAndStop(mouseColor);
			squares[changeX+3][changeY].code = mouseCode;
			
			squares[changeX+3][changeY-1].gotoAndStop(mouseColor);
			squares[changeX+3][changeY-1].code = mouseCode;
			
			squares[changeX+3][changeY-2].gotoAndStop(mouseColor);
			squares[changeX+3][changeY-2].code = mouseCode;
			
			squares[changeX+3][changeY-3].gotoAndStop(mouseColor);
			squares[changeX+3][changeY-3].code = mouseCode;
			
			squares[changeX+2][changeY-3].gotoAndStop(mouseColor);
			squares[changeX+2][changeY-3].code = mouseCode;
			
			squares[changeX+1][changeY-3].gotoAndStop(mouseColor);
			squares[changeX+1][changeY-3].code = mouseCode;
			
			squares[changeX][changeY-3].gotoAndStop(mouseColor);
			squares[changeX][changeY-3].code = mouseCode;
		}
		else if(cornerDownR)
		{
			squares[changeX][changeY].gotoAndStop(mouseColor);
			squares[changeX][changeY].code = mouseCode;
			
			squares[changeX-3][changeY].gotoAndStop(mouseColor);
			squares[changeX-3][changeY].code = mouseCode;
			
			squares[changeX-3][changeY+1].gotoAndStop(mouseColor);
			squares[changeX-3][changeY+1].code = mouseCode;
			
			squares[changeX-3][changeY+2].gotoAndStop(mouseColor);
			squares[changeX-3][changeY+2].code = mouseCode;
			
			squares[changeX-3][changeY+3].gotoAndStop(mouseColor);
			squares[changeX-3][changeY+3].code = mouseCode;
			
			squares[changeX-2][changeY+3].gotoAndStop(mouseColor);
			squares[changeX-2][changeY+3].code = mouseCode;
			
			squares[changeX-1][changeY+3].gotoAndStop(mouseColor);
			squares[changeX-1][changeY+3].code = mouseCode;
			
			squares[changeX][changeY+3].gotoAndStop(mouseColor);
			squares[changeX][changeY+3].code = mouseCode;
		}
		else if(cornerDownL)
		{
			squares[changeX][changeY].gotoAndStop(mouseColor);
			squares[changeX][changeY].code = mouseCode;
			
			squares[changeX+3][changeY].gotoAndStop(mouseColor);
			squares[changeX+3][changeY].code = mouseCode;
			
			squares[changeX+3][changeY+1].gotoAndStop(mouseColor);
			squares[changeX+3][changeY+1].code = mouseCode;
			
			squares[changeX+3][changeY+2].gotoAndStop(mouseColor);
			squares[changeX+3][changeY+2].code = mouseCode;
			
			squares[changeX+3][changeY+3].gotoAndStop(mouseColor);
			squares[changeX+3][changeY+3].code = mouseCode;
			
			squares[changeX+2][changeY+3].gotoAndStop(mouseColor);
			squares[changeX+2][changeY+3].code = mouseCode;
			
			squares[changeX+1][changeY+3].gotoAndStop(mouseColor);
			squares[changeX+1][changeY+3].code = mouseCode;
			
			squares[changeX][changeY+3].gotoAndStop(mouseColor);
			squares[changeX][changeY+3].code = mouseCode;
		}
		else
		{
			//console.log(squares[changeX][changeY]);
			squares[changeX][changeY].gotoAndStop(mouseColor);
			squares[changeX][changeY].code = mouseCode;
			//squares[changeX][changeY].graphics.beginFill(mouseColor);
			//squares[changeX][changeY].graphics.drawRect(0, 0, 10, 10);
		}
		//stage.updateCache();
	}
	else if(mouseEvt)
	{	
		
	}
}

function mouseOverStuff()
{
	var trackX = Math.floor(museX/10);
	var trackY = Math.floor(museY/10);
	
	if(museX < gridWidth && museY < gridHeight)
	{
		drawCursor.alpha = 1;
		drawCursor2.alpha = 1;
		
		drawCursor.x = Math.floor(trackX*10);
		drawCursor.y = Math.floor(trackY*10);
		
		if(corridorHoriz)
		{
			
			drawCursor2.x = Math.floor(trackX*10);
			drawCursor2.y = Math.floor((trackY-3)*10);
		}
		else if(corridorVert)
		{
			drawCursor2.x = Math.floor((trackX-3)*10);
			drawCursor2.y = Math.floor(trackY*10);
		}
		else if(cornerLeft)
		{
			drawCursor3.alpha = 1;
			drawCursor4.alpha = 1;
			drawCursor5.alpha = 1;
			drawCursor6.alpha = 1;
			drawCursor7.alpha = 1;
			drawCursor8.alpha = 1;
		
			drawCursor2.x = Math.floor((trackX-3)*10);
			drawCursor2.y = Math.floor(trackY*10);
			
			drawCursor3.x = Math.floor((trackX-3)*10);
			drawCursor3.y = Math.floor((trackY-1)*10);
			
			drawCursor4.x = Math.floor((trackX-3)*10);
			drawCursor4.y = Math.floor((trackY-2)*10);
			
			drawCursor5.x = Math.floor((trackX-3)*10);
			drawCursor5.y = Math.floor((trackY-3)*10);
			
			drawCursor6.x = Math.floor((trackX-2)*10);
			drawCursor6.y = Math.floor((trackY-3)*10);
			
			drawCursor7.x = Math.floor((trackX-1)*10);
			drawCursor7.y = Math.floor((trackY-3)*10);
			
			drawCursor8.x = Math.floor((trackX)*10);
			drawCursor8.y = Math.floor((trackY-3)*10);
		}
		else if(cornerRight)
		{
			drawCursor3.alpha = 1;
			drawCursor4.alpha = 1;
			drawCursor5.alpha = 1;
			drawCursor6.alpha = 1;
			drawCursor7.alpha = 1;
			drawCursor8.alpha = 1;
		
			drawCursor2.x = Math.floor((trackX+3)*10);
			drawCursor2.y = Math.floor((trackY)*10);
			
			drawCursor3.x = Math.floor((trackX+3)*10);
			drawCursor3.y = Math.floor((trackY-1)*10);
			
			drawCursor4.x = Math.floor((trackX+3)*10);
			drawCursor4.y = Math.floor((trackY-2)*10);
			
			drawCursor5.x = Math.floor((trackX+3)*10);
			drawCursor5.y = Math.floor((trackY-3)*10);
			
			drawCursor6.x = Math.floor((trackX+2)*10);
			drawCursor6.y = Math.floor((trackY-3)*10);
			
			drawCursor7.x = Math.floor((trackX+1)*10);
			drawCursor7.y = Math.floor((trackY-3)*10);
			
			drawCursor8.x = Math.floor((trackX)*10);
			drawCursor8.y = Math.floor((trackY-3)*10);
		}
		else if(cornerDownR)
		{
			drawCursor3.alpha = 1;
			drawCursor4.alpha = 1;
			drawCursor5.alpha = 1;
			drawCursor6.alpha = 1;
			drawCursor7.alpha = 1;
			drawCursor8.alpha = 1;
		
			drawCursor2.x = Math.floor((trackX-3)*10);
			drawCursor2.y = Math.floor((trackY)*10);
			
			drawCursor3.x = Math.floor((trackX-3)*10);
			drawCursor3.y = Math.floor((trackY+1)*10);
			
			drawCursor4.x = Math.floor((trackX-3)*10);
			drawCursor4.y = Math.floor((trackY+2)*10);
			
			drawCursor5.x = Math.floor((trackX-3)*10);
			drawCursor5.y = Math.floor((trackY+3)*10);
			
			drawCursor6.x = Math.floor((trackX-2)*10);
			drawCursor6.y = Math.floor((trackY+3)*10);
			
			drawCursor7.x = Math.floor((trackX-1)*10);
			drawCursor7.y = Math.floor((trackY+3)*10);
			
			drawCursor8.x = Math.floor((trackX)*10);
			drawCursor8.y = Math.floor((trackY+3)*10);
		}
		else if(cornerDownL)
		{
			drawCursor3.alpha = 1;
			drawCursor4.alpha = 1;
			drawCursor5.alpha = 1;
			drawCursor6.alpha = 1;
			drawCursor7.alpha = 1;
			drawCursor8.alpha = 1;
		
			drawCursor2.x = Math.floor((trackX+3)*10);
			drawCursor2.y = Math.floor((trackY)*10);
			
			drawCursor3.x = Math.floor((trackX+3)*10);
			drawCursor3.y = Math.floor((trackY+1)*10);
			
			drawCursor4.x = Math.floor((trackX+3)*10);
			drawCursor4.y = Math.floor((trackY+2)*10);
			
			drawCursor5.x = Math.floor((trackX+3)*10);
			drawCursor5.y = Math.floor((trackY+3)*10);
			
			drawCursor6.x = Math.floor((trackX+2)*10);
			drawCursor6.y = Math.floor((trackY+3)*10);
			
			drawCursor7.x = Math.floor((trackX+1)*10);
			drawCursor7.y = Math.floor((trackY+3)*10);
			
			drawCursor8.x = Math.floor((trackX)*10);
			drawCursor8.y = Math.floor((trackY+3)*10);
		}
		else
		{
			drawCursor2.x = Math.floor(trackX*10);
			drawCursor2.y = Math.floor(trackY*10);
		}
	}
	else
	{
		drawCursor.alpha = 0;
		drawCursor2.alpha = 0;
		drawCursor3.alpha = 0;
		drawCursor4.alpha = 0;
		drawCursor5.alpha = 0;
		drawCursor6.alpha = 0;
		drawCursor7.alpha = 0;
		drawCursor8.alpha = 0;
	}
	
}

function stageMouseControls(evt)
{
	console.log(evt.type);
	if(evt.type == "stagemousedown")
	{
		mouseEvt = Boolean(false);
		console.log("go");
	}
	else if(evt.type == "stagemouseup")
	{
		mouseEvt = Boolean(true);
		console.log("stop");
	}
}

function checkMouseColor()
{
	if(mouseColor == "floor")
	{
		mouseCode = 1;
	}
}

//Keyboard Events
function keyDownTest(e)
{
    if(!e){ var e = window.event;}
    switch(e.keyCode)
    {
            case KEY_A: console.log("A down"); break;
            case KEY_W: console.log("W down"); break;
            case KEY_S: console.log("S down"); break;
            case KEY_D: console.log("D down"); break;
            case KEY_SPACE: console.log("Space down"); break;
            case KEY_ENT: console.log("Enter down"); break;
			case KEY_END: console.log("End Game"); GAME_STATE = "gameOver"; break;
    }
}

function keyUpTest(e)
{
    if(!e){ var e = window.event;}
    switch(e.keyCode)
    {
            case KEY_A: console.log("A up"); break;
            case KEY_W: console.log("W up"); break;
            case KEY_S: console.log("S up"); break;
            case KEY_D: console.log("D up"); break;
            case KEY_SPACE: console.log("Space up"); break;
            case KEY_ENT: console.log("Enter up"); break;
    }
}


//Loading
function loadComplete(evt) 
{
    startScreenLoad();
    
    instructionScreen = new     createjs.Bitmap(queue.getResult("instructScreen"));
    gameOver = new createjs.Bitmap(queue.getResult("gameOverScreen"));
    
	var blocks = new createjs.SpriteSheet(
		{
		images: [queue.getResult("mapSprites")], 
		frames: [[0,0,10,10,0,0,0],[10,0,10,10,0,0,0],[20,0,10,10,0,0,0],[30,0,10,10,0,0,0],[40,0,10,10,0,0,0]],
		animations:{
			0: [0, 0, "0", 1],
            1: [1, 1, "1", 1],
            2: [2, 2, "2",1],
			3: [3, 3, "3",1],
			4: [4, 4, "4",1]
		}
		
		});
	
	mapBlocks = new createjs.Sprite(blocks);
    
//	displaySprites();
//	startLoop();
}

//This is the preload manifest used by preloadJS. I am currently only loading one image. I can use a commas and add more files if needed. I commented out an example of what that would look like
fileManifest = [
				{src:"GameOver.jpg", id:"gameOverScreen"},
                {src:"InstructScreen.jpg", id:"instructScreen"},
                {src:"StartScreen.jpg", id:"startScreen"},
                {src:"play.png", id:"playButton"},
                {src:"menu.png", id:"menuButton"},
                {src:"tutorial.png", id:"tutorialButton"},
				{src:"MapSprites.png", id:"mapSprites"}
            ];
			
//This function loadeds all the files in fileManifest and will rught loadComplete when it is finished. You can also get progress information. There are examples how to do this in preloadJS.
function loadFiles() {
    queue = new createjs.LoadQueue(true, "assets/");
    queue.on("complete", loadComplete, this);
    queue.loadManifest(fileManifest);
    
}

function startScreenLoad()
{
    title = new createjs.Bitmap(queue.getResult("startScreen"));
    stage.addChild(title);
    
    var tutBut =  new createjs.Bitmap(queue.getResult("tutorialButton"));
    tutorialButton = new createjs.Container();
    tutorialButton.name = "tutorialButton";
    tutorialButton.x = 100;
    tutorialButton.y = 200;
    tutorialButton.addChild(tutBut);
    
    tutorialButton.addEventListener("click", instructScreen);
    
    var play =  new createjs.Bitmap(queue.getResult("playButton"));
    playButton = new createjs.Container();
    playButton.name = "playButton";
    playButton.x = 350;
    playButton.y = 200;
    playButton.addChild(play);
    
    playButton.addEventListener("click", init);
    
    stage.addChild(tutorialButton);
    stage.addChild(playButton);
	
	medium = new createjs.Shape();
	medium.graphics.beginFill("#FF0000").beginStroke("#000000");
    medium.graphics.drawRect(0, 0, 100, 50);
	medium.x = 375;
	medium.y = 150;
	medium.on("click", initMedium);
	
	large = new createjs.Shape();
    large.graphics.beginFill("#FF00FF").beginStroke("#000000");
    large.graphics.drawRect(0, 0, 100, 50);
	large.x = 375;
	large.y = 275;
	large.on("click",initLarge);
	
	stage.addChild(medium);
    stage.addChild(large);
	
    stage.update();
}

function startMouseCursor()
{
	drawCursor = new createjs.Shape();
	drawCursor.x = 0;
	drawCursor.y = 0;
	drawCursor.graphics.beginFill("#ff00ff");
	drawCursor.graphics.drawRect(0, 0, 10, 10).beginStroke("#000000");
	
	drawCursor2 = drawCursor.clone();
	drawCursor3 = drawCursor.clone();
	drawCursor4 = drawCursor.clone();
	drawCursor5 = drawCursor.clone();
	drawCursor6 = drawCursor.clone();
	drawCursor7 = drawCursor.clone();
	drawCursor8 = drawCursor.clone();
	
	drawCursor3.alpha = 0;
	drawCursor4.alpha = 0;
	drawCursor5.alpha = 0;
	drawCursor6.alpha = 0;
	drawCursor7.alpha = 0;
	drawCursor8.alpha = 0;
	
	stage.addChild(drawCursor);
	stage.addChild(drawCursor2);
	stage.addChild(drawCursor3);
	stage.addChild(drawCursor4);
	stage.addChild(drawCursor5);
	stage.addChild(drawCursor6);
	stage.addChild(drawCursor7);
	stage.addChild(drawCursor8);
}

//Unloading
function unloadStartButtons()
{
    stage.removeChild(title);
    stage.removeChild(tutorialButton);
    stage.removeChild(playButton);
	stage.removeChild(medium);
	stage.removeChild(large);
	
}



//Screens
function startScreen()
{
    openCanvas();
    setupStage();
    loadFiles();
}

function instructScreen()
{
    unloadStartButtons();
    if(!createjs.Ticker.getPaused())
    {
        GAME_STATE = "Pause";
        createjs.Ticker.setPaused(true);
        stage.addChild(instructionScreen);
        
        var menu =  new createjs.Bitmap(queue.getResult("menuButton"));
    menuButton = new createjs.Container();
    menuButton.name = "menuButton";
    menuButton.x = 350;
    menuButton.y = 200;
    menuButton.addChild(menu);
        
        menuButton.addEventListener("click", instructScreen);
        
        stage.addChild(menuButton);
        
        
        stage.update();
    }
    else
    {
        createjs.Ticker.setPaused(false);
        startScreenLoad();
        stage.removeChild(instructionScreen);
        stage.removeChild(menuButton);
        stage.update();
    }
}

function gameOverScreen()
{
    if(time >= 10 || GAME_STATE=="gameOver")
    {
        createjs.Ticker.removeAllEventListeners();
        stage.addChild(gameOver);
        stage.addChild(scoreCount);
        stage.update();
    }
}


//Small Grid
function createGridSmall()
{
	mapBlocks.x = 0;
	mapBlocks.y = 0;
	
	for( var x = 0; x < 35; x++)
	{
		squares[x] = []
		for(var y = 0; y < 35; y++)
		{
			mapBlocks.x = x*10;
			mapBlocks.y = y*10;
			mapBlocks.gotoAndStop(0);
			mapBlocks.code = 0;
			squares[x][y] = mapBlocks.clone();
			squares[x][y].code = 0;
		}	
	}
	
	for(var i = 0; i < 35; i++)
	{
		for(var j = 0; j < 35; j++)
		{
			stage.addChild(squares[i][j]);
			//console.log(j);
		}
	}
	
	gridHeight = 350;
	gridWidth = 350;
	
	console.log(squares.length);
	
	stage.update();
	
}

function changeStageDraw()
{
	var corrHoriz = new createjs.Shape();
	corrHoriz.x = 350;
	corrHoriz.y = 0;
	corrHoriz.graphics.beginFill("#FF0000").beginStroke("#000000");
    corrHoriz.graphics.drawRect(0, 0, 50, 50);
	corrHoriz.on("click", function(evt){
		corridorHoriz = Boolean(!corridorHoriz);
		corridorVert = Boolean(false);
		cornerLeft = Boolean(false);
		cornerRight = Boolean(false);
		cornerDownL	= Boolean(false);
		cornerDownR	= Boolean(false);
	});
	
	
	var corrVert = new createjs.Shape();
	corrVert.x = 350;
	corrVert.y = 50;
	corrVert.graphics.beginFill("#FFFF00").beginStroke("#000000");
    corrVert.graphics.drawRect(0, 0, 50, 50);
	corrVert.on("click", function(evt){
		corridorVert = Boolean(!corridorVert);
		corridorHoriz = Boolean(false);
		cornerLeft = Boolean(false);
		cornerRight = Boolean(false);
		cornerDownL	= Boolean(false);
		cornerDownR	= Boolean(false);
	});
	
	var cornerL = new createjs.Shape();
	cornerL.x = 400;
	cornerL.y = 0;
	cornerL.graphics.beginFill("#0066FF").beginStroke("#000000");
    cornerL.graphics.drawRect(0, 0, 50, 50);
	cornerL.on("click", function(evt){
		cornerLeft = Boolean(!cornerLeft);
		cornerRight = Boolean(false);
		cornerDownL	= Boolean(false);
		cornerDownR	= Boolean(false);
		corridorHoriz = Boolean(false);
		corridorVert = Boolean(false);
	});
	
	var cornerR = new createjs.Shape();
	cornerR.x = 400;
	cornerR.y = 50;
	cornerR.graphics.beginFill("#FF6699").beginStroke("#000000");
    cornerR.graphics.drawRect(0, 0, 50, 50);
	cornerR.on("click", function(evt){
		cornerRight = Boolean(!cornerRight);
		cornerLeft = Boolean(false);
		cornerDownL	= Boolean(false);
		cornerDownR	= Boolean(false);
		corridorHoriz = Boolean(false);
		corridorVert = Boolean(false);
	});
	
	var cornerDR = new createjs.Shape();
	cornerDR.x = 450;
	cornerDR.y = 0;
	cornerDR.graphics.beginFill("#006699").beginStroke("#000000");
    cornerDR.graphics.drawRect(0, 0, 50, 50);
	cornerDR.on("click", function(evt){
		cornerDownR = Boolean(!cornerDownR);
		cornerLeft = Boolean(false);
		cornerRight = Boolean(false);
		cornerDownL	= Boolean(false);
		corridorHoriz = Boolean(false);
		corridorVert = Boolean(false);
	});
	
	var cornerDL = new createjs.Shape();
	cornerDL.x = 450;
	cornerDL.y = 50;
	cornerDL.graphics.beginFill("#00CC66").beginStroke("#000000");
    cornerDL.graphics.drawRect(0, 0, 50, 50);
	cornerDL.on("click", function(evt){
		cornerDownL = Boolean(!cornerDownL);
		cornerLeft = Boolean(false);
		cornerRight = Boolean(false);
		cornerDownR	= Boolean(false);
		corridorHoriz = Boolean(false);
		corridorVert = Boolean(false);
	});
	
	
	
	
	var green = new createjs.Shape();
	green.x = 350;
	green.y = 150;
	green.graphics.beginFill("#00FF00").beginStroke("#000000");
    green.graphics.drawRect(0, 0, 30, 30);
	green.on("click", function(evt){
		mouseColor = 2;
		mouseCode = 2;
	});
	
	var red = new createjs.Shape();
	red.x = 380;
	red.y = 150;
	red.graphics.beginFill("#FF0000").beginStroke("#000000");
    red.graphics.drawRect(0, 0, 30, 30);
	red.on("click", function(evt){
		mouseColor = 3;
		mouseCode = 3;
	});
	
	var purple = new createjs.Shape();
	purple.x = 410;
	purple.y = 150;
	purple.graphics.beginFill("#3333FF").beginStroke("#000000");
    purple.graphics.drawRect(0, 0, 30, 30);
	purple.on("click", function(evt){
		mouseColor = 4;
		mouseCode = 4;
	});
	
	var white = new createjs.Shape();
	white.x = 350;
	white.y = 180;
	white.graphics.beginFill("#FFFFFF").beginStroke("#000000");
    white.graphics.drawRect(0, 0, 30, 30);
	white.on("click", function(evt){
		mouseColor = 1;
		mouseCode = 1;
	});
	
	var eraser = new createjs.Shape();
	eraser.x = 380;
	eraser.y = 180;
	eraser.graphics.beginFill("#0000FF").beginStroke("#000000");
    eraser.graphics.drawRect(0, 0, 30, 30);
	eraser.on("click", function(evt){
		mouseColor = 0;
		mouseCode = 0;
	});
	
	
	var saveButton= new createjs.Shape();
	saveButton.x = 350;
	saveButton.y = 250;
	saveButton.graphics.beginFill("#FF9900").beginStroke("#000000");
    saveButton.graphics.drawRect(0, 0, 70, 30);
	saveButton.on("click", function(evt){
		console.log("save");
		saveLevel();
	});
	
	var loadButton = new createjs.Shape();
	loadButton.x = 350;
	loadButton.y = 280;
	loadButton.graphics.beginFill("#CC9900").beginStroke("#000000");
    loadButton.graphics.drawRect(0, 0, 70, 30);
	loadButton.on("click", function(evt){
		loadLevel();
	});
	
	var clearButton = new createjs.Shape();
	clearButton.x = 350;
	clearButton.y = 310;
	clearButton.graphics.beginFill("#CC9900").beginStroke("#000000");
    clearButton.graphics.drawRect(0, 0, 70, 30);
	clearButton.on("click", function(evt){
		console.log("clear");
	});
	
	
	
	
	stage.addChild(corrHoriz);
	stage.addChild(corrVert);
	
	stage.addChild(cornerL);
	stage.addChild(cornerR);
	stage.addChild(cornerDR);
	stage.addChild(cornerDL);
	
	stage.addChild(green);
	stage.addChild(red);
	stage.addChild(purple);
	stage.addChild(white);
	stage.addChild(eraser);
	
	stage.addChild(saveButton);
	stage.addChild(loadButton);
	stage.addChild(clearButton);
}

function init() {
    GAME_STATE = "inGame";
    stage.removeChild(title);
    unloadStartButtons();
	createGridSmall();
	changeStageDraw();
	startMouseCursor();
    startLoop();
	
}



//Medium Grid
function createGridMedium()
{
	mapBlocks.x = 0;
	mapBlocks.y = 0;
	
	for( var x = 0; x < 50; x++)
	{
		squares[x] = []
		for(var y = 0; y < 50; y++)
		{
			mapBlocks.x = x*10;
			mapBlocks.y = y*10;
			mapBlocks.gotoAndStop(0);
			mapBlocks.code = 0;
			squares[x][y] = mapBlocks.clone();
			squares[x][y].code = 0;
		}	
	}
	
	for(var i = 0; i < 50; i++)
	{
		for(var j = 0; j < 50; j++)
		{
			stage.addChild(squares[i][j]);
			//console.log(j);
		}
	}
	gridHeight = 500;
	gridWidth = 500;
	
	//stage.addChild(squares);
	stage.update();
}

function changeStageDrawMedium()
{
	//Drawing Change
	var corrHoriz = new createjs.Shape();
	corrHoriz.x = 500;
	corrHoriz.y = 0;
	corrHoriz.graphics.beginFill("#FF0000").beginStroke("#000000");
    corrHoriz.graphics.drawRect(0, 0, 50, 50);
	corrHoriz.on("click", function(evt){
		corridorHoriz = Boolean(!corridorHoriz);
		corridorVert = Boolean(false);
	});
	
	var corrVert = new createjs.Shape();
	corrVert.x = 500;
	corrVert.y = 50;
	corrVert.graphics.beginFill("#FFFF00").beginStroke("#000000");
    corrVert.graphics.drawRect(0, 0, 50, 50);
	corrVert.on("click", function(evt){
		corridorVert = Boolean(!corridorVert);
		corridorHoriz = Boolean(false);
	});
	
	var cornerL = new createjs.Shape();
	cornerL.x = 550;
	cornerL.y = 0;
	cornerL.graphics.beginFill("#0066FF").beginStroke("#000000");
    cornerL.graphics.drawRect(0, 0, 50, 50);
	cornerL.on("click", function(evt){
		cornerLeft = Boolean(!cornerLeft);
		cornerRight = Boolean(false);
		cornerDownL	= Boolean(false);
		cornerDownR	= Boolean(false);
		corridorHoriz = Boolean(false);
		corridorVert = Boolean(false);
	});
	
	var cornerR = new createjs.Shape();
	cornerR.x = 550;
	cornerR.y = 50;
	cornerR.graphics.beginFill("#FF6699").beginStroke("#000000");
    cornerR.graphics.drawRect(0, 0, 50, 50);
	cornerR.on("click", function(evt){
		cornerRight = Boolean(!cornerRight);
		cornerLeft = Boolean(false);
		cornerDownL	= Boolean(false);
		cornerDownR	= Boolean(false);
		corridorHoriz = Boolean(false);
		corridorVert = Boolean(false);
	});
	
	var cornerDR = new createjs.Shape();
	cornerDR.x = 600;
	cornerDR.y = 0;
	cornerDR.graphics.beginFill("#006699").beginStroke("#000000");
    cornerDR.graphics.drawRect(0, 0, 50, 50);
	cornerDR.on("click", function(evt){
		cornerDownR = Boolean(!cornerDownR);
		cornerLeft = Boolean(false);
		cornerRight = Boolean(false);
		cornerDownL	= Boolean(false);
		corridorHoriz = Boolean(false);
		corridorVert = Boolean(false);
	});
	
	var cornerDL = new createjs.Shape();
	cornerDL.x = 600;
	cornerDL.y = 50;
	cornerDL.graphics.beginFill("#00CC66").beginStroke("#000000");
    cornerDL.graphics.drawRect(0, 0, 50, 50);
	cornerDL.on("click", function(evt){
		cornerDownL = Boolean(!cornerDownL);
		cornerLeft = Boolean(false);
		cornerRight = Boolean(false);
		cornerDownR	= Boolean(false);
		corridorHoriz = Boolean(false);
		corridorVert = Boolean(false);
	});
	
	//Color Changes
	var green = new createjs.Shape();
	green.x = 500;
	green.y = 300;
	green.graphics.beginFill("#00FF00").beginStroke("#000000");
    green.graphics.drawRect(0, 0, 30, 30);
	green.on("click", function(evt){
		mouseColor = 2;
		mouseCode = 2;
	});
	
	var red = new createjs.Shape();
	red.x = 530;
	red.y = 300;
	red.graphics.beginFill("#FF0000").beginStroke("#000000");
    red.graphics.drawRect(0, 0, 30, 30);
	red.on("click", function(evt){
		mouseColor = 3;
		mouseCode = 3;
	});
	
	var purple = new createjs.Shape();
	purple.x = 560;
	purple.y = 300;
	purple.graphics.beginFill("#3333FF").beginStroke("#000000");
    purple.graphics.drawRect(0, 0, 30, 30);
	purple.on("click", function(evt){
		mouseColor = 4;
		mouseCode = 4;
	});
	
	var white = new createjs.Shape();
	white.x = 500;
	white.y = 330;
	white.graphics.beginFill("#FFFFFF").beginStroke("#000000");
    white.graphics.drawRect(0, 0, 30, 30);
	white.on("click", function(evt){
		mouseColor = 1;
		mouseCode = 1;
	});
	
	var eraser = new createjs.Shape();
	eraser.x = 530;
	eraser.y = 330;
	eraser.graphics.beginFill("#0000FF").beginStroke("#000000");
    eraser.graphics.drawRect(0, 0, 30, 30);
	eraser.on("click", function(evt){
		mouseColor = 0;
		mouseCode = 0;
	});
	
	//Function Buttons
	var saveButton= new createjs.Shape();
	saveButton.x = 500;
	saveButton.y = 400;
	saveButton.graphics.beginFill("#FF9900").beginStroke("#000000");
    saveButton.graphics.drawRect(0, 0, 70, 30);
	saveButton.on("click", function(evt){
		saveLevel();
	});
	
	var loadButton = new createjs.Shape();
	loadButton.x = 500;
	loadButton.y = 430;
	loadButton.graphics.beginFill("#CC9900").beginStroke("#000000");
    loadButton.graphics.drawRect(0, 0, 70, 30);
	loadButton.on("click", function(evt){
		loadLevel();
	});
	
	var clearButton = new createjs.Shape();
	clearButton.x = 500;
	clearButton.y = 460;
	clearButton.graphics.beginFill("#CC9900").beginStroke("#000000");
    clearButton.graphics.drawRect(0, 0, 70, 30);
	clearButton.on("click", function(evt){
		console.log("clear");
	});
	
	
	
	stage.addChild(corrHoriz);
	stage.addChild(corrVert);
	
	stage.addChild(cornerL);
	stage.addChild(cornerR);
	stage.addChild(cornerDR);
	stage.addChild(cornerDL);
	
	stage.addChild(green);
	stage.addChild(red);
	stage.addChild(purple);
	stage.addChild(white);
	stage.addChild(eraser);
	
	stage.addChild(saveButton);
	stage.addChild(loadButton);
	stage.addChild(clearButton);
}

function initMedium() {
    GAME_STATE = "inGame";
    stage.removeChild(title);
    unloadStartButtons();
	createGridMedium();
	changeStageDrawMedium();
	startMouseCursor();
    startLoop();
	
}



//Large Grid
function createGridLarge()
{
	mapBlocks.x = 0;
	mapBlocks.y = 0;
	
	for( var x = 0; x < 70; x++)
	{
		squares[x] = []
		for(var y = 0; y < 70; y++)
		{
			mapBlocks.x = x*10;
			mapBlocks.y = y*10;
			mapBlocks.gotoAndStop(0);
			mapBlocks.code = 0;
			squares[x][y] = mapBlocks.clone();
			squares[x][y].code = 0;
		}	
	}
	
	for(var i = 0; i < 70; i++)
	{
		for(var j = 0; j < 70; j++)
		{
			stage.addChild(squares[i][j]);
			//console.log(j);
		}
	}
	
	gridHeight = 700;
	gridWidth = 700;
	
	//stage.addChild(squares);
	stage.update();
}

function changeStageDrawLarge()
{
	var corrHoriz = new createjs.Shape();
	corrHoriz.x = 700;
	corrHoriz.y = 0;
	corrHoriz.graphics.beginFill("#FF0000").beginStroke("#000000");
    corrHoriz.graphics.drawRect(0, 0, 50, 50);
	corrHoriz.on("click", function(evt){
		corridorHoriz = Boolean(!corridorHoriz);
		corridorVert = Boolean(false);
	});
	
	
	var corrVert = new createjs.Shape();
	corrVert.x = 700;
	corrVert.y = 50;
	corrVert.graphics.beginFill("#FFFF00").beginStroke("#000000");
    corrVert.graphics.drawRect(0, 0, 50, 50);
	corrVert.on("click", function(evt){
		corridorVert = Boolean(!corridorVert);
		corridorHoriz = Boolean(false);
	});
	
	var cornerL = new createjs.Shape();
	cornerL.x = 750;
	cornerL.y = 0;
	cornerL.graphics.beginFill("#0066FF").beginStroke("#000000");
    cornerL.graphics.drawRect(0, 0, 50, 50);
	cornerL.on("click", function(evt){
		cornerLeft = Boolean(!cornerLeft);
		cornerRight = Boolean(false);
		cornerDownL	= Boolean(false);
		cornerDownR	= Boolean(false);
		corridorHoriz = Boolean(false);
		corridorVert = Boolean(false);
	});
	
	var cornerR = new createjs.Shape();
	cornerR.x = 750;
	cornerR.y = 50;
	cornerR.graphics.beginFill("#FF6699").beginStroke("#000000");
    cornerR.graphics.drawRect(0, 0, 50, 50);
	cornerR.on("click", function(evt){
		cornerRight = Boolean(!cornerRight);
		cornerLeft = Boolean(false);
		cornerDownL	= Boolean(false);
		cornerDownR	= Boolean(false);
		corridorHoriz = Boolean(false);
		corridorVert = Boolean(false);
	});
	
	var cornerDR = new createjs.Shape();
	cornerDR.x = 800;
	cornerDR.y = 0;
	cornerDR.graphics.beginFill("#006699").beginStroke("#000000");
    cornerDR.graphics.drawRect(0, 0, 50, 50);
	cornerDR.on("click", function(evt){
		cornerDownR = Boolean(!cornerDownR);
		cornerLeft = Boolean(false);
		cornerRight = Boolean(false);
		cornerDownL	= Boolean(false);
		corridorHoriz = Boolean(false);
		corridorVert = Boolean(false);
	});
	
	var cornerDL = new createjs.Shape();
	cornerDL.x = 800;
	cornerDL.y = 50;
	cornerDL.graphics.beginFill("#00CC66").beginStroke("#000000");
    cornerDL.graphics.drawRect(0, 0, 50, 50);
	cornerDL.on("click", function(evt){
		cornerDownL = Boolean(!cornerDownL);
		cornerLeft = Boolean(false);
		cornerRight = Boolean(false);
		cornerDownR	= Boolean(false);
		corridorHoriz = Boolean(false);
		corridorVert = Boolean(false);
	});
	
	
	var green = new createjs.Shape();
	green.x = 700;
	green.y = 500;
	green.graphics.beginFill("#00FF00").beginStroke("#000000");
    green.graphics.drawRect(0, 0, 30, 30);
	green.on("click", function(evt){
		mouseColor = 2;
		mouseCode = 2;
	});
	
	var red = new createjs.Shape();
	red.x = 730;
	red.y = 500;
	red.graphics.beginFill("#FF0000").beginStroke("#000000");
    red.graphics.drawRect(0, 0, 30, 30);
	red.on("click", function(evt){
		mouseColor = 3;
		mouseCode = 3;
	});
	
	var purple = new createjs.Shape();
	purple.x = 760;
	purple.y = 500;
	purple.graphics.beginFill("#3333FF").beginStroke("#000000");
    purple.graphics.drawRect(0, 0, 30, 30);
	purple.on("click", function(evt){
		mouseColor = 4;
		mouseCode = 4;
	});
	
	var white = new createjs.Shape();
	white.x = 700;
	white.y = 530;
	white.graphics.beginFill("#FFFFFF").beginStroke("#000000");
    white.graphics.drawRect(0, 0, 30, 30);
	white.on("click", function(evt){
		mouseColor = 1;
		mouseCode = 1;
	});
	
	var eraser = new createjs.Shape();
	eraser.x = 730;
	eraser.y = 530;
	eraser.graphics.beginFill("#0000FF").beginStroke("#000000");
    eraser.graphics.drawRect(0, 0, 30, 30);
	eraser.on("click", function(evt){
		mouseColor = 0;
		mouseCode = 0;
	});
	
	
	var saveButton= new createjs.Shape();
	saveButton.x = 700;
	saveButton.y = 600;
	saveButton.graphics.beginFill("#FF9900").beginStroke("#000000");
    saveButton.graphics.drawRect(0, 0, 70, 30);
	saveButton.on("click", function(evt){
		saveLevel();
	});
	
	var loadButton = new createjs.Shape();
	loadButton.x = 700;
	loadButton.y = 630;
	loadButton.graphics.beginFill("#CC9900").beginStroke("#000000");
    loadButton.graphics.drawRect(0, 0, 70, 30);
	loadButton.on("click", function(evt){
		loadLevel();
	});
	
	var clearButton = new createjs.Shape();
	clearButton.x = 700;
	clearButton.y = 660;
	clearButton.graphics.beginFill("#CC9900").beginStroke("#000000");
    clearButton.graphics.drawRect(0, 0, 70, 30);
	clearButton.on("click", function(evt){
		console.log("clear");
	});
	
	
	
	stage.addChild(corrHoriz);
	stage.addChild(corrVert);
	
	stage.addChild(cornerL);
	stage.addChild(cornerR);
	stage.addChild(cornerDR);
	stage.addChild(cornerDL);
	
	stage.addChild(green);
	stage.addChild(red);
	stage.addChild(purple);
	stage.addChild(white);
	stage.addChild(eraser);
	
	stage.addChild(saveButton);
	stage.addChild(loadButton);
	stage.addChild(clearButton);
}

function initLarge() {
    GAME_STATE = "inGame";
    stage.removeChild(title);
    unloadStartButtons();
	createGridLarge();
	changeStageDrawLarge();
	startMouseCursor();
    startLoop();
	
}


//Saving the map
function saveLevel()
{
	var gird = [];
	gird.push(gridHeight/10);
	gird.push(gridWidth/10);
	for(var i = 0; i < gridHeight/10; i++)
	{
		for(var j = 0; j < gridWidth/10; j++)
		{
			gird.push(squares[i][j].code);
		}
	}
	
	var link = document.createElement('a');
	link.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(gird));
	link.setAttribute('download', 'map.txt');
	
	link.style.display = 'none';
	
	link.click();
	
	document.body.removeChild(link);
	
}

//Loading the map
function loadLevel()
{
	var opener = document.createElement('input');
	opener.setAttribute("type", "file");
	
	opener.style.display = 'none';
	
	opener.addEventListener('change',loadFile,false);
	
	opener.click();
	
	
	document.body.removeChild(opener);
}

function loadFile(e)
{
	var file = e.target.files[0];
	if(!file)
	{
		return;
	}
	var reader = new FileReader();
	var contents = [];
	reader.onload = function(e)
	{
		contents = e.target.result.split(",");
		console.log(contents.length);
		loadMap(contents);
	}
	reader.readAsText(file);
}

function displayFile(content)
{
	//console.log(content.toString());
}

function loadMap(contents)
{
	var nm = 2;
	console.log(contents);
	
	if(contents[0] != gridHeight/10)
	{
		var size = "";
		if(contents[0] > gridHeight/10)
		{
			size = "bigger";
		}
		else
		{
			size = "smaller";
		}
		alert("this map cannont be loaded on this map. This file is for a " + size + " level size");
	}
	else
	{
		for(var i = 0; i < ((contents.length-2)/contents[0]); i++)
		{
			for(var j = 0; j < ((contents.length-2)/contents[1]); j++)
			{
				
				squares[i][j].gotoAndStop(contents[nm]);
				squares[i][j].code = contents[nm];
				nm+=1;
			}
		}
	}
	//console.log(nm);
	stage.update();
}


