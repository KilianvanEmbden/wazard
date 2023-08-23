window.onload = function()
{
    document.getElementsByClassName("contact__button")[0].addEventListener("click", showContact);
}


function showContact(){
    document.getElementsByClassName("contact-container")[0].style.display = "block";
}

function hideContact(){
    document.getElementsByClassName("contact-container")[0].style.display = "none";
}