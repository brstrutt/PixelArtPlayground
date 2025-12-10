
document.addEventListener("DOMContentLoaded", async function () {
    document.getElementById("toggle_pixel_grid")?.addEventListener('click', togglePixelGridVisible);
    document.getElementById("toggle_bellsprout")?.addEventListener('click', toggleBellsproutVisible);
    document.getElementById("toggle_spoink")?.addEventListener('click', toggleSpoinkVisible);
});

function togglePixelGridVisible() {
    const grid_elements = document.getElementsByClassName("pixel_grid");
    if(grid_elements) {
        for(const grid of grid_elements) {
            grid.hidden = !grid.hidden;
        }
    }
}

function toggleBellsproutVisible() {
    const bellsprouts = document.getElementsByClassName("bellsprout");
    if(bellsprouts) {
        for(const sprout of bellsprouts) {
            sprout.hidden = !sprout.hidden;
        }
    }
}

function toggleSpoinkVisible() {
    const spoinks = document.getElementsByClassName("spoink");
    if(spoinks) {
        for(const spoink of spoinks) {
            spoink.hidden = !spoink.hidden;
        }
    }
}