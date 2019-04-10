//Global variables
var scene, camera, renderer;
var geometry, material, mesh;
var color;

var de2ra = function(degree){
  return degree*(Math.PI/180);
};

function init(){
  // Create an empty scene --------------------------
  scene = new THREE.Scene();

  // Create a basic perspective camera --------------
  camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 1, 20000 );

  // Create a renderer with Antialiasing ------------
  renderer = new THREE.WebGLRenderer({antialias:true});

  // Configure renderer clear color
  renderer.setClearColor("#000000");

  // Configure renderer size
  renderer.setSize( window.innerWidth, window.innerHeight );

  // Append Renderer to DOM
  document.body.appendChild( renderer.domElement );

  // Create a Cube Mesh with basic material ---------
  geometry = new THREE.BoxGeometry(100, 100, 100);
  color
  material = new THREE.MeshNormalMaterial( { color: "#FF00FF" } );
  mesh = new THREE.Mesh( geometry, material );
  mesh.position.z = -1000;

  // Add mesh to scene
  scene.add( mesh );


var controller = new function(){
  this.scaleX = 1;
  this.scaleY = 1;
  this.scaleZ = 1;
  this.positionX = 0;
  this.positionY = 0;
  this.positionZ = 1;
  this.rotationX = 0;
  this.rotationY = 0;
  this.rotationZ = 0;

}

var gui = new dat.GUI();

var f1 = gui.addFolder('Scale');
f1.add(controller,'scaleX',0.1,5).onChange( function() {
   mesh.scale.x = (controller.scaleX);
 });
f1.add(controller,'scaleY',0.1,5).onChange( function() {
   mesh.scale.y = (controller.scaleY);
 });
f1.add(controller,'scaleZ',0.1,5).onChange( function() {
   mesh.scale.z = (controller.scaleZ);
 });

 var f2 = gui.addFolder('Position');
 f2.add(controller,'positionX',-100,100).onChange( function() {
    mesh.position.x = (controller.positionX);
  });
 f2.add(controller,'positionY',-100,100).onChange( function() {
    mesh.position.y = (controller.positionY);
  });
 f2.add(controller,'positionZ',-5000,-500).onChange( function() {
    mesh.position.z = (controller.positionZ);
  });

  var f3 = gui.addFolder('Rotation');
  f3.add(controller,'rotationX',-100,100).onChange( function() {
     mesh.rotation.x = de2ra(controller.rotationX);
   });
  f3.add(controller,'rotationY',-100,100).onChange( function() {
     mesh.rotation.y = de2ra(controller.rotationY);
   });
  f3.add(controller,'rotationZ',-100,100).onChange( function() {
     mesh.rotation.z = de2ra(controller.rotationZ);
   });

}

// Render Loop
var render = function () {
  requestAnimationFrame( render );

  //mesh.rotation.x += 0.01; //Continuously rotate the mesh
  //mesh.rotation.y += 0.01;

  renderer.setClearColor("#9C9C9C");

  // Render the scene
  renderer.render(scene, camera);
};

init();
render();
