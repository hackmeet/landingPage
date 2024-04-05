document.addEventListener("DOMContentLoaded", function() {
    const icons = document.querySelectorAll(".icon");

    function handleHover(event) {
        const altText = event.target.alt;
        const altElement = document.createElement('div');
        altElement.textContent = altText;
        altElement.className = 'alt-text';
        event.target.parentNode.appendChild(altElement);
        event.target.src = `assets/${altText}Hover.png`;
    }

    function handleSelect(event) {
        const altText = event.target.alt;
        const altElement = document.createElement('div');
        altElement.textContent = altText;
        altElement.className = 'alt-text';
        event.target.parentNode.appendChild(altElement);
        event.target.alt = `${altText}`;
        event.target.src = `assets/${altText}Hover.png`;
    }

    icons.forEach(icon => {
        icon.addEventListener("mouseenter", handleHover);
        icon.addEventListener("mouseleave", function(event) {
            const altText = event.target.alt.split(" ")[0];
            const altElement = document.querySelector('.alt-text');
            altElement.parentNode.removeChild(altElement);
            event.target.alt = altText;
            event.target.src = `assets/${altText}.png`;
        });
        icon.addEventListener("click", handleSelect);
    });
});