const videos = [
    document.getElementById("v1"),
    document.getElementById("v2"),
    document.getElementById("v3")
  ];
let currentVideoIndex = getRandomInt(0, videos.length-1);
console.log(currentVideoIndex);
  
function playVideo(index) {
    // すべての動画を一時停止
    videos.forEach((video, i) => {
      if (i === index) {
        video.play(); // 現在の動画を再生
        video.style.display = 'block';
      } else {
        video.pause();
        video.style.display = 'none';
      }
    });
}
  
function nextVideo() {
    // 次の動画を再生
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    videos[currentVideoIndex].currentTime = 0; // 再生時間をリセット
    playVideo(currentVideoIndex);
    setTimeout(nextVideo, 15000);
}
  
// 最初の動画を再生
playVideo(currentVideoIndex);
setTimeout(nextVideo, 15000); 
  
// 動画が終了したら次の動画を再生
videos.forEach((video, i) => {
    video.addEventListener('ended', () => {
      nextVideo();
    });
});


var gif_logo = document.querySelector('.gif-logo');
var logo = document.querySelector('.logo');
setTimeout(logo_set, 7000); 

function logo_set() {
    gif_logo.animate(
        [
            { opacity: 1 },
            { opacity: 0 }
        ], 
        {
            duration: 1000,
            fill: 'both'
        }
    );

    logo.animate(
        [
            { opacity: 0 },
            { opacity: 1 }
        ], 
        {
            duration: 1000,
            fill: 'forwards'
        }
    );

}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }