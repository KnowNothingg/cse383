
    function convert() {
        var conversionType = document.getElementById("f2c").checked;
        var d = document.getElementById("degrees").value;
        if(conversionType) {
            var c = ((d - 32 )* 5 )/9;
            document.getElementById("output").innerHTML = d +  " degress Fahreheit is equal to " + c + " degrees Celsius." ;
        } else {
            var f = (d * 9)/5 + 32;
            document.getElementById("output").innerHTML = d + " degress Celsius is equal to " + f  + " degrees Fahreheit.";
        }
    }
