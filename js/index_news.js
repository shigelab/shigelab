//生成したAPIのURLを指定
var api_url = 'https://script.google.com/macros/s/AKfycbyl4veaDHtfRGuUxjoj8gra9p65vLb9809AFFVyAKv_WvfXzh7hH37TSyTzpkOYs9_jIQ/exec';

fetch(api_url)
    .then(function (fetch_data) {
        return fetch_data.json();
    })
    .then(function (json) {
        for (var i = 0; i < 3 && i < json.length; i++) {
            var base_element = document.getElementsByClassName('list-item js-based');
            var clone_element = base_element[0].cloneNode(true);
            clone_element.classList.remove('js-based');

            if (json[i].headerImg != "") {
                clone_element.querySelector('.list-item img').setAttribute('src', json[i].headerImg);
            }
            clone_element.querySelector('h3').textContent = json[i].title;
            clone_element.querySelector('a').href = `report.html?id=${json[i].id}&number=${i}`;

            base_element[0].parentNode.appendChild(clone_element);
        }

        // データの読み込みが完了したらローディングアニメーションを非表示に
        hideLoadingAnimation(1);

        // GSAPのアニメーションを実行
        gsap.fromTo('.list-item', {
            opacity: 0, // 初期不透明度（非表示）
        }, {
            scrollTrigger: {
                trigger: ".list",
                start: "top center",
                endTrigger: ".end-page",
                end: "bottom center",
                // markers: true,
                toggleActions: 'play none none reverse',
            },
            opacity: 1, // 最終不透明度
            duration: 1, // アニメーションの時間
            stagger: 0.5, // 要素ごとの適切な遅延を設定
        });

        // GSAPのアニメーションを実行
        gsap.fromTo('.list-button', {
            opacity: 0, // 初期不透明度（非表示）
            x: 20,
        }, {
            scrollTrigger: {
                trigger: ".list-item",
                start: "top center",
                endTrigger: ".end-page",
                end: "bottom center",
                // markers: true,
                toggleActions: 'play none none reverse',
            },
            opacity: 1, // 最終不透明度
            duration: 1, // アニメーションの時間
            x: 0,
        });

    });