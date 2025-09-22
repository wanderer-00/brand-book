let color_palette = document.getElementsByClassName("color-palette")[0];

for(i=0; i<color_array.length; i++){
color_palette.innerHTML += `
    <div class="color-item">
        <div class="color-box" style="background-color: ${color_array[i].HEX}"></div>
        <div class="color-info">
            <div>CMYK: ${color_array[i].CMYK}</div>
        </div>
    </div>`;
}