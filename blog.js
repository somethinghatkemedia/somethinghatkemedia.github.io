fetch('blogs.json')
  .then(res => res.json())
  .then(blogs => {
    const params = new URLSearchParams(window.location.search);
    const blogId = params.get('id');

    if (blogId) {
      // Render full blog post
      const blog = blogs.find(b => b.id === blogId);
      if (!blog) {
        document.getElementById('single-blog').innerHTML = "<h2>Blog not found.</h2>";
        document.getElementById('single-blog').style.display = "block";
        return;
      }

      document.getElementById('page-title').innerText = blog.title;
      document.getElementById('blog-title').innerText = blog.title;
      document.getElementById('blog-author').innerText = `By ${blog.author} • ${blog.date}`;
      document.getElementById('blog-image').src = blog.image;
      document.getElementById('blog-image').alt = blog.title;
      document.getElementById('blog-content').innerHTML = blog.content;
      if (blog.externalLink) {
        document.getElementById('blog-link').innerHTML = `<a href="${blog.externalLink}" target="_blank">External Resource</a>`;
      }

      document.getElementById('single-blog').style.display = "block";
      document.getElementById('blog-list').style.display = "none";
    } else {
      // Render blog cards
      const container = document.getElementById('blog-list');
      blogs.forEach(blog => {
        const card = document.createElement('div');
        card.className = 'col-md-4';
        card.innerHTML = `
          <div class="blog-card">
            <img src="${blog.image}" alt="${blog.title}" class="blog-image" />
            <h3 class="blog-title">${blog.title}</h3>
            <p class="blog-summary">${blog.summary}</p>
            <a href="blog.html?id=${blog.id}" class="btn btn-outline-light">Read More</a>
          </div>
        `;
        container.appendChild(card);
      });

      document.getElementById('single-blog').style.display = "none";
      document.getElementById('blog-list').style.display = "flex";
    }
  })
  .catch(err => {
    console.error("Blog load error:", err);
    document.body.innerHTML = "<h2 style='text-align:center;'>Blog load error.</h2>";
  });
