"use strict";
let tabAnimals = [];
function addAnimal(pathImage, nom, ordre) {
    tabAnimals.push({
        image: pathImage,
        nom: nom,
        ordre: ordre,
    });
}
function showAnimals() {
    let container = (document.getElementById("container"));
    for (let i = 0; i < tabAnimals.length; i++) {
        container.innerHTML += `<article>
                                        <figure>
                                            <img src="${tabAnimals[i].image}" alt="${tabAnimals[i].nom}" />
                                        </figure>
                                        <h3>${tabAnimals[i].nom}</h3>
                                        <p><span>Ordre :</span> ${tabAnimals[i].ordre}</p>
                                </article>`;
    }
}
addAnimal(new URL("https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Panda_roux_Espace_Zoologique_St_Martin_la_Plaine.jpg/1280px-Panda_roux_Espace_Zoologique_St_Martin_la_Plaine.jpg"), "Panda Roux", "Ailuridés");
addAnimal(new URL("https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Killerwhales_jumping.jpg/1280px-Killerwhales_jumping.jpg"), "Orque", "Cétacés");
addAnimal(new URL("https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Human.svg/langfr-800px-Human.svg.png"), "Homo Sapiens", "Primates");
addAnimal(new URL('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Erinaceus_europaeus_LC0119.jpg/290px-Erinaceus_europaeus_LC0119.jpg'), "Hérisson commun", "Érinaceomorphes");
addAnimal(new URL('https://upload.wikimedia.org/wikipedia/commons/5/59/Pipistrellus_flight2.jpg'), "Pipistrelle commune", "Chiroptères");
addAnimal(new URL("https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Talpa_europaea_MHNT.jpg/290px-Talpa_europaea_MHNT.jpg"), "Taupe d'Europe", "Soricomorphes");
addAnimal(new URL("https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Biberratte_-_Nutria_-_coypu_-_Myocastor_coypus_-_ragondin_-_castor_des_marais_-_M%C3%B6nchbruch_-_December_25th_2012_-_01.jpg/1280px-Biberratte_-_Nutria_-_coypu_-_Myocastor_coypus_-_ragondin_-_castor_des_marais_-_M%C3%B6nchbruch_-_December_25th_2012_-_01.jpg"), "Bob", "Rongeurs");
showAnimals();
//# sourceMappingURL=index.js.map