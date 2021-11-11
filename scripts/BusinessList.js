// this module is responsible for creating the function that sorts through the data
import { Business } from "./Business.js"

const contentTarget = document.querySelector("#container")

// export const BusinessList = () => { 
//     const businessArray = getBusiness()
//     contentTarget.innerHTML = "<h1>Business</h1>" 

//     businessArray.forEach(
//         (businessObject) => {
//             contentTarget.innerHTML += Business(businessObject)
//         }
//     );
// }


export const BusinessList = (array) => {
    let innerHTML = ""
    array.forEach(
        (businessObj) => {
            innerHTML += Business(businessObj)
        }
    )
    return innerHTML
}
