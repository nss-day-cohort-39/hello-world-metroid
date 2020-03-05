import { leaderData } from "./leaderDataProvider.js";
import { leaderHTML } from "./leader.js";

const htmlTarget = document.querySelector('.leaderHTML');

export const leaderList = () => {
  const leaderArray = leaderData();

  for (const leaderObject of leaderArray) {
    const leaderPrinter = leaderHTML(leaderObject);
    
    htmlTarget.innerHTML += leaderPrinter;
  }
};