const reels = [
    {
        username: "techie_girl",
        likeCount: 1280,
        isLiked: false,
        commentCount: 112,
        caption: "Debugging my life one print statement at a time 💻✨",
        vdo: "https://www.pexels.com/download/video/4962723/",
        userProfile: "https://picsum.photos/200/200?random=1",
        shareCount: 45,
        isFollowed: true
    },
    {
        username: "travel_buddy",
        likeCount: 5420,
        isLiked: true,
        commentCount: 321,
        caption: "Lost in mountains but found myself 🏔️💙",
        vdo: "https://media.istockphoto.com/id/2245006033/video/tourists-enjoying-camel-caravan-ride-in-sahara-desert.mp4?s=mp4-640x640-is&k=20&c=Cm0iA9iJ824YIm5mo8yytGgLRBlxqGPeDfDOGggyPpg=",
        userProfile: "https://picsum.photos/200/200?random=2",
        shareCount: 132,
        isFollowed: false
    },
    {
        username: "foodie_fiesta",
        likeCount: 980,
        isLiked: false,
        commentCount: 58,
        caption: "If biryani is wrong, I don't wanna be right 😌🔥",
        vdo: "https://www.pexels.com/download/video/10200311/",
        userProfile: "https://picsum.photos/200/200?random=3",
        shareCount: 20,
        isFollowed: true
    },
    {
        username: "dance_vibes",
        likeCount: 7210,
        isLiked: true,
        commentCount: 447,
        caption: "Therapy but make it choreography 💃✨",
        vdo: "https://www.pexels.com/download/video/3713453/",
        userProfile: "https://picsum.photos/200/200?random=4",
        shareCount: 290,
        isFollowed: false
    },
    {
        username: "fit_with_me",
        likeCount: 1550,
        isLiked: false,
        commentCount: 101,
        caption: "Grinding reps and responsibilities 🏋️‍♂️📈",
        vdo: "https://www.pexels.com/download/video/4943911/",
        userProfile: "https://picsum.photos/200/200?random=5",
        shareCount: 52,
        isFollowed: true
    },
    {
        username: "aesthetic_arts",
        likeCount: 4300,
        isLiked: true,
        commentCount: 213,
        caption: "Turning pixels into poetry 🎨🌙",
        vdo: "https://www.pexels.com/download/video/6912105/",
        userProfile: "https://picsum.photos/200/200?random=6",
        shareCount: 160,
        isFollowed: false
    },
    {
        username: "coder_boy",
        likeCount: 1990,
        isLiked: false,
        commentCount: 88,
        caption: "Merge conflicts build character 😭🔥",
        vdo: "https://www.pexels.com/download/video/7730022/",
        userProfile: "https://picsum.photos/200/200?random=7",
        shareCount: 37,
        isFollowed: true
    },
    {
        username: "petlover_101",
        likeCount: 6800,
        isLiked: true,
        commentCount: 512,
        caption: "My dog → main character energy 🐶💫",
        vdo: "https://www.pexels.com/download/video/4057322/",
        userProfile: "https://picsum.photos/200/200?random=8",
        shareCount: 180,
        isFollowed: false
    },
    {
        username: "fashion_fever",
        likeCount: 3200,
        isLiked: false,
        commentCount: 177,
        caption: "Outfits that slay silently 💅✨",
        vdo: "https://www.pexels.com/download/video/3403327/",
        userProfile: "https://picsum.photos/200/200?random=9",
        shareCount: 75,
        isFollowed: true
    },
    {
        username: "music_mood",
        likeCount: 4500,
        isLiked: true,
        commentCount: 245,
        caption: "Headphones in, world out 🎧🚪",
        vdo: "https://www.pexels.com/download/video/3403453/",
        userProfile: "https://picsum.photos/200/200?random=10",
        shareCount: 140,
        isFollowed: false
    }
];

var allReels = document.querySelector(".all-reels");

function addData() {
    var sum = "";

    reels.forEach(function (elem, idx) {
        sum += `
    <div class="reel">
      <video autoplay loop muted src="${elem.vdo}"></video>

      <div class="bottom">
        <div class="user">
          <img src="${elem.userProfile}" alt="">
          <h4>${elem.username}</h4>
          <button class="follow-btn" id="${idx}">
            ${elem.isFollowed ? "Following" : "Follow"}
          </button>

        </div>
        <h3>${elem.caption}</h3>
      </div>

      <div class="right">
        <div id="${idx}" class="like">
          <h4 class="like-icon icons">
            <i class="${elem.isLiked ? "ri-heart-3-fill" : "ri-heart-3-line"
            }" style="color: ${elem.isLiked ? 'red' : 'white'};"></i>
          </h4>
          <h6>${elem.likeCount}</h6>
        </div>

        <div class="comment">
          <h4 class="comment-icon icons"><i class="ri-chat-1-line"></i></h4>
          <h6>${elem.commentCount}</h6>
        </div>

        <div class="share">
          <h4 class="share-icon icons"><i class="ri-share-forward-line"></i></h4>
          <h6>${elem.shareCount}</h6>
        </div>

        <div class="menu">
          <h4 class="menu-icon icons"><i class="ri-more-2-fill"></i></h4>
        </div>
      </div>
    </div>`;
    });

    allReels.innerHTML = sum;
}

addData()

allReels.addEventListener('click', function (dets) {
    if (dets.target.className == 'like') {
        
        if (!reels[dets.target.id].isLiked) {
            reels[dets.target.id].likeCount++
            reels[dets.target.id].isLiked = true
        } else {
            reels[dets.target.id].likeCount--
            reels[dets.target.id].isLiked = false
        }

        addData()
    }

    if (dets.target.classList.contains('follow-btn')) {
        let idx = dets.target.id;

        if (!reels[idx].isFollowed) {
            reels[idx].isFollowed = true;
        } else {
            reels[idx].isFollowed = false;
        }

        addData()
    }
})