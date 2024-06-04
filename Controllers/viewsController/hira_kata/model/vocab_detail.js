class vocab_detail {
    init_hira_vocab_card(hira_kata_char, naruto_name, romanji_char, current_char) {
        var popup_card = document.querySelector("#popup-card");
        var new_card = document.createElement("div");
        new_card.className = "carousel-item";
        //hỏ?//
        hira_kata_char = "" + hira_kata_char;
        naruto_name = "" + naruto_name;
        romanji_char = "" + romanji_char;
        //hỏ?//
        fetch('/models/hira_kata/hira_kata_card.html')
            .then((res) => {
                return res.text();
            })
            .then((res) => {
                new_card.innerHTML = ("" + res);
                new_card.querySelector('.left-col .anime img').src = `/anime_alphabet/${romanji_char.toUpperCase()}.jpg`;
                new_card.querySelector('.right-col .tutorial img').src = `/hira_writing_tutorial/${romanji_char.toLowerCase()}.gif`;
                new_card.querySelector('.left-col .hira-kata-char').innerHTML = hira_kata_char;
                new_card.querySelector('.right-col .pronoun').innerHTML = "\"" + romanji_char + "\"";
                new_card.querySelector('.left-col .anime-description').innerHTML = naruto_name;
                //play sound
                var audio = new Audio(`/pronounciation/${romanji_char.toLowerCase()}.mp3`);
                // Lắng nghe sự kiện click trên nút
                new_card.querySelector('.right-col .read-aloud').addEventListener('click', function () {
                    audio.play(); // Chạy âm thanh
                });

                if (romanji_char.toLowerCase() == current_char) {
                    new_card.classList.add("active");
                }

            })
            .catch((err) => {
                console.log(err);
            });
        popup_card.appendChild(new_card);
    }

    init_kata_vocab_card(hira_kata_char, naruto_name, romanji_char, current_char) {
        var popup_card = document.querySelector("#popup-card");
        var new_card = document.createElement("div");
        new_card.className = "carousel-item";
        //hỏ?//
        hira_kata_char = "" + hira_kata_char;
        naruto_name = "" + naruto_name;
        romanji_char = "" + romanji_char;
        //hỏ?//
        fetch('/models/hira_kata/hira_kata_card.html')
            .then((res) => {
                return res.text();
            })
            .then((res) => {
                new_card.innerHTML = ("" + res);
                new_card.querySelector('.left-col .anime img').src = `/anime_alphabet/${romanji_char.toUpperCase()}.jpg`;
                new_card.querySelector('.right-col .tutorial img').src = `/kata_writing_tutorial/${romanji_char.toLowerCase()}.gif`;
                new_card.querySelector('.left-col .hira-kata-char').innerHTML = hira_kata_char;
                new_card.querySelector('.right-col .pronoun').innerHTML = "\"" + romanji_char + "\"";
                new_card.querySelector('.left-col .anime-description').innerHTML = naruto_name;
                //play sound
                var audio = new Audio(`/pronounciation/${romanji_char.toLowerCase()}.mp3`);
                // Lắng nghe sự kiện click trên nút
                new_card.querySelector('.right-col .read-aloud').addEventListener('click', function () {
                    audio.play(); // Chạy âm thanh
                });

                if (romanji_char.toLowerCase() == current_char) {
                    new_card.classList.add("active");
                }

            })
            .catch((err) => {
                console.log(err);
            });
        popup_card.appendChild(new_card);
    }

    add_hira_vocab_detail(hira_kata_char, naruto_name, romanji_char, current_char) {
        setTimeout(() => {
            this.init_hira_vocab_card(hira_kata_char, naruto_name, romanji_char, current_char);
        }, 100);
    }
    add_kata_vocab_detail(hira_kata_char, naruto_name, romanji_char, current_char) {
        setTimeout(() => {
            this.init_kata_vocab_card(hira_kata_char, naruto_name, romanji_char, current_char);
        }, 100);
    }
}

export default new vocab_detail;

