const initLike = 200
const initDisLike = 100
let likeCount = initLike
let dislikeCount = initDisLike


const likeBtn = document.getElementById('like')
likeBtn.innerHTML = '&#128077;' + likeCount
const dislikeBtn = document.getElementById('dislike')
dislikeBtn.innerHTML = '&#128078;' + dislikeCount
likeBtn.addEventListener('click', likeHandler)
dislikeBtn.addEventListener('click', dislikeHandler)

console.log(document.cookie.includes('like=0'))

function likeHandler(){
    likeCount++
    likeBtn.innerHTML = '&#128077; ' + likeCount
    disableButtons()
    setCookie()
}
function dislikeHandler(){
    dislikeCount++
    dislikeBtn.innerHTML = '&#128078; ' + dislikeCount
    disableButtons()
    setCookie()
}

function disableButtons(){
    likeBtn.disabled = true
    dislikeBtn.disabled = true
}

function setCookie(){
    document.cookie = 'voted=true; SameSite=Strict; MaxAge=' +60
}

window.onload = function(){
    if(document.cookie && document.cookie.includes('voted=true')){
        disableButtons()
    }
}