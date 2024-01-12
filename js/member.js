
//生成したAPIのURLを指定
var api_url = 'https://script.google.com/macros/s/AKfycbzh4uXeR9WKmdgJ5XTILSrYu4c82sWYn1aycY6DU_S7kAG6k-_3nJGNB-gE5MF07rzr0w/exec';

fetch(api_url)
    .then(function (fetch_data) {
        return fetch_data.json();
    })
    .then(function (json) {
        for (var i in json) {
            if (json[i].name === "") break;

            switch (json[i].grade) {
                case 'D3':
                case 'M2':
                case 'M1':
                    var base_element = document.getElementsByClassName('member-item dm js-based');
                    var clone_element = base_element[0].cloneNode(true); //元となるHTMLの要素を複製
                    clone_element.classList.remove('js-based'); //複製した要素からクラス削除
                    if (json[i].image !== "") clone_element.querySelector('img').setAttribute('src', 'https://drive.google.com/thumbnail?id=' + json[i].image + '&sz=w1000'); //src属性に取得した画像を設定;
                    else clone_element.querySelector('img').setAttribute('src', 'image/no_man.png'); //src属性に取得した画像を設定
                    clone_element.querySelector('.dmN h2').textContent = json[i].name;
                    clone_element.querySelector('.dmN h3').textContent = json[i].e_name;
                    const profile_dm = generateProfile(json[i]);
                    clone_element.querySelector('.dmP').innerText = profile_dm;
                    break;
                case 'B4':
                    var base_element = document.getElementsByClassName('member-item b4 js-based');
                    var clone_element = base_element[0].cloneNode(true); //元となるHTMLの要素を複製
                    clone_element.classList.remove('js-based'); //複製した要素からクラス削除
                    if (json[i].image !== "") clone_element.querySelector('img').setAttribute('src', 'https://drive.google.com/thumbnail?id=' + json[i].image + '&sz=w1000'); //src属性に取得した画像を設定;
                    else clone_element.querySelector('img').setAttribute('src', 'image/no_man.png'); //src属性に取得した画像を設定
                    clone_element.querySelector('.b4N h2').textContent = json[i].name;
                    clone_element.querySelector('.b4N h3').textContent = json[i].e_name;
                    const profile_b4 = generateProfile(json[i]);
                    clone_element.querySelector('.b4P').innerText = profile_b4;
                    break;
                case 'B3':
                case 'B2':
                    var base_element = document.getElementsByClassName('member-item b3 js-based');
                    var clone_element = base_element[0].cloneNode(true); //元となるHTMLの要素を複製
                    clone_element.classList.remove('js-based'); //複製した要素からクラス削除
                    if (json[i].image !== "") clone_element.querySelector('img').setAttribute('src', 'https://drive.google.com/thumbnail?id=' + json[i].image); //src属性に取得した画像を設定;
                    else clone_element.querySelector('img').setAttribute('src', 'image/no_man.png'); //src属性に取得した画像を設定
                    clone_element.querySelector('.b3N h2').textContent = json[i].name;
                    clone_element.querySelector('.b3N h3').textContent = json[i].e_name;
                    const profile_b3 = generateProfile(json[i]);
                    clone_element.querySelector('.b3P').innerText = profile_b3;
                    break;
                default:
                    break;
            }


            base_element[0].parentNode.appendChild(clone_element); //元となるHTMLの要素の後ろに複製した要素を追加

        }
        // データの読み込みが完了したらローディングアニメーションを非表示に
        hideLoadingAnimation(1);
        hideLoadingAnimation(2);
        hideLoadingAnimation(3);

        // GSAPのアニメーションを実行
        gsap.fromTo('.member-item', {
            opacity: 0, // 初期不透明度（非表示）
        }, {
            scrollTrigger: {
                trigger: ".member-list",
                start: "top center",
                endTrigger: ".member-list",
                end: "bottom center",
                // markers: true,
                toggleActions: 'play none none reverse',
            },
            opacity: 1, // 最終不透明度
            duration: .1, // アニメーションの時間
            stagger: 0.1, // 要素ごとの適切な遅延を設定
        });
    });


// プロフィール情報を共通のフォーマットで生成する関数
function generateProfile(json) {
    let grade_name = '';

    switch (json.grade) {
        case 'D3':
            grade_name = '博士3年(SSP D3)';
            break;
        case 'M2':
            grade_name = '修士2年(M2)';
            break;
        case 'M1':
            grade_name = '修士1年(M1)';
            break;
        case 'B4':
            grade_name = '学部4年(B4)';
            break;
        case 'B3':
            grade_name = '学部3年(B3)';
            break;
        case 'B2':
            grade_name = '学部2年(B2) 早期配属';
            break;
        default:
            break;
    }

    return `${grade_name}\n出身: ${json.hometown}\n好きなもの: ${json.hobby}\nモットー: ${json.motto}`;
}



gsap.utils.toArray(".subtitle").forEach((target) => {
    gsap.fromTo(
        target, // アニメーションさせる要素
        {
            x: -300, // アニメーション開始前の横位置(右に100px)
            autoAlpha: 0, // アニメーション開始前は透明
        },
        {
            x: 0, // アニメーション後の横位置(左に100px)
            autoAlpha: 1, // アニメーション後に出現(透過率0)
            scrollTrigger: {
                trigger: target, // アニメーションが始まるトリガーとなる要素
                toggleActions: "play none none reverse", // 上スクロールで戻る
                start: "top bottom", // アニメーションの開始位置
                // markers: true, // マーカー表示
            },
        });
});

gsap.fromTo(
    ".header-anime",
    {
        y: -100,
        autoAlpha: 0
    },
    {
        y: 0,
        autoAlpha: 1,
        duration: 2,
    }
)

gsap.fromTo(
    ".PI",
    {
        autoAlpha: 0
    },
    {
        autoAlpha: 1,
        duration: 2,
    }
)