/* 上传头像 */
var image_input = document.querySelector('.image-input');//获取选取文件的input元素
var user_image = document.querySelector('#user-image');

image_input.addEventListener('change', function () {
    var file = this.files[0]; // 获取选取的文件
    var reader = new FileReader(); // 创建一个文件读取器对象

    reader.onload = function (e) {
        user_image.style.backgroundImage = `url(${e.target.result})`; // 将选取的图片作为user_image的背景图片
    }

    reader.readAsDataURL(file); // 读取文件内容并将其作为Data URL传递给onload函数
});

/* 判断用户是否上传头像,如果存在头像则不显示用户图标 */
// 创建一个观察器实例并传入回调函数
var observer = new MutationObserver(function (mutationsList, observer) {
    // 检查user_image的backgroundImage属性是否存在
    if (user_image.style.backgroundImage !== 'none') {
        user_image.classList.remove('fa-regular', 'fa-user'); // 移除fa-regular和fa-user类
        user_image.style.border = "none";
    }
});

// 配置观察器的参数
var config = { attributes: true, attributeFilter: ['style'] };

// 传入目标节点和观察器的配置
observer.observe(user_image, config);



/* 编辑个人信息 */
var userCard = document.querySelector('.user-card');
var inputs = userCard.querySelectorAll('input');

inputs.forEach((element) => {
    let parent = element.parentNode; // 获取其父节点
    let span = parent.querySelector('span'); // 获取内容节点span
    let svg = parent.querySelector('span+svg'); // 获取span元素后的svg元素

    /* 以下为隐式闭包，保存了svg、element、span的引用 */

    /* 监听编辑图标 */
    svg.addEventListener('click', () => {
        span.style.opacity = '0';
        element.style.display = 'block';
        element.focus();//将鼠标的焦点移动到输入框中
    });

    /* 监听编辑框失去焦点则隐藏 */
    element.addEventListener('blur', () => {
        element.style.display = 'none';
        span.style.opacity = '1';
    })

    /* 监听内容的编辑，当编辑框失去焦点时将内容赋给span元素 */
    element.addEventListener('change', (event) => {
        span.textContent = event.target.value;
        element.style.display = 'none';
        span.style.opacity = '1';
    });

    /*
    采用显式闭包在循环中保存element和span
    (function () {
            console.log("test");
    })();//立即执行的函数表达式
    (function (element, span) {
        element.addEventListener('input', (event) => {
            span.textContent = event.target.value;
        });
    })(element, span);
    */
});

/* 处理手机号码的显示 */
/* 原生js不支持监听span元素的内容变化，使用jQuery监听span元素的内容变化 */
$('.phone-num').on('DOMNodeInserted', function () {
    console.log($(this).val);
    //当phone_num的内容发生变化
    var value = $(this).text();
    var visiblePart = value.substring(0, 3);
    var hiddenPart = value.substring(3, value.length - 1).replace(/\d/g, '*');
    var lastDigit = value.slice(-1);
    $(this).text(visiblePart + hiddenPart + lastDigit);
    phone = $(this).text;
});


$('.password-num').on('DOMNodeInserted', function () {
    var password = $(this).text();
    var hiddenPassword = password.split('').map(() => '*').join('');
    $(this).text(hiddenPassword);
})