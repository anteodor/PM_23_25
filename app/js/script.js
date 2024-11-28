document.addEventListener("DOMContentLoaded", function() {
  async function loadDataWithFetch() {
    try {
      const response = await fetch("http://localhost:8081/data/data.json");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();

    document.getElementById('name').textContent = data.name;
    document.getElementById('surname').textContent = data.surname;
    document.getElementById('position').textContent = data.position;

    document.getElementById('about-main-text').textContent = data.about_me.text;
    document.getElementById('about-quote-text').textContent = data.about_me.quote;

    const contact = data.about_me.contact;
    const contactContainer = document.getElementById('contact-container');
    
    contactContainer.innerHTML = '';

    const phoneItem = document.createElement('li');
    phoneItem.style.fontWeight = '800';
    phoneItem.innerHTML = `<i class="bi bi-telephone-fill"></i> ${contact.phone}`;
    contactContainer.appendChild(phoneItem);

    const websiteItem = document.createElement('li');
    websiteItem.innerHTML = `<i class="bi bi-globe"></i> <a href="http://${contact.website}" target="_blank">${contact.website}</a>`;
    contactContainer.appendChild(websiteItem);

    const addressItem = document.createElement('li');
    addressItem.innerHTML = `<i class="bi bi-geo-alt-fill"></i> ${contact.address}`;
    contactContainer.appendChild(addressItem);

      // References
    const referencesContainer = document.getElementById('references-container');
    referencesContainer.innerHTML = '';  // Очищаємо контейнер перед додаванням нових елементів

    data.references.forEach(ref => {
      const referenceDiv = document.createElement('div');
      referenceDiv.classList.add('container-item');
      
      const lineDiv = document.createElement('div');
      lineDiv.classList.add('line');
      referenceDiv.appendChild(lineDiv);
      
      const squareDiv = document.createElement('div');
      squareDiv.classList.add('square');
      referenceDiv.appendChild(squareDiv);
      
      const infoDiv = document.createElement('div');
      infoDiv.classList.add('container-information');
      infoDiv.style.lineHeight = '10px';

      const nameH4 = document.createElement('h4');
      nameH4.classList.add('degree-text');
      nameH4.textContent = ref.name;
      infoDiv.appendChild(nameH4);

      const addressP = document.createElement('p');
      addressP.classList.add('ref-contact-location');
      addressP.textContent = ref.address;
      infoDiv.appendChild(addressP);

      const phoneP = document.createElement('p');
      phoneP.classList.add('ref-contact-text');
      phoneP.textContent = `Tel: ${ref.phone}`;
      infoDiv.appendChild(phoneP);

      const emailP = document.createElement('p');
      emailP.classList.add('ref-contact-text');
      emailP.textContent = `Email: ${ref.email}`;
      infoDiv.appendChild(emailP);

      referenceDiv.appendChild(infoDiv);
      referencesContainer.appendChild(referenceDiv);
    });

      // Job Experience
      const jobContainer = document.getElementById('job-container');
      jobContainer.innerHTML = ''; // Очищаємо контейнер перед додаванням нових елементів
  
      data.job_experience.forEach(job => {
        const jobDiv = document.createElement('div');
        jobDiv.classList.add('container-item');
        
        const lineDiv = document.createElement('div');
        lineDiv.classList.add('line');
        jobDiv.appendChild(lineDiv);
        
        const squareDiv = document.createElement('div');
        squareDiv.classList.add('square');
        jobDiv.appendChild(squareDiv);
        
        const infoDiv = document.createElement('div');
        infoDiv.classList.add('container-information');
  
        const companyP = document.createElement('p');
        companyP.classList.add('place-text');
        companyP.textContent = job.company;
        infoDiv.appendChild(companyP);
  
        const locationP = document.createElement('p');
        locationP.classList.add('location-text');
        locationP.style.marginTop = '-20px';
        locationP.textContent = job.location;
        infoDiv.appendChild(locationP);
  
        const dateLocationDiv = document.createElement('div');
        dateLocationDiv.classList.add('date_location');
        dateLocationDiv.style.marginTop = '-28px';
  
        const positionH4 = document.createElement('h4');
        positionH4.classList.add('degree-text', 'job_position');
        positionH4.textContent = job.position;
        dateLocationDiv.appendChild(positionH4);
  
        const datesP = document.createElement('p');
        datesP.classList.add('dates');
        datesP.textContent = job.dates;
        dateLocationDiv.appendChild(datesP);
  
        infoDiv.appendChild(dateLocationDiv);
  
        const descriptionP = document.createElement('p');
        descriptionP.classList.add('description', 'experience_text');
        descriptionP.style.marginTop = '-25px';
        descriptionP.textContent = job.description;
        infoDiv.appendChild(descriptionP);
  
        jobDiv.appendChild(infoDiv);
        jobContainer.appendChild(jobDiv);
      });

      // Education
      const educationContainer = document.getElementById('education-container');
      educationContainer.innerHTML = ''; // Очищаємо контейнер перед додаванням нових елементів
  
      data.education.forEach(edu => {
        const educationDiv = document.createElement('div');
        educationDiv.classList.add('container-item');
        
        const lineDiv = document.createElement('div');
        lineDiv.classList.add('line');
        educationDiv.appendChild(lineDiv);
        
        const squareDiv = document.createElement('div');
        squareDiv.classList.add('square');
        educationDiv.appendChild(squareDiv);
        
        const infoDiv = document.createElement('div');
        infoDiv.classList.add('container-information');
  
        const institutionP = document.createElement('p');
        institutionP.classList.add('place-text');
        institutionP.textContent = edu.institution;
        infoDiv.appendChild(institutionP);
  
        const degreeH4 = document.createElement('h4');
        degreeH4.classList.add('degree-text');
        degreeH4.style.marginTop = '-18px';
        degreeH4.textContent = edu.degree;
        infoDiv.appendChild(degreeH4);
  
        const datesP = document.createElement('p');
        datesP.classList.add('dates');
        datesP.textContent = edu.dates;
        infoDiv.appendChild(datesP);
  
        const descriptionDiv = document.createElement('div');
        descriptionDiv.classList.add('container-main-information');
  
        const descriptionP = document.createElement('p');
        descriptionP.classList.add('description');
        descriptionP.textContent = edu.description;
        descriptionDiv.appendChild(descriptionP);
  
        infoDiv.appendChild(descriptionDiv);
        educationDiv.appendChild(infoDiv);
        educationContainer.appendChild(educationDiv);
      });

      // Skills
      const skillsContainer = document.getElementById('skills-container');
      skillsContainer.innerHTML = ''; // Очищаємо контейнер перед додаванням нових елементів
  
      data.skills.forEach(skill => {
        const skillDiv = document.createElement('div');
        skillDiv.classList.add('skill');
        
        const skillTextP = document.createElement('p');
        skillTextP.classList.add('skill-text');
        skillTextP.textContent = skill.name;
        skillDiv.appendChild(skillTextP);
        
        const skillBarDiv = document.createElement('div');
        skillBarDiv.classList.add('skill-bar');
        
        const skillScoreDiv = document.createElement('div');
        skillScoreDiv.classList.add('skill-score');
        skillScoreDiv.style.width = skill.score;
        skillBarDiv.appendChild(skillScoreDiv);
        
        skillDiv.appendChild(skillBarDiv);
        skillsContainer.appendChild(skillDiv);
      });

      // Hobbies
      const hobbiesContainer = document.getElementById('hobbies-container');
      hobbiesContainer.innerHTML = ''; // Очищаємо контейнер перед додаванням нових елементів
  
      data.hobbies.forEach(hobby => {
        const hobbyDiv = document.createElement('div');
        hobbyDiv.classList.add('skill');
        
        const hobbyTextP = document.createElement('p');
        hobbyTextP.classList.add('skill-text');
        hobbyTextP.textContent = hobby.name;
        hobbyDiv.appendChild(hobbyTextP);
        
        const skillBarDiv = document.createElement('div');
        skillBarDiv.classList.add('skill-bar');
        
        const skillScoreDiv = document.createElement('div');
        skillScoreDiv.classList.add('skill-score');
        skillScoreDiv.style.width = hobby.score;
        skillBarDiv.appendChild(skillScoreDiv);
        
        hobbyDiv.appendChild(skillBarDiv);
        hobbiesContainer.appendChild(hobbyDiv);
      });

      // Languages
      const languagesContainer = document.getElementById('languages-container');
      languagesContainer.innerHTML = ''; // Очищаємо контейнер перед додаванням нових елементів
  
      data.languages.forEach(language => {
        const score = parseInt(language.score); // Перетворюємо значення score на ціле число
  
        // Створюємо динамічно HTML елементи для кожної мови
        const languageDiv = document.createElement('div');
        languageDiv.classList.add('box');
        
        const percentDiv = document.createElement('div');
        percentDiv.classList.add('percent');
        
        const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        const circle1 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle1.setAttribute('cx', '60');
        circle1.setAttribute('cy', '60');
        circle1.setAttribute('r', '50');
        
        const circle2 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle2.setAttribute('cx', '60');
        circle2.setAttribute('cy', '60');
        circle2.setAttribute('r', '50');
        circle2.style.strokeDashoffset = `calc(314 - (314 * ${score}) / 100)`;
        
        svgElement.appendChild(circle1);
        svgElement.appendChild(circle2);
        percentDiv.appendChild(svgElement);
        
        const numDiv = document.createElement('div');
        numDiv.classList.add('num');
        
        const scoreHeading = document.createElement('h1');
        scoreHeading.innerHTML = `${score}<span>%</span>`;
        numDiv.appendChild(scoreHeading);
        
        const languageText = document.createElement('h2');
        languageText.classList.add('text');
        languageText.textContent = language.name;
        numDiv.appendChild(languageText);
        
        percentDiv.appendChild(numDiv);
        languageDiv.appendChild(percentDiv);
        
        languagesContainer.appendChild(languageDiv); // Додаємо новий елемент у контейнер
      });
      
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  // Call the function to load data
  loadDataWithFetch();

// Функція для перемикання видимості кожного контейнера
function toggleVisibility(button, container) {
  if (container.style.display === "none") {
    container.style.display = "block";
    button.innerHTML = '<i class="bi bi-caret-down-square-fill"></i>'; // Відображення заповненої іконки
  } else {
    container.style.display = "none";
    button.innerHTML = '<i class="bi bi-caret-up-square-fill"></i>'; // Відображення заповненої іконки
  }
}

// Функція для зміни іконок на заповнені при наведенні
function changeIconOnHover(button, isHovered) {
  const icon = button.children[0];
  if (isHovered) {
    if (icon.classList.contains('bi-caret-up-square')) {
      icon.classList.remove('bi-caret-up-square');
      icon.classList.add('bi-caret-up-square-fill');
    }
    if (icon.classList.contains('bi-caret-down-square')) {
      icon.classList.remove('bi-caret-down-square');
      icon.classList.add('bi-caret-down-square-fill');
    }
  } else {
    if (icon.classList.contains('bi-caret-up-square-fill')) {
      icon.classList.remove('bi-caret-up-square-fill');
      icon.classList.add('bi-caret-up-square');
    }
    if (icon.classList.contains('bi-caret-down-square-fill')) {
      icon.classList.remove('bi-caret-down-square-fill');
      icon.classList.add('bi-caret-down-square');
    }
  }
}

// Опис секцій
const sections = [
  { containerId: "about_me", titleId: "about-me-title", containerIndex: 0 },
  { containerId: "references-container", titleId: "references-title", containerIndex: 1 },
  { containerId: "job-container", titleId: "job-title", containerIndex: 2 },
  { containerId: "education-container", titleId: "education-title", containerIndex: 3 },
  { containerId: "skills-container", titleId: "skills-title", containerIndex: 4 },
  { containerId: "hobbies-container", titleId: "hobbies-title", containerIndex: 5 },
  { containerId: "languages-container", titleId: "languages-title", containerIndex: 6 }
];

sections.forEach(section => {
  const container = document.getElementById(section.containerId);
  const title = document.getElementById(section.titleId);
  if (container && title) {
    // Сховати контейнер за замовчуванням
    container.style.display = "none";

    // Створити кнопку для перемикання
    const toggleButton = document.createElement("button");
    toggleButton.classList.add("btn", "custom-button", "btn-sm", "ms-2");
    toggleButton.style.cssText = `
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
    `;
    title.style.cssText = `
      display: flex;
      justify-content: space-between;
      align-items: center;
    `;
    toggleButton.innerHTML = '<i class="bi bi-caret-up-square"></i>'; // Іконка за замовчуванням

    // Додати кнопку поруч із заголовком
    title.appendChild(toggleButton);

    // Додати подію для перемикання видимості
    toggleButton.addEventListener("click", function () {
      toggleVisibility(toggleButton, container);
    });

    // Додати події для зміни іконки при наведенні
    toggleButton.addEventListener("mouseover", function () {
      changeIconOnHover(toggleButton, true);
    });
    toggleButton.addEventListener("mouseout", function () {
      changeIconOnHover(toggleButton, false);
    });
  }
});
});
