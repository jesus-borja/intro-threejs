import * as THREE from "./three.js";

// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

// Create the renderer
const renderer = new THREE.WebGLRenderer();
// window size
renderer.setSize(window.innerWidth, window.innerHeight);
// function that controls the animations
renderer.setAnimationLoop(animate);
// create an html element to visualize 3d scene
document.body.appendChild(renderer.domElement);

// creates a cuboid with given width, height and depth
const geometry = new THREE.BoxGeometry(1, 6, 1);
// creates a simple material that allows an object to be drawn
const material = new THREE.MeshBasicMaterial({ color: 0x7000ff });
// given the material and the geometry it's allowed to draw an object
const cube = new THREE.Mesh(geometry, material);
// add the object to the scene to be rendered
scene.add(cube);

// moves the camera away from the center of the screen
camera.position.z = 5;

function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    cube.rotation.z += 0.01;

    renderer.render(scene, camera);
}
