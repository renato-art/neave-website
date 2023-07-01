const videos = [
    './media/video_001.mp4',
    './media/video_002.mp4',
    './media/video_003.mp4',
    './media/video_004.mp4'
]


function handleChannel() {
    let videoPlayer = document.getElementById("player")
    let videoSource = document.getElementById("media")
    if (!videoPlayer || !videoSource) return
    const src = getVideoSrc()
    videoSource.setAttribute('src', src)
    videoPlayer.muted = false
    videoPlayer.pause()
    videoPlayer.currentTime = 0
    videoPlayer.load()
}

function getVideoSrc() {
    const index = Math.floor(Math.random()*videos.length)
    const src = videos[index]
    return src
}
