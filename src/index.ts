type mammifere = {image:URL, nom:string, ordre:string}
let tabAnimals: Array<mammifere> = [];


function addAnimal(pathImage: URL, nom: string, ordre: string) {
    tabAnimals.push({
        image : pathImage,
        nom: nom,
        ordre : ordre,
    })
}

function showAnimals() :void {
    let container = (document.getElementById("container")) as HTMLElement;
    for ( let i:number=0 ; i< tabAnimals.length; i++) {
        container.innerHTML += `<article>
                                        <figure>
                                            <img src="${tabAnimals[i].image}" alt="${tabAnimals[i].nom}" />
                                        </figure>
                                        <h3>${tabAnimals[i].nom}</h3>
                                        <p><span>Famille :</span> ${tabAnimals[i].ordre}</p>
                                </article>`
    }
}

addAnimal(new URL("https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Panda_roux_Espace_Zoologique_St_Martin_la_Plaine.jpg/1280px-Panda_roux_Espace_Zoologique_St_Martin_la_Plaine.jpg"), "Panda Roux", "Ailuridés")