function calcul() {
    let tab = new String;
    let valeur = document.getElementById("texte").value;
    let nbr = document.getElementById("nbr").value;
    for(var i=1; i<=nbr; i++){
        tab += (i + " * " + valeur + " = " + i*valeur + "\n")
    }

    document.getElementById("tab").innerHTML = tab;
}



document.getElementById("btn").addEventListener("click", () => {
    calcul();
});