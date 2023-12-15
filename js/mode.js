/* 获取body对象 */
var body;
var header;
document.addEventListener('DOMContentLoaded', function () {
    body = document.body;
    header = document.querySelector('.header');
});

/* 切换到暗色主题 */
function night_mode() {
    body.classList.add('night-mode');
    header.classList.add('header-dark');
}

function light_mode() {
    body.classList.remove('night-mode');
    header.classList.remove('header-dark');
}