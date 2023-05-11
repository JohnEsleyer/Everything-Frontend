// Create a new scene
const scene = new THREE.Scene();

// Create a new camera
const camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.1,
	1000
);
camera.position.z = 5;

// Create a new renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a new circle geometry
const geometry = new THREE.CircleGeometry(1, 32);

// Create a new material with a green color
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

// Create a new mesh with the geometry and material
const circle = new THREE.Mesh(geometry, material);

// Add the circle to the scene
scene.add(circle);

// Render the scene
function animate() {
	requestAnimationFrame(animate);
	renderer.render(scene, camera);
}
animate();