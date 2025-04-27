const projects = document.querySelector("#js-projects_list")
const moreProjectsBtn = document.querySelector("#js-projects_btn")

function showProjects() {
    let counter = 0
    const itemProjects = projects.children
    const itemArray = Array.from(itemProjects)

    itemArray.forEach(child => {
        if (counter < 3 && !child.classList.contains('visible')) {
            child.classList.add('visible')
            counter++
        }
    })
    if (itemArray.every(child => child.classList.contains('visible'))) {
        moreProjectsBtn.classList.add('visually-hidden')
        return;
    }
}

moreProjectsBtn.addEventListener('click', showProjects)



