import { landmarkData } from "./landmarkDataProvider.js";
import { landmarkHTML } from "./landmark.js";

const htmlTarget = document.querySelector('.landmarkHTML');

export const landmarkList = () => {
  const landmarkArray = landmarkData();

  for (const landmarkObject of landmarkArray) {
    const landmarkPrinter = landmarkHTML(landmarkObject);
    
    htmlTarget.innerHTML += landmarkPrinter;
  }
};