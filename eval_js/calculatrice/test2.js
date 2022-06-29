// JavaScript source code
function calculette() {
    let  nombre1
    let  nombre2
    let operateur
    let calculer
    nombre1 = window.prompt("entrer un nombre entier")
    
    if (nombre1 == ""&&nombre1 == null) {
       nombre1 = 0
    }else{
         nombre2 = window.prompt("entrer un second nombre entier")
    }
    if (nombre2 == "" && nombre2 == null) {
        nombre2 = 0
    }else {
        operateur = window.prompt("entrez un operateur +/*-")
        }
        if (operateur == "") {
            alert("on va recommencer car vous n'avez pas entré d'operateur comme + - * / ")
            calculette()
        }
         
    
     
    
        if (operateur == "/") {
            calculer = nombre1 / nombre2
        } else if (operateur == "+") {
            calculer= parseFloat(nombre1) + parseFloat(nombre2)
        } else if (operateur == "-") {
            calculer = nombre1 - nombre2
            
        } else if (operateur == "*") {
            calculer = nombre1 * nombre2
        }
    
    
    
        document.write(nombre1 + " " + operateur +" " + nombre2 + " est égal à " + calculer)
        console.log(nombre1, nombre2, calculer)
    }