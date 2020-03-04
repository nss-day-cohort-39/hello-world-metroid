const Landmark = (landmarkObject) => {
    return `
    <ul class="landmark__list">
        <li class="landmark__name"><h2 class="landmark__background name__header">${landmarkObject.name}</h2></li>
        <li class="imageList__container"><img class="landmark__image" src="${landmarkObject.image}" alt=""></li>
    </ul>
    `
}

export default Landmark