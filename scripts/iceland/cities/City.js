const City = (cityObject) => {
    return `
    <ul>
        <li><img src="${cityObject.image}" alt=""></li>
        <li>${cityObject.name}</li>
    </ul>
    `
}

export default City