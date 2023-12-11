var news = document.querySelector('.news');
var slider = document.querySelector('.slider');
var pre = document.querySelector('.pre');
var next = document.querySelector('.next');
var slideWidth = document.querySelector('.slide-item').offsetWidth;
var maxOffset = slider.childElementCount - 1;//最大偏移量，以图片宽度为单位
var currentSlide = 0;//取值为 0 ~ maxOffset
var skipItems = document.querySelectorAll('.skip-item');//获取目录对象的数组
skipItems[0].classList.add('current-item');

var isMouseOver = false;

/* 图片轮播 */
var carousel = setInterval(() => {
    if (!isMouseOver) {
        skipItems[currentSlide].classList.remove('current-item');//移除跳转目录的当前位置
        currentSlide = (currentSlide + 1) % (maxOffset + 1);
        slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
        skipItems[currentSlide].classList.add('current-item');//将跳转目录显示下一个所在位置
    }
}, 5000);

/* 鼠标放置到图片上时显示前进和后退按钮 */
news.addEventListener('mouseover', () => {
    isMouseOver = true;
    pre.style.transform = `translateX(2.5vw)`;
    next.style.transform = `translateX(-2.5vw)`;
});

/* 鼠标从图片上移走时不显示前进和后退按钮 */
news.addEventListener('mouseout', () => {
    isMouseOver = false;
    pre.style.transform = `translateX(-2.5vw)`;
    next.style.transform = `translateX(2.5vw)`;
});


/* 切换到前一张图片 */
pre.addEventListener('click', () => {
    skipItems[currentSlide].classList.remove('current-item');//移除跳转目录的当前位置
    if (currentSlide > 0) {
        currentSlide--;
        slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }
    else {//跳转到最后一张
        currentSlide = maxOffset;
        slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }
    skipItems[currentSlide].classList.add('current-item');//将跳转目录显示下一个所在位置
});


/* 切换到后一张图片 */
next.addEventListener('click', () => {
    skipItems[currentSlide].classList.remove('current-item');//移除跳转目录的当前位置
    if (currentSlide < maxOffset) {
        currentSlide++;
        slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }
    else {//跳转到第一张
        currentSlide = 0;
        slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }
    skipItems[currentSlide].classList.add('current-item');//将跳转目录显示下一个所在位置
});

/* 点击跳转目录进行跳转 */
skipItems.forEach((skipitem, index, content) => {
    skipitem.addEventListener('click', () => {
        content[currentSlide].classList.remove('current-item');//移除跳转目录的当前位置
        currentSlide = index;
        slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
        content[currentSlide].classList.add('current-item');//将跳转目录显示下一个所在位置
    })
})

