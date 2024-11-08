$(document).ready(function() {
    $.getJSON("../data/data.json", function(data) {
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
            `<li>${contact.phone}</li>
            <li>${contact.website}</li>
            <li>${contact.address}</li>`
        );   
        
        // References
        data.references.forEach(ref => {
          $('.references-container').append(
            `<div>
              <h5>${ref.name}</h5>
              <p>${ref.address}</p>
              <p>Tel: ${ref.phone}</p>
              <p>Email: ${ref.email}</p>
            </div>`
          );
        });   
        
        // Job Experience
        data.job_experience.forEach(job => {
          $('.job-container').append(
            `<div>
              <p>${job.company}</p>
              <p>${job.location}</p>
              <h5>${job.position}</h5>
              <p>${job.dates}</p>
              <p>${job.description}</p>
            </div>`
          );
        });   
        
        // Education
        data.education.forEach(edu => {
          $('.education-container').append(
            `<div>
              <p>${edu.institution}</p>
              <h5>${edu.degree}</h5>
              <p>${edu.dates}</p>
              <p>${edu.description}</p>
            </div>`
          );
        });
        
        // Skills
        data.skills.forEach(skill => {
          $('.skills-container').append(
            `<div class="d-flex justify-content-between">
              <span>${skill.name}</span>
              <span>${skill.score}</span>
            </div>`
          );
        });  
        
        // Hobbies
        data.hobbies.forEach(hobby => {
          $('.hobbies-container').append(
            `<div class="d-flex justify-content-between">
              <span>${hobby.name}</span>
              <span>${hobby.score}</span>
            </div>`
          );
        });    
        
        // Languages
        data.languages.forEach(language => {
          $('.languages-container').append(
            `<div class="d-flex justify-content-between">
              <span>${language.name}</span>
              <span>${language.score}</span>
            </div>`
          );
        });
      });
    });
  