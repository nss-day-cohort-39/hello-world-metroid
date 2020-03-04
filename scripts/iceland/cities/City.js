const City = (cityObject) => {
    return `
    <ul>
        <li class="city__name "><h2 class="city_background name__header">${cityObject.name}</h2></li>
        <li><img class="city__image" src="${cityObject.image}" alt=""></li>
    </ul>
    `
}

export default City