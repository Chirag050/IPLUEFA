function togglePopup(popupId) {
    var popup = document.getElementById(popupId);
    if (popup.style.display === "none" || popup.style.display === "") {
        popup.style.display = "block"; // Change 'block' to 'flex' if you're using flexbox
    } else {
        popup.style.display = "none";
    }
}
