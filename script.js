const date = new Date();
const year = date.getFullYear();

const pfooter = document.getElementById('pfooter');
pfooter.innerHTML = `<p id='pfooter'>&copy ${year} .:|:. Zeir E. Braidi .:|:. Colorado</p>`;

const currentDate = document.getElementById('currentDate');
currentDate.innerHTML = `<p id="currentDate">Last updated: ${document.lastModified}</p>`


