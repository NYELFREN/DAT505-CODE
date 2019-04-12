# DAT505-CODE
This code defines the most basic camera scenes, renderers and lights, and I also define the geometry I need to define their shape as cone, then define four different texture maps as required, store them in the textures folder, and name them separately.
```javascript
// Create an empty scene --------------------------
var scene = new THREE.Scene();

// Create a basic perspective camera --------------
camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 300, 10000 );

// Create a renderer with Antialiasing ------------
var renderer = new THREE.WebGLRenderer({antialias:true});

// Configure renderer clear color
renderer.setClearColor("#9C9C9C");

// Configure renderer size
renderer.setSize( window.innerWidth, window.innerHeight );

// Append Renderer to DOM
document.body.appendChild( renderer.domElement );

// Configure lights -------------------------------
var light1 = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light1);

var light2 = new THREE.PointLight(0xffffff, 0.5);
scene.add(light2);

// Create a Cube Mesh with basic material ---------
var geometry = new THREE.ConeGeometry(50, 50, 50);

//MATERIAL 2:
var material2 = new THREE.MeshNormalMaterial();

var texture1 = new THREE.TextureLoader().load("textures/jj.jpg");

var material8 = new THREE.MeshBasicMaterial({ map: texture1});

var texture2 = new THREE.TextureLoader().load("textures/gg.jpg");

var material9 = new THREE.MeshBasicMaterial({ map: texture2});

var texture3 = new THREE.TextureLoader().load("textures/dd.jpg");

var material10 = new THREE.MeshBasicMaterial({ map: texture3});

var texture4 = new THREE.TextureLoader().load("textures/hh.jpg");

var material11 = new THREE.MeshBasicMaterial({ map: texture4});
```

This code gives the materials I define to different objects and presents them on the screen.
```javascript
var mesh1 = new THREE.Mesh( geometry, material8 );
mesh1.position.z = -1000;
mesh1.position.y = 100;

var mesh2 = new THREE.Mesh( geometry, material9 );
mesh2.position.z = -1000;
mesh2.position.x = -100;
mesh2.position.y = 200;

var mesh3 = new THREE.Mesh( geometry, material9 );
mesh3.position.z = -1000;
mesh3.position.x = -200;
mesh3.position.y = 100;

var mesh4 = new THREE.Mesh( geometry, material8 );
mesh4.position.z = -1000;
mesh4.position.x = 100;
mesh4.position.y = 200;

var mesh5 = new THREE.Mesh( geometry, material9 );
mesh5.position.z = -1000;
mesh5.position.x = 200;
mesh5.position.y = 100;

var mesh6 = new THREE.Mesh( geometry, material9 );
mesh6.position.z = -1000;
mesh6.position.x = 0;
mesh6.position.y = -100;

var mesh7 = new THREE.Mesh( geometry, material10 );
mesh7.position.z = -1000;
mesh7.position.x = -100;
mesh7.position.y = 0;

var mesh8 = new THREE.Mesh( geometry, material8 );
mesh8.position.z = -1000;
mesh8.position.x = -200;
mesh8.position.y = -100;

var mesh9 = new THREE.Mesh( geometry, material8 );
mesh9.position.z = -1000;
mesh9.position.x = 100;
mesh9.position.y = 0;

var mesh10 = new THREE.Mesh( geometry, material9 );
mesh10.position.z = -1000;
mesh10.position.x = 200;
mesh10.position.y = -100;

var mesh11 = new THREE.Mesh( geometry, material11 );
mesh11.position.z = -1000;
mesh11.position.x = 0;
mesh11.position.y = -100;

var mesh12 = new THREE.Mesh( geometry, material11 );
mesh12.position.z = -1000;
mesh12.position.x = 100;
mesh12.position.y = -200;
// ------------------------------------------------

// Add mesh to scene
scene.add( mesh1 );
//scene.add( mesh2 );
scene.add( mesh3 );
//scene.add( mesh4 );
scene.add( mesh5 );
//scene.add( mesh6 );
scene.add( mesh7 );
//scene.add( mesh8 );
scene.add( mesh9 );
//scene.add( mesh10 );
scene.add( mesh11 );
//scene.add( mesh12 );
```

This code gives each cone a different rotation angle.
```javascript
var rot = 0;

// Render Loop
var render = function () {
  requestAnimationFrame( render );

  rot += 0.01;

  mesh1.rotation.x = rot+2; //Continuously rotate the mesh
  mesh1.rotation.y = rot+2;

  mesh2.rotation.x = rot; //Continuously rotate the mesh
  mesh2.rotation.y = rot;

  mesh3.rotation.x = rot+2; //Continuously rotate the mesh
  mesh3.rotation.y = rot+2;

  mesh4.rotation.x = rot; //Continuously rotate the mesh
  mesh4.rotation.y = rot;

  mesh5.rotation.x = rot+2; //Continuously rotate the mesh
  mesh5.rotation.y = rot+2;

  mesh6.rotation.x = rot+2; //Continuously rotate the mesh
  mesh6.rotation.y = rot+2;

  mesh7.rotation.x = rot; //Continuously rotate the mesh
  mesh7.rotation.y = rot;

  mesh8.rotation.x = rot+2; //Continuously rotate the mesh
  mesh8.rotation.y = rot+2;

  mesh9.rotation.x = rot; //Continuously rotate the mesh
  mesh9.rotation.y = rot;

  mesh10.rotation.x = rot+2; //Continuously rotate the mesh
  mesh10.rotation.y = rot+2;

  mesh11.rotation.x = rot; //Continuously rotate the mesh
  mesh11.rotation.y = rot;

  mesh12.rotation.x = rot; //Continuously rotate the mesh
  mesh12.rotation.y = rot;

  // Render the scene
  renderer.render(scene, camera);
};

render(); //Run the function render
```
