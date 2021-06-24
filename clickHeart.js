var click_cnt = 0;
var $html = document.getElementsByTagName("html")[0];
var $body = document.getElementsByTagName("body")[0];
$html.onclick = function(e) {
    var $elem = document.createElement("b");
    $elem.style.color = "#E94F06";
    $elem.style.zIndex = 9999;
    $elem.style.position = "absolute";
    $elem.style.select = "none";
    var x = e.pageX;
    var y = e.pageY;
    $elem.style.left = (x - 10) + "px";
    $elem.style.top = (y - 20) + "px";
    clearInterval(anim);
    var click_emojy = ++click_cnt%50
    switch (click_emojy) {
        case 10:
            $elem.innerText = "OωO";
            break;
        case 20:
            $elem.innerText = "(๑•́ ∀ •̀๑)";
            break;
        case 30:
            $elem.innerText = "(๑•́ ₃ •̀๑)";
            break;
        case 40:
            $elem.innerText = "(๑•̀_•́๑)";
            break;
        case 50:
            $elem.innerText = "（￣へ￣）";
            break;
        default:
            $elem.innerText = "❤";
            break;
    }
    $elem.style.fontSize = Math.random() * 10 + 8 + "px";
    var increase = 0;
    var anim;
    setTimeout(function() {
        anim = setInterval(function() {
            if (++increase == 150) {
                clearInterval(anim);
                $body.removeChild($elem);
            }
            $elem.style.top = y - 20 - increase + "px";
            $elem.style.opacity = (150 - increase) / 120;
        }, 8);
    }, 70);
    $body.appendChild($elem);
};