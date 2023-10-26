//生成したAPIのURLを指定
var api_url = 'https://script.google.com/macros/s/AKfycbzP5SEVsma4Urt-7ew9AnwC3mAA9ypWBkVEYKU-QJrI5CbAFt8Po_gYNho38ArQh5TEQA/exec';

fetch(api_url)
    .then(function (fetch_data) {
        return fetch_data.json();
    })
    .then(function (json) {
        for (var i = 0; i < 3 && i < json.length; i++) {
            var base_element = document.getElementsByClassName('list-item js-based');
            var clone_element = base_element[0].cloneNode(true); //元となるHTMLの要素を複製
            clone_element.classList.remove('js-based'); //複製した要素からクラス削除

            clone_element.querySelector('h3').textContent = json[i].title;
            clone_element.querySelector('a').href = `report.html?id=${json[i].id}&number=${i}`;

            base_element[0].parentNode.appendChild(clone_element); //元となるHTMLの要素の後ろに複製した要素を追加
        }

    });