let navBar = document.querySelector(".nav-bar");

function SetNavBar() {
  navBar.innerHTML = `<section class="heading">
  <h1 class="main-head">${"Design Section"}</h1>
</section>
<section class="tabs">
  <!--Container-->
  <ul class="links">
    <!--Indvidual Links-->
    <li>
      <a class="home-links active" href="/index.html">Homepage</a>
    </li>
    <li><a class="home-links" href="/HTML/blogs.html">Blogs</a></li>
    <li><a class="home-links" href="/HTML/design.html">Designs</a></li>
    <li>
      <a class="home-links" href="/HTML/portfolio.html">Portfolio</a>
    </li>
    <li><a class="home-links" href="/HTML/essays.html">Essays</a></li>
  </ul>
</section>`;
}
