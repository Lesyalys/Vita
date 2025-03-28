// import "../../style.css"

export function showPage2(element) {
    element.innerHTML  = `
    <div class = "gameCompUl">    
    
    <ul>
    <li class ="showPage2Li" id="li1"><h3>3D</h3></li>
    <li class ="showPage2Li" id="li2"><h3>DESIGN</h3></li>
    <li class ="showPage2Li" id="li3"><h3>POBLICARION</h3></li>
    <li class ="showPage2Li" id="li4"><h3>ART</h3></li>

    </ul>
  </div>
    `

  document.querySelector('#header h1').innerHTML = `
      <h2>My stack:
      </h2>
      <ul>
        <li class="underHearUl"><p id="underHeader">Fortend development:</p></li>
        <li class="underHearUl"><img src ="/public/nodejs.png"></li>
        <li class="underHearUl"><img src ="/public/nodejs.png"></li>
        <li class="underHearUl"><img src ="/public/nodejs.png"></li>
        <li class="underHearUl"><img src ="/public/nodejs.png"></li>
      </ul>

      <ul>
        <li class="underHearUl"><p id="underHeader">Design:</p></li>
        <li class="underHearUl"><img src ="/public/nodejs.png"></li>
        <li class="underHearUl"><img src ="/public/nodejs.png"></li>
        <li class="underHearUl"><img src ="/public/nodejs.png"></li>
        <li class="underHearUl"><img src ="/public/nodejs.png"></li>
      </ul>
      `
  }


  
