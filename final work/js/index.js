var camera, scene, renderer;
var pointLight, pointLight2,pointLight3,pointLight4,pointLight5;

if ( WEBGL.isWebGLAvailable() === false ) {
	document.body.appendChild( WEBGL.getWebGLErrorMessage() );
}
window.onload = function() {
	init();
	animate();
}


// lights
function createLight( color ) {
	var intensity = 1.5;
	var pointLight = new THREE.PointLight( color, intensity, 20 );
	pointLight.castShadow = true;
	pointLight.shadow.camera.near = 1;
	pointLight.shadow.camera.far = 60;
	pointLight.shadow.bias = - 0.005; // reduces self-shadowing on double-sided objects

	var geometry = new THREE.SphereBufferGeometry( 0.3, 12, 6 );
	var material1 = new THREE.MeshBasicMaterial( { color: color } );
	material1.color.multiplyScalar( intensity );
	var sphere = new THREE.Mesh( geometry, material1 );
	pointLight.add( sphere );
	var texture = new THREE.CanvasTexture( generateTexture() );
	texture.magFilter = THREE.NearestFilter;
	texture.wrapT = THREE.RepeatWrapping;
	texture.wrapS = THREE.RepeatWrapping;
	texture.repeat.set( 1, 5 );
	var geometry = new THREE.SphereBufferGeometry( 2, 32, 8 );
	var material = new THREE.MeshPhongMaterial( {
		side: THREE.DoubleSide,
		alphaMap: texture,
		alphaTest: 0.5
	} );
	var sphere = new THREE.Mesh( geometry, material );
	sphere.castShadow = true;
	sphere.receiveShadow = true;
	pointLight.add( sphere );
	// custom distance material
	var distanceMaterial = new THREE.MeshDistanceMaterial( {
		alphaMap: material.alphaMap,
		alphaTest: material.alphaTest
	} );
	sphere.customDistanceMaterial = distanceMaterial;
	return pointLight;
}

function init() {
	camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 1000 );
	camera.position.set( 0, 10, 40 );
	scene = new THREE.Scene();
	scene.add( new THREE.AmbientLight( 0x111122 ) );
	scene.fog = new THREE.FogExp2(0xfffff0,0.002);

	pointLight = createLight( Math.random()*0xffffff );
	scene.add( pointLight );
	pointLight2 = createLight( Math.random()*0xffffff );
	scene.add( pointLight2 );
	pointLight3 = createLight( Math.random()*0xffffff );
	scene.add( pointLight3 );
	pointLight4 = createLight( Math.random()*0xffffff );
	scene.add( pointLight4 );
	pointLight5 = createLight( 0xF5FF60 );
	scene.add( pointLight5 );

	//
	var geometry = new THREE.BoxBufferGeometry( 30, 30, 300 );
	var material = new THREE.MeshPhongMaterial( {
		color: 0xa0adaf,
		shininess: 10,
		specular: 0x111111,
		side: THREE.BackSide
	} );
	var mesh = new THREE.Mesh( geometry, material );
	mesh.position.y = 10;
	mesh.receiveShadow = true;
	scene.add( mesh );
	//
	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.shadowMap.enabled = true;
	renderer.shadowMap.type = THREE.BasicShadowMap;
	document.body.appendChild( renderer.domElement );
	var controls = new THREE.OrbitControls( camera, renderer.domElement );
	controls.target.set( 0, 10, 0 );
	controls.update();


}
function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
}
function generateTexture() {
	var canvas = document.createElement( 'canvas' );
	canvas.width = 2;
	canvas.height = 2;
	var context = canvas.getContext( '2d' );
	context.fillStyle = 'white';
	context.fillRect( 0, 1, 2, 1 );
	return canvas;
}

color= Math.random()*0xffffff;
material = new THREE.MeshLambertMaterial({
	color:color,
	transparent: true
});

var controller = new function(){
	this.pointlight = color;
}

var gui = new dat.GUI();
gui.addColor( controller, 'pointlight', color ).onChange( function() {
	pointLight5.color.setHex( dec2hex(controller.pointlight) );
	pointLight5.children[0].material.color.setHex( dec2hex(controller.pointlight));
});

var gui = new dat.GUI();
gui.addColor( controller, 'pointlight', color ).onChange( function() {
	pointLight4.color.setHex( dec2hex(controller.pointlight) );
	pointLight4.children[0].material.color.setHex( dec2hex(controller.pointlight));
});

