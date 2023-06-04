//Nav Bar Information:
const details = [
  {
    title: "Blog Section",
    classHome: "home-links",
    classBlog: "home-links active",
    classDesign: "home-links",
    classPort: "home-links",
    classEssay: "home-links",
  },
  {
    title: "Design Section",
    classHome: "home-links",
    classBlog: "home-links",
    classDesign: "home-links active",
    classPort: "home-links",
    classEssay: "home-links",
  },
  {
    title: "Portfolio Section",
    classHome: "home-links",
    classBlog: "home-links",
    classDesign: "home-links",
    classPort: "home-links active",
    classEssay: "home-links",
  },
  {
    title: "Essay Section",
    classHome: "home-links",
    classBlog: "home-links",
    classDesign: "home-links",
    classPort: "home-links",
    classEssay: "home-links active",
  },
  {
    title: "Blog Posts",
    classHome: "home-links",
    classBlog: "home-links",
    classDesign: "home-links",
    classPort: "home-links",
    classEssay: "home-links ",
  },
];

//Blog Posts Information:
const blogInfo = [
  {
    icon: "/Icons/powerIcon.png",
    link: "/HTML/BlogPosts/blog-post1.html",
    heading: "WEEK #01 - INTRODUCTION TO INTERACTIVE MEDIA",
    desc: "I discuss a few readings and touch on my experience with GitHub.",
    date: "FEBRUARY 27, 2023",
  },
  {
    icon: "/Icons/htmlIcon.png",
    link: "",
    heading: "WEEK #02 - HTML FUNDAMENTALS",
    desc: "My first interaction with HTML as a programming language.",
    date: "MARCH 6, 2023",
  },
  {
    icon: "/Icons/cssIcon.png",
    link: "",
    heading: "WEEK #03 - WEBSITE PROGRESS & CSS FUNDAMENTALS",
    desc: "My first interaction with HTML as a programming language.",
    date: "MARCH 10, 2023",
  },
  {
    icon: "/Icons/jsIcon.png",
    link: "",
    heading: "WEEK #04 - USER INTERFACE AND JAVASCRIPT",
    desc: "I dive a little deeper into UI and I also reflect on my experience with JavaScript.",
    date: "MARCH 20, 2023",
  },
  {
    icon: "/Icons/tickIcon.png",
    link: "",
    heading: "WEEK #05 & #06 BLOGS & REFLECTION",
    desc: "My final analysis before submission",
    date: "April 15, 2023",
  },
  {
    icon: "/Icons/wwwIcon.png",
    link: "",
    heading: "WEEK #07 - FINAL THOUGHTS ON MY WEBSITE",
    desc: "I discuss my website and some of the concepts that I have worked with throughout my progress.",
    date: "April 7, 2023",
  },
];

const homeData = [
  {
    title: "Blog Section",
    link: "/HTML/blogs.html",
    img: "/Icons/blog.png",
    desc: "Discussions, reflections and thoughts during my first semester of Interactive Media III in 2023.",
  },
  {
    title: "Design Section",
    link: "/HTML/design.html",
    img: "/Icons/design.png",
    desc: "My thought process when designing this website.",
  },
  {
    title: "Portfolio",
    link: "/HTML/portfolio.html",
    img: "/Icons/profile.png",
    desc: "A bit of information about myself and also the work that I am particularly proud of.",
  },
  {
    title: "Essay Section",
    link: "/HTML/essays.html",
    img: "/Icons/essay.png",
    desc: "The essays that I have completed during this semester.",
  },
];

const footerCode = `<section class="main-links">
<section class="web-foot">
  <h3 class="foot-head" id="web-head">Website</h3>
  <section class="link-group">
    <ul class="web-links">
      <li><a href="/index.html" class="foot-links">Homepage</a></li>
      <li><a href="/HTML/blogs.html" class="foot-links">Blogs</a></li>
      <li>
        <a href="/HTML/design.html" class="foot-links">Designs</a>
      </li>
      <li>
        <a href="/HTML/portfolio.html" class="foot-links">Portfolio</a>
      </li>
      <li><a href="/HTML/BlogPosts/" class="foot-links">Essays</a></li>
    </ul>
  </section>
</section>
</section>`;
