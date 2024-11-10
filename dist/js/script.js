$(document).ready(function(){$.getJSON("data/data.json",function(i){$(".profile-name").text(i.name),$(".profile-surname").text(i.surname),$(".position-title").text(i.position),$(".about-main-text").text(i.about_me.text),$(".about-quote-text").text(i.about_me.quote);var e=i.about_me.contact;$(".contact-container").append(`<li style="font-weight: 800"><i class="bi bi-telephone-fill"></i>${e.phone}</li>
            <li><i class="bi bi-globe"></i>${e.website}</li>
            <li><i class="bi bi-geo-alt-fill"></i>${e.address}</li>`),i.references.forEach(i=>{$(".references-container").append(`<div class="container-item">
              <div class="line"></div>
              <div class="square"></div>
              <div class="container-information" style="line-height: 10px;">
                <h4 class="degree-text">${i.name}</h4>
                <p class="place-text"><span style="color: #dc0a0a; font-weight: 800;">${i.address}</span></p>
                <p class="description">Tel: ${i.phone}</p>
                <p class="description">Email: ${i.email}</p>
              </div> 
            </div>`)}),i.job_experience.forEach(i=>{$(".job-container").append(`<div class="container-item">
               <div class="line"></div>
               <div class="square"></div>
                <div class="container-information">
                 <p class="place-text">${i.company}</p>
                 <p class="location-text" style="margin-top:-18px">${i.location}</p>
                  <div class="date_location" style="margin-top:-22px">
                   <h4 class="degree-text">${i.position}</h4>
                   <p class="dates">${i.dates}</p>
                  </div> 
                 <p class="description" style="margin-top:-15px">${i.description}</p>
                </div>
            </div>`)}),i.education.forEach(i=>{$(".education-container").append(`<div class="container-item">
               <div class="line"></div>
               <div class="square"></div>
                <div class="container-information">
                  <p class="place-text">${i.institution}</p>
                  <h4 class="degree-text" style="margin-top: -16px">${i.degree}</h4>
                  <p class="dates">${i.dates}</p>
                  <div class="container-main-information">
                  <p class="description">${i.description}</p>
                </div>
            </div>`)}),i.skills.forEach(i=>{$(".skills-container").append(`<div class="skill">
              <p class="skill-text">${i.name}</p>
              <div class="skill-bar">
                <div class="skill-score" style="width: ${i.score}"></div>
              </div>
            </div>`)}),i.hobbies.forEach(i=>{$(".hobbies-container").append(`<div class="skill">
              <p class="skill-text">${i.name}</p>
              <div class="skill-bar">
                <div class="skill-score" style="width: ${i.score}"></div>
              </div>
            </div>`)}),i.languages.forEach(i=>{var e=parseInt(i.score),e=`
            <div class="box">
              <div class="percent">
                <svg>
                  <circle cx="40" cy="40" r="40"></circle>
                  <circle cx="40" cy="40" r="40" style="stroke-dashoffset: calc(251 - (251 * ${e}) / 100);"></circle>
                </svg>
                <div class="num">
                  <h1>${e}<span>%</span></h1>
                  <h2 class="text">${i.name}</h2>
                </div>
              </div>
            </div>
          `;$(".languages-container").append(e)})})});