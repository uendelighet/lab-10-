export const obtenerData = async () => {
    const response = await fetch("https://raw.githubusercontent.com/uendelighet/lab-10-/main/data.json");
    const data = await response.json();
    console.log(data);
    return data;
}



const crearContenedor = async (section) => {
    
    let dataReady = await obtenerData();

    dataReady.recientes.forEach((movie) => {
        const div = document.createElement('div');
    div.className = 'box';

    const img = document.createElement('img');
    img.className = 'fotos movie-image';
    img.alt = '';
    img.src = movie.link;
    img.id = movie.id;

    img.addEventListener("click", function(){
        document.getElementById("banner").style.backgroundImage=`url(${img.src})`
        document.getElementById("titlePelicula").innerHTML = movie.titulo
    })

    const button = document.createElement('button');
    button.className = 'boton';
    button.textContent = 'Play';

    const rankingDiv = document.createElement('div');
    rankingDiv.className = 'ranking';

    for (let i = 0; i < 5; i++) {
        const starSpan = document.createElement('span');
        starSpan.className = 'fa fa-star';
        rankingDiv.appendChild(starSpan);
    }

    div.appendChild(img);
    div.appendChild(button);
    div.appendChild(rankingDiv);

    section.appendChild(div);
    })
};

const render = async (section) => {
    let dataReady = await obtenerData();

    dataReady.recientes.forEach((movie) => {
        const img = document.createElement('img');
        img.className = 'fotos movie-image';
        img.alt = '';
        img.src = movie.link;
        section.appendChild(img);
    });

    const contenedor = crearContenedor();

    section.appendChild(contenedor);
}



window.onload = () => {
    let movieContainer = document.querySelector(".movies-container");
    let recommended = document.querySelector(".movies-recommended");

    crearContenedor(movieContainer)
    crearContenedor(recommended)

    Cambiarcolor(coral)
};
