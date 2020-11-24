type mammifere = {image:URL, nom:string, ordre:string}
let tabMammiferes: Array<mammifere> = [];


function addMammiferes(pathImage: URL, nom: string, ordre: string) {
    tabMammiferes.push({
        image : pathImage,
        nom: nom,
        ordre : ordre,
    })
}

function showMammiferes() :void {
    let container = (document.getElementById("container")) as HTMLElement;
    for ( let i:number=0 ; i< tabMammiferes.length; i++) {
        container.innerHTML += `<article>
                                        <figure>
                                            <img src="${tabMammiferes[i].image}" alt="${tabMammiferes[i].nom}" />
                                        </figure>
                                        <h3>${tabMammiferes[i].nom}</h3>
                                        <p><span>Ordre :</span> ${tabMammiferes[i].ordre}</p>
                                </article>`
    }
}

addMammiferes(new URL("https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Panda_roux_Espace_Zoologique_St_Martin_la_Plaine.jpg/1280px-Panda_roux_Espace_Zoologique_St_Martin_la_Plaine.jpg"), "Panda Roux", "Ailuridés")
addMammiferes(new URL("https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Killerwhales_jumping.jpg/1280px-Killerwhales_jumping.jpg"), "Orque", "Cétacés")
addMammiferes(new URL("https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Human.svg/langfr-800px-Human.svg.png"), "Homo Sapiens", "Primates")
addMammiferes(new URL('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Erinaceus_europaeus_LC0119.jpg/290px-Erinaceus_europaeus_LC0119.jpg'), "Hérisson commun", "Érinaceomorphes")
addMammiferes(new URL('https://upload.wikimedia.org/wikipedia/commons/5/59/Pipistrellus_flight2.jpg'), "Pipistrelle commune", "Chiroptères")
addMammiferes(new URL("https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Talpa_europaea_MHNT.jpg/290px-Talpa_europaea_MHNT.jpg"), "Taupe d'Europe", "Soricomorphes")
addMammiferes(new URL("https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Biberratte_-_Nutria_-_coypu_-_Myocastor_coypus_-_ragondin_-_castor_des_marais_-_M%C3%B6nchbruch_-_December_25th_2012_-_01.jpg/1280px-Biberratte_-_Nutria_-_coypu_-_Myocastor_coypus_-_ragondin_-_castor_des_marais_-_M%C3%B6nchbruch_-_December_25th_2012_-_01.jpg"), "Bob", "Rongeurs")

showMammiferes();