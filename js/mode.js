/* 获取body对象 */
var body;
var header;
var recommand;
var footer;
var sidebar;
var main;
document.addEventListener('DOMContentLoaded', function () {
    body = document.body;
    header = document.querySelector('.header');
    recommand = document.querySelector('.recommand');
    footer = document.querySelector('.footer');
    sidebar = document.querySelector('.sidebar');
    main = document.querySelector('.main');
});

/* 切换到暗色主题 */
function night_mode() {
    body.classList.add('night-mode');
    header.classList.add('header-dark');
    recommand.classList.add('recommand-dark');
    footer.classList.add('footer-dark');
    sidebar.classList.add('sidebar-dark');
    main.classList.add('main-dark');
}

function light_mode() {
    body.classList.remove('night-mode');
    header.classList.remove('header-dark');
    recommand.classList.remove('recommand-dark');
    footer.classList.remove('footer-dark');
    sidebar.classList.remove('sidebar-dark');
    main.classList.remove('main-dark');
}