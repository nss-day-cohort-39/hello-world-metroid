import useLeaders from "./LeadersDataProvider.js"
import Leader from "./Leader.js"

const RenderLeadersList = () => {
  const leadersData = useLeaders()
  const contentElement = document.querySelector('.countryInfo__leaders')

  leadersData.forEach(leader => contentElement.innerHTML += Leader(leader))
}

export default RenderLeadersList