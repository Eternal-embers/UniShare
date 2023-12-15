/* 获取body对象 */
var body;
var header;
var recommand;
document.addEventListener('DOMContentLoaded', function () {
    body = document.body;
    header = document.querySelector('.header');
    recommand = document.querySelector('.recommand');
});

/* 切换到暗色主题 */
function night_mode() {
    body.classList.add('night-mode');
    header.classList.add('header-dark');
    recommand.classList.add('recommand-dark');
}

function light_mode() {
    body.classList.remove('night-mode');
    header.classList.remove('header-dark');
    recommand.classList.remove('recommand-dark');
}