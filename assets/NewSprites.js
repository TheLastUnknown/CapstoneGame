(function(window) {
Run = function() {
	this.initialize();
}
Run._SpriteSheet = new createjs.SpriteSheet({images: ["NewSprites.png"], frames: [[0,0,32,45,0,19.1,20.5],[32,0,32,45,0,20.1,20.5],[64,0,38,45,0,23.1,20.5],[102,0,42,45,0,21.1,20.5],[144,0,35,45,0,20.1,20.5],[179,0,25,45,0,13.100000000000001,20.5],[204,0,33,45,0,17.1,20.5],[237,0,39,45,0,21.1,20.5],[276,0,39,45,0,21.1,20.5],[315,0,38,45,0,20.1,20.5],[353,0,37,45,0,21.1,20.5]]});
var Run_p = Run.prototype = new createjs.Sprite();
Run_p.Sprite_initialize = Run_p.initialize;
Run_p.initialize = function() {
	this.Sprite_initialize(Run._SpriteSheet);
	this.paused = false;
}
window.Run = Run;
Slash_1 = function() {
	this.initialize();
}
Slash_1._SpriteSheet = new createjs.SpriteSheet({images: ["NewSprites.png"], frames: [[390,0,33,50,0,16.35,26.7],[423,0,63,50,0,19.35,26.7],[0,50,63,50,0,20.35,26.7],[63,50,64,50,0,19.35,26.7],[127,50,52,50,0,18.35,26.7],[179,50,35,50,0,18.35,26.7],[214,50,33,50,0,17.35,26.7],[247,50,34,50,0,17.35,26.7],[281,50,42,50,0,18.35,25.7],[323,50,40,45,0,19.35,21.7]]});
var Slash_1_p = Slash_1.prototype = new createjs.Sprite();
Slash_1_p.Sprite_initialize = Slash_1_p.initialize;
Slash_1_p.initialize = function() {
	this.Sprite_initialize(Slash_1._SpriteSheet);
	this.paused = false;
}
window.Slash_1 = Slash_1;
Slash_2 = function() {
	this.initialize();
}
Slash_2._SpriteSheet = new createjs.SpriteSheet({images: ["NewSprites.png"], frames: [[363,50,32,52,0,15.350000000000001,33.8],[395,50,39,52,0,18.35,34.8],[434,50,67,52,0,27.35,34.8],[0,102,68,52,0,26.35,34.8],[68,102,67,52,0,25.35,35.8],[135,102,44,52,0,25.35,35.8],[179,102,46,52,0,27.35,35.8],[225,102,43,52,0,24.35,35.8],[268,102,36,52,0,16.35,35.8],[304,102,40,52,0,17.35,34.8],[344,102,40,45,0,18.35,24.799999999999997]]});
var Slash_2_p = Slash_2.prototype = new createjs.Sprite();
Slash_2_p.Sprite_initialize = Slash_2_p.initialize;
Slash_2_p.initialize = function() {
	this.Sprite_initialize(Slash_2._SpriteSheet);
	this.paused = false;
}
window.Slash_2 = Slash_2;
Slash_3 = function() {
	this.initialize();
}
Slash_3._SpriteSheet = new createjs.SpriteSheet({images: ["NewSprites.png"], frames: [[384,102,47,67,0,31.25,49.5],[0,169,362,81,0,26.25,48.5],[362,169,47,67,0,27.25,47.5],[409,169,47,67,0,27.25,46.5],[0,250,82,67,0,34.25,43.5],[82,250,83,67,0,35.25,44.5],[165,250,67,67,0,20.25,44.5],[232,250,68,67,0,20.25,44.5],[300,250,38,67,0,20.25,43.5],[338,250,38,67,0,20.25,42.5],[376,250,39,67,0,20.25,41.5],[415,250,37,67,0,21.25,47.5],[452,250,43,67,0,26.25,46.5],[0,317,40,45,0,19.25,22.5]]});
var Slash_3_p = Slash_3.prototype = new createjs.Sprite();
Slash_3_p.Sprite_initialize = Slash_3_p.initialize;
Slash_3_p.initialize = function() {
	this.Sprite_initialize(Slash_3._SpriteSheet);
	this.paused = false;
}
window.Slash_3 = Slash_3;
Stand = function() {
	this.initialize();
}
Stand._SpriteSheet = new createjs.SpriteSheet({images: ["NewSprites.png"], frames: [[40,317,40,45,0,20.3,22.65],[80,317,40,45,0,20.3,22.65],[120,317,40,45,0,20.3,22.65],[160,317,40,45,0,20.3,22.65],[200,317,38,45,0,18.3,22.65],[238,317,38,45,0,18.3,22.65],[276,317,38,45,0,18.3,22.65],[314,317,38,45,0,18.3,22.65],[352,317,38,45,0,18.3,22.65],[390,317,38,45,0,18.3,22.65],[428,317,38,45,0,18.3,22.65],[466,317,38,45,0,18.3,22.65],[0,362,38,45,0,18.3,22.65],[38,362,38,45,0,18.3,22.65],[76,362,39,45,0,19.3,22.65],[115,362,39,45,0,19.3,22.65],[154,362,38,45,0,18.3,22.65],[192,362,38,45,0,18.3,22.65],[230,362,38,45,0,17.3,22.65],[268,362,38,45,0,17.3,22.65],[306,362,37,45,0,17.3,22.65]]});
var Stand_p = Stand.prototype = new createjs.Sprite();
Stand_p.Sprite_initialize = Stand_p.initialize;
Stand_p.initialize = function() {
	this.Sprite_initialize(Stand._SpriteSheet);
	this.paused = false;
}
window.Stand = Stand;
ZX_Jump_1 = function() {
	this.initialize();
}
ZX_Jump_1._SpriteSheet = new createjs.SpriteSheet({images: ["NewSprites.png"], frames: [[343,362,40,45,0,20.15,21.4],[383,362,38,51,0,19.15,26.4],[421,362,34,51,0,19.15,26.4],[455,362,31,51,0,16.15,28.4]]});
var ZX_Jump_1_p = ZX_Jump_1.prototype = new createjs.Sprite();
ZX_Jump_1_p.Sprite_initialize = ZX_Jump_1_p.initialize;
ZX_Jump_1_p.initialize = function() {
	this.Sprite_initialize(ZX_Jump_1._SpriteSheet);
	this.paused = false;
}
window.ZX_Jump_1 = ZX_Jump_1;
ZX_Jump_2 = function() {
	this.initialize();
}
ZX_Jump_2._SpriteSheet = new createjs.SpriteSheet({images: ["NewSprites.png"], frames: [[0,413,31,51,0,16,23.55],[31,413,34,51,0,19,23.55],[65,413,30,51,0,16,23.55],[95,413,31,51,0,16,23.55]]});
var ZX_Jump_2_p = ZX_Jump_2.prototype = new createjs.Sprite();
ZX_Jump_2_p.Sprite_initialize = ZX_Jump_2_p.initialize;
ZX_Jump_2_p.initialize = function() {
	this.Sprite_initialize(ZX_Jump_2._SpriteSheet);
	this.paused = false;
}
window.ZX_Jump_2 = ZX_Jump_2;
ZX_Jump_3 = function() {
	this.initialize();
}
ZX_Jump_3._SpriteSheet = new createjs.SpriteSheet({images: ["NewSprites.png"], frames: [[126,413,31,51,0,16.6,23.2],[157,413,34,51,0,17.6,23.2],[191,413,41,51,0,22.6,24.2]]});
var ZX_Jump_3_p = ZX_Jump_3.prototype = new createjs.Sprite();
ZX_Jump_3_p.Sprite_initialize = ZX_Jump_3_p.initialize;
ZX_Jump_3_p.initialize = function() {
	this.Sprite_initialize(ZX_Jump_3._SpriteSheet);
	this.paused = false;
}
window.ZX_Jump_3 = ZX_Jump_3;
ZX_Jump_4 = function() {
	this.initialize();
}
ZX_Jump_4._SpriteSheet = new createjs.SpriteSheet({images: ["NewSprites.png"], frames: [[232,413,37,51,0,18.15,25.65],[269,413,36,48,0,17.15,25.65],[305,413,32,47,0,13.149999999999999,25.65],[337,413,32,51,0,13.149999999999999,25.65]]});
var ZX_Jump_4_p = ZX_Jump_4.prototype = new createjs.Sprite();
ZX_Jump_4_p.Sprite_initialize = ZX_Jump_4_p.initialize;
ZX_Jump_4_p.initialize = function() {
	this.Sprite_initialize(ZX_Jump_4._SpriteSheet);
	this.paused = false;
}
window.ZX_Jump_4 = ZX_Jump_4;
ZX_Jump_5 = function() {
	this.initialize();
}
ZX_Jump_5._SpriteSheet = new createjs.SpriteSheet({images: ["NewSprites.png"], frames: [[369,413,35,51,0,15.75,27.75],[404,413,74,50,0,16.75,27.75]]});
var ZX_Jump_5_p = ZX_Jump_5.prototype = new createjs.Sprite();
ZX_Jump_5_p.Sprite_initialize = ZX_Jump_5_p.initialize;
ZX_Jump_5_p.initialize = function() {
	this.Sprite_initialize(ZX_Jump_5._SpriteSheet);
	this.paused = false;
}
window.ZX_Jump_5 = ZX_Jump_5;
}(window));

