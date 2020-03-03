const RenderCity = citiesDataArray => {
  return `
  <section class="countryInfo__citiesList">
          <h3 class="citiesTitle">${citiesDataArray.name}</h3>
          <img class="imageStyling" src=${citiesDataArray.image} alt=${citiesDataArray.name}
          <ul class="citiesList__cities">
            <li>Info</li>
            <li>Info</li>
            <li>Info</li>
          </ul>
          </section>
  `
}

export default RenderCity