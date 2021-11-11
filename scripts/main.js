//rendering the code to the DOM is the mains responsibility

import { BusinessList } from "./BusinessList.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = BusinessList()
}

renderAllHTML()

