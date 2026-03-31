// 公共脚本：导航菜单切换 + 当前页高亮
(function () {
  var navToggle = document.querySelector(".nav-toggle");
  var navMenu = document.querySelector(".nav-menu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      navMenu.classList.toggle("open");
    });
  }

  var current = window.location.pathname.split("/").pop() || "index.html";
  var links = document.querySelectorAll(".nav-menu a");
  links.forEach(function (link) {
    var href = link.getAttribute("href");
    if (href === current) {
      link.classList.add("active");
    }
  });
})();
