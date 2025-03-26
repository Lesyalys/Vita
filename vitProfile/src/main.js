import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'
// import home from './pages/home.js'
// import { showPage1 } from './page1.js'
import { showPage2 } from './pages/home2/page2'
import { home } from './pages/home/home.js'

// document.querySelector('#app').innerHTML = `
//   <div>    
//     <h1>Dream</h1>    
//   </div>
// `

// document.querySelector('#btn1').addEventListener('click', () => showPage2(document.querySelector('#MyAPPP')))
// document.querySelector('#btn2').addEventListener('click', () => home(document.querySelector('#MyAPPP')))

showPage2(document.querySelector('#MyAPPP'))

// setupCounter(document.querySelector('#counter'))
