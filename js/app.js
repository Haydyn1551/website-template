const btn = document.getElementById("hoverBtn");
const popup = document.getElementById("popup");

btn.addEventListener("mouseenter", () => {
    popup.style.display = "block";
});

btn.addEventListener("mouseleave", () => {
    popup.style.display = "none";
});

function openUrl(url) {
    window.location.href = url;
}
