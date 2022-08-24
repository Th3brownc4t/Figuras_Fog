const scene = new THREE.Scene();
scene.background = new THREE.Color(0x127462)

const camara = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1 , 1000);

const renderizar = new THREE.WebGLRenderer();
renderizar.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderizar.domElement)

const geometry = new THREE.CapsuleGeometry(1, 4, 8, 32)
const material = new THREE.MeshBasicMaterial({color: 0x1a5bc8})
const capsula = new THREE.Mesh(geometry,material)

scene.add(capsula)


camara.position.z = 5
camara.position.y = 0
camara.position.x = 0

function animate() {
    requestAnimationFrame(animate)
    capsula.rotation.z += 0.04
    capsula.rotation.y += 0.04
    /* capsula.rotation.x += 0.04 */
    renderizar.render(scene, camara)
}

animate();