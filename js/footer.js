/* 切换底部的迷你皮卡图片 */
var pekka = document.querySelector('.pekka');
var pekka_index = 0;

setInterval(() => {
    pekka_index = (pekka_index + 1) % 3;
    pekka.style.backgroundImage = `url("./images/footer/${pekka_index}.webp")`;
}, 5000);

/* 切换底部的动漫人物图片 */
var anime_img = document.querySelector('.anime-img');
var anime_index = 0;
setInterval(() => {
    anime_index = (anime_index + 1) % 3;
    anime_img.style.backgroundImage = `url("./images/footer/role${anime_index}.png")`;
}, 15000);