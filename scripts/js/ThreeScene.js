'use client';

import React, { useEffect } from "react";
import * as THREE from "three";
import { Scene } from "../Scene/Scene"; // Убедитесь, что правильно указан путь
import { addObj } from "../add/addObj/addObj"; // Убедитесь, что правильно указан путь
import { anim_checkpoints_conf } from "../conf/anim_checkpoints_conf"; // Убедитесь, что правильно указан путь


const ThreeScene = () => {
  useEffect(() => {
    const { scene, camera, renderer, orbitControls } = Scene();
    const sceneData = addObj(scene, camera, orbitControls);

    const isScreen =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
        navigator.userAgent
      );

    const speedArr = [];

    for (let i = 0; i < 1000; i++) {
      speedArr.push(Math.random() * (2.5 - 1.5) + 1.5);
    }

    const clock = new THREE.Clock();

    const lerp = (a, b, t, k) => a + (b - a) * t;

    const ease = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

    renderer.setAnimationLoop((_) => {
      orbitControls && orbitControls.update();

      const time = clock.getElapsedTime() * 0.5;

      sceneData.vecRot.y > sceneData.targetVecRot.y
        ? (sceneData.vecRot.y -=
            (sceneData.vecRot.y - sceneData.targetVecRot.y) / 100)
        : (sceneData.vecRot.y +=
            (sceneData.targetVecRot.y - sceneData.vecRot.y) / 100);

      sceneData.vecRot.x > sceneData.targetVecRot.x
        ? (sceneData.vecRot.x -=
            (sceneData.vecRot.x - sceneData.targetVecRot.x) / 100)
        : (sceneData.vecRot.x +=
            (sceneData.targetVecRot.x - sceneData.vecRot.x) / 100);

      sceneData.deltaTime = time - sceneData.prevTime;
      sceneData.prevTime = time;

      sceneData.timNowX += sceneData.deltaTime * sceneData.vecRot.x;
      sceneData.timNowY += sceneData.deltaTime * sceneData.vecRot.y;
      sceneData.timNowZ += sceneData.deltaTime * sceneData.vecRot.z;

      scene.children[4] &&
        scene.children[4].rotation.set(
          sceneData.timNowX / 12,
          sceneData.timNowY / 12,
          sceneData.timNowZ / 12
        );

      if (scene.children[4]) {
        const maxScroll =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;

        const onePercentScrolls = maxScroll / 100;

        if (
          sceneData.currentScroll >=
            onePercentScrolls * anim_checkpoints_conf.first_step_start &&
          sceneData.currentScroll <
            onePercentScrolls * anim_checkpoints_conf.first_step_finish
        ) {
          sceneData.animRange = "firstAnim";
        }

        if (
          sceneData.currentScroll >=
            onePercentScrolls * anim_checkpoints_conf.second_step_start &&
          sceneData.currentScroll <
            onePercentScrolls * anim_checkpoints_conf.second_step_finish
        ) {
          sceneData.animRange = "secondAnim";
        }

        if (
          sceneData.currentScroll >=
            onePercentScrolls * anim_checkpoints_conf.third_step_start &&
          sceneData.currentScroll <
            onePercentScrolls * anim_checkpoints_conf.third_step_finish
        ) {
          sceneData.animRange = "thirdAnim";
        }

        if (sceneData.vecScale.x > sceneData.targetVecScale.x) {
          !sceneData.isMouseDown &&
            sceneData.vecScale.set(
              sceneData.vecScale.x - 0.001,
              sceneData.vecScale.x - 0.001,
              sceneData.vecScale.x - 0.001
            );
        } else if (sceneData.vecScale.x < sceneData.targetVecScale.x - 0.001) {
          sceneData.isMouseDown &&
            sceneData.vecScale.set(
              sceneData.vecScale.x + 0.001,
              sceneData.vecScale.x + 0.001,
              sceneData.vecScale.x + 0.001
            );
        }

        scene.children[4] &&
          scene.children[4].children[0].scale.set(
            sceneData.vecScale.x,
            sceneData.vecScale.y,
            sceneData.vecScale.z
          );

        sceneData.targetScrollTotal > sceneData.currentScroll &&
          (sceneData.currentScroll +=
            (sceneData.targetScrollTotal - sceneData.currentScroll) /
            sceneData.interpolRatio);

        sceneData.targetScrollTotal < sceneData.currentScroll &&
          (sceneData.currentScroll -=
            (sceneData.currentScroll - sceneData.targetScrollTotal) /
            sceneData.interpolRatio);

        sceneData.deltaScroll = sceneData.currentScroll;

        switch (sceneData.animRange) {
          case "firstAnim":
            sceneData.logo_solid.visible = true;
            sceneData.dod_solid.visible = false;
            sceneData.logo_cubes.visible = false;
            sceneData.dod_cubes.visible = false;

            scene.children[4].scale.set(
              5.5 *
                (1 +
                  sceneData.currentScroll /
                    (onePercentScrolls *
                      anim_checkpoints_conf.first_step_finish)),
              5.5 *
                (1 +
                  sceneData.currentScroll /
                    (onePercentScrolls *
                      anim_checkpoints_conf.first_step_finish)),
              5.5 *
                (1 +
                  sceneData.currentScroll /
                    (onePercentScrolls *
                      anim_checkpoints_conf.first_step_finish))
            );

            break;
          case "secondAnim":
            const secondAnimDist =
              onePercentScrolls * anim_checkpoints_conf.second_step_finish -
              onePercentScrolls * anim_checkpoints_conf.second_step_start;

            const secondAnimStart =
              sceneData.currentScroll -
              onePercentScrolls * anim_checkpoints_conf.second_step_start;

            const deltaTime = (secondAnimStart / secondAnimDist) * 2;

            if (deltaTime <= 1) {
              for (let i = 0; i < sceneData.dod_cubes.children.length; i++) {
                const newX = lerp(
                  sceneData.logoStartPos[i].x,
                  sceneData.logoRandomArr[i].x,
                  ease(deltaTime),
                  sceneData.logo_cubes.children[i].position.z
                );

                const newY = lerp(
                  sceneData.logoStartPos[i].y,
                  sceneData.logoRandomArr[i].y,
                  ease(deltaTime),
                  sceneData.logo_cubes.children[i].position.x
                );

                const newZ = lerp(
                  sceneData.logoStartPos[i].z,
                  sceneData.logoRandomArr[i].z,
                  ease(deltaTime),
                  sceneData.logo_cubes.children[i].position.y
                );

                sceneData.logo_cubes.children[i].position.set(newX, newY, newZ);

                sceneData.logo_cubes.children[i].rotation.set(
                  sceneData.logoStartRot[i].x + Math.PI * 2 * deltaTime,
                  sceneData.logoStartRot[i].y + Math.PI * 2 * deltaTime,
                  sceneData.logoStartRot[i].z + Math.PI * 2 * deltaTime
                );

                sceneData.logo_cubes.children[i].scale.set(
                  sceneData.logoScaleArr[i].x *
                    (1 + deltaTime / 5 - Math.pow(deltaTime, 0.5)),
                  sceneData.logoScaleArr[i].y *
                    (1 + deltaTime / 5 - Math.pow(deltaTime, 0.5)),
                  sceneData.logoScaleArr[i].z *
                    (1 + deltaTime / 5 - Math.pow(deltaTime, 0.5))
                );

                const newDodX = lerp(
                  sceneData.logoStartPos[i].x,
                  sceneData.dodRandomArr[i].x,
                  ease(deltaTime),
                  sceneData.dod_cubes.children[i].position.z
                );

                const newDodY = lerp(
                  sceneData.logoStartPos[i].y,
                  sceneData.dodRandomArr[i].y,
                  ease(deltaTime),
                  sceneData.dod_cubes.children[i].position.x
                );

                const newDodZ = lerp(
                  sceneData.logoStartPos[i].z,
                  sceneData.dodRandomArr[i].z,
                  ease(deltaTime),
                  sceneData.dod_cubes.children[i].position.y
                );

                sceneData.dod_cubes.children[i].position.set(
                  newDodX,
                  newDodY,
                  newDodZ
                );

                sceneData.dod_cubes.children[i].rotation.set(
                  sceneData.dodStartRot[i].x + Math.PI * 2 * deltaTime,
                  sceneData.dodStartRot[i].y + Math.PI * 2 * deltaTime,
                  sceneData.dodStartRot[i].z + Math.PI * 2 * deltaTime
                );

                sceneData.dod_cubes.children[i].scale.set(
                  sceneData.dodScaleArr[i].x * (deltaTime / 2),
                  sceneData.dodScaleArr[i].y * (deltaTime / 2),
                  sceneData.dodScaleArr[i].z * (deltaTime / 2)
                );

                if (!isScreen) {
                  const logoDirection = new THREE.Vector3();
                  logoDirection
                    .subVectors(
                      sceneData.rayOrigin.clone(),
                      sceneData.logo_cubes.children[i].position.clone()
                    )
                    .normalize();

                  const dodDirection = new THREE.Vector3();
                  dodDirection
                    .subVectors(
                      sceneData.rayOrigin.clone(),
                      sceneData.dod_cubes.children[i].position.clone()
                    )
                    .normalize();

                  sceneData.logo_cubes.children[i].position.set(
                    sceneData.logo_cubes.children[i].position.x +
                      (logoDirection.x / 100) * (100 * deltaTime),
                    sceneData.logo_cubes.children[i].position.y +
                      (logoDirection.y / 100) * (100 * deltaTime),
                    sceneData.logo_cubes.children[i].position.z +
                      (logoDirection.z / 100) * (100 * deltaTime)
                  );

                  sceneData.dod_cubes.children[i].position.set(
                    sceneData.dod_cubes.children[i].position.x +
                      (dodDirection.x / 100) * (100 * deltaTime),
                    sceneData.dod_cubes.children[i].position.y +
                      (dodDirection.y / 100) * (100 * deltaTime),
                    sceneData.dod_cubes.children[i].position.z +
                      (dodDirection.z / 100) * (100 * deltaTime)
                  );
                }
              }
            }

            if (deltaTime > 1 && deltaTime <= 2) {
              for (let i = 0; i < sceneData.dod_cubes.children.length; i++) {
                const newX = lerp(
                  sceneData.dodStartPos[i].x,
                  sceneData.logoRandomArr[i].x,
                  ease(2 - deltaTime),
                  sceneData.logo_cubes.children[i].position.z
                );

                const newY = lerp(
                  sceneData.dodStartPos[i].y,
                  sceneData.logoRandomArr[i].y,
                  ease(2 - deltaTime),
                  sceneData.logo_cubes.children[i].position.x
                );

                const newZ = lerp(
                  sceneData.dodStartPos[i].z,
                  sceneData.logoRandomArr[i].z,
                  ease(2 - deltaTime),
                  sceneData.logo_cubes.children[i].position.y
                );

                sceneData.logo_cubes.children[i].position.set(newX, newY, newZ);

                sceneData.logo_cubes.children[i].rotation.set(
                  sceneData.logoStartRot[i].x + Math.PI * 2 * deltaTime,
                  sceneData.logoStartRot[i].y + Math.PI * 2 * deltaTime,
                  sceneData.logoStartRot[i].z + Math.PI * 2 * deltaTime
                );

                sceneData.logo_cubes.children[i].scale.set(
                  sceneData.logoScaleArr[i].x *
                    (1 + deltaTime / 5 - Math.pow(deltaTime, 0.5)),
                  sceneData.logoScaleArr[i].y *
                    (1 + deltaTime / 5 - Math.pow(deltaTime, 0.5)),
                  sceneData.logoScaleArr[i].z *
                    (1 + deltaTime / 5 - Math.pow(deltaTime, 0.5))
                );

                const newDodX = lerp(
                  sceneData.dodStartPos[i].x,
                  sceneData.dodRandomArr[i].x,
                  ease(2 - deltaTime),
                  sceneData.dod_cubes.children[i].position.z
                );

                const newDodY = lerp(
                  sceneData.dodStartPos[i].y,
                  sceneData.dodRandomArr[i].y,
                  ease(2 - deltaTime),
                  sceneData.dod_cubes.children[i].position.x
                );

                const newDodZ = lerp(
                  sceneData.dodStartPos[i].z,
                  sceneData.dodRandomArr[i].z,
                  ease(2 - deltaTime),
                  sceneData.dod_cubes.children[i].position.y
                );

                sceneData.dod_cubes.children[i].position.set(
                  newDodX,
                  newDodY,
                  newDodZ
                );

                sceneData.dod_cubes.children[i].rotation.set(
                  sceneData.dodStartRot[i].x + Math.PI * 2 * deltaTime,
                  sceneData.dodStartRot[i].y + Math.PI * 2 * deltaTime,
                  sceneData.dodStartRot[i].z + Math.PI * 2 * deltaTime
                );

                sceneData.dod_cubes.children[i].scale.set(
                  sceneData.dodScaleArr[i].x * (deltaTime / 2),
                  sceneData.dodScaleArr[i].y * (deltaTime / 2),
                  sceneData.dodScaleArr[i].z * (deltaTime / 2)
                );

                if (!isScreen) {
                  const logoDirection = new THREE.Vector3();
                  logoDirection
                    .subVectors(
                      sceneData.rayOrigin.clone(),
                      sceneData.logo_cubes.children[i].position.clone()
                    )
                    .normalize();

                  const dodDirection = new THREE.Vector3();
                  dodDirection
                    .subVectors(
                      sceneData.rayOrigin.clone(),
                      sceneData.dod_cubes.children[i].position.clone()
                    )
                    .normalize();

                  sceneData.logo_cubes.children[i].position.set(
                    sceneData.logo_cubes.children[i].position.x +
                      (logoDirection.x / 100) * (100 * (2 - deltaTime)),
                    sceneData.logo_cubes.children[i].position.y +
                      (logoDirection.y / 100) * (100 * (2 - deltaTime)),
                    sceneData.logo_cubes.children[i].position.z +
                      (logoDirection.z / 100) * (100 * (2 - deltaTime))
                  );

                  sceneData.dod_cubes.children[i].position.set(
                    sceneData.dod_cubes.children[i].position.x +
                      (dodDirection.x / 100) * (100 * (2 - deltaTime)),
                    sceneData.dod_cubes.children[i].position.y +
                      (dodDirection.y / 100) * (100 * (2 - deltaTime)),
                    sceneData.dod_cubes.children[i].position.z +
                      (dodDirection.z / 100) * (100 * (2 - deltaTime))
                  );
                }
              }
            }

            sceneData.logo_solid.visible = false;
            sceneData.dod_solid.visible = false;
            sceneData.logo_cubes.visible = true;
            sceneData.dod_cubes.visible = true;

            if (deltaTime <= 0) {
              sceneData.logo_solid.visible = true;
              sceneData.dod_solid.visible = false;
              sceneData.logo_cubes.visible = false;
              sceneData.dod_cubes.visible = false;
            }

            if (deltaTime > 2) {
              sceneData.logo_solid.visible = false;
              sceneData.dod_solid.visible = true;
              sceneData.logo_cubes.visible = false;
              sceneData.dod_cubes.visible = false;
            }

            sceneData.t += sceneData.dt;

            scene.children[4].scale.set(
              11 * (1 - secondAnimStart / secondAnimDist / 2),
              11 * (1 - secondAnimStart / secondAnimDist / 2),
              11 * (1 - secondAnimStart / secondAnimDist / 2)
            );

            break;
          case "thirdAnim":
            sceneData.logo_solid.visible = false;
            sceneData.dod_solid.visible = true;
            sceneData.logo_cubes.visible = false;
            sceneData.dod_cubes.visible = false;

            const thirdAnimDist =
              onePercentScrolls * anim_checkpoints_conf.third_step_finish -
              onePercentScrolls * anim_checkpoints_conf.third_step_start;

            const thirdAnimStart =
              sceneData.currentScroll -
              onePercentScrolls * anim_checkpoints_conf.third_step_start;

            scene.children[4].scale.set(
              5.5 * (1 + thirdAnimStart / thirdAnimDist),
              5.5 * (1 + thirdAnimStart / thirdAnimDist),
              5.5 * (1 + thirdAnimStart / thirdAnimDist)
            );

            break;
          case "fourthAnim":
            // code here!
            break;
          default:
            break;
        }
      }

      renderer.render(scene, camera);
    });
  }, []);

  return (
      <div className="canvasContainer"></div>

  );
};

export default ThreeScene;
