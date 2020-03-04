const Landmark = (landmarkObject) => {
    return `
    <figure>
        <img src="${landmarkObject.image}" alt="">
        <figcaption>${landmarkObject.name}</figcaption>
    </figure>
    `
}

export default Landmark