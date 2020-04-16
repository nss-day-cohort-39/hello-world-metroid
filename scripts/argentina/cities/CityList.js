import City from "./City.js"
import { useCity } from "./CityDataProvider.js";

const contentTarget = document.querySelector(".cityList")

const CityList = () => {
    
    const cityObjectsArray = useCity()

    for (const cityObject of cityObjectsArray) {
        contentTarget.innerHTML += City(cityObject)
    }
}

export default CityList