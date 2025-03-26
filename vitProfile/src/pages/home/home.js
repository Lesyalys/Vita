 import { showPage2 } from './../home2/page2.js'
 import './home.css'

 export function home(element) {
  element.innerHTML = `
  <div>
    <img src="https://i.pinimg.com/736x/8a/39/5c/8a395c1f432ecb52c04c8a023ef4647b.jpg" class ="gameComp" alt="JavaScript logo" />

  </div>
`
  element.addEventListener('click', () => showPage2(element))
}
// export default home