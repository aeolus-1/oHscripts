console.log("its bob rossin time")
var imgs = document.getElementsByClassName("userpicture")
for (let img of imgs) {
    img.src = "https://github.com/aeolus-1/oHscripts/blob/main/docs/bobrosspfp.png?raw=true"
}
document.getElementsByClassName("customimage")[0].style.backgroundImage = 'url("https://static01.nyt.com/images/2019/07/13/arts/bob-ross-oak_blue-ridge-falls/bob-ross-oak_blue-ridge-falls-articleLarge-v2.jpg?quality=75&auto=webp&disable=upscale")'
var imgs = document.getElementsByClassName("usertext mr-1")
for (let img of imgs) {
    img.textContent = "Bob Ross"
}
