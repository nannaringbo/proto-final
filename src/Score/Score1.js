import { createCamera } from "./systemComponents/camera.js";
import { createScene } from "./systemComponents/scene.js";
import { createControls } from "./systemComponents/controls.js";
import { createXRRenderer } from "./systemComponents/xrRenderer.js";
import { createARLights } from "./scoreComponents/arLights.js";
import { createLights } from "./scoreComponents/light.js";
import { createPicker } from "./scoreComponents/picker.js";
import { setWorldPosition } from "./scoreComponents/worldPosition.js";
import { createCube } from "./scoreComponents/cube.js";
import { createText } from "./scoreComponents/text.js";
import { createLines } from "./scoreComponents/lines.js";
import { createFloor } from "./scoreComponents/floor.js";
import { createPositionalAudio } from "./scoreComponents/positionalAudio.js";
import { createLightballWall } from "./scoreComponents/lightballWall.js";
import { createAbsorbParticles } from "./scoreComponents/absorbParticles.js";

import { Vector3, GridHelper } from "three";

let camera;
let renderer;
let scene;
let toAnimate = [];

class Score1 {
  constructor(container) {
    //NB: Measurements in Three.js are in meters!

    // Inser height of the user (or use an estimate)
    let userHeight = 1.65;

    // Set the ground position, to make sure that it matches with the users height
    let groundPosition = 0 - userHeight + 0.2;

    //Set the room dimensions - If the AR score will be used in other environments, you can scale the scene to match further down in the code
    let roomWidth = 20;
    let roomDepth = 20;

    // Required Three.js components and functionality
    camera = createCamera();
    scene = createScene();
    renderer = createXRRenderer(); //XR renderer to enable Augmented Reality functionalities
    container.append(renderer.domElement);
    const controls = createControls(camera, renderer.domElement);
    toAnimate.push(controls); //Add controls to the list of objects to animate
    renderer.setAnimationLoop(render); // set the animation loop

    //Set the starting point of the camera, to adjust the view according to the user (0 on y-axis is an estimated eye height of the user)
    const startingPoint = new Vector3(1, 0, 1);
    //camera.position.set(startingPoint.x, startingPoint.y, startingPoint.z);
    setWorldPosition(camera, startingPoint);

    //AR light - Adapts according to the light in the room (ONLY WORKS WHEN THE SCORE IS RUN IN AR - NOT IN THE BROWSER)
    const arLight = createARLights(scene, renderer);
    scene.add(arLight);
    // console.log("arLight movable:", arLight.userData.movable);

    //Use notmal light, if not interested in using AR Lights
    // const lights = createLights();
    // scene.add(lights);

    //Add 3D objects and the different score elements below:

    //Ground
    const ground = createFloor(
      roomWidth,
      roomDepth,
      "./assets/textures/JourneyScore_TIFF.tiff"
    );
    toAnimate.push(ground);
    scene.add(ground);
    //World position
    const groundWorldPosition = new Vector3(0, groundPosition, 0);
    setWorldPosition(ground, groundWorldPosition);

    //HeartBeat sound
    const heartBeat = new createPositionalAudio(
      camera,
      "./assets/sound/heartbeat.mp3"
    );
    heartBeat.rotateX(-80);
    toAnimate.push(heartBeat);
    scene.add(heartBeat);
    //World position
    const heartBeatWorldPosition = new Vector3(0, 4, 1);
    setWorldPosition(heartBeat, heartBeatWorldPosition);

    //Text - INTERNAL
    const word = "INTERNAL";
    const text = createText(word, 6, "#4f3300");
    text.rotateY(0.5);
    scene.add(text);
    //World position
    const textWorldPosition = new Vector3(-4.5, -1, -6.5);
    setWorldPosition(text, textWorldPosition);

    //Lines
    const lines = createLines(5, -5, 150, 7); //maximum xyz, minimum xyz, number of lines. USed for the Math.random() function inside createLines
    toAnimate.push(lines);
    lines.scale.set(0.3, 0.3, 0.3);
    scene.add(lines); // Add each line to the scene
    //World position
    const linesWorldPosition = new Vector3(0, groundPosition + 1.5, 5.5);
    setWorldPosition(lines, linesWorldPosition);

    //LightBall
    const lightBall = createLightballWall();
    scene.add(lightBall);
    toAnimate.push(lightBall);
    //World position
    const lightBallWorldPosition = new Vector3(-4, groundPosition + 1, 1);
    setWorldPosition(lightBall, lightBallWorldPosition);

    //Particles
    const absorbingParticles = createAbsorbParticles(500, 0.01);
    toAnimate.push(absorbingParticles);
    scene.add(absorbingParticles);
    //World position
    const absorbingParticlesWP = new Vector3(6, groundPosition, -1.3);
    setWorldPosition(absorbingParticles, absorbingParticlesWP);

    //Add functionality for user interactions below:

    //Event listener for resizing the window
    window.addEventListener("resize", onWindowResize);
  }
}
//Function to enable resize of the window
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
}
//Render function to enable the AnimationLoop. Define a "animate" function for each component that needs to be called inside the AnimationLoop. When the component is initialized in the Score, add each element/object with an animate function to the "toAnimate" array, to make sure it will be rendered continuously inside the animation loop below.
function render(time) {
  time *= 0.001;

  for (const object of toAnimate) {
    object.animate();
  }

  renderer.render(scene, camera);
}
export { Score1 };
