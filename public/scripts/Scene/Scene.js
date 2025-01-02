import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export const Scene = _ => {
    const isScreen = /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i
        .test(navigator.userAgent);

    const scene = new THREE.Scene();
    scene.position.set(0, 0, 0);
    scene.sceneData = {};
    scene.sceneData.animated = true;

    const camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 1, 1000);
    camera.position.set(0, 0, 40);
    camera.lookAt(0, 0, 0);
    camera.useQuaternion == true;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize((innerWidth * 2), (innerHeight * 2));
    
    document.getElementsByClassName('canvasContainer')[0].appendChild(renderer.domElement);

    const directionalLight_0 = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight_0.position.set(0, 100, 100);
    scene.add(directionalLight_0);

    const directionalLight_1 = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight_1.position.set(0, -100, -100);
    scene.add(directionalLight_1);

    const amLight = new THREE.AmbientLight(0xffffff, 0.25);
    scene.add(amLight);

    const light_01 = new THREE.DirectionalLight(0xffffff, 1);
    light_01.position.set(0, 50, 0);
    scene.add(light_01);

    scene.sceneData.elemWrapper = document.getElementsByClassName('wrapper')[0];

    const orbitControls = new OrbitControls(camera, scene.sceneData.elemWrapper);

    scene.sceneData.elemWrapper.setAttribute('style', 'touch-action: pan-y');  // touch-action: pan-y;

    (orbitControls.enableDamping = true);
    (orbitControls.enableZoom = false);
    (orbitControls.dampingFactor = .02);
    (orbitControls.rotateSpeed = 10.0);

    window.addEventListener("resize", _ => {
        camera.aspect = (innerWidth * 2) / (innerHeight * 2);
        camera.updateProjectionMatrix();
        renderer.setSize((innerWidth * 2), (innerHeight * 2));
    });

    return { scene, camera, renderer, orbitControls };
};