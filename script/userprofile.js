$(document).ready(function () {
  let userId = 1; // user id of logged in user

  $.getJSON("http://localhost:3000/users/" + userId, function (data) {
    $("#fullName").val(data.name);
    $("#url").val(data.email);
    $("#number").val(data.contact);
    window.userData = data;
  });

  $("#submit").click(function () {
    $(".error").hide();
    var hasError = false;
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var fname = /^[a-zA-Z ]*$/;
    var mob = /^[1-9]{1}[0-9]{9}$/;

    var emailaddressVal = $("#url").val();
    if (emailaddressVal == "") {
      $("#url").after(
        '<span class="error">Please enter your email address.</span>'
      );
      hasError = true;
    } else if (!emailReg.test(emailaddressVal)) {
      $("#url").after(
        '<span class="error">Enter a valid email address.</span>'
      );
      hasError = true;
    }

    var nameVal = $("#fullName").val();
    if (nameVal == "") {
      $("#fullName").after(
        '<span class="error">Please enter your full name.</span>'
      );
      hasError = true;
    } else if (!fname.test(nameVal)) {
      $("#fullName").after(
        '<span class="error">Name should contain characters only.</span>'
      );
      hasError = true;
    }

    var mobVal = $("#number").val();
    if (mobVal == "") {
      $("#number").after(
        '<span class="error">Please enter your mobile number.</span>'
      );
      hasError = true;
    } else if (!mob.test(mobVal)) {
      $("#number").after(
        '<span class="error">Enter a valid 10 digit number.</span>'
      );
      hasError = true;
    } else {
      var con = confirm("Save changes?");
      if (con == true) {
        let data = {
          ...window.userData,
          ...{
            name: nameVal,
            contact: mobVal,
            email: emailaddressVal,
          },
        };

        $.ajax({
          type: "PUT",
          url: "http://localhost:3000/users/" + userId,
          contentType: "application/json",
          data: JSON.stringify(data), // access in body
        }).done(function (msg) {
          alert("Your profie information updated successfully!");
        });
      } else {
        return false;
      }
    }

    if (hasError == true) {
      return false;
    }
  });

  $("#changepass").click(function () {
    var oldPass = $("#opwd").val();
    var newPass = $("#pwd").val();
    var confPass = $("#cpwd").val();
    var passwordCriteria = /^[a-zA-Z0-9]{8,}$/;

    if (oldPass == "") {
      $("#opwd").after(
        '<span class="error">Current password should not be empty.</span>'
      );
      hasError = true;
    }
    if (newPass == "") {
      $("#pwd").after(
        '<span class="error">New password should not be empty.</span>'
      );
      hasError = true;
    }
    if (confPass == "") {
      $("#cpwd").after(
        '<span class="error">Confirm password should not be empty.</span>'
      );
      hasError = true;
    }

    if (!passwordCriteria.test(newPass)) {
      $("#pwd + span").remove();
      $("#pwd").after(
        '<span class="error">New password must be of min 8 characters.</span>'
      );
      return;
    }

    if (!passwordCriteria.test(confPass)) {
      $("#cpwd + span").remove();
      $("#cpwd").after(
        '<span class="error">Conofirm password must be of min 8 characters.</span>'
      );
      return;
    }

    if (oldPass === newPass) {
      $("#pwd + span").remove();
      $("#pwd").after(
        '<span class="error">Old and new password should not be same!</span>'
      );
    } else if (newPass !== confPass) {
      $("#pwd + span").remove();
      $("#pwd").after(
        '<span class="error">New and Confirm password must match!</span>'
      );
    } else {
      // check if valid old password is entered
      if (oldPass !== window.userData.password) {
        $("#opwd + span").remove();
        $("#opwd").after('<span class="error">Invalid old password.</span>');
        return;
      }

      let data = { ...window.userData, ...{ password: newPass } };

      $.ajax({
        type: "PUT",
        url: "http://localhost:3000/users/" + userId,
        contentType: "application/json",
        data: JSON.stringify(data), // access in body
      }).done(function (msg) {
        alert("Your password is updated successfully!");
      });

      // $(this).submit();
    }
  });
});
