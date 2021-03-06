import Landmark from "./Landmark.js"
import { useLandmark } from "./LandmarkDataProvider.js";

const contentTarget = document.querySelector(".landmarkList")

const LandmarkList = () => {
    
    const landmarkObjectsArray = useLandmark()

    for (const landmarkObject of landmarkObjectsArray) {
        contentTarget.innerHTML += Landmark(landmarkObject)
    }
}

export default LandmarkList