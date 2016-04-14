$(document).ready(function () {
    document.getElementById('signUpForm').onsubmit = function () {
        return validateForm();
    };

    document.getElementById('dummy').onload = function () {
        onSignup();
    };
});

function validateForm () {
    $('#nameError').hide();
    $('#emailError').hide();
    $('#phoneError').hide();
    var isValid = true;

    if ($('#formName').val().trim() === '') {
        $('#nameError').show();
        isValid = false;
    }

    if ($('#formEmail').val().trim() === '') {
        $('#emailError').show();
        isValid = false;
    }

    if ($('#formTelephone').val().trim() === '') {
        $('#phoneError').show();
        isValid = false;
    }

    return isValid;
}

function onSignup () {
    $('#thankYou').show();
}
