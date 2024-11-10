$(document).ready(function() {
    $.getJSON("data/data.json", function(data) {
        // Load Name and Position
        $('.profile-name').text(data.name);
        $('.profile-surname').text(data.surname);
        $('.position-title').text(data.position);
    
        // Load About Me
        $('.about-main-text').text(data.about_me.text);
        $('.about-quote-text').text(data.about_me.quote);
 
        // Contact Information
         const contact = data.about_me.contact;
         $('.contact-container').append(
            `<li style="font-weight: 800"><i class="bi bi-telephone-fill"></i>${contact.phone}</li>
            <li><i class="bi bi-globe"></i>${contact.website}</li>
            <li><i class="bi bi-geo-alt-fill"></i>${contact.address}</li>`
        );   

        // References
        data.references.forEach(ref => {
          $('.references-container').append(
            `<div class="container-item">
              <div class="line"></div>
              <div class="square"></div>
              <div class="container-information" style="line-height: 10px;">
                <h4 class="degree-text">${ref.name}</h4>
                <p class="place-text"><span style="color: #dc0a0a; font-weight: 800;">${ref.address}</span></p>
                <p class="description">Tel: ${ref.phone}</p>
                <p class="description">Email: ${ref.email}</p>
              </div> 
            </div>`
          );
        });   

        // Job Experience
        data.job_experience.forEach(job => {
          $('.job-container').append(
            `<div class="container-item">
               <div class="line"></div>
               <div class="square"></div>
                <div class="container-information">
                 <p class="place-text">${job.company}</p>
                 <p class="location-text" style="margin-top:-18px">${job.location}</p>
                  <div class="date_location" style="margin-top:-22px">
                   <h4 class="degree-text">${job.position}</h4>
                   <p class="dates">${job.dates}</p>
                  </div> 
                 <p class="description" style="margin-top:-15px">${job.description}</p>
                </div>
            </div>`
          );
        });   
        
        // Education
        data.education.forEach(edu => {
          $('.education-container').append(
            `<div class="container-item">
               <div class="line"></div>
               <div class="square"></div>
                <div class="container-information">
                  <p class="place-text">${edu.institution}</p>
                  <h4 class="degree-text" style="margin-top: -16px">${edu.degree}</h4>
                  <p class="dates">${edu.dates}</p>
                  <div class="container-main-information">
                  <p class="description">${edu.description}</p>
                </div>
            </div>`
          );
        });
        
        // Skills
        data.skills.forEach(skill => {
          $('.skills-container').append(
            `<div class="skill">
              <p class="skill-text">${skill.name}</p>
              <div class="skill-bar">
                <div class="skill-score" style="width: ${skill.score}"></div>
              </div>
            </div>`
          );
        });  
        
        // Hobbies
        data.hobbies.forEach(hobby => {
          $('.hobbies-container').append(
            `<div class="skill">
              <p class="skill-text">${hobby.name}</p>
              <div class="skill-bar">
                <div class="skill-score" style="width: ${hobby.score}"></div>
              </div>
            </div>`
          );
        });   

        // Languages
        data.languages.forEach(language => {
          const score = parseInt(language.score);
          const progressBarHTML = `
            <div class="box">
              <div class="percent">
                <svg>
                  <circle cx="40" cy="40" r="40"></circle>
                  <circle cx="40" cy="40" r="40" style="stroke-dashoffset: calc(251 - (251 * ${score}) / 100);"></circle>
                </svg>
                <div class="num">
                  <h1>${score}<span>%</span></h1>
                  <h2 class="text">${language.name}</h2>
                </div>
              </div>
            </div>
          `;
          $('.languages-container').append(progressBarHTML);
        });
      });
    });
  