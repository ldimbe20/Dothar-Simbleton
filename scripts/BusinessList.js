// this module is responsible for creating the function that sorts through the data
import { getBusiness } from "./database.js"
import { business } from "./Business.js"

const contentTarget = document.querySelector("business")

export const BusinessList = () => {
    const businessArray = getBusiness()
    contentTarget.innerHTML = "<h1>Business</h1>"

    businessArray.forEach(
        (businessObject) => {
            contentTarget.innerHTML += business(businessObject)
        }
    );
}


