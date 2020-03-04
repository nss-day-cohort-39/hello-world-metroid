const Landmark = (landmarkObject) => {
    return `
    <ul>
        <li class="landmark__name"><h2 class="landmark_background name__header">${landmarkObject.name}</h2></li>
        <li><h2><img class="landmark__image" src="${landmarkObject.image}" alt=""></h2></li>
    </ul>
    `
}

export default Landmark