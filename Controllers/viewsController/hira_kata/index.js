/**
 * JS cho hiển thị trang bảng chữ cái
 */
import application_controller from '/Controllers/applicationController/hira_kata/hira_kata_application_controller.js';


// Hiển thị trạng thái loading
function showLoading() {
    // Code để hiển thị biểu tượng hoặc văn bản "loading" trên giao diện người dùng
    document.querySelector("#alphabet").innerHTML = `<img src="/assets/img/loading.gif" alt="icon_app" style="display: block; margin: 0 auto;">
    `
  }
  
  // Ẩn trạng thái loading
  function hideLoading() {
    // Code để ẩn biểu tượng hoặc văn bản "loading" trên giao diện người dùng
  }
  



//preload cho web
const hiraganaRomanjiArray = [
    'a', 'i', 'u', 'e', 'o', 'ka', 'ki', 'ku', 'ke', 'ko', 'sa', 'shi', 'su', 'se', 'so', 'ta', 'chi', 'tsu', 'te', 'to', 'na', 'ni', 'nu', 'ne', 'no', 'ha', 'hi', 'fu', 'he', 'ho', 'ma', 'mi', 'mu', 'me', 'mo', 'ya', 'yu', 'yo', 'ra', 'ri', 'ru', 're', 'ro', 'wa', 'wo', 'n', 'ga', 'gi', 'gu', 'ge', 'go', 'za', 'ji', 'zu', 'ze', 'zo', 'da', 'dji', 'dzu', 'de', 'do', 'ba', 'bi', 'bu', 'be', 'bo', 'pa', 'pi', 'pu', 'pe', 'po',
];
const preloadImage = (char) => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = `https://raw.githubusercontent.com/konanangel/J4F_database/main/anime_alphabet/${char.toUpperCase()}.jpg`;
        img.onload = () => resolve(img);
        img.onerror = reject;
    });
};

const preLoadHiraTutorial = (char) => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = `https://raw.githubusercontent.com/konanangel/J4F_database/main/hira_writing_tutorial/${char}.gif`;
        img.onload = () => resolve(img);
        img.onerror = reject;
    });
};




const preLoadKataTutorial = (char) => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = `https://raw.githubusercontent.com/konanangel/J4F_database/main/kata_writing_tutorial/${char}.gif`;
        img.onload = () => resolve(img);
        img.onerror = reject;
    });
};
const promise1 = Promise.all(hiraganaRomanjiArray.map(preloadImage));
const promise2 = Promise.all(hiraganaRomanjiArray.map(preLoadHiraTutorial));
const promise3 = Promise.all(hiraganaRomanjiArray.map(preLoadKataTutorial));


showLoading();
Promise.all([promise1, promise2, promise3])
    .then(([result1, result2, result3]) => {
        // Xử lý kết quả của cả ba Promise ở đây
        hideLoading();
        document.querySelector('header .choose-alphabet-list .choose-alphabet-hira').addEventListener('click', function () {
            fetchHiraAlphabet();
        });
        document.querySelector('header .choose-alphabet-list .choose-alphabet-kata').addEventListener('click', function () {
            fetchKataAlphabet();
        });
        fetchHiraAlphabet();
    })
    .catch(error => {
        alert("Error!")
    });



let fetchHiraAlphabet = function () {
    fetch('/Views/hira_kata/hira_alphabet.html')
        .then((res) => {
            return res.text();
        })
        .then((res) => {
            document.getElementById("alphabet").innerHTML = "" + res;
        })
        .catch((err) => {
            console.log(err);
        })
    setTimeout(() => {
        application_controller.popup_a_definition("hira");
    }, 200);
}

let fetchKataAlphabet = function () {
    fetch('/Views/hira_kata/kata_alphabet.html')
        .then((res) => {
            return res.text();
        })
        .then((res) => {
            document.getElementById("alphabet").innerHTML = "" + res;
        })
        .catch((err) => {
            console.log(err);
        })
    setTimeout(() => {
        application_controller.popup_a_definition("kata");
    }, 200);
}






