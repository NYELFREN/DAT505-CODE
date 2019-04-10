// -----------------------------------------------------------------------------
// BASIC SETUP
// ------------------------------------------------


// Create an empty scene --------------------------
var scene = new THREE.Scene();

// Create a basic perspective camera --------------
var camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 300, 10000 );
//var controls = new THREE.OrbitControls( camera );
//camera.position.set( -50, 100, -800 );
//controls.update();
//function animate() {
    //requestAnimationFrame( animate );

     //required if controls.enableDamping or controls.autoRotate are set to true
    //controls.update();
    //renderer.render( scene, camera );
//}


// Create a renderer with Antialiasing ------------
var renderer = new THREE.WebGLRenderer({antialias:true});

// Configure renderer clear color
renderer.setClearColor("#FFFFFF");

// Configure renderer size
renderer.setSize( window.innerWidth, window.innerHeight );

// Append Renderer to DOM
document.body.appendChild( renderer.domElement );

// Configure lights -------------------------------
var light1 = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light1);

var light2 = new THREE.PointLight(0xffffff, 0.5);
scene.add(light2);
// ------------------------------------------------

// -----------------------------------------------------------------------------

// ------------------------------------------------
// Main Content
// ------------------------------------------------

// Create a Cube Mesh with basic material ---------
var geometry = new THREE.BoxGeometry(100, 100, 100);
//var WIDTH = window.innerWidth,
//HEIGHT = window.innerHeight;
//var gui = null;
//function init(){
  //threejs = document.getElementById('threejs');

  // Create a renderer  ------------
    //renderer = new THREE.WebGLRenderer({antialias:true});
    //renderer.setSize(WIDTH, HEIGHT);
    //renderer.setClearColor(0x333F47, 1);
    //renderer.shadowMap.Enabled = true;
    //renderer.shadowMapSoft = true;

    //threejs.appendChild(renderer.domElement);



    //GUI - Setup the GUI controller
//var controller = new function() {
  //mesh1.scaleX = 1;
  //mesh1.scaleY = 1;
  //mesh1.scaleZ = 1;

//MATERIAL 2:
//var material2 = new THREE.MeshNormalMaterial();

//var material1 = new THREE.MeshLambertMaterial({
  //color: '#D2BE82',
  //lightMap: null,
  //lightMapIntensity: 1,
  //emissive: 0x000000,
  //emissiveMap: null,
  //emissiveIntensity: 1,
  //specularMap: null
//});


//var gui = new dat.GUI();
//var f1 = gui.addFolder('Scale');
//f1.add(controller, 'scaleX', 0.1, 5).onChange( function() {
  //mesh1.scale.x = (controller.scaleX);
//});
//f1.add(controller, 'scaleY', 0.1, 5).onChange( function() {
  //mesh1.scale.y = (controller.scaleY);
//});
//f1.add(controller, 'scaleZ', 0.1, 5).onChange( function() {
  //mesh1.scale.z = (controller.scaleZ);
//});

var texture1 = new THREE.TextureLoader().load("textures/jj.jpg");

var material8 = new THREE.MeshBasicMaterial({ map: texture1});

var texture2 = new THREE.TextureLoader().load("textures/gg.jpg");

var material9 = new THREE.MeshBasicMaterial({ map: texture2});

var texture3 = new THREE.TextureLoader().load("textures/dd.jpg");

var material10 = new THREE.MeshBasicMaterial({ map: texture3});

var texture4 = new THREE.TextureLoader().load("textures/hh.jpg");

var material11 = new THREE.MeshBasicMaterial({ map: texture4});



var mesh1 = new THREE.Mesh( geometry, material10 );
mesh1.position.z = -1000;
mesh1.position.x = -50;
mesh1.position.y = 100;

var mesh2 = new THREE.Mesh( geometry, material9 );
mesh2.position.z = -1000;
mesh2.position.x = 50;
mesh2.position.y = 100;

var mesh3 = new THREE.Mesh( geometry, material10 );
mesh3.position.z = -1000;
mesh3.position.x = -50;
mesh3.position.y = 0;

var mesh4 = new THREE.Mesh( geometry, material8 );
mesh4.position.z = -1000;
mesh4.position.x = 50;
mesh4.position.y = 0;

var mesh5 = new THREE.Mesh( geometry, material10 );
mesh5.position.z = -900;
mesh5.position.x = -50;
mesh5.position.y = 100;

var mesh6 = new THREE.Mesh( geometry, material8 );
mesh6.position.z = -900;
mesh6.position.x = 50;
mesh6.position.y = 100;

var mesh7 = new THREE.Mesh( geometry, material11 );
mesh7.position.z = -900;
mesh7.position.x = -50;
mesh7.position.y = 0;

var mesh8 = new THREE.Mesh( geometry, material9 );
mesh8.position.z = -900;
mesh8.position.x = 50;
mesh8.position.y = 0;

var group = new THREE.Group();
group.add(mesh5);
scene.add(group);
// ------------------------------------------------

// Add mesh to scene

scene.add( mesh1 );
scene.add( mesh2 );
scene.add( mesh3 );
scene.add( mesh4 );

scene.add( mesh6 );
scene.add( mesh7 );
scene.add( mesh8 );


var rot = 0;

// Render Loop
var render = function () {
  requestAnimationFrame( render );

  rot += 0.01;

  mesh1.rotation.x = rot; //Continuously rotate the mesh
  mesh1.rotation.y = rot;

  mesh2.rotation.x = rot; //Continuously rotate the mesh
  mesh2.rotation.y = rot;

  mesh3.rotation.x = rot; //Continuously rotate the mesh
  mesh3.rotation.y = rot;

  mesh4.rotation.x = rot; //Continuously rotate the mesh
  mesh4.rotation.y = rot;

  //mesh5.rotation.x = rot; //Continuously rotate the mesh
  //mesh5.rotation.y = rot;

  //mesh6.rotation.x = rot; //Continuously rotate the mesh
  //mesh6.rotation.y = rot;

  mesh7.rotation.x = rot; //Continuously rotate the mesh
  mesh7.rotation.y = rot;

  mesh8.rotation.x = rot; //Continuously rotate the mesh
  mesh8.rotation.y = rot;

  group.rotation.x = 1;
  group.rotation.z = 1;


  // Render the scene
  renderer.render(scene, camera);
};

//init();
render(); //Run the function render
