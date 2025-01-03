import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import { createDodSolid } from '../../create/createDodSolid/createDodSolid';
import { createLogoSegments } from '../../create/createLogoSegments/createLogoSegments';
import { createLogoSolid } from '../../create/createLogoSolid/createLogoSolid';
import { createDodSegments } from '../../create/createDodSegments/createDodSegments copy';

export const addObj = (scene, camera, orbitControls) => {

    const sceneData = {
        animRange: '',
        deltaScroll: 0,
        currentScroll: 0,
        interpolRatio: 20,
        deltaScrollTotal: window.scrollY,
        targetScrollTotal: window.scrollY,
        targetScroll: window.scrollY,
        dod_cubes: {},
        logo_cubes: {},
        dod_solid: {},
        logo_solid: {},
        dodStartRot: [],
        dodStartPos: [],
        dodScaleArr: [],
        dodAngleArr: [],
        logoStartRot: [],
        logoStartPos: [],
        logoScaleArr: [],
        logoAngleArr: [],
        offsetTop: 0,
        offsetBottom: 0,

        timNowX: 0,
        timNowY: 0,
        timNowZ: 0,
        prevTime: 0,
        deltaTime: 0,
        dirTime: true,

        targetVecRot: new THREE.Vector3(1, 1, 1),
        vecRot: new THREE.Vector3(1, 1, 1),

        targetVecScale: new THREE.Vector3(1, 1, 1),
        vecScale: new THREE.Vector3(1, 1, 1),

        rayOrigin: new THREE.Vector3(),

        isMouseDown: false,
        touchStartY: 0,

        t: 0,
        dt: 10,

        logoRandomArr: [],
        dodRandomArr: []
    }

    const gltfLoader = new GLTFLoader();

    const objects_container = new THREE.Object3D();
    const rot_container = new THREE.Object3D();
    objects_container.scale.set(5.5, 5.5, 5.5);
    objects_container.scale.set(11, 11, 11);

    objects_container.add(rot_container);
    sceneData.rot_container = rot_container;
    scene.add(objects_container);

    const dracoLoader = new DRACOLoader();

    dracoLoader.setDecoderPath('./scripts/jsm/libs/draco/');

    dracoLoader.setDecoderConfig({ type: 'js' });

    gltfLoader.setDRACOLoader(dracoLoader);

    createDodSolid(sceneData, rot_container);

    createLogoSolid(sceneData, rot_container);

    createDodSegments(sceneData, rot_container);

    createLogoSegments(sceneData, rot_container);

    window.addEventListener('scroll', _ => {
        sceneData.targetScrollTotal = window.scrollY - sceneData.offsetTop;
    });

    window.addEventListener('dblclick', _ => {
        console.log(1);
    });

    window.addEventListener('mousedown', evt => {
        sceneData.isMouseDown = true;
        moveCursor(evt);
    });

    window.addEventListener('mouseup', _ => {
        sceneData.isMouseDown = false;
        sceneData.targetVecScale.set(1, 1, 1);
    });

    window.addEventListener('touchstart', evt => {
        sceneData.isMouseDown = true;
        sceneData.touchStartY = evt.touches[0].clientY;
        moveCursor(evt);
    });

    window.addEventListener('touchend', _ => {
        sceneData.isMouseDown = false;
        sceneData.targetVecScale.set(1, 1, 1);
    });


    const raycasterMesh = new THREE.Raycaster();
    const rayCoordinates = new THREE.Vector2();
    const isScreen = /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i
        .test(navigator.userAgent);

    const canvasContainer = document.getElementsByClassName('canvasContainer')[0];

    const ray = new THREE.Ray();

    const moveCursor = evt => {
        if (isScreen && evt.touches !== undefined) {
            rayCoordinates.x = ((evt.touches[0].clientX - canvasContainer.children[0].offsetLeft) /
                canvasContainer.children[0].clientWidth) * 2 - 1;
            rayCoordinates.y = ((evt.touches[0].clientY - canvasContainer.children[0].offsetTop) /
                canvasContainer.children[0].clientHeight) * -2 + 1;
        }
        else {
            rayCoordinates.x = ((evt.clientX - canvasContainer.children[0].offsetLeft) /
                canvasContainer.children[0].clientWidth) * 2 - 1;
            rayCoordinates.y = ((evt.clientY - canvasContainer.children[0].offsetTop) /
                canvasContainer.children[0].clientHeight) * -2 + 1;
        }

        raycasterMesh.setFromCamera(rayCoordinates, camera);

        const intersectsMesh = raycasterMesh.intersectObjects([rot_container], true);

        ray.origin.setFromMatrixPosition(camera.matrixWorld);
        ray.direction.set(rayCoordinates.x, rayCoordinates.y, 0).unproject(camera).sub(ray.origin).normalize();
        const distance = ray.origin.length() / Math.cos(Math.PI - ray.direction.angleTo(ray.origin));
        ray.origin.add(ray.direction.multiplyScalar(distance * 1.0));

        sceneData.rayOrigin.set(
            ray.origin.x,
            ray.origin.y,
            ray.origin.z,
        );

        const dirRotX = Math.cos(Math.atan2(
            ray.origin.x - objects_container.position.x,
            ray.origin.y - objects_container.position.y,
        ));
        const dirRotY = Math.sin(Math.atan2(
            ray.origin.x - objects_container.position.x,
            ray.origin.y - objects_container.position.y,
        ));

        intersectsMesh.length && (sceneData.targetVecRot.x = dirRotX * (-1));

        intersectsMesh.length && (sceneData.targetVecRot.y = dirRotY * (-1));  //

        intersectsMesh.length && (sceneData.vecRot.z = 0);

        sceneData.isMouseDown && intersectsMesh.length
            ? sceneData.targetVecScale.set(1.06, 1.06, 1.06)
            : sceneData.targetVecScale.set(1, 1, 1);

    }

    window.addEventListener('mousemove', evt => {
        moveCursor(evt);
    });
    window.addEventListener('touchmove', evt => {
        moveCursor(evt);
    });

    return sceneData;
}