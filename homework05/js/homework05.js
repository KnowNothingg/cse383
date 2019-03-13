function generate() {
    var n = document.getElementById("num").value;
    var result = ""
    for( var value = 2; value <= n; value++) {
        var flag = true;
        for(var i = 2; i <= value/2; i++) {
            if(value % i == 0){
                flag = false;
                break;
            }
        }
        if(flag) {
            result += value + ", ";
        }  
    }
    document.getElementById("output").innerHTML = result;
}


function color() {
    var r = document.getElementById("R").value;
    var g = document.getElementById("G").value;
    var b = document.getElementById("B").value;

    var finalColor = "rgb" + "(" + r + "," + g + "," + b +")";
    document.getElementById("change").style.color = finalColor;
}

function left() {
    document.getElementById("change").style.textAlign = "left";
}
function center() {
    document.getElementById("change").style.textAlign = "center";
}
function right() {
    document.getElementById("change").style.textAlign = "right";
}
function bold() {
    var flag = document.getElementById("bold").checked;
    if(flag){
        document.getElementById("change").style.fontWeight = "bold";
    } else {
        document.getElementById("change").style.fontWeight = "normal";
    }
}
function italic() {
    var flag = document.getElementById("italic").checked;
    if(flag){
        document.getElementById("change").style.fontStyle = "italic";
    } else {
        document.getElementById("change").style.fontStyle = "normal";
    }
}

function underline() {
    var flag = document.getElementById("underline").checked;
    if(flag){
        document.getElementById("change").style.textDecoration = "underline";
    } else {
        document.getElementById("change").style.textDecoration = "none";
    }
}