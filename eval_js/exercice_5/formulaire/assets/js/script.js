//Récupération du formulaire sous la forme d'un objet
let contact = document.getElementById('contact');
//Ajout d'une écoute pour verifier si le formulaire est envoyé, il fera tourner la fonction Validation
contact.addEventListener("submit", function (event) { return Validation(contact, event); });

function maPosition(position) {
    /*var infopos = "Position déterminée :\n";
    infopos += "Latitude : "+position.coords.latitude +"\n";
    infopos += "Longitude: "+position.coords.longitude+"\n";
    infopos += "Altitude : "+position.coords.altitude +"\n";
    console.log(infopos);*/
    recevoirTemperature(position.coords.latitude,position.coords.longitude);

  }
  
  if(navigator.geolocation)
    navigator.geolocation.getCurrentPosition(maPosition);


function recevoirTemperature(lat,lon) {
    
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon='+lon+'&appid=eb3e55ca0093756f2541d5ad27c5021c&units=metric';

    let requete = new XMLHttpRequest();
    requete.open('GET', url);
    requete.responseType = 'json';
    requete.send();

    requete.onload = function () {
        if (requete.readyState === XMLHttpRequest.DONE) {
            if (requete.status === 200) {
                let reponse = requete.response;
                let ville = reponse.name;
                let temperature = reponse.main.temp;
                document.querySelector('#ville').textContent = ville;
                document.querySelector('#temperature_label').textContent = temperature;
            } else {
                alert('Un problème est intervenu, merci de revenir plus tard.');
            }
        }
    }
}
    

            //Fonction de validation du formulaire de contact de JardiTou
            function Validation(contact, event) {
                //Initialisation d'un booléen qui va verifier si le formulaire est valide ou pas 
                //si il est valide, le formulaire sera envoyé
                //si il est pas valide, on restera sur la page
                let controle = true;
                //Initialisation d'une expresion régulière pour futur vérifications de valeurs
                let REGEX;

                //test si le champ Nom n'est pas rempli
                if (contact.elements['nom'].value.length == 0) {
                    //retire la classe bootstrap pour rendre le champ vert
                    contact.elements['nom'].classList.remove('is-valid');
                    //ajout d'une classe bootstrap pour rendre le champ rouge
                    contact.elements['nom'].classList.add('is-invalid');
                    //formulaire invalide
                    controle = false;
                }
                else //si le champ Nom est rempli
                {
                    //retire la classe bootstrap pour rendre le champ rouge
                    contact.elements['nom'].classList.remove('is-invalid');
                    //ajout d'une classe bootstrap pour rendre le champ vert
                    contact.elements['nom'].classList.add('is-valid');
                }

                //test si le champ Prénom n'est pas rempli
                if (contact.elements['prenom'].value.length == 0) {
                    //ajout d'une classe bootstrap pour rendre le champ rouge
                    contact.elements['prenom'].classList.remove('is-valid');
                    contact.elements['prenom'].classList.add('is-invalid');
                    //formulaire invalide
                    controle = false;
                }
                else //si le champ Prénom est rempli
                {
                    //ajout d'une classe bootstrap pour rendre le champ vert
                    contact.elements['prenom'].classList.remove('is-invalid');
                    contact.elements['prenom'].classList.add('is-valid');
                }

                //test si un bouton radio Sexe n'est pas sélectionné
                if (contact.elements['sexe'].value.length == 0) {
                    //ajout d'une classe bootstrap pour rendre les boutons rouge
                    contact.elements['feminin'].classList.remove('is-valid');
                    contact.elements['feminin'].classList.add('is-invalid');
                    contact.elements['masculin'].classList.remove('is-valid');
                    contact.elements['masculin'].classList.add('is-invalid');
                    //contact.elements['neutre'].classList.remove('is-valid');
                    //contact.elements['neutre'].classList.add('is-invalid');
                    //formulaire invalide
                    controle = false;
                }
                else //si un bouton radio Sexe est sélectionné
                {
                    //ajout d'une classe bootstrap pour rendre les boutons vert
                    contact.elements['feminin'].classList.remove('is-invalid');
                    contact.elements['feminin'].classList.add('is-valid');
                    contact.elements['masculin'].classList.remove('is-invalid');
                    contact.elements['masculin'].classList.add('is-valid');
                    //contact.elements['neutre'].classList.remove('is-invalid');
                    //contact.elements['neutre'].classList.add('is-valid');
                }

                //test si le champ Date de Naissance n'est pas rempli ou rempli avec une date future
                if (Date.parse(contact.elements['naissance'].value) >= Date.now() || contact.elements['naissance'].value == "") {
                    //ajout d'une classe bootstrap pour rendre le champ rouge
                    contact.elements['naissance'].classList.remove('is-valid');
                    contact.elements['naissance'].classList.add('is-invalid');
                    //formulaire invalide
                    controle = false;
                    //test si le champ Date de Naissance est rempli avec une date future
                    if (Date.parse(contact.elements['naissance'].value) >= Date.now()) {
                        //changement du texte d'erreur pour indiquer à l'utilisateur qu'il n'est pas né dans le futur
                        //document.getElementById('naissance-invalid').textContent = "A part si vous êtes né dans le futur, selectionnez une date passée ;-)";
                        document.getElementById('naissance-invalid').textContent = "A part si vous êtes né dans le futur, selectionnez une date passée ;-)";
                    }
                }
                else //si le champ Date de Naissance est rempli avec une date antérieure à aujourd'hui
                {
                    //ajout d'une classe bootstrap pour rendre le champ vert
                    contact.elements['naissance'].classList.remove('is-invalid');
                    contact.elements['naissance'].classList.add('is-valid');
                }

                //Mise en place de l'expression régulière pour le Code Postal
                REGEX = new RegExp("^[0-9]{5}$");
                //Test si le Code Postal ne respecte pas l'expression régulière
                if (REGEX.test(contact.elements['CP'].value) == false) {
                    //ajout d'une classe bootstrap pour rendre le champ rouge
                    contact.elements['CP'].classList.remove('is-valid');
                    contact.elements['CP'].classList.add('is-invalid');
                    //formulaire invalide
                    controle = false;
                }
                else //si le Code Postal respecte l'expression régulière
                {
                    //ajout d'une classe bootstrap pour rendre le champ vert
                    contact.elements['CP'].classList.remove('is-invalid');
                    contact.elements['CP'].classList.add('is-valid');
                }

                //Mise en place de l'expression régulière pour le mail
                REGEX = new RegExp("[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([_\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})");
                //Test si l'Email ne respecte pas l'expression régulière
                if (REGEX.test(contact.elements['email'].value) == false) {
                    //ajout d'une classe bootstrap pour rendre le champ rouge
                    contact.elements['email'].classList.remove('is-valid');
                    contact.elements['email'].classList.add('is-invalid');
                    //formulaire invalide
                    controle = false;
                }
                else //si l'Email respecte l'expression régulière
                {
                    //ajout d'une classe bootstrap pour rendre le champ vert
                    contact.elements['email'].classList.remove('is-invalid');
                    contact.elements['email'].classList.add('is-valid');
                }

                //test si un Sujet de la liste déroualante n'est pas sélectionné
                if (contact.elements['sujet'].value.length == 0) {
                    //ajout d'une classe bootstrap pour rendre le champ rouge
                    contact.elements['sujet'].classList.remove('is-valid');
                    contact.elements['sujet'].classList.add('is-invalid');
                    //formulaire invalide
                    controle = false;
                }
                else //si un Sujet de la liste déroualante est sélectionné
                {
                    //ajout d'une classe bootstrap pour rendre le champ vert
                    contact.elements['sujet'].classList.remove('is-invalid');
                    contact.elements['sujet'].classList.add('is-valid');
                }

                //test si le champ Question n'est pas rempli
                if (contact.elements['question'].value.length == 0) {
                    //ajout d'une classe bootstrap pour rendre le champ rouge
                    contact.elements['question'].classList.remove('is-valid');
                    contact.elements['question'].classList.add('is-invalid');
                    //formulaire invalide
                    controle = false;
                }
                else //si le champ Question est rempli
                {
                    //ajout d'une classe bootstrap pour rendre le champ vert
                    contact.elements['question'].classList.remove('is-invalid');
                    contact.elements['question'].classList.add('is-valid');
                }

                //test si la case J'accepte n'a pas été cochée (checkValidity, vérifie par rapport aux critères de validité écrit dans les balises HTML de l'input)
                if (!(contact.elements['accepted'].checkValidity())) {
                    //ajout d'une classe bootstrap pour rendre le champ rouge
                    contact.elements['accepted'].classList.remove('is-valid');
                    contact.elements['accepted'].classList.add('is-invalid');
                    //formulaire invalide
                    controle = false;
                }
                else //si la case J'accepte a été cochée
                {
                    //ajout d'une classe bootstrap pour rendre le champ vert
                    contact.elements['accepted'].classList.remove('is-invalid');
                    contact.elements['accepted'].classList.add('is-valid');
                }

                //vérifie si le formulaire est faux
                if (controle == false) {
                    //empèche l'envoie du formulaire 
                    event.preventDefault();
                }
                //retourne la fonction controle du formulaire
                return controle;
            }
