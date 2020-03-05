const Leader = (leaderObject) => {
    return `
            <section class="countryHTML">
            <img class="country-info-img" src="${leaderObject.img}">
            <section class="leaderList__leader">
            <h3>${leaderObject.name}</h3>
            </section>
            <p class="leaderList__info">${leaderObject.info}</p>
            </section>
    `
} 

export default Leader