

const shareBtn = document.querySelector(".fa-share");
const infoSec = document.querySelector(".info-sec");
const add = document.querySelector(".share-sec");
const shareBtn2 = document.querySelector('.share-thrd');
const left = document.querySelector('.left');
// const mql = window.matchMedia('(max-width: 412px)');
// const dql = window.matchMedia('(max-width: 1440px)')
// let mobileView = mql.matches;
// let descView  = dql.matches;


shareBtn.addEventListener("click" ,function(){
    if((window.matchMedia('(max-width: 1440px)')).matches){
        add.classList.toggle("share-non")
    };
    if((window.matchMedia('(max-width: 412px)')).matches){
        infoSec.classList.toggle('info-sec2')
        shareBtn2.classList.toggle('share-none');
        left.classList.toggle("left-non");
    }
});