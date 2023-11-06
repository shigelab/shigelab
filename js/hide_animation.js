// ローディングアニメーションを非表示にする関数
function hideLoadingAnimation(index) {
    const loadingAnimation = document.getElementById(`loading-animation${index}`);
    if (loadingAnimation) {
        loadingAnimation.style.height = '0px';
        loadingAnimation.style.display = 'none';
    }
}