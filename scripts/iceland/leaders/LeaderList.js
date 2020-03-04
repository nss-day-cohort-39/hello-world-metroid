import { presidentInfo } from "./LeaderDataProvider.js"
import Leader from "./Leader.js"

const htmlTarget = document.querySelector(".heads__list")

const LeaderList = () => {
    const leaderObjectArray = presidentInfo()

    for (const leaderObject of leaderObjectArray) {
        const leaderHTML = Leader(leaderObject)

        htmlTarget.innerHTML += leaderHTML
    }
}

export default LeaderList