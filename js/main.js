window.onload = function()
{
    document.getElementsByClassName("contact__button")[0].addEventListener("click", showContact);
    document.getElementById("contact__form").addEventListener("submit", submitContact);
    const exampleButtons = document.getElementsByClassName("button__example");
    for (var i = 0; i < exampleButtons.length; i++) {
        exampleButtons[i].addEventListener("click", fillContact);
    }
}

function toggleLanguage(){
    if (document.documentElement.lang == 'en'){
        document.documentElement.lang = 'nl';
        updateLanguage(document.documentElement.lang);
    }
    else{
        document.documentElement.lang = 'en';
        updateLanguage(document.documentElement.lang);
    }
}

function updateLanguage(){
    fetch('lang.json')
    .then(response => {
        // Check if the response status is OK (status code 200)
        if (!response.ok) {
        throw new Error("Text not found.");
        }
        // Parse the response as JSON
        return response.json();
    })
    .then(translations => {
        // Now 'data' contains the parsed JSON data
        var language = document.documentElement.lang;

        //navbar
        let navItems = document.getElementsByClassName("navbar__item");
        for (var i = 0; i < navItems.length; i++) {
            var category = "nav";
            var stringKey = i;
            navItems[i].innerHTML = translations[language][category][stringKey];
        }
        //contact
        let contItems = document.getElementsByClassName("contact__item");
        for (var i = 0; i < contItems.length; i++) {
            var category = "cont";
            var stringKey = i;
            if (contItems[i].tagName == "INPUT"){
                contItems[i].placeholder = translations[language][category][stringKey];
            }
            else{
                contItems[i].innerHTML = translations[language][category][stringKey];
            }
        }
        //articles
        let artItems = document.getElementsByClassName("article__item");
        for (var i = 0; i < artItems.length; i++) {
            var category = artItems[i].id;
            for (var j = 0; j < artItems[i].children.length; j++) {
                var stringKey = j;
                console.log(artItems[i].children[j]);
                artItems[i].children[j].textContent = translations[language][category][stringKey];
            }
        }
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
}

function showContact(){
    document.getElementsByClassName("contact__container")[0].style.display = "block";
}

function hideContact(){
    document.getElementsByClassName("contact__container")[0].style.display = "none";
}

function fillContact(event){
    let buttName = event.target.innerHTML;
    let subject = document.getElementById("subject");
    switch(buttName){
        case "Advies":
            subject.value = data;
            break;
        case "Automatisering":
            subject.value = data.NL.cont.aut;
            break;
        case "Ontwerp":
            subject.value = data.NL.cont.ont;
            break;
        case "Toegankelijkheid":
            subject.value = data.NL.cont.toe;
            break;
    }
    showContact();
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