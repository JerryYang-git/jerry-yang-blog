// which nav has active
let navs = document.querySelectorAll('.nav-item');
let pagePath = window.location.pathname;
for (let nav of navs) {
  let navPath = nav.getAttribute("data-path");
  if (navPath && navPath === pagePath) {
    nav.className = "nav-item active";
  }
}


var pjax = new Pjax({
  elements: "#pjax-a",
  selectors: ["title", ".flex-container", ".navbar", "meta[name=description]"],
  cacheBust: false
})
document.addEventListener('pjax:send', NProgress.start)
document.addEventListener('pjax:complete', NProgress.done);
document.addEventListener('pjax:success', function () {
  LoadFancybox();
});