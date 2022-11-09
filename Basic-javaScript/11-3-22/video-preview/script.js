let myvideo = document.querySelectorAll("videoPlay");


for (var i = 0; i < myvideo.length; i++) {
document.querySelector("videoPlay").addEventListener("mouseover" , function(){
    this.play()
})

document.querySelector("videoPlay").addEventListener("mouseover" , function(){
    this.pause()
})