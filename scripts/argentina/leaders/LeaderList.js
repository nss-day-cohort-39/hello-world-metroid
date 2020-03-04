import Leader from "./Leader.js"
import { useLeader } from "./LeaderDataProvider.js";


const LeaderList = () => {
    const contentTarget = document.querySelector(".leaderList")
    const leaderObjectsArray = useLeader()

    for (const leaderObject of leaderObjectsArray) {
        contentTarget.innerHTML += Leader(leaderObject)
    }
}

export default LeaderList