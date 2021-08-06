const followersContainer = document.getElementById("followers-container")
async function load() {
    const req = await axios('https://api.github.com/users/yxqsnz/followers');
    const res = req.data;
    //res.reverse()

    for (it of res) {

        const name = it.login;
        const pageURL = it.html_url;
        const avatarURL = it.avatar_url;
        const follower = document.createElement("div");
        follower.className = "follower"
        const followerCard = document.createElement("div");
        followerCard.className = "follower-card";

        const follower_avatar = document.createElement("img")
        follower_avatar.className = "follower_avatar"
        follower_avatar.height = "50"
        follower_avatar.width = "50"
        follower_avatar.src = avatarURL;
        const username = document.createElement("p");
        username.innerText = name;
        username.className = "follower_name"

        const viewA = document.createElement("a");
        const viewButton = document.createElement('button')
        viewButton.className = "button"
        viewButton.innerText = "Go"
        viewA.href = pageURL;
        viewA.target = "_blank"
        viewA.appendChild(viewButton)

        followerCard.appendChild(follower_avatar)
        followerCard.appendChild(username);
        followerCard.appendChild(viewA)
        follower.appendChild(followerCard);
        followersContainer.appendChild(follower);

    }
}
load()
