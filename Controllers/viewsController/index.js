/**
 * JS cho hiển thị trang chủ
 */



//nhúng home.html 
{
    fetch('./Views/demo/home.html')
        .then((res) => {
            return res.text();
        })
        .then((res) => {
            document.getElementById("home").innerHTML = res;
        })
        .catch((err) => {
            console.log(err);
        })
    //nhúng hira-kata.html 
    fetch('./Views/demo/hira_kata.html')
        .then((res) => {
            return res.text();
        })
        .then((res) => {
            document.getElementById("hira-kata").innerHTML = res;
        })
        .catch((err) => {
            console.log(err);
        })
}



//check hiệu ứng cuộn lên/xuống để ẩn/hiện header/footer
var lastScrollTop = 0; // Biến lưu trữ vị trí cuộn trang trước đó

window.addEventListener('scroll', function () {
    var currentScrollTop = document.documentElement.scrollTop; // Vị trí cuộn trang hiện tại

    if (currentScrollTop > lastScrollTop) {
        // Người dùng đang cuộn trang xuống
        this.document.querySelector("header").style.transform = "translateY(-100%)";
    } else {
        // Người dùng đang cuộn trang lên
        this.document.querySelector("header").style.transform = "translateY(0)";
    }

    lastScrollTop = currentScrollTop; // Cập nhật vị trí cuộn trang trước đó
});

//hiệu ứng thanh menu header-a-active
const menu_items = document.querySelectorAll("header .study-menu .menu-selection");
menu_items.forEach(item => {
    item.addEventListener("click", function () {
        for (let i = 0; i < menu_items.length; i++) {
            menu_items[i].classList.remove("header-a-active");
        }
        item.classList.add("header-a-active");
    });
});


document.getElementById('hira-kata-a-tab').addEventListener('click', function () {
    document.querySelector("#hira-kata-page .introduction")
});











