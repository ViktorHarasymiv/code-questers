const projects = document.querySelector('#js-projects_list');
const moreProjectsBtn = document.querySelector('#js-projects_btn');
const hideAllProject = document.querySelector('#js-hide_btn');

hideAllProject.classList.add('visually-hidden');

function showProjects() {
  let counter = 0;
  const itemProjects = projects.children;
  const itemArray = Array.from(itemProjects);

  itemArray.forEach(child => {
    if (counter < 3 && !child.classList.contains('visible')) {
      child.classList.add('visible');
      counter++;
    }
  });

  if (itemArray.every(child => child.classList.contains('visible'))) {
    moreProjectsBtn.classList.add('visually-hidden');
    hideAllProject.classList.remove('visually-hidden');

    hideAllProject.addEventListener('click', function hideProjects() {
      itemArray.forEach(child => {
        if (!child.classList.contains('state')) {
          child.classList.remove('visible');
          window.scrollTo({
            top: document.querySelector('#projects').offsetTop - 50,
            behavior: 'smooth',
          });
          return (counter = 3);
        }
      });
      moreProjectsBtn.classList.remove('visually-hidden');
      hideAllProject.classList.add('visually-hidden');
    });
  }
}

moreProjectsBtn.addEventListener('click', showProjects);
