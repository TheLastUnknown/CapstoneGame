(function(window) {
blocks = function() {
	this.initialize();
}
blocks._SpriteSheet = new createjs.SpriteSheet({images: ["Capstone.png"], frames: [[0,0,10,10,0,1,1],[10,0,10,10,0,1,1],[20,0,10,10,0,1,1],[30,0,10,10,0,1,1],[40,0,10,10,0,1,1]]});
var blocks_p = blocks.prototype = new createjs.Sprite();
blocks_p.Sprite_initialize = blocks_p.initialize;
blocks_p.initialize = function() {
	this.Sprite_initialize(blocks._SpriteSheet);
	this.paused = false;
}
window.blocks = blocks;
}(window));

