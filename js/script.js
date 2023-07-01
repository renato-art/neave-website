function handleChannel() {
    let videoPlayer = document.getElementById("player")
    let videoSource = document.getElementById("media")
    if (!videoPlayer || !videoSource) return
    videoSource.setAttribute('src', './media/another.mp4')
    videoPlayer.muted = false
    videoPlayer.pause()
    videoPlayer.currentTime = 0
    videoPlayer.load()
}