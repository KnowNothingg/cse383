$( document ).ready(function() {

    $("#restore").click(function(event) {
        $("recivedData").empty();
        $("#data").css("display", "none");
        $("#getData").css("display", "block");
    })

    $("form").submit(function () {

        if($("#name").val().trim().length < 3) { 
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

        var newData = {};
        newData.name = $("#name").val().trim();
        newData.affiliation = $("#aff").val();
        newData.comment = $("#comment").val();
        newData.car = $("#car").val();
        newData.color = $("#color").val();

        $.ajax({
            type: 'POST',
            url:  "http://ceclnx01.cec.miamioh.edu/~castroa/cse383/homework08/form-ajax.php",
            data: newData,
            
            success: function(result) {
                $("#getData").css("display", "none");
                console.log(result);
                var newTable = '';
                newTable += '<tr><td>User<\/td>' + '<td>' + result.user + '<\/td><\/tr>';
                newTable += '<tr><td>Affiliation<\/td>' + '<td>' + result.affiliation + '<\/td><\/tr>';
                newTable += '<tr><td>Comment<\/td>' + '<td>' + result.comment + '<\/td><\/tr>';
                newTable += '<tr><td>Car<\/td>' + '<td>' + result.car + '<\/td><\/tr>';
                newTable += '<tr><td>Color<\/td>' + '<td>' + result.color + '<\/td><\/tr>';
                newTable += '<tr><td>Timestamp<\/td>' + '<td>' + result.timestamp + '<\/td><\/tr>';

                $("#recivedData").append(newTable);
                $("#data").css("display", "block");
                },
        
            error: function() {
                alert( "There was an error in the server. Try to submit the data again." );
            }
        });
    });
});


