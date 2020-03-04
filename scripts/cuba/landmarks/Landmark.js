const Landmark = landmarksDataArray => {
  return `
    <section class="countryInfo__landmarksList">
      <h3 class="landmarksTitle">${landmarksDataArray.name}</h3>
      <img class="imageStyling" src=${landmarksDataArray.image} alt=${landmarksDataArray.name}>
      <ul class="landmarksList__landmarks">
        <li>Info</li>
        <li>Info</li>
        <li>Info</li>
      </ul>
    </section>
  `
}

export default Landmark