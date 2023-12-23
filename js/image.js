window.onload = function () {
    var container = document.querySelector(".image-container");
    var images = container.querySelectorAll('.image-container img')
    var links = container.querySelectorAll('.image-container a');

    /* 图片的懒加载 */
    function loadingImage(entries) {
        for (let i of entries) {
            if (i.isIntersecting) {
                let image = i.target;
                let src = image.getAttribute('data-src');
                image.setAttribute('src', src);
                observer.unobserve(image);

                image.parentNode.setAttribute('href', src);
            }
        }
    }

    const observer = new IntersectionObserver(loadingImage, {
        root: null, // 使用默认的根元素
        rootMargin: '0px', // 根元素的margin
        threshold: 0.1// 元素可见度达到多少时触发回调函数
    });

    for (let i of images) {
        observer.observe(i);
    }
}

