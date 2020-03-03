const City = (cityObject) => {
    return `
    <figure>
        <img src="${cityObject.image}" alt="">
        <figcaption>${cityObject.name}</figcaption>
    </figure>
    `
}

export default City