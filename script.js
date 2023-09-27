document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const srcs = [urlParams.get('url1'), urlParams.get('url2'), urlParams.get('url3'), urlParams.get('url4')];
    console.log(srcs)
    const container = document.querySelectorAll(".container");
    const sectors = document.querySelectorAll(".sector");
    const zoom_button = document.querySelectorAll(".zoom-button");
    const iframes = document.querySelectorAll(".iframe");
    const zoomOutButton = document.getElementById("zoomOutButton");

    iframes.forEach((iframe, index) => {
        iframe.src = srcs[index] ? srcs[index].slice(1,-1) : "https://example.com"
        console.log(iframe.src)
    })

    sectors.forEach((sector, index) => {
        zoom_button[index].addEventListener("click", () => {
            sectors.forEach((s, i) => {
                if(i != index) {
                    s.style.display = "none"
                }
            })
            // transform: translate(-50%, -50%);
            sector.style.position = "absolute";
            container[0].style.display = "flex";
            zoom_button[index].style.display = "none";
            zoomOutButton.style.display = "block";
        });
    });

    zoomOutButton.addEventListener("click", () => {
        sectors.forEach((sector, index) => {
            container[0].style.display = "grid";
            sector.style.display = "block";
            sector.style.transform = "scale(1)";
            sector.style.position = "relative";
            zoom_button[index].style.display = "block";
        });
        zoomOutButton.style.display = "none";
    });
});
