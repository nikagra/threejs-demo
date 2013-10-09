var WIDTH = 640, HEIGHT = 480;
var light, camera, scene, renderer, controls;
var geometry, material, mesh;

function start() {
    init();
    animate();
}

function init() {
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(WIDTH, HEIGHT);
    renderer.setClearColor(0x333F47);
    document.body.appendChild(renderer.domElement);
    
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, 1, 10000);
    camera.position.z = 250;
    scene.add(camera);

    light = new THREE.PointLight(0xFFFFFF);
    light.position.set(-100, 200, 100);
    scene.add(light);

    geometry = new THREE.CubeGeometry(50, 50, 50);
    material = new THREE.MeshLambertMaterial({color: 0xFF0000});
    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    controls = new THREE.OrbitControls(camera, renderer.domElement);
}

function animate() {
    requestAnimationFrame(animate);

    renderer.render(scene, camera);
    controls.update();
}
