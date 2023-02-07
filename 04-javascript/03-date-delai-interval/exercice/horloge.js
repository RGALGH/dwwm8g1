

function start() {
    let tH = document.querySelector(".hour");
    let tM = document.querySelector(".minute");
    let tS = document.querySelector(".second");
    let time,h,m,s;

    const timer = setInterval(function(){
        time = new Date(); // recupere la date courante , ex Tue Feb 07 2023 08:48:37 GMT+0100 (heure normale d’Europe centrale)
        h = time.getHours()*30-90;
        // 08 * 30 - 90 = 150
        m = time.getMinutes()*6-90;
        s = time.getSeconds()*6-90;
        tS.style.transform = "rotate("+s+"deg)";
        tM.style.transform = "rotate("+m+"deg)";
        tH.style.transform = "rotate("+h+"deg)";
    },1000);

    //le bouton stop
    document.querySelector('#stopBtn').onclick = (e)=> clearInterval(timer)
}
start();

document.querySelector('#heure').style.transform='rotate(150deg)'