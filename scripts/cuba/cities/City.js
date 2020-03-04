const RenderCity = citiesDataArray => {
  return `
  <section class="countryInfo__citiesList">
          <h3 class="citiesTitle">${citiesDataArray.name}</h3>
          <img class="imageStyling" src=${citiesDataArray.image} alt=${citiesDataArray.name}/>
          <button class="details-btn" id="button--${citiesDataArray.id}">Details</button>
          <dialog class="dialog--city" id="details--${citiesDataArray.id}">
            <ul>
              <li>${citiesDataArray.description}</li>
            </ul>
            <button class="button--close">Close Dialog</button>
          </dialog>
          </section>
  `
}

export default RenderCity