var gui = new dat.GUI();
gui.addColor( controller, 'pointlight', color ).onChange( function() {
	pointLight3.color.setHex( dec2hex(controller.pointlight) );
	pointLight3.children[0].material.color.setHex( dec2hex(controller.pointlight));
});

var gui = new dat.GUI();
gui.addColor( controller, 'pointlight', color ).onChange( function() {
	pointLight2.color.setHex( dec2hex(controller.pointlight) );
	pointLight2.children[0].material.color.setHex( dec2hex(controller.pointlight));
});

var gui = new dat.GUI();
gui.addColor( controller, 'pointlight', color ).onChange( function() {
	pointLight.color.setHex( dec2hex(controller.pointlight) );
	pointLight.children[0].material.color.setHex( dec2hex(controller.pointlight));
});

function dec2hex(i) {
	var result = "0x000000";
	if (i >= 0 && i <= 15) { result = "0x00000" + i.toString(16); }
	else if (i >= 16 && i <= 255) { result = "0x0000" + i.toString(16); }
	else if (i >= 256 && i <= 4095) { result = "0x000" + i.toString(16); }
	else if (i >= 4096 && i <= 65535) { result = "0x00" + i.toString(16); }
	else if (i >= 65535 && i <= 1048575) { result = "0x0" + i.toString(16); }
	else if (i >= 1048575 ) { result = '0x' + i.toString(16); }
	if (result.length == 8){return result;}
}

function lightingSystem(){
	var object3d  = new THREE.DirectionalLight('white', 0.15);
	object3d.position.set(6,3,9);
	object3d.name = 'Back light';
	scene.add(object3d);

	object3d = new THREE.DirectionalLight('white', 0.35);
	object3d.position.set(-6, -3, 0);
	object3d.name   = 'Key light';
	scene.add(object3d);

	object3d = new THREE.DirectionalLight('white', 0.55);
	object3d.position.set(9, 9, 6);
	object3d.name = 'Fill light';
	scene.add(object3d);

	var pointLight = new THREE.PointLight( 0xffffff );
	pointLight.position.set( 3, 30, 3 );
	pointLight.castShadow = true;
	pointLight.shadow.mapSize.width = 2048;
	pointLight.shadow.mapSize.height = 2048;
	pointLight.shadow.camera.near = 1;
	pointLight.shadow.camera.far = 4000;
	pointLight.shadow.camera.fov = 45;
	scene.add( pointLight );
}


function animate() {
	requestAnimationFrame( animate );
	render();
}

function swap_music() {
	var oAudio = document.getElementById('myaudio');
	if (oAudio.paused) {
		oAudio.play();
	}
	else {
		oAudio.pause();
	}
}

function render() {
	var time = performance.now() * 0.0002;
	pointLight.position.x = Math.sin( time * 0.6 ) * 9;
	pointLight.position.y = Math.sin( time * 0.7 ) * 3 + 5;
	pointLight.position.z = Math.sin( time * 0.8 ) * 9;
	pointLight.rotation.x = time;
	pointLight.rotation.z = time;
	time += 10000;
	pointLight2.position.x = Math.sin( time * 0.6 ) * 9;
	pointLight2.position.y = Math.sin( time * 0.7 ) * 3 + 5;
	pointLight2.position.z = Math.sin( time * 0.8 ) * 9;
	pointLight2.rotation.x = time;
	pointLight2.rotation.z = time;
	time += 15000;
	pointLight3.position.x = Math.sin( time * 0.6 ) * 9;
	pointLight3.position.y = Math.sin( time * 0.7 ) * 3 + 5;
	pointLight3.position.z = Math.sin( time * 0.8 ) * 9;
	pointLight3.rotation.x = time;
	pointLight3.rotation.z = time;
	time += 20000;
	pointLight4.position.x = Math.sin( time * 0.6 ) * 9;
	pointLight4.position.y = Math.sin( time * 0.7 ) * 3 + 5;
	pointLight4.position.z = Math.sin( time * 0.8 ) * 9;
	pointLight4.rotation.x = time;
	pointLight4.rotation.z = time;
	time += 20000;
	pointLight5.position.x = 0;
	pointLight5.position.y = 18;
	pointLight5.position.z = 0;
	pointLight5.rotation.x = time;

	renderer.render( scene, camera );
}
