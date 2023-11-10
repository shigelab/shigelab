
button_ani();

function button_ani() {
    // ボタンの数だけループ
    const buttons_white = document.querySelectorAll('button.white');

    buttons_white.forEach((button, index) => {
        // ボタンごとにホバー時とホバーから外れたときのイベント処理を追加
        const arrowImg = button.querySelector('span img');
        button.addEventListener('mouseenter', () => {
            arrowImg.src = 'image/arrow_gray.svg';
        });

        button.addEventListener('mouseleave', () => {
            arrowImg.src = 'image/arrow_white.svg';
        });
    });

    // ボタンの数だけループ
    const buttons_white2 = document.querySelectorAll('button.white2');

    buttons_white2.forEach((button, index) => {
        // ボタンごとにホバー時とホバーから外れたときのイベント処理を追加
        const arrowImg = button.querySelector('span img');
        button.addEventListener('mouseenter', () => {
            arrowImg.src = 'image/arrow_black.svg';
        });

        button.addEventListener('mouseleave', () => {
            arrowImg.src = 'image/arrow_white.svg';
        });
    });

    // ボタンの数だけループ
    const buttons_black = document.querySelectorAll('button.black');

    buttons_black.forEach((button, index) => {
        // ボタンごとにホバー時とホバーから外れたときのイベント処理を追加
        const arrowImg = button.querySelector('span img');
        button.addEventListener('mouseenter', () => {
            arrowImg.src = 'image/arrow_white.svg';
        });

        button.addEventListener('mouseleave', () => {
            arrowImg.src = 'image/arrow_black.svg';
        });
    });
}