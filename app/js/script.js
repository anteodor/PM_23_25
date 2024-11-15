document.addEventListener("DOMContentLoaded", function() {
  async function loadDataWithFetch() {
    try {
      const response = await fetch("data/data.json");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();

      // Load Name and Position
      document.querySelector('.profile-name').textContent = data.name;
      document.querySelector('.profile-surname').textContent = data.surname;
      document.querySelector('.position-title').textContent = data.position;

      // Load About Me
      document.querySelector('.about-main-text').textContent = data.about_me.text;
      document.querySelector('.about-quote-text').textContent = data.about_me.quote;

      // Contact Information
      const contact = data.about_me.contact;
      const contactContainer = document.querySelector('.contact-container');
      contactContainer.innerHTML = `
        <li style="font-weight: 800"><i class="bi bi-telephone-fill"></i>${contact.phone}</li>
        <li><i class="bi bi-globe"></i>${contact.website}</li>
        <li><i class="bi bi-geo-alt-fill"></i>${contact.address}</li>
      `;

      // References
      const referencesContainer = document.querySelector('.references-container');
      data.references.forEach(ref => {
        referencesContainer.innerHTML += `
          <div class="container-item">
            <div class="line"></div>
            <div class="square"></div>
            <div class="container-information" style="line-height: 10px;">
              <h4 class="degree-text">${ref.name}</h4>
              <p class="place-text"><span style="color: #dc0a0a; font-weight: 800;">${ref.address}</span></p>
              <p class="description">Tel: ${ref.phone}</p>
              <p class="description">Email: ${ref.email}</p>
            </div> 
          </div>
        `;
      });

      // Job Experience
      const jobContainer = document.querySelector('.job-container');
      data.job_experience.forEach(job => {
        jobContainer.innerHTML += `
          <div class="container-item">
            <div class="line"></div>
            <div class="square"></div>
            <div class="container-information">
              <p class="place-text">${job.company}</p>
              <p class="location-text" style="margin-top:-18px">${job.location}</p>
              <div class="date_location" style="margin-top:-22px">
                <h4 class="degree-text job_position">${job.position}</h4>
                <p class="dates">${job.dates}</p>
              </div>
              <p class="description experience_text">${job.description}</p>
            </div>
          </div>
        `;
      });

      // Education
      const educationContainer = document.querySelector('.education-container');
      data.education.forEach(edu => {
        educationContainer.innerHTML += `
          <div class="container-item">
            <div class="line"></div>
            <div class="square"></div>
            <div class="container-information">
              <p class="place-text">${edu.institution}</p>
              <h4 class="degree-text" style="margin-top: -16px">${edu.degree}</h4>
              <p class="dates">${edu.dates}</p>
              <div class="container-main-information">
                <p class="description">${edu.description}</p>
              </div>
            </div>
          </div>
        `;
      });

      // Skills
      const skillsContainer = document.querySelector('.skills-container');
      data.skills.forEach(skill => {
        skillsContainer.innerHTML += `
          <div class="skill">
            <p class="skill-text">${skill.name}</p>
            <div class="skill-bar">
              <div class="skill-score" style="width: ${skill.score}"></div>
            </div>
          </div>
        `;
      });

      // Hobbies
      const hobbiesContainer = document.querySelector('.hobbies-container');
      data.hobbies.forEach(hobby => {
        hobbiesContainer.innerHTML += `
          <div class="skill">
            <p class="skill-text">${hobby.name}</p>
            <div class="skill-bar">
              <div class="skill-score" style="width: ${hobby.score}"></div>
            </div>
          </div>
        `;
      });

      // Languages
      const languagesContainer = document.querySelector('.languages-container');
      data.languages.forEach(language => {
        const score = parseInt(language.score);
        const progressBarHTML = `
          <div class="box">
            <div class="percent">
              <svg>
                <circle cx="60" cy="60" r="50"></circle>
                <circle cx="60" cy="60" r="50" style="stroke-dashoffset: calc(314 - (314 * ${score}) / 100);"></circle>
              </svg>
              <div class="num">
                <h1>${score}<span>%</span></h1>
                <h2 class="text">${language.name}</h2>
              </div>
            </div>
          </div>
        `;
        languagesContainer.innerHTML += progressBarHTML;
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
    const icon = button.querySelector('i');
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
    { containerSelector: ".about_me", titleSelector: ".title", containerIndex: 0 },
    { containerSelector: ".references-container", titleSelector: ".title", containerIndex: 1 },
    { containerSelector: ".job-container", titleSelector: ".title", containerIndex: 2 },
    { containerSelector: ".education-container", titleSelector: ".title", containerIndex: 3 },
    { containerSelector: ".skills-container", titleSelector: ".title", containerIndex: 4 },
    { containerSelector: ".hobbies-container", titleSelector: ".title", containerIndex: 5 },
    { containerSelector: ".languages-container", titleSelector: ".title", containerIndex: 6 }
  ];

  sections.forEach(section => {
    const container = document.querySelectorAll(section.containerSelector)[0];
    const title = document.querySelectorAll(section.titleSelector)[section.containerIndex];
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
