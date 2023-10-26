
//生成したAPIのURLを指定
var api_url = 'https://script.google.com/macros/s/AKfycbxUMQ9BnNX4OPu446birmZPux2z3TMenGFwefQi7xyelkuU2XDIuv_sdeIOcpANeQnVLw/exec';
var year_count = 0;

fetch(api_url)
    .then(function (fetch_data) {
        return fetch_data.json();
    })
    .then(function (json) {
        var last_year = json[0].year + 1;
        for (var i = 0; i < json.length; i++) {
            if (json[i].year === "") break;
            
            if (last_year > json[i].year) {
                generateTitle(json[i], json[i].year);
                last_year = json[i].year;
                year_count++;
            } else {
                generateList(json[i], last_year);
            }
        }
        checkCss();
    });


// タイトル情報を共通のフォーマットで生成する関数
function generateTitle(json, year) {
    var base_element = document.getElementsByClassName('theme-item js-based');
    var clone_element = base_element[0].cloneNode(true); //元となるHTMLの要素を複製
    clone_element.classList.remove('js-based'); //複製した要素からクラス削除
    let title = '';
    switch (json.grade) {
        case 'B':
            title = json.year + '年度_学士論文';
            break;
        case 'M':
            title = json.year + '年度_修士論文';
            break;
        default:
            break;
    }
    clone_element.querySelector('.theme-title').textContent = title;
    clone_element.querySelector('.theme-title').htmlFor = 'btn' + year;
    clone_element.querySelector('input').setAttribute("id", 'btn' + year);
    clone_element.querySelector('.item-list').setAttribute("id", 'item' + year);
    // 新しい img 要素を追加
    var newImg = document.createElement('img');
    newImg.src = "image/arrow_black.svg";
    newImg.classList.add('arrow');
    clone_element.querySelector('.theme-title').appendChild(newImg);

    base_element[0].parentNode.appendChild(clone_element); //元となるHTMLの要素の後ろに複製した要素を追加

    generateList(json, year);

}

function generateList(json, year) {
    var list = document.getElementById('item' + year);
    // 追加する要素を作成
    var li = document.createElement('li');
    if (json.url != "") {
        const a_tag = document.createElement('a');
        a_tag.href = json.url;
        a_tag.innerHTML = json.title;
        li.appendChild(a_tag);
    } else {
        li.innerHTML = json.title;
    }
    // 末尾に追加
    list.appendChild(li);

}

function checkCss() {
    for (var i = year_count; i > 0; i--) {
        const checkboxSelector = document.querySelector(`#btn${i + 2009}`);
        const itemSelector = document.querySelector(`#item${i + 2009}`);
        const arrowSelector = document.querySelector(`#btn${i + 2009} ~ .theme-title .arrow`);

        itemSelector.style.display = 'none';
        arrowSelector.style.transform = 'rotate(0deg)';

        checkboxSelector.addEventListener('click', () => {
            if (checkboxSelector && checkboxSelector.checked) {
                itemSelector.style.display = 'list-item';
                itemSelector.style.height = 'auto';
                itemSelector.style.padding = '0 22px';
                arrowSelector.style.transform = 'rotate(90deg)';
            } else {
                itemSelector.style.display = 'none';
                arrowSelector.style.transform = 'rotate(0deg)';
            }
        });

    }
}
