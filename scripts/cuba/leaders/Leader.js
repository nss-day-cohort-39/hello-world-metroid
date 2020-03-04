const Leader = leadersDataArray => {
  return `
  <section class="countryInfo__headsList">
          <h3 class="headsTitle">${leadersDataArray.name}</h3>
          <ul class="headsList__heads">
            <img class="imageStyling" src=${leadersDataArray.image} alt="photo of ${leadersDataArray.name}">
            <li>${leadersDataArray.name}</li>
          </ul>
        </section> 
  `
}

export default Leader