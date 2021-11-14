



export const Business = ( businessArray ) => { //exporting a function that will takes an argument 
//for above I am trying to pass an array into the parameter 
  return `
      <section class="business">
          <h2 class="business__type">${businessArray.companyName}  </h2>  
          <div class="business_address">${businessArray.addressFullStreet}  </div>  
          <div class="business__State_Zip">${businessArray.addressCity}, ${businessArray.addressStateCode}  </div> 
          <div class="business__price">
              
          </div>
      </section>
  `
}


