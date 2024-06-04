/**
 * JS cho chức năng trang bảng chữ cái
 */

import vocab_detail from '/Controllers/viewsController/hira_kata/model/vocab_detail.js';

class application_controller {
    //thẻ popup để lấy định nghĩa
    popup = document.createElement('div');
    exit = document.createElement('button');
    //click vào chữ để active một hàng định nghĩa
    popup_a_definition(alphabet_name) {
        var characters = document.querySelectorAll('#wrapper .table-of-characters .line-of-characters .character');
        characters.forEach(char => {
            char.addEventListener('click', () => {
                var text_inside_the_card = char.querySelector("a").textContent;
                var group_char_className = char.parentNode.classList[1];
                this.popup_model(text_inside_the_card, group_char_className, alphabet_name);
            });
        });
    }

    //init the model card
    init_model_card() {
        fetch('/models/hira_kata/hira_kata_model.html')
            .then((res) => {
                return res.text();
            })
            .then((res) => {
                this.popup.innerHTML = "" + res;
            })
            .catch((err) => {
                console.log(err);
            })
        //the definition card 
        {
            this.popup.style.position = "fixed";
            this.popup.style.height = "100%";
            this.popup.style.width = "100%";
            this.popup.style.top = "0";
            this.popup.style.backgroundColor = "rgba(0,0,0,0.5)";
            this.popup.style.zIndex = "-1";
            this.popup.id = "popup";
        }

        //the hide model button
        {
            this.exit.style.position = "fixed";
            this.exit.style.height = "3rem";
            this.exit.style.width = "70vw";
            this.exit.style.lineHeight = "3rem";
            this.exit.style.top = "5vh";
            this.exit.style.left = "50vw";
            this.exit.style.transform = "translateX(-50%)";
            this.exit.innerHTML = "&#128281;";
            this.exit.style.fontSize = "2rem";
            this.exit.style.borderRadius = "1rem";
            this.exit.style.zIndex = "-1";
            this.exit.id = "exit";
        }

        //init exit button, click to hide popup
        this.exit.addEventListener("click", () => {
            this.hide_model();
        })
        //append popup and button to body 
        document.querySelector('body').appendChild(this.popup);
        document.querySelector('body').appendChild(this.exit);

    }

    //init content for model card
    init_content_card(current_char, group_char_className, alphabet_name) {
        //find the name of Naruto character in database
        fetch('/anime_alphabet.json')
            .then(response => response.json())
            .then(data => {
                let class_names_array = data[group_char_className.toUpperCase()];
                //init the content for the model
                Object.entries(class_names_array).forEach(([char, value_as_char]) => {
                    if (alphabet_name == "hira") {
                        this.add_content_to_card(value_as_char[1], value_as_char[0], char, current_char, alphabet_name);
                    } else {
                        this.add_content_to_card(value_as_char[2], value_as_char[0], char, current_char, alphabet_name);
                    }
                });
            })
            .catch(error => console.error('Lỗi:', error));
    }

    //add content to card
    add_content_to_card(hira_kata_char, naruto_name, romanji_char, current_char, alphabet_name) {
        if (alphabet_name == "hira") {
            vocab_detail.add_hira_vocab_detail(hira_kata_char, naruto_name, romanji_char, current_char);
        } else if (alphabet_name == "kata") {
            vocab_detail.add_kata_vocab_detail(hira_kata_char, naruto_name, romanji_char, current_char);
        }
    }


    //popup the model
    popup_model(text_inside_the_card, group_char_className, alphabet_name) {
        this.init_model_card();
        //init the content
        this.init_content_card(text_inside_the_card, group_char_className, alphabet_name);
        this.popup.style.zIndex = "2";
        this.exit.style.zIndex = "2";
    }

    //delete the popup
    hide_model() {
        this.popup.style.zIndex = "-1";
        this.exit.style.zIndex = "-1";
    }
}

export default new application_controller;