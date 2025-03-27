 import './home.css'

export function home(element) {
  element.innerHTML = `
  <div>
    <img src="https://i.pinimg.com/736x/8a/39/5c/8a395c1f432ecb52c04c8a023ef4647b.jpg" class ="gameComp" alt="JavaScript logo" />

  </div>
`
document.querySelector('#header h1').innerHTML = `
      <h2>My contact:
      <p id="underHeader">mail:</p>
      <p id="underHeader">tg:</p>
      </h2>
      `
  
}
