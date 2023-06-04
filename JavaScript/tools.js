let navBar = document.querySelector(".nav-bar");
//Could I possibly just copy and paste the code and use an index?

function SetNavBar(count) {
  const { title, classOne, classTwo, classThree, classFour } = details;
  navBar.innerHTML = `<section class="heading">
<h1 class="main-head">${details[count].title}</h1>
</section>
<section class="tabs">
<!--Container-->
<ul class="links">
  <!--Indvidual Links-->
  <li>
    <a class="${details[count].classHome}" href="/index.html">Homepage</a>
  </li>
  <li><a class="${details[count].classBlog}" href="/HTML/blogs.html">Blogs</a></li>
  <li><a class="${details[count].classDesign}" href="/HTML/design.html">Designs</a></li>
  <li>
    <a class="${details[count].classPort}" href="/HTML/portfolio.html">Portfolio</a>
  </li>
  <li><a class="${details[count].classEssay}" href="/HTML/essays.html">Essays</a></li>
</ul>
</section>`;
}
let blogSection = document.querySelector(".blog");

const genBlogPosts = () => {
  blogSection.innerHTML = blogInfo
    .map((blogPost) => {
      const { icon, link, heading, desc, date } = blogPost;
      return `<article class="blog-post">
    <img
      src="${icon}"
      alt=""
      class="blog-img"
    />
    <a href="${link}" class="blog-head"
      >${heading}</a
    >
    <p class="blog-desc">
      ${desc}
    </p>
    <p class="blog-date">${date}</p>
  </article>`;
    })
    .join("");
};

let homeInfo = document.querySelector(".info-sect");

const genWebInfo = () => {
  homeInfo.innerHTML = homeData
    .map((homeDisplay) => {
      const { title, img, link, desc } = homeDisplay;
      return `<section class="home-info">
    <h2 class="sub-head">
      <a class="head-link" id="blog-tab" href="${link}"
        >${title}</a
      >
    </h2>
    <img
      class="home-image"
      id="blog-image"
      src="${img}"
      alt="Blog image"
    />

    <p class="desc" >
      ${desc}
    </p>
  </section>`;
    })
    .join("");
};
