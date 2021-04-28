let isSideBarHidden = false;
const avatar_button = document.getElementById("btn_sb");
const side_bar = document.getElementById("sidebar");
const avatar_container = document.getElementById("avatar_container");
const sidebar_button = document.getElementById("sidebar_button");
const sidebar_button_text = document.getElementById("sidebar_button_text");
const sidebar_button_image_open = document.getElementById("sidebar_button_image_open")
const sidebar_button_image_close = document.getElementById("sidebar_button_image_close")
sidebar_button_image_open.style.display = "none";
sidebar_button.addEventListener("click",on_btn_sidebar_click);
function on_btn_sidebar_click() {
    if (!isSideBarHidden) {
        side_bar.style.animationName = "sideBarAnimationHide"
        sidebar_button_image_close.style.display = "none"
        sidebar_button.style.display = "none"
        setTimeout(() => {
            sidebar_button.style.display = "ruby"
            sidebar_button_image_open.style.display = "ruby"
            sidebar_button_image_open.style.height = "100%"
            side_bar.style.background = "none"
        },1400);
    } else {
    
    }
    avatar_container.style.display = "ruby"
}