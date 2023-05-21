//Nav Bar Information:
const details = [
  {
    title: "Blog Section",
    classActive: "home-links active",
    classInactive: "home-links",
  },
  {
    title: "Design Section",
    classActive: "home-links active",
    classInactive: "home-links",
  },
];

const code = `<section class="heading">
<h1 class="main-head">${details[0].title}</h1>
</section>
<section class="tabs">
<!--Container-->
<ul class="links">
  <!--Indvidual Links-->
  <li>
    <a class="${details[0].classInactive}" href="/index.html">Homepage</a>
  </li>
  <li><a class="${details[0].classActive}" href="/HTML/blogs.html">Blogs</a></li>
  <li><a class="home-links" href="/HTML/design.html">Designs</a></li>
  <li>
    <a class="home-links" href="/HTML/portfolio.html">Portfolio</a>
  </li>
  <li><a class="home-links" href="/HTML/essays.html">Essays</a></li>
</ul>
</section>`;

//Blog Posts Information:
