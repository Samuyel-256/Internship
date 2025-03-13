document.getElementById('fetchBtn').addEventListener('click', fetchPosts);

async function fetchPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();
        displayPosts(posts);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function displayPosts(posts) {
    const postContainer = document.getElementById('postContainer');
    postContainer.innerHTML = '';

    posts.slice(0, 10).forEach(post => {  // Displaying only the first 10 posts
        const postDiv = document.createElement('div');
        postDiv.className = 'post';
        
        postDiv.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        `;
        
        postContainer.appendChild(postDiv);
    });
}
