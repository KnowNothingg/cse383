$(document).ready(function(){
    $("form").submit(function(event){
        if(checkUser()){
            if(checkAff()){
                if(checkComment()){
                    if(checkCar()){
                        if(!checkColor()){
                            event.preventDefault()
                        }
                    }
                    else{
                        event.preventDefault()
                    }
                }
                else{
                    event.preventDefault()
                }
            }
            else{
                event.preventDefault()
            }
        }
        else{
            event.preventDefault()
        }
    });

    function checkUser(){
        var userName = $("#usr").val();
        if(userName == null || userName.trim().length <= 3) {
            $("#AffiliationError").hide();
            $("#CommentError").hide();
            $("#CarError").hide();
            $("#ColorError").hide();
            $("#userError").show();
            return false;
        }
        else{
            $("#userError").hide();
            return true;
        }
    }

    function checkAff(){
        if ($("#aff option:selected").text() == "") {
            $("#CommentError").hide();
            $("#CarError").hide();
            $("#ColorError").hide();
            $("#AffiliationError").show();
            return false;
        } else { 
            $("#AffiliationError").hide();
            return true;
        }
    }

    function checkComment(){
        var comment = $("#comment").val();
        if(comment == null || comment.trim().split(" ").length <= 3 || comment.includes("<") || comment.includes(">")) {
            $("#CarError").hide();
            $("#ColorError").hide();
            $("#CommentError").show();
            return false;
        }
        else{
            $("#CommentError").hide();
            return true;
        }
    }

    function checkCar(){
        var car = $("#car").val();
        if(car == null || car.trim().length == 0){
            $("#ColorError").hide();
            $("#CarError").show();
            return false;
        }
        else{
            $("#CarError").hide();
            return true;
        }
    }

    function checkColor(){
        if ($("#color option:selected").text() == "") {
            $("#ColorError").show();
            return false;
        } else {
            $("#ColorError").hide();
            return true;
    }
    }
});