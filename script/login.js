$(function () {
    let error_user = false;
    let error_password = false;
    let error_fname = false;
    let error_email = false;
    let error_number = false
    let error_passw = false;
    let error_retype_password = false;


    $(".error-msg").hide()

    //username validation starts
    function check_user() {
        let value = $('#username').val()
        let expression = /^[6-9]\d{9}|([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
        if (value = '' || !value.match(expression)) {
            $('#error-user').show()
            error_user = true
        } else {
            $('#error-user').hide()

        }
    }
    //username validation ends

    function check_password() {
        let password_length = $("#pass").val().length;
        if (password_length < 8) {
            $("#error-password").html("Atleast 8 Characters");
            $("#error-password").show();
            $("#password").css("border-bottom", "2px solid #F90A0A");
            error_password = true;
        } else {
            $("#error-password").hide();
        }
    }


    function check_fname() {
        let pattern = /^[a-zA-Z\s]*$/;
        let fname = $("#name").val();
        if (pattern.test(fname) && fname !== "") {
            $("#error-name").hide();

        } else {
            $("#error-name").html("Should contain only Characters");
            $("#error-name").show();
            error_fname = true;
        }
    }

    function check_email() {
        let pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        let email = $("#email").val();
        if (pattern.test(email) && email !== "") {
            $("#error-email").hide();
        } else {
            $("#error-email").show();
            error_email = true;
        }
    }

    //mobile number 
    function check_phone() {
        let $regexNumber = /^[6-9]\d{9}$/
        let numberValue = $("#phone").val()
        if (numberValue < 999999999 || !numberValue.match($regexNumber)) {
            $("#error-phone").show()
            error_number = true
            return true
        } else {
            $("#error-phone").hide()
        }
    }

    //Check password in register form
    function check_passw() {
        let password_length = $("#passw").val().length;
        if (password_length < 8) {
            $("#error-reg-pass").show();
            error_passw = true;
        } else {
            $("#error-reg-pass").hide();
        }
    }

    //Confirm password in register form
    function check_retype_password() {
        let password = $("#passw").val();
        let retype_password = $("#repass").val();
        if (password !== retype_password) {
            $("#error-reg-confpass").show();
            error_retype_password = true;
        } else {
            $("#error-reg-confpass").hide();

        }
    }

    $("#username").keyup(function () {
        check_user();
    });
    $("#pass").keyup(function () {
        check_password();
    });
    $("#name").keyup(function () {
        check_fname();
    });
    $("#email").keyup(function () {
        check_email();
    });
    $("#phone").keyup(function () {
        check_phone()
    });
    $("#passw").keyup(function () {
        check_passw();
    });
    $("#repass").keyup(function () {
        check_retype_password();
    });




    $("#login_form").submit(function (e) {
        e.preventDefault()

        error_user = false;
        error_password = false;

        check_user();
        check_password();

        if (error_user === false && error_password === false) {

            let user = $("#username").val()
            let password = $("#pass").val()
            exprss = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/
            const myUrl = new URL('http://localhost:3000/users/')
            if ($("#username").val().match(exprss)) {
                myUrl.searchParams.set("email", user)
            } else {
                myUrl.searchParams.set("mobile", user)
            }
            myUrl.searchParams.set("password", btoa(password))
            myUrl.searchParams.get("name")


            console.log(myUrl)

            $.ajax({
                type: "GET",
                url: myUrl,
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                success: function (result) {
                    if (result.length != 0) {
                        var id = result[0].id;
                        let name1 = result[0].name;
                        sessionStorage.setItem('name', name1);
                        sessionStorage.setItem('id', id);
                        console.log("Logged in as " + name1);
                        location.href = "./ui/home.html";
                        console.log("Hello");
                    } else {
                        $('#error-login').show();
                    }
                }
            });

        } else {
            $('#error-login').show();
        }
    })



    $("#registration_form").submit(function (e) {
        e.preventDefault()

        error_fname = false;
        error_email = false;
        error_number = false
        error_passw = false;
        error_retype_password = false;

        check_fname();
        check_email();
        check_phone();
        check_passw();
        check_retype_password();

        if (error_fname === false && error_email === false && error_number === false && error_passw === false && error_retype_password === false) {
            let users = {
                name: $("#name").val(),
                email: $("#email").val(),
                mobile: $("#phone").val(),
                password: btoa($("#passw").val())
            }

            $.ajax({
                type: "POST",
                dataType: "json",
                url: "http://localhost:3000/users",
                data: users,
                success: function (data) {
                    console.log(data)
                }
            })
        } else {
            $('#error-reg').show();
            return false;
        }

    })

})

