// import "../../style.css"

export function showPage2(element) {
    element.innerHTML  = `
    <div class = "gameCompUl">    
    
    <ul>
    <a href="https://www.artstation.com/lesssya4" target ="_blank"><li class ="showPage2Li" id="li1"><h3>3D</h3></li></a>
    <a href="https://www.artstation.com/lesssya4" target ="_blank"><li class ="showPage2Li" id="li2"><h3>DESIGN</h3></li></a>
    <li class ="showPage2Li" id="li3"><h3>POBLICARION</h3></li>
    <a href="https://www.artstation.com/lesssya4" target ="_blank"><li class ="showPage2Li" id="li4"><h3>ART</h3></li></a>

    </ul>
  </div>
    `

  document.querySelector('#header h1').innerHTML = `
      <h2>My stack:
      </h2>
      <ul>
        <li class="underHearUl"><p id="underHeader">Fortend development:</p></li>
        <li class="underHearUl" id="iconHtml"></li>
        <li class="underHearUl" id="iconCss"></li>
        <li class="underHearUl" id="iconJs"></li>
        <li class="underHearUl" id="iconFlutter"></li>
      </ul>

      <ul>
        <li class="underHearUl"><p id="underHeader">Design:</p></li>
        <li class="underHearUl" id="iconFigma"></li>
        <li class="underHearUl" id="iconTilda"></li>
        <li class="underHearUl" id="iconPs"></li>
      </ul>

      <ul>
        <li class="underHearUl"><p id="underHeader">See more:</p></li>
        <li class="underHearUl" id="iconArtstation"></li>
      </ul>
      `
  }
  


  
