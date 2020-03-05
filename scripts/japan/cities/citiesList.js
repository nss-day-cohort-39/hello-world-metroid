import { cityData } from "./cityDataProvider.js";
import { cityHTML } from "./city.js";

const htmlTarget = document.querySelector('.cityHTML');

export const cityList = () => {
  const cityArray = cityData();

  for (const cityObject of cityArray) {
    const cityPrinter = cityHTML(cityObject);
    
    htmlTarget.innerHTML += cityPrinter;
  }
};