const Leader = (leaderObject) => {
    return `
    <ul>
        <li class="leader_background">Leader</li>
        <li class="leader__name">${leaderObject.position} ${leaderObject.name}</li>
        <li><img class="leader__image src="${leaderObject.image}" alt=""></li>
    </ul>
    `
}

export default Leader