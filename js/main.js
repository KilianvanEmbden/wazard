window.onload = function()
{
    document.getElementsByClassName("contact__button")[0].addEventListener("click", showContact);
    document.getElementById("contact-form").addEventListener("submit", submitContact(event));
}


function showContact(){
    document.getElementsByClassName("contact-container")[0].style.display = "block";
}

function hideContact(){
    document.getElementsByClassName("contact-container")[0].style.display = "none";
}

function submitContact(event){
    event.preventDefault();
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    hideContact();
    alert(name + email);
    console.log(name + email);
}