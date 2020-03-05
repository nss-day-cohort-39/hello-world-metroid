const Leader = (leaderObject) => {
    return `
    <ul class="leader__list">
        <li class="leader__name">${leaderObject.position} ${leaderObject.name}</li>
        <li class="imageList__container"><img class="leader__image" src="${leaderObject.image}" alt=""></li>
    </ul>
    `
}

export default Leader