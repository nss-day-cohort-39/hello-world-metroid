const Leader = (leaderObject) => {
    return `
            <ul>
            <img class="country-info-img" src="${leaderObject.img}">
            <section class="leaderList__leader">
            <li>${leaderObject.leader}</li>
            </section>
            <section class="leaderList__info">${leaderObject.info}</section>
            </ul>
    `
} 

export default Leader