import { cityInfo } from "./CityDataProvider.js"
import City from "./City.js"

const htmlTarget = document.querySelector(".cities__list")

const CityList = () => {
    const cityObjectArray = cityInfo()

    for (const cityObject of cityObjectArray) {
        const citiesHTML = City(cityObject)

        htmlTarget.innerHTML += citiesHTML
    }
}

export default CityList