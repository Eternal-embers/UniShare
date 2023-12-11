/* 点击清空图标清空搜索框的内容 */
var clean = document.querySelector('.nav-search-clean');
var search = document.getElementById('search');

clean.addEventListener('click', () => {
    search.value = "";
});

/* 设置搜索提交的条件：搜索内容不为空 */
function check() {
    var keyword = search.value.trim(); // 使用trim()方法去除输入值的前后空格

    if (keyword === "") {
        alert("搜索内容为空！");
        search.value = "";
        return false; // 阻止表单提交
    } else {
        return true; // 允许表单提交
    }
}
