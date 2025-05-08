const postList = document.getElementById("postList");
const postForm = document.getElementById("postForm");
const fetchButton = document.getElementById("fetchButton");

const renderPosts = (posts) => {
    postList.innerHTML = ""
    posts.forEach((post) => {
        const postElement = document.createElement("div");
        postElement.innerHTML = `
        <h3>${post.title}</h3>`
        <p>${post.body}</p>
        <hr />;
        postList.appendChild(postElement);
    })
};


fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
.then(function(response) {
    const jsonResponse = response.json();
    return jsonResponse;    

})

.then(function(data) {
    renderPosts(data);
})

.catch((error) => console.error("Error fetching posts:", error) )
.finally(() => {
    loadingMessage.style.display = "none"
});

postForm.addEventListener("submit", (event) => {
event.preventDefault(); 

const title = document.getElementById("titleInput").value; 
const body = document.getElementById("bodyInput").value;

fetch("https://jsonplaceholder.typicode.com/posts", {
method: "post",
headers: {"Content-type": "application/json"},
body: json.stringify({title, body})
})
.then(function(){
    const jsonResponse = response.json(); 
    return jsonResponse;    
})
.then((newPost) => {
    alert("Post submitted");
    renderPosts([newPost]);
})
.catch(() => console.err(" Error submitting post:", error));
});

fetchButton.addEventListener("click", () => {
    
})// so much empty
