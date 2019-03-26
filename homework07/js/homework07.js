$( document ).ready(function() {
    $("form").submit(function () {
        if($("#name").val().length < 3) { 
            $("#userError").text("The username must contain at least 3 characters");
            $("#userError").addClass("error");
            event.preventDefault();
            return false;
        } 

        if($("#aff").val() == ("")) {
            $("#affError").text("One option must be selected");
            $("#affError").addClass("error");
            event.preventDefault();
            return false;
        }

        var s = $("#comment").val();
        var count = 0; 
        var flag = true; 
        for(var i = 0; i < s.length; i++){
            if(s[i] == (" ")) {
                count = count + 1;
            }
            if((s[i] == "<") || (s[i] == ">")){
                flag = false;
            }
        }
        
        if(count < 2 || !flag) {
            $("#commentError").text("The comment must contain at least three words, and no < or > are allowed");
            $("#commentError").addClass("error");
            event.preventDefault();
            return false;
        }

        if($("#car").val() == ("")) {
            $("#carError").text("A value is required");
            $("#carError").addClass("error");
            event.preventDefault();
            return false;
        }

        if($("#color").val() == ("")) {
            $("#colorError").text("One option must be selected");
            $("#colorError").addClass("error");
            event.preventDefault();
            return false;
        }
    });
});