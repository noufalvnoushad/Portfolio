var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var mailError = document.getElementById('mail-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName()
{
    var name = document.getElementById('contact-name').value;
    if(name.length == 0)
    {
        nameError.innerHTML = "Name is required";
        return false;
    } 
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/))
    {
        nameError.innerHTML = "Write Full Name";
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
}
function validatePhone()
{
    var phone = document.getElementById('contact-phone').value;
    if(phone.length == 0)
    {
        phoneError.innerHTML = "Phone no. is required";
        return false;
    }
    if(phone.length !== 10)
        {
            phoneError.innerHTML = "Phone no. should be 10 digits";
            return false;
        }
    if(!phone.match(/^[0-9]{10}$/))
    {
        phoneError.innerHTML = "Invalid Phone Number";
        return false;
    }
    phoneError.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
}
function validateMail()
{
    var mail = document.getElementById('contact-mail').value;
    if(mail.length == 0)
    {
        mailError.innerHTML = "Email is required";
        return false;
    }
    if(!mail.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/))
    {
        mailError.innerHTML = "Invalid Email";
        return false;
    }
    mailError.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
}
function validateMessage()
{
    var message = document.getElementById('contact-message').value;
    var required = 30;
    var left = required - message.length;
    if(left > 0)
    {
        messageError.innerHTML = "Minimum " + required + " characters required";
        return false;
    }
    if(message.length == 0)
    {
        messageError.innerHTML = "Message is required";
        return false;
    }
    messageError.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;

}
/*function validateForm()
{
    if(!validateName() || !validatePhone() || !validateMail() || !validateMessage())
    {
        submitError.style.display = 'block';
        submitError.innerHTML = "Please fill all the fields correctly";
        setTimeout(function(){submitError.style.display = 'none';}, 3000);
        return false;
    }
    if(validateName() && validatePhone() && validateMail() && validateMessage())
    {
        var params = 
        {
            name: document.getElementById('contact-name').value,
            phone: document.getElementById('contact-phone').value,
            mail: document.getElementById('contact-mail').value,
            message: document.getElementById('contact-message').value
        };
        emailjs.send('service_qpjea1e', 'template_vy3yijf', params).then(function(res)
        {
            alert("Success " + res.status);
        }
    }
}*/