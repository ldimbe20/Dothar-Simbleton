
import { getBusiness } from "./database.js"


export const Business = ( businessObject ) => {
 const businessObject = getBusiness()
  return `
      <section class="business">
          <h2 class="business__type">${businessObject.companyName}</h2>
          <div class="business__price">
              Price: ${businessObject.companyName}
          </div>
      </section>
  `
}


