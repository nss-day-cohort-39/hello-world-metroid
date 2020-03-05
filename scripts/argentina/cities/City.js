const City = (cityObject) => {
    return `
            <section class="countryHTML">
            <img class="country-info-img" src="${cityObject.img}">
            <section class="cityList__city">
            <h3>${cityObject.name}</h3>
            </section>
            <p><section class="cityList__info">${cityObject.info}</section></p>
            </section>
    `
} 

export default City