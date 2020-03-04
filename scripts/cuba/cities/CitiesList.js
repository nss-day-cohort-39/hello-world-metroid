import useCubaCities from "./CitiesDataProvider.js"
import RenderCity from "./City.js"

const RenderListOfCities = () => {
  const citiesDataArray = useCubaCities()
  let contentElement = document.querySelector('.countryInfo__cities')
  citiesDataArray.forEach(city => contentElement.innerHTML += RenderCity(city))
}

export default RenderListOfCities