const followersButton = document.getElementById("flwbtn");
const aboutMeButton = document.getElementById("about-me");
const homeButton = document.getElementById("home-btn");
const avatar = document.getElementById("avatar");
const frame = document.getElementById("frame");
const info = document.getElementById("profile_info");

const getRedirectUrl = () =>
      ((href) =>
        href.includes('r=')
          || href.includes("go=")
          || href.includes("sh=")
          || href.includes("url=")
      )(window.location.href) ? ((href) =>
        href.split("r=")        [1]
          || href.split("go=")  [1]
          || href.split("sh=")  [1]
          || href.split("url=") [1]
      )(window.location.href)
      : null;
const cors = (url) => `https://yxqsnz.000webhostapp.com/cors/?url=${url}`;
const predirectUrl = getRedirectUrl();
const isRedirecting = predirectUrl != null;
const redirectUrl = cors(`https://paste.rs/${getRedirectUrl()}`);
const urls = {
  LOADING_SPINNER:
    "https://git.wp-china.org/wp-plugins/watermark-protect-images/raw/commit/145d8b235337519b8ef0dd7945130349749fed05/assets/images/spinner.gif",
  GITHUB_API: "https://api.github.com/users/yxqsnz",
  AVATAR: "https://github.com/yxqsnz.png",
};
async function redirect() {
  console.log(`R(LOAD_URL): ${redirectUrl}`);
  const url = await fetch(redirectUrl).then(response => response.text());
  console.log(`R(URL): ${url}`);
  document.title = `R: ${url}`;
  setInterval(() => {
    document.querySelector("#main").remove();
    document.writeln("-> REDIRECTING TO: ${url}");
    window.location.href = url;
  }, 300);
}

homeButton.addEventListener("click", () => {
  frame.src = `./pages/info.html`;
});
aboutMeButton.addEventListener("click", () => {
  frame.src = `./pages/about-me.html`;
});

followersButton.addEventListener("click", onFollowButtonClick);

function onFollowButtonClick() {
  frame.src = `./pages/followers.html`;
}
let defaultText = "YXQSNZ 2021";
async function loadInformation() {
  const req = await axios(urls.GITHUB_API);
  const res = req.data;
  const x = res.followers;
  defaultText = `YXQSNZ 2021 followers count: ${x}`;
  info.innerText = defaultText;
}

function main() {
  frame.src = `./pages/info.html`;
  avatar.src = urls.AVATAR;
  loadInformation().then(() =>
    setInterval(() => {
      console.log("Updater: Updating followers count...");
      loadInformation();
    }, 60000)
  );
}
if (!isRedirecting) main();
else redirect();
