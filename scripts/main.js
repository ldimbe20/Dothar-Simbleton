//rendering the code to the DOM is the mains responsibility
import { getBusiness } from "./database.js"
import { BusinessList } from "./BusinessList.js"


const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    const businessArray = getBusiness()
    mainContainer.innerHTML = BusinessList(businessArray)
}

renderAllHTML()

