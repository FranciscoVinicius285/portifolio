const sections = document.querySelectorAll("section");

// Cria o observador de interseção
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            entry.target.classList.add("hidden");
        } else {
            entry.target.classList.remove("hidden");
        }
    });
}, { threshold: 0.75 }); 

sections.forEach(section => observer.observe(section));
