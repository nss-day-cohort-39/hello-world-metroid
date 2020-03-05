const City = (cityObject) => {
    return `
    <ul class="city__list">
        <li class="city__name "><h2 class="city__background name__header">${cityObject.name}</h2></li>
        <li class="imageList__container"><img class="city__image" src="${cityObject.image}" alt=""></li>
    </ul>
    `
}

export default City