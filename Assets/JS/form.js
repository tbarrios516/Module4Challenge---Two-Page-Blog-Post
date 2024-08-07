document.getElementById('blogForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const title = document.getElementById('title').value.trim();
    const content = document.getElementById('content').value.trim();

    if (username === '' || title === '' || content === '') {
        alert('Please complete the form before submitting.');
        return;
    }

    const blogPost = {
        username: username,
        title: title,
        content: content
    };

    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.push(blogPost);
    localStorage.setItem('posts', JSON.stringify(posts));

    window.location.href = 'blog.html';
});
