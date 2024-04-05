document.addEventListener("DOMContentLoaded", function() {
    const icons = document.querySelectorAll(".icon");

    function handleHover(event) {
        const altText = event.target.alt;
        const altElement = document.querySelector('.alt-text');
        if (!altElement) {
            const newAltElement = document.createElement('div');
            newAltElement.textContent = altText;
            newAltElement.style.fontFamily = "Inter";
            newAltElement.style.fontSize = "15px";
            newAltElement.className = 'alt-text';
            event.target.parentNode.appendChild(newAltElement);
        }
        event.target.src = `assets/${altText}Hover.png`;
    }

    function handleLeave(event) {
        const altText = event.target.alt.split(" ")[0];
        const altElement = document.querySelector('.alt-text');
        if (altElement) {
            altElement.parentNode.removeChild(altElement);
        }
        event.target.alt = altText;
        event.target.src = `assets/${altText}.png`;
    }

    function handleSelect(event) {
        const altText = event.target.alt;
        const altElement = document.querySelector('.alt-text');
        if (!altElement) {
            const newAltElement = document.createElement('div');
            newAltElement.textContent = altText;
            newAltElement.className = 'alt-text';
            event.target.parentNode.appendChild(newAltElement);
        }
        event.target.alt = `${altText}`;
        event.target.src = `assets/${altText}Hover.png`;
    }

    icons.forEach(icon => {
        icon.addEventListener("mouseenter", handleHover);
        icon.addEventListener("mouseleave", handleLeave);
        icon.addEventListener("click", handleSelect);
    });
});
