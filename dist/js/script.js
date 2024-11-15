document.addEventListener("DOMContentLoaded",function(){function t(e,t){e=e.querySelector("i");t?(e.classList.contains("bi-caret-up-square")&&(e.classList.remove("bi-caret-up-square"),e.classList.add("bi-caret-up-square-fill")),e.classList.contains("bi-caret-down-square")&&(e.classList.remove("bi-caret-down-square"),e.classList.add("bi-caret-down-square-fill"))):(e.classList.contains("bi-caret-up-square-fill")&&(e.classList.remove("bi-caret-up-square-fill"),e.classList.add("bi-caret-up-square")),e.classList.contains("bi-caret-down-square-fill")&&(e.classList.remove("bi-caret-down-square-fill"),e.classList.add("bi-caret-down-square")))}(async()=>{try{var e=await fetch("data/data.json");if(!e.ok)throw new Error("HTTP error! Status: "+e.status);var o=await e.json(),r=(document.querySelector(".profile-name").textContent=o.name,document.querySelector(".profile-surname").textContent=o.surname,document.querySelector(".position-title").textContent=o.position,document.querySelector(".about-main-text").textContent=o.about_me.text,document.querySelector(".about-quote-text").textContent=o.about_me.quote,o.about_me.contact);document.querySelector(".contact-container").innerHTML=`
        <li style="font-weight: 800"><i class="bi bi-telephone-fill"></i>${r.phone}</li>
        <li><i class="bi bi-globe"></i>${r.website}</li>
        <li><i class="bi bi-geo-alt-fill"></i>${r.address}</li>
      `;let t=document.querySelector(".references-container"),i=(o.references.forEach(e=>{t.innerHTML+=`
          <div class="container-item">
            <div class="line"></div>
            <div class="square"></div>
            <div class="container-information" style="line-height: 10px;">
              <h4 class="degree-text">${e.name}</h4>
              <p class="place-text"><span style="color: #dc0a0a; font-weight: 800;">${e.address}</span></p>
              <p class="description">Tel: ${e.phone}</p>
              <p class="description">Email: ${e.email}</p>
            </div> 
          </div>
        `}),document.querySelector(".job-container")),n=(o.job_experience.forEach(e=>{i.innerHTML+=`
          <div class="container-item">
            <div class="line"></div>
            <div class="square"></div>
            <div class="container-information">
              <p class="place-text">${e.company}</p>
              <p class="location-text" style="margin-top:-18px">${e.location}</p>
              <div class="date_location" style="margin-top:-22px">
                <h4 class="degree-text job_position">${e.position}</h4>
                <p class="dates">${e.dates}</p>
              </div>
              <p class="description experience_text">${e.description}</p>
            </div>
          </div>
        `}),document.querySelector(".education-container")),s=(o.education.forEach(e=>{n.innerHTML+=`
          <div class="container-item">
            <div class="line"></div>
            <div class="square"></div>
            <div class="container-information">
              <p class="place-text">${e.institution}</p>
              <h4 class="degree-text" style="margin-top: -16px">${e.degree}</h4>
              <p class="dates">${e.dates}</p>
              <div class="container-main-information">
                <p class="description">${e.description}</p>
              </div>
            </div>
          </div>
        `}),document.querySelector(".skills-container")),a=(o.skills.forEach(e=>{s.innerHTML+=`
          <div class="skill">
            <p class="skill-text">${e.name}</p>
            <div class="skill-bar">
              <div class="skill-score" style="width: ${e.score}"></div>
            </div>
          </div>
        `}),document.querySelector(".hobbies-container")),c=(o.hobbies.forEach(e=>{a.innerHTML+=`
          <div class="skill">
            <p class="skill-text">${e.name}</p>
            <div class="skill-bar">
              <div class="skill-score" style="width: ${e.score}"></div>
            </div>
          </div>
        `}),document.querySelector(".languages-container"));o.languages.forEach(e=>{var t=parseInt(e.score),t=`
          <div class="box">
            <div class="percent">
              <svg>
                <circle cx="60" cy="60" r="50"></circle>
                <circle cx="60" cy="60" r="50" style="stroke-dashoffset: calc(314 - (314 * ${t}) / 100);"></circle>
              </svg>
              <div class="num">
                <h1>${t}<span>%</span></h1>
                <h2 class="text">${e.name}</h2>
              </div>
            </div>
          </div>
        `;c.innerHTML+=t})}catch(e){console.error("Error fetching data:",e)}})();[{containerSelector:".about_me",titleSelector:".title",containerIndex:0},{containerSelector:".references-container",titleSelector:".title",containerIndex:1},{containerSelector:".job-container",titleSelector:".title",containerIndex:2},{containerSelector:".education-container",titleSelector:".title",containerIndex:3},{containerSelector:".skills-container",titleSelector:".title",containerIndex:4},{containerSelector:".hobbies-container",titleSelector:".title",containerIndex:5},{containerSelector:".languages-container",titleSelector:".title",containerIndex:6}].forEach(e=>{let n=document.querySelectorAll(e.containerSelector)[0];e=document.querySelectorAll(e.titleSelector)[e.containerIndex];if(n&&e){n.style.display="none";let i=document.createElement("button");i.classList.add("btn","custom-button","btn-sm","ms-2"),i.style.cssText=`
        background-color: #fffff;
        color: white;
        border: none;
        border-radius: 4px;
        padding: 2px 6px;
        cursor: pointer;
        font-size: 20px;
        transition: background-color 0.3s;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3); 
        margin-bottom: 4px;
      `,e.style.cssText=`
        display: flex;
        justify-content: space-between;
        align-items: center;
      `,i.innerHTML='<i class="bi bi-caret-up-square"></i>',e.appendChild(i),i.addEventListener("click",function(){var e,t;e=i,"none"===(t=n).style.display?(t.style.display="block",e.innerHTML='<i class="bi bi-caret-down-square-fill"></i>'):(t.style.display="none",e.innerHTML='<i class="bi bi-caret-up-square-fill"></i>')}),i.addEventListener("mouseover",function(){t(i,!0)}),i.addEventListener("mouseout",function(){t(i,!1)})}})});