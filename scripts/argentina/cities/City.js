const City = (cityObject) => {
    return `
            <section class="countryHTML">
            <img class="country-info-img" src="${cityObject.img}">
            <section class="cityList__city">
            <h3>${cityObject.name}</h3>
            </section>
            <p class="cityList__info">${cityObject.info}</p>
            </section>
    `
} 

export default City