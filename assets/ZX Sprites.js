(function(window) {
Run = function() {
	this.initialize();
}
Run._SpriteSheet = new createjs.SpriteSheet({images: ["ZX Sprites(Fixed Run).png"], frames: [[0,0,32,45,0,19.1,20.5],[32,0,32,45,0,20.1,20.5],[64,0,38,45,0,23.1,20.5],[102,0,42,45,0,21.1,20.5],[144,0,35,45,0,20.1,20.5],[179,0,25,45,0,13.100000000000001,20.5],[204,0,33,45,0,17.1,20.5],[237,0,39,45,0,21.1,20.5],[276,0,39,45,0,21.1,20.5],[315,0,38,45,0,20.1,20.5],[353,0,37,45,0,21.1,20.5]]});
var Run_p = Run.prototype = new createjs.Sprite();
Run_p.Sprite_initialize = Run_p.initialize;
Run_p.initialize = function() {
	this.Sprite_initialize(Run._SpriteSheet);
	this.paused = false;
}
window.Run = Run;
Stand = function() {
	this.initialize();
}
Stand._SpriteSheet = new createjs.SpriteSheet({images: ["ZX Sprites(Fixed Run).png"], frames: [[390,0,40,45,0,20.3,22.65],[430,0,40,45,0,20.3,22.65],[470,0,40,45,0,20.3,22.65],[0,45,40,45,0,20.3,22.65],[40,45,38,45,0,18.3,22.65],[78,45,38,45,0,18.3,22.65],[116,45,38,45,0,18.3,22.65],[154,45,38,45,0,18.3,22.65],[192,45,38,45,0,18.3,22.65],[230,45,38,45,0,18.3,22.65],[268,45,38,45,0,18.3,22.65],[306,45,38,45,0,18.3,22.65],[344,45,38,45,0,18.3,22.65],[382,45,38,45,0,18.3,22.65],[420,45,39,45,0,19.3,22.65],[459,45,39,45,0,19.3,22.65],[0,90,38,45,0,18.3,22.65],[38,90,38,45,0,18.3,22.65],[76,90,38,45,0,17.3,22.65],[114,90,38,45,0,17.3,22.65],[152,90,37,45,0,17.3,22.65]]});
var Stand_p = Stand.prototype = new createjs.Sprite();
Stand_p.Sprite_initialize = Stand_p.initialize;
Stand_p.initialize = function() {
	this.Sprite_initialize(Stand._SpriteSheet);
	this.paused = false;
}
window.Stand = Stand;
Triple_Slash = function() {
	this.initialize();
}
Triple_Slash._SpriteSheet = new createjs.SpriteSheet({images: ["ZX Sprites(Fixed Run).png"], frames: [[189,90,33,50,0,16,26.5],[222,90,63,50,0,19,26.5],[285,90,63,50,0,20,26.5],[348,90,64,50,0,19,26.5],[412,90,52,50,0,18,26.5],[464,90,35,50,0,18,26.5],[0,140,33,50,0,17,26.5],[33,140,34,50,0,17,26.5],[67,140,42,50,0,18,25.5],[109,140,32,52,0,15,33.5],[141,140,39,52,0,18,34.5],[180,140,67,52,0,27,34.5],[247,140,68,52,0,26,34.5],[315,140,67,52,0,25,35.5],[382,140,44,52,0,25,35.5],[426,140,46,52,0,27,35.5],[0,192,43,52,0,24,35.5],[43,192,36,52,0,16,35.5],[79,192,40,52,0,17,34.5],[119,192,52,67,0,36,49.5],[0,259,362,81,0,26,48.5],[362,259,47,67,0,27,47.5],[409,259,47,67,0,27,46.5],[0,340,82,67,0,34,43.5],[82,340,83,67,0,35,44.5],[165,340,67,67,0,20,44.5],[232,340,68,67,0,20,44.5],[300,340,38,67,0,20,43.5],[338,340,38,67,0,20,42.5],[376,340,39,67,0,20,41.5],[415,340,37,67,0,21,47.5],[452,340,43,67,0,26,46.5]]});
var Triple_Slash_p = Triple_Slash.prototype = new createjs.Sprite();
Triple_Slash_p.Sprite_initialize = Triple_Slash_p.initialize;
Triple_Slash_p.initialize = function() {
	this.Sprite_initialize(Triple_Slash._SpriteSheet);
	this.paused = false;
}
window.Triple_Slash = Triple_Slash;
}(window));

