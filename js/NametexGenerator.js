//Functions for generating username label textures

BettingCylinder.prototype.generateNameTex = function(text, nameColor){
	var nameColor = nameColor || "000000";

	this.currentCanvasNo = (this.currentCanvasNo+1)%this.numTextRenderers;
	let i = this.currentCanvasNo;

	this.textRenderer[i].width = 512; //setting the width or height clears the canvas

	//Fill in a rounded oval
	this.textRendererCtx[i].strokeStyle = '1px #000'; 
	this.textRendererCtx[i].fillStyle = '#fff'; 
	this.textRendererCtx[i].beginPath();
	var width = 30;
	var nudgeFactor = -5;
	this.textRendererCtx[i].arc(width, this.textRenderer[i].height/2 +nudgeFactor,width,Math.PI*1.5,Math.PI/2,true); // left cap
	//bottom line is automatically made from one to another
	this.textRendererCtx[i].arc(this.textRenderer[i].width - width, this.textRenderer[i].height / 2+nudgeFactor,width,Math.PI/2,Math.PI*1.5,true); // right cap
	this.textRendererCtx[i].lineTo(width, this.textRenderer[i].height / 2-width+nudgeFactor); //top line
	this.textRendererCtx[i].fill();
	this.textRendererCtx[i].stroke()
	this.textRendererCtx[i].closePath();

	//Fill text
	this.textRendererCtx[i].fillStyle = '#'+nameColor;
	this.textRendererCtx[i].strokeStyle = '#000'; 
	this.textRendererCtx[i].textAlign = "center";
	this.textRendererCtx[i].textBaseline = "middle";           
	this.textRendererCtx[i].font = '50px serif';    
	this.textRendererCtx[i].fillText(text, this.textRenderer[i].width / 2, this.textRenderer[i].height / 2, this.textRenderer[i].width); 
	this.textRendererCtx[i].strokeText(text, this.textRenderer[i].width / 2, this.textRenderer[i].height / 2, this.textRenderer[i].width);
	
	var tex = new THREE.Texture( this.textRenderer[i] );
	tex.needsUpdate = true;
	return tex;
}

//create multiple canvases so they don't interfere with one another
BettingCylinder.prototype.textRenderer = [];
BettingCylinder.prototype.textRendererCtx = [];
//Amount of canvases to create. More should mean there's less of a chance to get the wrong label, ideally this should be more than the number of circles in a vertical line.
BettingCylinder.prototype.numTextRenderers = 10;

for(var i=0;i<BettingCylinder.prototype.numTextRenderers;i++){
	BettingCylinder.prototype.textRenderer.push(document.createElement( 'canvas' ));
	BettingCylinder.prototype.textRenderer[i].width = 512;
	BettingCylinder.prototype.textRenderer[i].height = 512;
	BettingCylinder.prototype.textRendererCtx.push(BettingCylinder.prototype.textRenderer[i].getContext( '2d' ));
}
BettingCylinder.prototype.currentCanvasNo = 0;
