
function openNav() { document.getElementById("sidebar").style.width = "280px"; }
function closeNav() { document.getElementById("sidebar").style.width = "0"; }

let slideIndex = 0;
runSlideshow();

function runSlideshow() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(runSlideshow, 5000); // Transitions every 5 seconds
}

const zoneData = {
    rainforest: {
        title: "Tropical Wet (Rainforest)",
        text: "The African rainforest, primarily in the Congo Basin, is characterized by high rainfall and year-round warmth. It is the 'second lung' of the Earth, featuring dense vegetation and incredible biodiversity.",
        url: "https://en.wikipedia.org/wiki/Tropical_rainforest_climate"
    },
    savanna: {
        title: "Tropical Wet & Dry (Savanna)",
        text: "The Savanna is known for its distinct wet and dry seasons. It consists of open grasslands with scattered trees, supporting the world's largest migrations of land mammals.",
        url: "https://en.wikipedia.org/wiki/Tropical_savanna_climate"
    },
    desert: {
        title: "Arid (Desert)",
        text: "From the Sahara in the north to the Namib in the south, Africa's deserts are defined by extreme temperature fluctuations and very low precipitation.",
        url: "https://en.wikipedia.org/wiki/Desert_climate"
    },
    mediterranean: {
        title: "Mediterranean",
        text: "Located at the northern and southern tips of the continent, these regions enjoy hot, dry summers and mild, rainy winters, perfect for vineyards and citrus farming.",
        url: "https://en.wikipedia.org/wiki/Mediterranean_climate"
    }
};

function openZone(key) {
    const data = zoneData[key];
    const modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = `
        <h2 style="color:var(--primary); margin-bottom:15px;">${data.title}</h2>
        <p style="line-height:1.7; color:#475569;">${data.text}</p>
        <a href="${data.url}" target="_blank" class="read-more">Learn More <i class="fas fa-external-link-alt" style="font-size:0.8rem; margin-left:5px;"></i></a>
    `;
    document.getElementById("zoneModal").style.display = "block";
}

function closeModal() {
    document.getElementById("zoneModal").style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("zoneModal");
    if (event.target == modal) {
        closeModal();
    }
}