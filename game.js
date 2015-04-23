//Game constant

var CANVAS_WIDTH = 900;
var CANVAS_HEIGHT = 500;
var FPS = 60;
var GAME_STATE = 'start';
var time=0;
var score = 0;
//Key codes: A=65, W=87, D=68, S=83, Space=32, Enter=13
var KEY_A=65, KEY_W=87, KEY_D=68, KEY_S=83, KEY_SPACE=32, KEY_ENT=13, KEY_END=80;

document.onkeydown = keyDownTest;
document.onkeyup = keyUpTest;


var canvas, stage, queue;

var mouseX, mouseY, timer, scoreCount;


var title, instructionScreen, gameOver;
var playButton, tutorialButton, menuButton; //Menu Buttons

var player;
var playerVelX, playerVelY;
var friction = .8;
var gravity = .2;

//opens a canvas and tells CreateJS to use it as a Stage. Remember, CreateJS does everything on it's stage similar to the way ActionScript works.
function openCanvas() {
    
    canvas = document.createElement("canvas");
    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;
	var div = document.getElementById("gameTest");
    div.appendChild(canvas);
    
}


function setupStage()
{
	stage = new createjs.Stage(canvas);
	stage.enableDOMEvents(true);
	stage.enableMouseOver();
    
	stage.on("stagemousemove",function(evt) {
				
				museX = Math.floor(evt.stageX);
				museY = Math.floor(evt.stageY);
			});
			
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
	movePlayer();
	stage.update();
    //console.log(GAME_STATE);
}

function checkFPS()
{
	var frames = createjs.Ticker.getMeasuredFPS();
	
	if(frames < 50)
	{
		console.log(50);
	}
	else if(frames < 40)
	{
		console.log(40);
	}
	else if(frames < 30)
	{
		console.log(40);
	}
	else if(frames < 20)
	{
		console.log(20);
	}

}

function setPlayer()
{
	player = new createjs.Shape();
	player.x = CANVAS_WIDTH/2;
	player.y = CANVAS_HEIGHT-10;
	player.width = 10;
	player.height = 10;
	player.speed = 3;
	player.velX = 0;
	player.velY = 0;
	player.jumping = false;
	player.graphics.beginFill("#FF0000");
	player.graphics.drawRect(0,0,player.width,player.height);
	
	stage.addChild(player);
	stage.update();
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

var moveLeft = false;
var moveRight = false;
var moveUp = false;

//Keyboard Events
function keyDownTest(e)
{
    if(!e){ var e = window.event;}
    switch(e.keyCode)
    {
            case KEY_A: console.log("A down"); moveLeft = true; moveRight = false; break;
            case KEY_W: console.log("W down"); moveUp = true; break;
            case KEY_S: console.log("S down"); break;
            case KEY_D: console.log("D down"); moveLeft = false; moveRight = true; break;
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
            case KEY_A: console.log("A up"); moveLeft = false; moveRight = false; break;
            case KEY_W: console.log("W up"); moveUp = false; break;
            case KEY_S: console.log("S up"); break;
            case KEY_D: console.log("D up"); moveLeft = false; moveRight = false;break;
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
                {src:"tutorial.png", id:"tutorialButton"}
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
	
    stage.update();
}


//Unloading
function unloadStartButtons()
{
    stage.removeChild(title);
    stage.removeChild(tutorialButton);
    stage.removeChild(playButton);
	
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


function init() {
    GAME_STATE = "inGame";
    stage.removeChild(title);
    unloadStartButtons();
	setPlayer();
    startLoop();
	
}

//gameplay
function movePlayer()
{
	moving();
	player.x += player.velX;
	player.y += player.velY;
		
	player.velX *= friction;
	player.velY += gravity;
		
	checkPlayer();
}

function moving()
{
	
	if(player.velX > -player.speed && moveLeft)
	{
		player.velX--;
	}
	else if(player.velX < player.speed&& moveRight)
	{
		player.velX++;
	}
	if(!player.jumping && moveUp)
	{
		player.jumping=true;
		player.velY = -player.speed*2;
	}
}

function checkPlayer()
{
	if(player.x >= CANVAS_WIDTH-10)
	{
		player.x = CANVAS_WIDTH-10;
	}
	else if(player.x <= 0)
	{
		player.x = 0;
	}
	
	if(player.y >= CANVAS_HEIGHT-10)
	{
		player.y = CANVAS_HEIGHT - 10;
		player.jumping = false;
	}
	else if(player.y <= 0)
	{
		player.y = 0;
	}
}