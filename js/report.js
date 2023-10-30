
let id = getParam('id');
let number = getParam('number');

//生成したAPIのURLを指定
var api_url = 'https://script.google.com/macros/s/AKfycbyl4veaDHtfRGuUxjoj8gra9p65vLb9809AFFVyAKv_WvfXzh7hH37TSyTzpkOYs9_jIQ/exec';

fetch(api_url)
    .then(function (fetch_data) {
        return fetch_data.json();
    })
    .then(function (json) {
        var flg = false;
        for (var i = 0; i < json.length; i++) {
            if(json[i].id == id){
                document.getElementById('title').innerText = json[i].title;
                document.getElementById('date').innerText = json[i].date;
                document.getElementById('p').innerHTML = json[i].p;
                if(number > 0) {
                    var prev_element = `<button class="black prev" onclick="location.href='report.html?id=${json[i-1].id}&number=${i-1}'"><img src="image/arrow_black.svg" class="arrow">PREV</button>`;
                    document.getElementById('btns').innerHTML += prev_element;
                }
                if(number < json.length-1) {
                    var back_element = `<button class="black next" onclick="location.href='report.html?id=${json[i+1].id}&number=${i+1}'"><img src="image/arrow_black.svg" class="arrow">NEXT</button>`;
                    document.getElementById('btns').innerHTML += back_element;
                }
                flg = true;
                break;
            }
        }
        if(!flg) {
            document.getElementById('p').innerText = 'このページは存在しません';
            document.getElementById('btns').innerHTML = `<button class="black prev center" onclick="location.href='./news.html'"><img src="image/arrow_black.svg" class="arrow">BACK</button>`;
        }

    });


function getParam(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}