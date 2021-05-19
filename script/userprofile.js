$(document).ready(function() {

    $('#submit').click(function() {

        $(".error").hide();
        var hasError = false;
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var fname=/^[a-zA-Z]*$/;
        var mob = /^[1-9]{1}[0-9]{9}$/;

        var emailaddressVal = $("#url").val();
        if(emailaddressVal == '') {
            $("#url").after('<span class="error">Please enter your email address.</span>');
            hasError = true;
        }

        else if(!emailReg.test(emailaddressVal)) {
            $("#url").after('<span class="error">Enter a valid email address.</span>');
            hasError = true;
        }


        var nameVal = $("#fullName").val();
        if(nameVal == '') {
            $("#fullName").after('<span class="error">Please enter your full name.</span>');
            hasError = true;
        }

        else if(!fname.test(nameVal)) {
            $("#fullName").after('<span class="error">Name should contain characters only.</span>');
            hasError = true;
        }

        var mobVal = $("#number").val();
        if(mobVal == '') {
            $("#number").after('<span class="error">Please enter your full name.</span>');
            hasError = true;
        }

        else if(!mob.test(mobVal)) {
            $("#number").after('<span class="error">Enter a valid 10 digit number.</span>');
            hasError = true;
        }

        else{
                         var con=confirm("Save changes?");
                         if(con == true)
                         {
                             alert("Your profie information updated successfully!");
                             return true;
                         }
                         else{
                             return false;
                         }
                     }


        if(hasError == true) { return false; }

    });

    $('#changepass').click(function() {
        var oldPass = $("#opwd").val();
        var newPass = $("#pwd").val();
        var confPass = $("#cpwd").val();

        if (oldPass === newPass) {
            alert('Old and New password should not be same!')
        } else if (newPass !== confPass) {
            alert('New and Confirm password must match!')
        } else {
            alert('New password set successfully!')
            $(this).submit();
        }

    });
    
});












