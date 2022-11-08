const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const main = document.querySelector("main")
render()

function render() {
    for (let i = 0; i < posts.length; i++){
        main.innerHTML += `
            <section class="user-info">
                <div class="user-profile">
                    <img src=${posts[i].avatar} class="profile-pic">
                </div>
                <div class="name-loc">
                    <h4 class="user-name">${posts[i].name}</h4>
                    <p class="user-loc">${posts[i].location}</p>
                </div>
            </section>
            <section class="post">
                <img src=${posts[i].post} class="post-img">
                <div class="post-actions">
                    <img src="images/icon-heart.png" class="actions" id="like-icon">
                    <img src="images/icon-comment.png" class="actions">
                    <img src="images/icon-dm.png" class="actions">
                </div>
                <div>
                    <h4 class="likes">${posts[i].likes} likes</h4>
                </div>
                <div class="caption">
                    <h4 class="user-name">${posts[i].username}</h4>
                    <p>${posts[i].comment}</p>
                </div>
                <div class="end"></div>
            </section>
        `
    }
}