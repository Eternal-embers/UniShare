var sidebar = document.querySelector('.sidebar');
var sidebar_icon = document.querySelector('.sidebar-icon');
var sidebar_check = document.querySelector('.sidebar input');
var switch_icon = document.querySelector('.switch-icon');

sidebar_icon.addEventListener('click', () => {
    if (sidebar_check.checked)
        sidebar_check.checked = false;//关闭sidebar
    else
        sidebar_check.checked = true;//打开sidebar
})

/* 更换侧边栏图标 */
var icon = 0;
switch_icon.addEventListener('click', () => {
    icon = (icon + 1) % 21;
    sidebar_icon.style.backgroundImage = `url("./images/sidebar/${icon}.webp")`;
})



/* 实现侧边栏的拖拽 */
var offsetX, offsetY;
sidebar_icon.addEventListener('dragstart', function (e) {
    offsetX = e.offsetX;//获取水平偏移量
    offsetY = e.offsetY;//获取垂直偏移量
});
sidebar_icon.addEventListener('dragend', function (e) {
    /* 计算拖拽后侧边栏的位置 */
    var newX = e.clientX - offsetX;
    var newY = e.clientY - offsetY;

    // 计算边界条件
    var maxX = window.innerWidth - 70;
    var maxY = window.innerHeight - 70;

    // 确保侧边栏不超出左右边界
    newX = Math.max(0, Math.min(newX, maxX));

    // 确保侧边栏不超出上下边界
    newY = Math.max(0, Math.min(newY, maxY));

    // 设置侧边栏的位置
    sidebar.style.left = newX + 'px';
    sidebar.style.top = newY + 'px';
});

/* 消除拖拽时产生的禁止图标🚫，禁止整个网页中的dragenter和dragover事件 */
document.addEventListener('dragenter', function (e) {
    e.preventDefault();
    e.stopPropagation();
    return false;
});

document.addEventListener('dragover', function (e) {
    e.preventDefault();
    e.stopPropagation();
    return false;
});