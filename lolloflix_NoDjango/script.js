
    // Codice specifico per la prima pagina
    if (window.location.pathname.includes("index.html")) {

        // Codice per i bottoni (smile, plus, pen)
        const smileButton = document.querySelector(".smile-button");
        const plusButton = document.querySelector(".plus-button");
        const penButton = document.querySelector("#pen-button");

        // Bottone matita a scomparsa
        function showPenButton(event, button) {
            penButton.style.display = "none";
            const buttonRect = button.getBoundingClientRect();
            penButton.style.top = `${buttonRect.top + buttonRect.height / 2 - penButton.offsetHeight / 2 - 35}px`;
            penButton.style.left = `${buttonRect.left - penButton.offsetWidth - 60}px`;
            penButton.style.display = "block";
        }

        function hidePenButton() {
            penButton.style.display = "none";
        }
        

        smileButton.addEventListener("click", () => console.log("smile click"));

        smileButton.addEventListener("mouseover", (event) => {
            showPenButton(event, smileButton);
        });

        document.addEventListener("mousemove", () => {
            const isMouseOverButton = smileButton.matches(":hover") || plusButton.matches(":hover");
            const isMouseOverPen = penButton.matches(":hover");

            if (!isMouseOverButton && !isMouseOverPen) {
                hidePenButton();
            }
        });

        smileButton.addEventListener("click", () => {
            window.location.href = "home.html";
        });
    }

    // Codice specifico per la seconda pagina
    if (window.location.pathname.includes("home.html")) {
        // Codice per la seconda pagina
        const video = document.querySelector("#preview-container video");
        const muteIcon = document.querySelector(".fa-volume-mute");
        const muteButton = muteIcon.parentNode;
        if (muteIcon) {
            console.log("mute icon non è null")};
        if (video) {
            console.log("video non è null")};

        muteButton.addEventListener("click", () => {
            if (video) {
                if (video.muted) {
                    console.log("video con audio")
                    video.muted = false;
                    muteIcon.classList.remove("fa-volume-mute");
                    muteIcon.classList.add("fa-volume-up");
                } else {
                    console.log("video senza audio")
                    video.muted = true;
                    muteIcon.classList.remove("fa-volume-up");
                    muteIcon.classList.add("fa-volume-mute");
                }
            } else {
                console.log("Il video non è stato trovato.");
            }
        });

        const images = document.querySelectorAll("#categories img");

        images.forEach((image) => {
            image.addEventListener("mouseenter", () => {
                image.style.transform = "scale(1.1)";
            });
            image.addEventListener("mouseleave", () => {
                image.style.transform = "scale(1)";
            });
        });

        const button = document.createElement("button");
        document.body.appendChild(button);
        button.innerHTML = '<i class="fas fa-chevron-up"></i>';
        button.style.position = "fixed";
        button.style.bottom = "20px";
        button.style.right = "20px";
        button.style.display = "none";

        button.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        });

        window.addEventListener("scroll", () => {
            if (window.scrollY > 500) {
                button.style.display = "block";
            } else {
                button.style.display = "none";
            }
        });

        function goToHomePage() {
            window.location.href = "{% url 'index' %}"; // Sostituisci 'index' con il nome della tua view per la pagina index.html
        }
    }

    // Seleziona l'elemento della lista con il link categories
    const links = document.querySelectorAll("a[href='#categories']");

    // Aggiungi un event listener per il click
    links.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();  // Previene il comportamento di default del link
            const categorySection = document.querySelector("#categories");
            
            // Esegui lo scroll fino alla sezione con id "categories" con effetto smooth
            categorySection.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Seleziona l'elemento del link "Home" per tornare all'inizio della pagina
    const homeLink = document.querySelector("#tasto");

        // Aggiungi un event listener per il click
        homeLink.addEventListener("click", (event) => {
            event.preventDefault();  // Previene il comportamento di default del link
            const previewSection = document.querySelector("#preview-container");
        });

    if (previewSection !== undefined) {        
        // Esegui lo scroll fino alla sezione con id "preview-container" con effetto smooth
        previewSection.scrollIntoView({ behavior: "smooth" });
    };