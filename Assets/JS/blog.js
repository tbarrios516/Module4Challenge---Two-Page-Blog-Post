    document.addEventListener('DOMContentLoaded', function () {
    const postsContainer = document.getElementById('postsContainer');
    const posts = JSON.parse(localStorage.getItem('posts')) || [];

    if (posts.length === 0) {
        postsContainer.innerHTML = '<p>No blog posts available.</p>';
    } else {
        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p><strong>By:</strong> ${post.username}</p>
                <p>${post.content}</p>
            `;
            postsContainer.appendChild(postElement);
        });
    }
});
