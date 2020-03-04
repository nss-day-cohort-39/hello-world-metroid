const Leader = (leaderObject) => {
    return `
    <ul>
        <li><img src="${leaderObject.image}" alt=""></li>
        <li>${leaderObject.position} ${leaderObject.name}</li>
    </ul>
    `
}

export default Leader