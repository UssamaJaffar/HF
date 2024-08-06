(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
        })
})()



$(document).ready(function () {
    $.validator.addMethod("pattern", function (value, element, param) {
        return this.optional(element) || new RegExp(param).test(value);
    }, "Invalid input.");

    $.validator.addMethod("customEmail", function (value, element) {
        return this.optional(element) || /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value);
    }, "Please enter a valid email address.");

    $('#country').on('change', function () {
        var code = $(this).find(':selected').data('code');
        $('#phoneCode').val(code);
    })

    $("#myForm").validate({
        rules: {
            firstName: {
                required: true,
                pattern: /^[A-Za-z]+$/ // Only letters
            },
            lastName: {
                required: true,
                pattern: /^[A-Za-z]+$/ // Only letters
            },
            country: {
                required: true
            },
            phone: {
                required: true,
                pattern: /^[0-9]{10}$/ // 10 digits
            },
            email: {
                required: true,
                email: true,
                customEmail: true
            },
            experience: {
                required: true,
            },
            terms: {
                required: true
            }
        },
        messages: {
            firstName: {
                required: "Please enter your first name.",
                pattern: "Please enter only letters."
            },
            lastName: {
                required: "Please enter your last name.",
                pattern: "Please enter only letters."
            },
            country: "Please select your country.",
            phone: {
                required: "Please enter your phone number.",
                pattern: "Please enter a valid 10-digit phone number."
            },
            email: {
                required: "Please enter your email address.",
                email: "Please enter a valid email address."
            },
            experience: {
                required: "Please enter your experience.",
                pattern: "Please enter only letters, numbers, and spaces."
            },
            terms: "You must accept the terms and conditions."
        },
        errorClass: "is-invalid",

        unhighlight: function (element, errorClass) {
            $(element).removeClass(errorClass);
        },

        errorPlacement: function (error, element) {
            $(element).addClass('is-invalid').removeClass("valid-feedback");
            len = $(element).siblings().length
            $(element).siblings()[len-1].innerHTML = error[0].innerText;


        },
   
        submitHandler: function (form) {
            var phoneCode = $('#phoneCode').val();
            var phoneNumber = $('#phone').val();
            var fullPhoneNumber = phoneCode + phoneNumber;

            var formData = $(form).serializeArray();

            var data = {};
            $(formData).each(function(index, obj){
                data[obj.name] = obj.value;
            });
            
            data['phone'] = fullPhoneNumber;
            $.ajax({
                url: "http://localhost:8000/api/form/",
                type: "POST",
                dataType:"json",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify(data),
                success: function(response) {
                    alert("Form submitted successfully.");
                },
                error: function(error) {
                    str = ''
                    Object.keys(error.responseJSON).forEach(function(key, idx, arr){
                        str = str + "Value:" + error.responseJSON[key][0] + " \n"
                    });
                    alert(str)
                }
            });
        },
    });
});