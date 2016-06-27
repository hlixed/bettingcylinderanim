BettingCylinder.prototype.generateNameTex = function(text){
	this.textRenderer.width = 512; //setting the width or height clears the canvas

	//Fill in a rounded oval
	this.textRendererCtx.strokeStyle = '1px #000'; 
	this.textRendererCtx.fillStyle = '#fff'; 
	this.textRendererCtx.beginPath();
	var width = 30;
	var nudgeFactor = -5;
	this.textRendererCtx.arc(width, this.textRenderer.height/2 +nudgeFactor,width,Math.PI*1.5,Math.PI/2,true); // left cap
	//bottom line is automatically made from one to another
	this.textRendererCtx.arc(this.textRenderer.width - width, this.textRenderer.height / 2+nudgeFactor,width,Math.PI/2,Math.PI*1.5,true); // right cap
	this.textRendererCtx.lineTo(width, this.textRenderer.height / 2-width+nudgeFactor); //top line
	this.textRendererCtx.fill();
	this.textRendererCtx.stroke()
	this.textRendererCtx.closePath();

	//Fill text
	this.textRendererCtx.fillStyle = '#000'; 
	this.textRendererCtx.textAlign = "center";
	this.textRendererCtx.textBaseline = "middle";           
	this.textRendererCtx.font = '50px serif';    
	this.textRendererCtx.fillText(text, this.textRenderer.width / 2, this.textRenderer.height / 2, this.textRenderer.width); 
	this.textRendererCtx.strokeText(text, this.textRenderer.width / 2, this.textRenderer.height / 2, this.textRenderer.width);
	
	var tex = new THREE.Texture( this.textRenderer );
	tex.needsUpdate = true;
	return tex;
}

BettingCylinder.prototype.textRenderer = document.createElement( 'canvas' );
BettingCylinder.prototype.textRenderer.width = 512;
BettingCylinder.prototype.textRenderer.height = 512;
BettingCylinder.prototype.textRendererCtx = BettingCylinder.prototype.textRenderer.getContext( '2d' );
