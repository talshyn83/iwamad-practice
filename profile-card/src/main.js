import "./style.css";

const likeButton = document.querySelector("#likeButton");
const profileCard = document.querySelector("#profileCard");
const likeMessage = document.querySelector("#likeMessage");

let liked = false;

likeButton.addEventListener("click", function () {
    liked = !liked;

    if (liked) {
        likeButton.textContent = "♥ Liked";
        profileCard.classList.add("liked");
        likeMessage.textContent = "You liked this profile card!";
    } else {
        likeButton.textContent = "♡ Like";
        profileCard.classList.remove("liked");
        likeMessage.textContent = "You haven't liked this card yet.";
    }
});