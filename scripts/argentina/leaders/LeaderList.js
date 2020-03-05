import Leader from "./Leader.js"
import { useLeader } from "./LeaderDataProvider.js";

const contentTarget = document.querySelector(".leaderList")

const LeaderList = () => {
    
    const leaderObjectsArray = useLeader()

    for (const leaderObject of leaderObjectsArray) {
        contentTarget.innerHTML += Leader(leaderObject)
    }
}

export default LeaderList