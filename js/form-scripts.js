$("#contactForm").validator().on("submit", function (event) {
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
        formError();
        submitMSG(false, "Did you fill in the form properly?");
    } else {
        // everything looks good!
        event.preventDefault();
        submitForm();
    }
});


function submitForm(){
    // Initiate Variables With Form Content
    var type =  $('input[name=type]:checked').val();
    var name = $("#name").val();
    var url = $("#url").val();
    var traffic = $("#traffic").val();
    var job = $("#job").val();
    var email = $("#email").val();


    $.ajax({
        type: "POST",
        url: "php/form-process.php",
        data: "type=" + type + "&name=" + name + "&url=" + url + "&traffic=" + traffic + "&job=" + job + "&email=" + email,
        success : function(text){
            if (text == "success"){
                formSuccess();
            } else {
                formError();
                submitMSG(false,text);
            }
        }
    });
}

function formSuccess(){
    $("#contactForm")[0].reset();
    submitMSG(true, "Your request has been correctly sent. We will provide feedback within 48h. Thank you.")
}

function formError(){
    $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass();
    });
}

function submitMSG(valid, msg){
    if(valid){
        var msgClasses = "h3 text-center tada animated text-success";
    } else {
        var msgClasses = "h3 text-center text-danger";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}