const mobileMenu = document.getElementById('mobile-nav-items');
function openmenu() {
  mobileMenu.style.display = 'block';
}
function closemenu() {
  mobileMenu.style.display = 'none';
}
mobileMenu.addEventListener('click', openmenu);
mobileMenu.addEventListener('click', closemenu);

const projectData = [
  {
    id: 'project1',
    title: 'Tonic',
    frame: ['CANOPY', 'Back End Dev', 2015],
    primaryText: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tags: ['HTML', 'CSS', 'Javascript'],
    imageUrl: './resources/images/Snapshoot Portfolio 5.jpg',
    projectDetails: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: 'project2',
    title: 'Multi-Post Stories',
    frame: ['FACEBOOK', 'FULL STACK DEV', 2015],
    primaryText: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tags: ['HTML', 'CSS', 'Javascript'],
    imageUrl: './resources/images/Snapshoot Portfolio 6.jpg',
    projectDetails: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: 'project3',
    title: 'Tonic',
    frame: ['CANOPY', 'Back End Dev', 2015],
    primaryText: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tags: ['HTML', 'CSS', 'Javascript'],
    imageUrl: './resources/images/Snapshoot Portfolio 7.jpg',
    projectDetails: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: 'project4',
    title: 'Multi-Post Stories',
    frame: ['FACEBOOK', 'FULL STACK DEV', 2015],
    primaryText: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tags: ['HTML', 'CSS', 'Javascript'],
    imageUrl: './resources/images/Snapshoot Portfolio 8.jpg',
    projectDetails: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    liveLink: '#',
    sourceLink: '#',
  },
];

function dcl(t = 'div') {
  if (!t) {
    t = 'div';
  }
  return document.createElement(t);
}

function fetchOnePoject(id) {
  const projects = projectData;
  let project;
  for (let i = 0; i < projectData.length; i += 1) {
    if (projects[i].id === id) {
      project = projects[i];
    }
  }
  if (project) {
    const article = dcl('article');
    article.classList.add('popup-article');
    article.setAttribute('id', project.id);
    const articleModal = dcl();
    articleModal.classList.add('article-modal');
    const workTitle = dcl('h2');
    workTitle.classList.add('work-title');
    workTitle.innerText = project.title;
    const crossIcon = dcl('span');
    crossIcon.setAttribute('id', 'article-close');
    crossIcon.innerHTML = '<img src="resources/icon/cross-icon-00.png" alt="X"/>';
    const workInfo = dcl('ul');
    workInfo.classList.add('work-info');
    project.frame.forEach((f) => {
      const workInfoItem = dcl('li');
      workInfoItem.classList.add('work-info-item');
      workInfoItem.innerText = f;
      workInfo.appendChild(workInfoItem);
    });
    const articleImage = dcl();
    articleImage.classList.add('article-image');
    articleImage.innerHTML = `<img class='article-img' src='${project.imageUrl}' alt='${project.title}'/>`;
    const projectBlock = dcl();
    projectBlock.classList.add('article-block');
    const leftBlock = dcl();
    leftBlock.classList.add('left-block');
    const workDetailsContent = dcl('p');
    workDetailsContent.classList.add('work-details-content');
    workDetailsContent.innerText = project.projectDetails;
    leftBlock.append(workDetailsContent);
    const rightBlock = dcl();
    rightBlock.classList.add('right-block');
    const workCat = dcl('ul');
    workCat.classList.add('work-cats');
    project.tags.forEach((tag) => {
      const catLi = dcl('li');
      catLi.innerText = tag;
      workCat.appendChild(catLi);
    });
    const actions = dcl();
    actions.classList.add('actions');
    const liveLink = dcl('a');
    liveLink.classList.add('article-btn');
    liveLink.setAttribute('href', project.liveLink);
    liveLink.innerHTML = 'See Live <span class="btn-icon"><img src="resources/icon/icon.png" alt= "Live"/></span>';
    const sourceLink = dcl('a');
    sourceLink.classList.add('article-btn');
    sourceLink.setAttribute('href', project.sourceLink);
    sourceLink.innerHTML = 'See Live <span class="btn-icon"><img src="resources/icon/Vector.png" alt= "Live"/></span>';
    actions.append(liveLink, sourceLink);
    rightBlock.append(workCat, actions);
    projectBlock.append(leftBlock, rightBlock);
    articleModal.append(crossIcon, workTitle, workInfo, articleImage, projectBlock);
    article.append(articleModal);
    document.querySelector('main').append(article);
    const closeModal = document.getElementById('article-close');
    closeModal.addEventListener('click', () => {
      document.querySelector('main').removeChild(article);
    });
  }
}

function fetchAllProject() {
  const portfolio = document.getElementById('portfolio');
  projectData.forEach((project) => {
    const card = dcl();
    card.classList.add('work-card');
    const workPreview = dcl();
    workPreview.classList.add('work-preview');
    workPreview.innerHTML = `<img class='project-img' src='${project.imageUrl}' alt='${project.title}'/>`;
    card.appendChild(workPreview);
    const workDetails = dcl();
    workDetails.classList.add('work-details');
    const workTitle = dcl('h2');
    workTitle.classList.add('work-title');
    workTitle.innerText = project.title;
    workDetails.appendChild(workTitle);
    const workInfo = dcl('ul');
    workInfo.classList.add('work-info');
    project.frame.forEach((f) => {
      const workInfoItem = dcl('li');
      workInfoItem.classList.add('work-info-item');
      workInfoItem.innerText = f;
      workInfo.appendChild(workInfoItem);
    });
    workDetails.appendChild(workInfo);
    const workDetailsContent = dcl('p');
    workDetailsContent.classList.add('work-details-content');
    workDetailsContent.innerText = project.primaryText;
    workDetails.appendChild(workDetailsContent);
    const workCat = dcl('ul');
    workCat.classList.add('work-cats');
    project.tags.forEach((tag) => {
      const catLi = dcl('li');
      catLi.innerText = tag;
      workCat.appendChild(catLi);
    });
    workDetails.appendChild(workCat);
    const atnBrn = dcl('button');
    atnBrn.classList.add('btn');
    atnBrn.innerText = 'See More';
    atnBrn.setAttribute('id', project.id);
    atnBrn.addEventListener('click', () => {
      fetchOnePoject(project.id);
    });
    workDetails.appendChild(atnBrn);
    card.appendChild(workDetails);
    portfolio.appendChild(card);
  });
}

window.onload = () => {
  fetchAllProject();
};
function validateForm(event) {
  event.preventDefault(); // Prevent form submission

  const emailInput = document.getElementById('email');
  const errorMessage = document.getElementById('errorMessage');

  const email = emailInput.value;
  const lowerCaseEmail = email.toLowerCase();

  if (email !== lowerCaseEmail) {
    errorMessage.innerText = 'Email must be in lowercase';
    errorMessage.style.display = 'block';
    return;
  }
  document.getElementById('contact-form').submit();
}

onclick.addEventListener('submit', validateForm);

// start-local-storage-functionality
