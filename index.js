
document.addEventListener("DOMContentLoaded", async function () {
    document.getElementById("toggle_bellsprout")?.addEventListener('click', toggleBellsproutVisible);
    document.getElementById("toggle_spoink")?.addEventListener('click', toggleSpoinkVisible);
});

function toggleBellsproutVisible() {
    const bellsprouts = document.querySelectorAll("main .bellsprout");
    if(bellsprouts) {
        for(const sprout of bellsprouts) {
            sprout.hidden = !sprout.hidden;
        }
    }
}

function toggleSpoinkVisible() {
    const spoinks = document.querySelectorAll("main .spoink");
    if(spoinks) {
        for(const spoink of spoinks) {
            spoink.hidden = !spoink.hidden;
        }
    }
}