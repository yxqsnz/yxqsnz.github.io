const info = document.getElementById("profile_info");
const frame = document.getElementById("frame");
const followers_button = document.getElementById("flwbtn")
const current_location = window.location.host
const homeButton = document.getElementById("home-btn");

homeButton.addEventListener("click", () => {
    frame.src = `./pages/info.html`
})
followers_button.addEventListener("click",on_flwbtn_click)

function on_flwbtn_click() {
    frame.src = `./pages/followers.html`
}
frame.src = `./pages/info.html`
let default_text = "yxqsnz 2021"
async function load_info() {
    const req = await axios('https://api.github.com/users/yxqsnz');
    const res = req.data;
    const x = res.followers;
    default_text = `yxqsnz 2021 followers count: ${x}`
    info.innerText =  default_text;
}
load_info()
setInterval(() => {
    load_info()
}, 10000);