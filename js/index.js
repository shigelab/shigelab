const videos = [
    document.getElementById("v1"),
    document.getElementById("v2"),
    document.getElementById("v3")
  ];
let currentVideoIndex = 0;
  
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
