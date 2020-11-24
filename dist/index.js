"use strict";
var tabAnimals = [];
function addAnimal(pathImage, nom, ordre) {
    tabAnimals.push({
        image: pathImage,
        nom: nom,
        ordre: ordre,
    });
}
function showAnimals() {
    var container = document.getElementById("container");
    for (var i = 0; i < tabAnimals.length; i++) {
        container.innerHTML += "<article>\n                                        <figure>\n                                            <img src=\"" + tabAnimals[i].image + "\" alt=\"" + tabAnimals[i].nom + "\" />\n                                        </figure>\n                                        <h3>" + tabAnimals[i].nom + "</h3>\n                                        <p><span>Famille :</span> " + tabAnimals[i].ordre + "</p>\n                                </article>";
    }
}
addAnimal(new URL("https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Panda_roux_Espace_Zoologique_St_Martin_la_Plaine.jpg/1280px-Panda_roux_Espace_Zoologique_St_Martin_la_Plaine.jpg"), "Panda Roux", "Ailuridés");
//# sourceMappingURL=index.js.map