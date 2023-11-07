let page = getParam('page');

//生成したAPIのURLを指定
var api_url = 'https://script.google.com/macros/s/AKfycbyl4veaDHtfRGuUxjoj8gra9p65vLb9809AFFVyAKv_WvfXzh7hH37TSyTzpkOYs9_jIQ/exec';

fetch(api_url)
    .then(function (fetch_data) {
        return fetch_data.json();
    })
    .then(function (json) {
        var pages = json.length / 9 + 1;
        for (var j = 1; j <= pages; j++) {
            var list_element = document.querySelector('.page-list');
            var base_element = document.querySelector('.page-number');
            var clone_element = base_element.cloneNode(false); //元となるHTMLの要素を複製
            clone_element.classList.remove('js-based'); //複製した要素からクラス削除
            clone_element.innerText = j;
            if (page != j - 1) {
                let choise_page = j;
                clone_element.onclick = function () { location.href = `./news.html?page=${choise_page - 1}` };
            }
            list_element.appendChild(clone_element); //元となるHTMLの要素の後ろに複製した要素を追加
        }

        for (var i = 9 * page; i < 9 * page + 9 && i < json.length; i++) {
            var base_element = document.getElementsByClassName('news-item js-based');
            var clone_element = base_element[0].cloneNode(true); //元となるHTMLの要素を複製
            clone_element.classList.remove('js-based'); //複製した要素からクラス削除

            clone_element.querySelector('h5').textContent = json[i].date;
            clone_element.querySelector('h3').textContent = json[i].title;
            clone_element.querySelector('p').innerText = omittedContent(json[i].headerText);
            clone_element.querySelector('a').href = `report.html?id=${json[i].id}&number=${i}`;
            if(json[i].headerImg != "") {
                clone_element.querySelector('img').setAttribute('src', json[i].headerImg);
            }

            base_element[0].parentNode.appendChild(clone_element); //元となるHTMLの要素の後ろに複製した要素を追加
        }

        // データの読み込みが完了したらローディングアニメーションを非表示に
        hideLoadingAnimation(1);
    });


// 引数でcontent.textContentを受け取る。
function omittedContent(string) {
    // 定数で宣言
    const MAX_LENGTH = 20;

    // もしstringの文字数がMAX_LENGTH（今回は10）より大きかったら末尾に...を付け足して返す。
    if (string.length > MAX_LENGTH) {

        // substr(何文字目からスタートするか, 最大値);
        return string.substr(0, MAX_LENGTH) + '...';
    }
    //　文字数がオーバーしていなければそのまま返す
    return string;
}

function getParam(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}