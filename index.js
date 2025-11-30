
document.addEventListener("DOMContentLoaded", async function () {
    document.getElementById("toggle_pixel_grid")?.addEventListener('click', togglePixelGridVisible);
});

function togglePixelGridVisible() {
    console.log("CLICKYCLICKY");
    const grid_elements = document.getElementsByClassName("pixel_grid");
    if(grid_elements) {
        for(const grid of grid_elements) {
            grid.hidden = !grid.hidden;
        }
    }
}