/* 登录功能 */
var login_page = document.querySelector('.login-page');
var login_ico = document.querySelector('.login');
var user = document.querySelector('.user');

function loginPage() {
    login_page.style.display = "flex";
}

function login() {
    // 获取用户名和密码输入框的值
    var username = document.querySelector('.login-page input[type="text"]').value;
    var password = document.querySelector('.login-page input[type="password"]').value;

    // 弹窗提示
    // 获取弹窗元素
    let popup = document.getElementById('login-popup');
    popup.style.display = 'flex';

    // 6秒后隐藏弹窗并移除动画类名
    setTimeout(function () {
        popup.style.display = 'none';
    }, 6000);

    login_page.style.display = "none";//隐藏登陆界面
    login_ico.style.display = 'none';//隐藏登录图标
    user.style.display = "flex";//显示用户图标
}

function cancelLogin() {
    login_page.style.display = 'none';
}

/* 退出登录 */
function logout() {
    user.style.display = 'none';//隐藏用户图标
    login_ico.style.display = 'flex';

    // 获取弹窗元素
    let popup = document.getElementById('logout-popup');
    popup.style.display = 'flex';

    // 6秒后隐藏弹窗并移除动画类名
    setTimeout(function () {
        popup.style.display = 'none';
    }, 6000);
}