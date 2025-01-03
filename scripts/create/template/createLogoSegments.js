import * as THREE from 'three';
const dodMat = new THREE.MeshStandardMaterial({ color: 'blueviolet', metalness: 1, roughness: .6 });

export const createLogoSegments = (sceneData, rot_container) => {

    const container = new THREE.Object3D();

    for (let i = 0; i < 1000; i++) {
        const geometry = new THREE.BufferGeometry();

        const positions = [

        ];

        const normals = [

        ];

        const indices = [

        ];

        geometry.setIndex(indices);

        geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        geometry.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));

        const object = new THREE.Mesh(geometry, dodMat);

        sceneData.logo_cubes = object;

        sceneData.logo_cubes.visible = false;

        sceneData.logo_cubes.rotation.set(Math.PI / 2, 0, 0);

        container.add(object);
    }

    rot_container.add(object);

}