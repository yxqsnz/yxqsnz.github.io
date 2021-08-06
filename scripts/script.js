const urls = {
    LOADING_SPINNER: 'https://git.wp-china.org/wp-plugins/watermark-protect-images/raw/commit/145d8b235337519b8ef0dd7945130349749fed05/assets/images/spinner.gif',
    GITHUB_API: "https://api.github.com/users/yxqsnz",
    AVATAR: "https://github.com/yxqsnz.png"
}

const info = document.getElementById("profile_info");
const frame = document.getElementById("frame");
const followers_button = document.getElementById("flwbtn")
const aboutMeButton = document.getElementById("about-me");
const homeButton = document.getElementById("home-btn");
const avatar = document.getElementById('avatar');
homeButton.addEventListener("click", () => {
    frame.src = `./pages/info.html`
})
aboutMeButton.addEventListener('click',() => {
    frame.src = `./pages/about-me.html`
})
followers_button.addEventListener("click", onFollowButtonClick)

function onFollowButtonClick() {
    frame.src = `./pages/followers.html`
}
let default_text = "YXQSNZ 2021"
async function loadInformation() {
    const req = await axios(urls.GITHUB_API);
    const res = req.data;
    const x = res.followers;
    default_text = `YXQSNZ 2021 followers count: ${x}`
    info.innerText =  default_text;
}


function main() {
    frame.src = `./pages/info.html`
    avatar.src = urls.AVATAR;
    loadInformation().then(() => setInterval(() => {
        console.log("Updating followers count...");
        loadInformation();
    }, 60000));
}
main();
