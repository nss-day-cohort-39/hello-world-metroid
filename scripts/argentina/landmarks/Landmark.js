const Landmark = (landmarkObject) => {
    return `
            <section class="countryHTML">
                <img class="country-info-img" src="${landmarkObject.img}">
                <section class="landmarkList__landmark">
                    <h3>${landmarkObject.name}</h3>
                </section>
                <p class="landmarkList__info">${landmarkObject.info}</p>
            </section>
    `
} 

export default Landmark