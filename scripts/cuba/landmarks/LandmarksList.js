import useLandmarks from "./LandmarksDataProvider.js"
import Landmark from "./Landmark.js";

const RenderLandmarksList = () => {
  const landmarksData = useLandmarks()
  const contentElement = document.querySelector('.countryInfo__landmarks')

  landmarksData.forEach(landmark => {
    contentElement.innerHTML += Landmark(landmark)
    return contentElement 
    
  });
}

export default RenderLandmarksList