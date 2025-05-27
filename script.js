window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

        document.addEventListener("DOMContentLoaded", function() {
            var typed = new Typed("#changing-text", {
                strings: ["CSE Undergraduate","Specialising in Cyber Security","Software Developer"],
                typeSpeed: 100,
                backSpeed: 50,
                loop: true
            });
        });



// CV Viewer Toggle Functionality
document.getElementById('viewCvBtn').addEventListener('click', function() {
    document.getElementById('cvViewer').style.display = 'block';
});

// Close Button to Hide the CV Viewer
document.getElementById('closeCvBtn').addEventListener('click', function() {
    document.getElementById('cvViewer').style.display = 'none';
});

// Close the CV viewer if the background is clicked
document.getElementById('cvViewer').addEventListener('click', function(e) {
    if (e.target === this) {
        document.getElementById('cvViewer').style.display = 'none';
    }
});



const projects = [
    

    {
        title: "Tic-Tac-Toe ",
        description: "A simple game built usin HTML,CSS, Java script which helped me learn and understand Javascripts DOM",
        tech: "Tech Stack:HTML, CSS , javaScript",
        link: "https://darapureddi13.github.io/TIC_TAC_TOE-Game-/",
        image: "images/tic-tac-toe.png",
    },
    {
        title: "Rock-Paper-Scissors ",
        description: "A simple game built usin HTML,CSS, Java script which helped me learn and understand Javascripts DOM",
        tech: "Tech Stack:HTML, CSS , javaScript",
        link: "https://darapureddi13.github.io/rock_paper_scissors_javascript/",
        image: "images/rock-papers-scissors.png",
    },

    {
        title: "Digital Clock",
        description: "A Simple digital clock using Html and Java Script",
        tech: "Tech Stack:HTML ,JavaScript",
        link: "https://darapureddi13.github.io/DigitalClock/",
        image: "images/digital-clock.png",
    },
    {
    title: "Freight Cargo Management System",
    description: "A comprehensive web-based platform to manage freight and cargo operations, including shipment tracking, order management, and logistics optimization.",
    tech: "Tech Stack: HTML, CSS, JavaScript, Node.js, MongoDB",
    link: "https://www.linkedin.com/pulse/post-freight-cargo-management-system-uppala-sandeep/", 
    image: "images/freight-cargo.png"
}



];

const projectsList = document.getElementById("projects-list");




projects.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");

    projectCard.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="project-img">
        <div class="project-info">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <p class="project-tech">${project.tech}</p>
            <a href="${project.link}" class="project-link" target="_blank">View Project</a>
        </div>
    `;

    projectsList.appendChild(projectCard);

    
});




