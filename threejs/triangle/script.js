// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

// Create the triangle geometry and material
const geometry = new THREE.BufferGeometry();
const vertices = new Float32Array([ 0, 1, 0, -1, -1, 0, 1, -1, 0 ]);
geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
const material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });

// Create the triangle mesh and add it to the scene
const triangle = new THREE.Mesh(geometry, material);
scene.add(triangle);

// Position the camera and render the scene
camera.position.z = 5;
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();