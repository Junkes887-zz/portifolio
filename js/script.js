var about
var skills
var btnAbout
var btnSkills

window.onload = () => {
    about = document.getElementById("about")
    skills = document.getElementById("skills")
    btnAbout = document.getElementById("btn-about")
    btnSkills = document.getElementById("btn-skills")

    btnAbout.onclick = monstraAbout
    btnSkills.onclick = monstraSkills

    skills.classList.add("escondido") 
    btnAbout.classList.add("select")
}

function monstraAbout() {
    about.classList.remove("escondido")
    skills.classList.add("escondido") 
    btnSkills.classList.remove("select") 
    btnAbout.classList.add("select") 
}

function monstraSkills() {
    skills.classList.remove("escondido")
    about.classList.add("escondido")  
    btnSkills.classList.add("select") 
    btnAbout.classList.remove("select") 
}