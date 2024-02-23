window.onload = () => {
  const barMenu = document.querySelector('.bar-menu');
  const popUp = document.querySelector('.pop-up');
  const close = document.querySelector('.close');
  const menu = document.querySelector('.menu');
  const skillItems = document.querySelectorAll('.skill-item');

  // On click add active class to clicked skill item and remove from others
  skillItems.forEach((skillItem) => {
    skillItem.addEventListener('click', () => {
      // if item is already active remove active class
      if (skillItem.classList.contains('active')) {
        skillItem.classList.remove('active');
        const icon = skillItem.querySelector('.item-1-header > i');
        icon.classList.remove('fa-solid', 'fa-angle-down');
        icon.classList.add('fa-solid', 'fa-angle-right');
        return;
      }
      skillItems.forEach((item) => {
        // Change item-1-header > i to fa-solid fa-angle-right next arrow"
        const icon = item.querySelector('.item-1-header > i');
        icon.classList.remove('fa-solid', 'fa-angle-down');
        icon.classList.add('fa-solid', 'fa-angle-right');
        item.classList.remove('active');
      });
      skillItem.classList.add('active');
      const icon = skillItem.querySelector('.item-1-header > i');
      icon.classList.remove('fa-solid', 'fa-angle-right');
      icon.classList.add('fa-solid', 'fa-angle-down');
    });
  });

  barMenu.addEventListener('click', () => {
    popUp.classList.remove('hidden');
  });

  close.addEventListener('click', () => {
    popUp.classList.remove('hidden');
  });

  menu.addEventListener('click', () => {
    popUp.classList.add('hidden');
  });

  const projectsData = [
    {
      title: 'HealthCareApplication',
      subtitle: 'Book an Appointment',
      techStack: 'Full Stack Dev',
      year: 2024,
      src: 'https://raw.githubusercontent.com/Uzair-Manzoor/healthcare-app-frontend/e4282daacc93e3627d3f8bdf10bf1112f8496cbe/src/assets/HealthCareApp.png',
      highlight: 'React/Redux front-end application for the "Doctor Appointments" communicates with the Rails back-end API to ensure a cohesive and efficient user experience',
      description: 'React/Redux front-end application for the "Doctor Appointments" communicates with the Rails back-end API to ensure a cohesive and efficient user experience',
      lang: ['PostgreSQL', 'React', 'Redux', 'Ruby On Rails', 'Render', 'Vercel'],
      live: 'healthcare-app-frontend.vercel.app',
      source: 'https://github.com/Uzair-Manzoor/healthcare-app-backend.git',
    },
    {
      title: 'Space Travelers\' Hub',
      subtitle: 'Book a trip to Space',
      techStack: 'Front End Dev',
      year: 2023,
      src: 'https://github.com/Uzair-Manzoor/SpaceTravelersHub/raw/main/src/assets/images/Rocketsupdated.png?raw=true',
      highlight: 'A Single Page App (SPA) that displays a list of Rockets & Missions by fetching real live data from SpaceX API.',
      description: 'A Single Page App (SPA) that displays a list of Rockets & Missions by fetching real live data from SpaceX API. SpaceX is a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join space missions.',
      lang: ['React', 'Redux', 'JavaScript', 'React Bootstrap'],
      live: 'https://space-travelers-8tvba23t2-uzair-manzoor.vercel.app/',
      source: 'https://github.com/Uzair-Manzoor/SpaceTravelersHub.git',
    },
    {
      title: 'Math Magicians',
      subtitle: 'Use Magic of Math',
      techStack: 'Front End Dev',
      year: 2023,
      src: 'https://github.com/Uzair-Manzoor/math-magicians/raw/develop/src/MathMagicians.png?raw=true',
      highlight: 'Math magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that enables users to perform simple calculations.',
      description: 'Welcome to Math Magicians. Your go-to web application for all your mathematical needs! A powerful calculator application that makes complex computations a breeze. Math Magicians is here to simplify your math journey with a sleek and user-friendly interface.',
      lang: ['React', 'JavaScript', 'CSS'],
      live: 'https://math-magicians-ir68txw5n-uzair-manzoor.vercel.app/',
      source: 'https://github.com/Uzair-Manzoor/math-magicians.git',
    },
    {
      title: 'Pokemon API',
      subtitle: 'Data about Pokémon World',
      techStack: 'Front End Dev',
      year: 2023,
      src: 'https://raw.githubusercontent.com/Uzair-Manzoor/JS-Capstone-Poki-API/eb8c7670df78edf3aca536254f21d327f9220a3d/src/assets/Poki-api.png',
      highlight: 'The Pokemon API is about building web application based on an external API that provides data about the pokemon world.',
      description: 'The JavaScript capstone project about building web application based on an external API that provides data about pokemon world and the webapp is built around it. The webapp have 2 user interfaces. A home page showing a list of pokemon cards and popup window with more data, that can be used to comment on it or reserve it for a period of time.',
      lang: ['HTML', 'CSS', 'Javascript'],
      live: 'https://uzair-manzoor.github.io/JS-Capstone-Poki-API/',
      source: 'https://github.com/Uzair-Manzoor/JS-Capstone-Poki-API.git',
    },
  ];

  const projectCardString = projectsData.map((project) => `
    <div class="card grid__item ">
      <div class="inner-card">
        <div class="card-img card-1">
          <img
            src="${project.src}"
            alt="Project Snapshot"
          />
        </div>
        <div class="desc">
          <h3>${project.title}</h3>
          <h4>${project.subtitle} <span>${project.techStack}</span> <span>${project.year}</span></h4>
          <p>${project.highlight}</p>
          <ul>
            ${project.lang.map((tech) => `<li>${tech}</li>`).join('')}
          </ul>
          <button type="button" class="project-btn button">
            See Project
          </button>
        </div>
      </div>
    </div>
  `);

  const popupContainer = document.querySelector('.project-popup-container');
  const recentWork = document.querySelector('.recent-work');
  const parser = new DOMParser();

  projectCardString.forEach((projectString, index) => {
    const projectElement = parser.parseFromString(projectString, 'text/html').body.firstChild;

    const mobilePopup = `
      <div class="project-popup-hidden ">
        <div class="project-background"></div>
          <div class="project-popup">

            <div class="project-header">
              <i class="fa-solid fa-xmark project-close"></i>
              <h2>${projectsData[index].title}</h2>
              <p>${projectsData[index].subtitle} <span>${projectsData[index].techStack}</span> <span>${projectsData[index].year}</span></p>
            </div>
            <div class="project-img" style="background-image: url(${projectsData[index].src})">
            </div>
            <div class="project-footer">
              <p class="project-desc">${projectsData[index].description}</p>
              <div>
                <ul>
                  ${projectsData[index].lang.map((tech) => `<li>${tech}</li>`).join('')}
                </ul>
                <span></span>
                <div class="project-links">
                  <button ><a href="${projectsData[index].live}" target="_blank">See Live <i class="fa-solid fa-arrow-up-right-from-square"></i></a></button>
                  <button><a href="${projectsData[index].source}" target="_blank">See Source <i class="fa-brands fa-github"></i></a></button>
                </div>
              </div>
            </div>
          </div>
      </div>
    `;

    const mobilePopupElement = parser.parseFromString(mobilePopup, 'text/html').body.firstChild;

    const projectBtn = projectElement.querySelector('.project-btn');
    const closeBtn = mobilePopupElement.querySelector('.project-close');

    projectBtn.addEventListener('click', () => {
      mobilePopupElement.classList.toggle('project-popup-hidden');
    });

    closeBtn.addEventListener('click', () => {
      mobilePopupElement.classList.toggle('project-popup-hidden');
    });

    recentWork.append(projectElement);
    popupContainer.append(mobilePopupElement);
  });

  const form = document.querySelector('#form');
  const messageContainer = document.querySelector('.message');

  const isValidEmail = (email) => {
    const eamilPattern = /^(([^<>()[\]\\.,;:\s@"A-Z]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/;
    return eamilPattern.test(email);
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const valid = isValidEmail(formData.get('email'));
    if (valid) {
      const message = document.createElement('span');
      message.classList.add('success');
      message.innerHTML = 'Data sent successfully! 🙌';
      messageContainer.replaceChildren(message);
    } else {
      const message = document.createElement('span');
      message.classList.add('error');
      message.innerHTML = 'Error!⚡ Incorrect format. Enter email in lowercase';
      messageContainer.replaceChildren(message);
    }
  });

  const name = document.querySelector('#text');
  const email = document.querySelector('#email');
  const comment = document.querySelector('#comment');

  function saveData() {
    const data = {
      fieldName: name.value,
      fieldEmail: email.value,
      fieldComment: comment.value,
    };
    localStorage.setItem('data', JSON.stringify(data));
  }

  let formObject = JSON.parse(localStorage.getItem('data'));
  if (!formObject) {
    formObject = {
      name: '',
      email: '',
      comment: '',
    };
    saveData();
  }

  if (!formObject.name) {
    formObject.name = '';
  }

  if (!formObject.email) {
    formObject.email = '';
  }

  if (!formObject.comment) {
    formObject.comment = '';
  }

  name.value = formObject.name;
  name.addEventListener('change', (e) => {
    formObject.name = e.target.value;
    localStorage.setItem('data', JSON.stringify(formObject));
  });

  email.value = formObject.email;
  email.addEventListener('change', (e) => {
    formObject.email = e.target.value;
    localStorage.setItem('data', JSON.stringify(formObject));
  });

  comment.value = formObject.comment;
  comment.addEventListener('change', (e) => {
    formObject.comment = e.target.value;
    localStorage.setItem('data', JSON.stringify(formObject));
  });
};

// Wait for the page to load
document.addEventListener('DOMContentLoaded', () => {
  // Get a reference to the portfolio grid
  const portfolioGrid = document.querySelector('.recent-work');

  // Check if the user has scrolled down to the portfolio grid
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (rect.top <= (window.innerHeight || document.documentElement.clientHeight)
      && rect.bottom >= 0
      && rect.left <= (window.innerWidth || document.documentElement.clientWidth)
      && rect.right >= 0);
  }

  window.addEventListener('scroll', () => {
    // Get all child elements of the portfolio grid
    const portfolioItems = portfolioGrid.querySelectorAll('.card');

    // Loop through each child element and check if it's in the viewport
    portfolioItems.forEach((portfolioItem) => {
      if (isElementInViewport(portfolioItem) && !portfolioItem.classList.contains('animate__animated')) {
        // Add the 'animated' and 'fade-in' classes to the child element to trigger the animation
        portfolioItem.classList.add('animate__animated', 'animate__fadeIn');
      } else if (!isElementInViewport(portfolioItem) && portfolioItem.classList.contains('animate__animated')) {
        // Remove the 'animated' class from the child element when it goes out of view
        portfolioItem.classList.remove('animate__animated');
        portfolioItem.classList.remove('animate__fadeIn');
      }
    });
  });
});
