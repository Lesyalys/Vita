import { showPage2 } from './home2/page2'
import { home } from "./home/home"


export function showHeader(element) {
    element.innerHTML  = `
    <img id="iconMe" src ="https://i.pinimg.com/736x/4c/a1/07/4ca1075720f674d2e101118c3e38d37f.jpg">
      <h1>I'm Lesya, a beginner designer and frontend developer
        <p id="underHeader">Glad to see you!</p>
      </h1>
      <ul>
        <li><button class="btn" id="workBtn"><p>WORK</p></button></li>
        <li><button class="btn" id="contactBtn"><p>CONTACT</p></button></li>
        <!-- <li><button><p>WORK</p></button></li> -->
      </ul>
    `
    document.querySelector('#MyAPPP').innerHTML = `
    <div>
    <img src="https://i.pinimg.com/736x/1d/7f/7a/1d7f7a40008634b26788b76525f897f8.jpg" class ="gameComp" alt="JavaScript logo" />

  </div>
    `

    element.querySelector('#workBtn').addEventListener('click', () => showPage2(document.querySelector('#MyAPPP')))
    element.querySelector('#contactBtn').addEventListener('click', () => home(document.querySelector('#MyAPPP')))
    element.querySelector('#iconMe').addEventListener('click',()=>showHeader(document.querySelector('#header')))
  }


  
