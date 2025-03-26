import { home } from "./../home/home"

export function showPage2(element) {
    element.innerHTML  = `
    <div>    
    
    <div class ="gameComp"/>
  </div>
    `
    
    element.addEventListener('click', () => home(element))
    // setCounter(0)
  }


  
