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

    login_page.style.display = "none";//隐藏登陆界面
    login_ico.style.display = 'none';//隐藏登录图标
    user.style.display = "flex";//显示用户图标

    // 弹窗提示
    // 获取弹窗元素
    let popup = document.getElementById('login-popup');
    popup.style.display = 'flex';

    // 6秒后隐藏弹窗并移除动画类名
    setTimeout(function () {
        popup.style.display = 'none';
    }, 6000);
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

/* 切换到短信登录页面 */
var cur_login = 0;//0 表示密码登录，1 表示短信登录
var password_login = document.getElementById('password-login');
var authcode_login = document.getElementById('authcode-login');
function switch_login() {
    if (cur_login == 0) {
        password_login.style.display = 'none';
        authcode_login.style.display = 'flex';
        cur_login = 1;
    }
    else {
        password_login.style.display = 'flex';
        authcode_login.style.display = 'none';
        cur_login = 0;
    }
}

/* 国家手机区域码的列表显示 */
var country_code = document.querySelector('.country-code');
var country_code_list = document.querySelector('.country-code-list');
var country_code_list_decs = document.querySelectorAll('.country-code-list-dec');

function open_country_list() {
    country_code_list.style.display = 'block';
    country_code_list_decs.forEach((element) => {
        element.addEventListener('click', selectCountryCode);
    });
}

function close_country_list() {
    country_code_list.style.display = 'none';
    country_code_list_decs.forEach((element) => {
        element.removeEventListener('click', selectCountryCode);
    });
}

function selectCountryCode() {
    country_code.textContent = this.querySelector('span:nth-child(2)').textContent;
}
