const scene = new THREE.Scene();
scene.background = new THREE.Color(0x74123c)

var loader = new THREE.TextureLoader();
loader.load('../images/unnamed.jpg', function(texture){
	scene.background = texture;
})

const camara = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);


const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshBasicMaterial({ color: 0x12b2c5 });
const cube = new THREE.Mesh( geometry, material)
scene.add( cube )

camara.position.z = 5;
camara.position.y = 0;
camara.position.x = 0;

 
function animate() {
	requestAnimationFrame(animate);
	cube.rotation.y += 0.04
	cube.rotation.z += 0.04
	cube.rotation.x += 0.04
	renderer.render(scene, camara);
}

animate();
