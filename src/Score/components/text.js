import {
  Color,
  MeshBasicMaterial,
  DoubleSide,
  ShapeGeometry,
  Mesh,
  Group,
  BoxGeometry,
  Vector3,
} from "three";

import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader.js";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { setWorldPosition } from "./worldPosition";

function createText(message, fontSize, textcolor) {
  const geometry = new BoxGeometry(1.8, fontSize / 2, 0.5);
  const material = new MeshBasicMaterial({
    color: 0xdaf5ef,
    transparent: true,
    opacity: 0.1,
    side: DoubleSide,
  });
  const textBox = new Mesh(geometry, material);

  const loader = new FontLoader();
  loader.load(
    "https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",
    function (font) {
      const color = new Color(textcolor);

      const matLite = new MeshBasicMaterial({
        color: color,
        transparent: true,
        opacity: 0.5,
        side: DoubleSide,
      });

      const shapes = font.generateShapes(message, fontSize);

      const geometry = new ShapeGeometry(shapes);

      geometry.scale(0.1, 0.1, 0.1);

      const text = new Mesh(geometry, matLite);

      // Compute the bounding box of the text geometry
      text.geometry.computeBoundingBox();
      const boundingBox = text.geometry.boundingBox;

      // Center the text mesh based on its bounding box
      text.position.x = -(boundingBox.max.x - boundingBox.min.x) / 2;
      text.position.y = -(boundingBox.max.y - boundingBox.min.y) / 2;

      textBox.add(text);
    }
  );

  textBox.userData.movable = true;

  textBox.animate = () => {
    // // Update the position incrementally
    // textObject.position.y += 0.02 * directionY;
    // textObject.position.x += 0.03 * directionX;
    // // Check for boundaries and reverse direction if needed
    // if (
    //   textObject.position.y >= maxPosY ||
    //   textObject.position.y <= initialYPos
    // ) {
    //   directionY *= -1; // Reverse direction
    // }
    // if (
    //   textObject.position.x >= maxPosX ||
    //   textObject.position.x <= initialXPos
    // ) {
    //   directionX *= -1; // Reverse direction
    // }
    // textObject.rotation.z += 0.01;
    // textObject.rotation.x += 0.01;
    // textObject.rotation.y += 0.01;
  };

  return textBox;
}
export { createText };
