$(document).ready(function(){$.getJSON("../data/data.json",function(e){$(".profile-name").text(e.name),$(".profile-surname").text(e.surname),$(".position-title").text(e.position),$(".about-main-text").text(e.about_me.text),$(".about-quote-text").text(e.about_me.quote);var n=e.about_me.contact;$(".contact-container").append(`<li>${n.phone}</li>
            <li>${n.website}</li>
            <li>${n.address}</li>`),e.references.forEach(e=>{$(".references-container").append(`<div>
              <h5>${e.name}</h5>
              <p>${e.address}</p>
              <p>Tel: ${e.phone}</p>
              <p>Email: ${e.email}</p>
            </div>`)}),e.job_experience.forEach(e=>{$(".job-container").append(`<div>
              <p>${e.company}</p>
              <p>${e.location}</p>
              <h5>${e.position}</h5>
              <p>${e.dates}</p>
              <p>${e.description}</p>
            </div>`)}),e.education.forEach(e=>{$(".education-container").append(`<div>
              <p>${e.institution}</p>
              <h5>${e.degree}</h5>
              <p>${e.dates}</p>
              <p>${e.description}</p>
            </div>`)}),e.skills.forEach(e=>{$(".skills-container").append(`<div class="d-flex justify-content-between">
              <span>${e.name}</span>
              <span>${e.score}</span>
            </div>`)}),e.hobbies.forEach(e=>{$(".hobbies-container").append(`<div class="d-flex justify-content-between">
              <span>${e.name}</span>
              <span>${e.score}</span>
            </div>`)}),e.languages.forEach(e=>{$(".languages-container").append(`<div class="d-flex justify-content-between">
              <span>${e.name}</span>
              <span>${e.score}</span>
            </div>`)})})});