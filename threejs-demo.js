var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

var light, camera, scene, renderer, controls;
var geometry, material, mesh;

var lastTime = 0;

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
    camera.position.set(0, 50, 250);
    scene.add(camera);

    window.addEventListener('resize', function() {
        WIDTH = window.innerWidth;
        HEIGHT = window.innerHeight;
        renderer.setSize(WIDTH, HEIGHT);
        camera.aspect = WIDTH / HEIGHT;
        camera.updateProjectionMatrix();
    });

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

    var timeNow = new Date().getTime();
    if (lastTime != 0) {
        var elapsed = timeNow - lastTime;
        mesh.rotation.y = (mesh.rotation.y + elapsed / 1000) % (2 * Math.PI);
    }
    lastTime = timeNow;

    controls.update();
}
