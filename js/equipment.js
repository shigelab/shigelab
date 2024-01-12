//生成したAPIのURLを指定
var api_url = 'https://script.google.com/macros/s/AKfycbwY1zp_tUJG-2rds0-_mCpYBiRYctkjrUMe_G9q7CJUFwFazcAA_FeMOT0dwhLCESM9pQ/exec';

fetch(api_url)
    .then(function (fetch_data) {
        return fetch_data.json();
    })
    .then(function (json) {
        for (var i in json) {
            if (json[i].name === "end") break;
            else if (json[i].name === "") continue;

            var item_element = document.getElementsByClassName('equipment-item js-based');
            var clone_item_element = item_element[0].cloneNode(true); //元となるHTMLの要素を複製
            clone_item_element.classList.add("item" + i);
            clone_item_element.classList.remove('js-based'); //複製した要素からクラス削除
            if (json[i].image !== "") clone_item_element.querySelector('img').setAttribute('src', 'https://drive.google.com/thumbnail?id=' + json[i].image + '&sz=w1000'); //src属性に取得した画像を設定;
            else clone_item_element.querySelector('img').setAttribute('src', 'image/noimage2.png'); //src属性に取得した画像を設定
            clone_item_element.querySelector('h3').textContent = json[i].name;
            item_element[0].parentNode.appendChild(clone_item_element); //元となるHTMLの要素の後ろに複製した要素を追加

            var popup_element = document.getElementsByClassName('eqp-popup js-based');
            var clone_popup_element = popup_element[0].cloneNode(true); //元となるHTMLの要素を複製
            clone_popup_element.setAttribute("id", ("item" + i));
            clone_popup_element.classList.remove('js-based'); //複製した要素からクラス削除
            if (json[i].image !== "") clone_popup_element.querySelector('img').setAttribute('src', 'https://drive.google.com/thumbnail?id=' + json[i].image + '&sz=w1000'); //src属性に取得した画像を設定;
            else clone_popup_element.querySelector('img').setAttribute('src', 'image/noimage2.png'); //src属性に取得した画像を設定
            clone_popup_element.querySelector('h2').textContent = json[i].name;
            clone_popup_element.querySelector('h3').textContent = json[i].type;
            clone_popup_element.querySelector('p').textContent = json[i].feature;
            popup_element[0].parentNode.appendChild(clone_popup_element); //元となるHTMLの要素の後ろに複製した要素を追加

            let num = i; // i の値を num に保存
            const popup = document.getElementById('item' + num);
            popup.style.display = 'none';

            clone_item_element.addEventListener('click', () => {
                popup.style.display = 'block';
            });
            popup.addEventListener('click', (event) => {
                // オーバーレイをクリックした場合、ポップアップを閉じる
                if (event.target === popup) {
                    popup.style.display = 'none';
                }
            });
        }
        // データの読み込みが完了したらローディングアニメーションを非表示に
        hideLoadingAnimation(1);
    });
