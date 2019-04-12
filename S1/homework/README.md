# DAT505-CODE

![Image text](https://github.com/NYELFREN/DAT505-Github/blob/master/picture/01.png)
This code defines eight different geometries and including a scene,a camera and a renderer.
```javascript
//Global variables
var scene, camera, renderer;
var geometry1, material1, mesh1;
var geometry2, material2, sphere2;
var geometry3, material3, mesh3;
var geometry4, material4, mesh4;
var geometry5, material5, mesh5;
var geometry6, material6, mesh6;
var geometry7, material7, mesh7;
var geometry8, material8, mesh8;
```
This code mainly gives the camera, scene and so on a mode of operation, including the camera location, scene color. In my assignment, I set different shapes and sizes for eight different geometries, changed the colors of the first to the last simulated rainbow, and added them to scene

```javascript
function init(){
  // Create an empty scene --------------------------
  scene = new THREE.Scene();

  // Create a basic perspective camera --------------
  camera = new THREE.PerspectiveCamera(35, window.innerWidth/window.innerHeight, 300, 10000 );

  // Create a renderer with Antialiasing ------------
  renderer = new THREE.WebGLRenderer({antialias:true});

  // Configure renderer clear color
  renderer.setClearColor("#000000");

  // Configure renderer size
  renderer.setSize( window.innerWidth, window.innerHeight );

  // Append Renderer to DOM
  document.body.appendChild( renderer.domElement );
}

function geometry(){
  // Create a Cube Mesh with basic material ---------
  geometry1 = new THREE.RingGeometry( 10, 50, 320 );
  material1 = new THREE.MeshBasicMaterial( { color: "#FF7F50",side: THREE.DoubleSide} );
  mesh1 = new THREE.Mesh( geometry1, material1 );
  mesh1.position.z = -1000;

  // Add mesh to scene

  // Create a Cube Mesh with basic material ---------
  geometry2 = new THREE.SphereBufferGeometry(5, 32, 32);
  material2 = new THREE.MeshBasicMaterial( { color: "#FF3030" } );
  sphere2 = new THREE.Mesh( geometry2, material2 );
  sphere2.position.z = -500;
  //sphere2.position.y = -100;

  geometry3 = new THREE.RingGeometry( 30, 70, 340 );
  material3 = new THREE.MeshBasicMaterial( { color: "#FFF68F",side: THREE.DoubleSide} );
  mesh3 = new THREE.Mesh( geometry3, material3 );
  mesh3.position.z = -1000;

  geometry4 = new THREE.RingGeometry( 50, 90, 360 );
  material4 = new THREE.MeshBasicMaterial( { color: "#98FB98",side: THREE.DoubleSide} );
  mesh4 = new THREE.Mesh( geometry4, material4 );
  mesh4.position.z = -1000;

  geometry5 = new THREE.RingGeometry( 70, 110, 380 );
  material5 = new THREE.MeshBasicMaterial( { color: "#54FF9F",side: THREE.DoubleSide} );
  mesh5 = new THREE.Mesh( geometry5, material5 );
  mesh5.position.z = -1000;

  geometry6 = new THREE.RingGeometry( 90, 130, 400 );
  material6 = new THREE.MeshBasicMaterial( { color: "#00FFFF",side: THREE.DoubleSide} );
  mesh6 = new THREE.Mesh( geometry6, material6 );
  mesh6.position.z = -1000;

  geometry7 = new THREE.RingGeometry( 110, 150, 420 );
  material7 = new THREE.MeshBasicMaterial( { color: "#6959CD",side: THREE.DoubleSide} );
  mesh7 = new THREE.Mesh( geometry7, material7 );
  mesh7.position.z = -1000;

  geometry8 = new THREE.RingGeometry( 130, 170, 440 );
  material8 = new THREE.MeshBasicMaterial( { color: "#EE1289",side: THREE.DoubleSide} );
  mesh8 = new THREE.Mesh( geometry8, material8 );
  mesh8.position.z = -1000;

  // Add mesh to scene
  scene.add( mesh1 );

  scene.add( sphere2 );

  scene.add( mesh3 );

  scene.add( mesh4 );

  scene.add( mesh5 );

  scene.add( mesh6 );

  scene.add( mesh7 );

  scene.add( mesh8 );
}
```
This code gives each object a way to move. I start to rotate them together and change the speed of their rotation from slow to fast, which completes my work

```javascript
// Render Loop
var render = function () {
  requestAnimationFrame( render );

  mesh1.rotation.x += 0.02; //Continuously rotate the mesh
  mesh1.rotation.y += 0.02;

  sphere2.rotation.x += 0.01; //Continuously rotate the mesh
  sphere2.rotation.y += 0.01;

  mesh3.rotation.x += 0.03; //Continuously rotate the mesh
  mesh3.rotation.y += 0.03;

  mesh4.rotation.x += 0.04; //Continuously rotate the mesh
  mesh4.rotation.y += 0.04;

  mesh5.rotation.x += 0.05; //Continuously rotate the mesh
  mesh5.rotation.y += 0.05;

  mesh6.rotation.x += 0.06; //Continuously rotate the mesh
  mesh6.rotation.y += 0.06;

  mesh7.rotation.x += 0.07; //Continuously rotate the mesh
  mesh7.rotation.y += 0.07;

  mesh8.rotation.x += 0.08; //Continuously rotate the mesh
  mesh8.rotation.y += 0.08;


  renderer.setClearColor("#E0FFFF");

  // Render the scene
  renderer.render(scene, camera);
};

init();
geometry();
render();
```
