function ResultHexes(canvas_elem, clear_color, asset_folder){
	//Class to control the result hexagon-tile animation
	//canvas_elem: a <canvas> element to draw the animation to
	//asset_folder: the folder where red.png, blue.png, gray.png, hex.obj, and hex.mtl are stored. Must end with "/"! By default: "static/resulthexes/"

	this.circles = [];

	//Clock to get deltas for each frame
	this.clock = new THREE.Clock();

	//threejs constructs
	this.scene = new THREE.Scene();
	this.scene.add( new THREE.AmbientLight( 0xaaaaaa) );

	this.camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1,200);
	this.camera.position.set(0,0,0);
	this.scene.add(this.camera);

	//add some light
	this.light =  new THREE.DirectionalLight( 0xffffff, this.startingLightIntensity) 
	this.light.position.set(0,0,3);
	this.scene.add( this.light );
                                                                               
	// Renderer
	var clear_color = clear_color || 0x000000;

	this.renderer = new THREE.WebGLRenderer({ antialias : true, canvas: canvas_elem, alpha: true});
	this.renderer.setSize( window.innerWidth, window.innerHeight);
	this.renderer.setClearColor( clear_color, 0);

	//queue async texture loads

	/*
	this.textures = {};
	new THREE.OBJLoader().load(this.asset_folder+"beveledhex.obj",function(mesh){
		this.hex_geometry = mesh.children[0].geometry;
	}.bind(this));


	var loader = 
	new THREE.TextureLoader();
	loader.load(this.asset_folder+"red.png",function(tex){
		this.textures[this.asset_folder+"red.png"] = tex;
	}.bind(this));
	loader.load(this.asset_folder+"blue.png",function(tex){
		this.textures[this.asset_folder+"blue.png"] = tex;
	}.bind(this));

	*/


	
	loader.load(this.asset_folder+"gray.png",function(tex){


		this.hexes[0] = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({color:0xffffff,map: tex}));
		this.scene.add(this.hexes[0]);

	}.bind(this));
}


ResultHexes.prototype.update = function(delta){
	var delta = this.clock.getDelta();

	//update any in-progress hex animations
	this.animtimer += delta;
	var allcomplete = true;
	for(var i=0;i<this.hexes.length;i++){
		
		//do things
	}

	this.hexes[0]
	this.renderer.render( this.scene, this.camera);
}
