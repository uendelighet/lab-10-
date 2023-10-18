export const obtenerData = async () => {
    const response = await fetch("https://raw.githubusercontent.com/uendelighet/lab-10-/main/data.json");
    const data = await response.json();
    console.log(data);
    return data;
}

const crearContenedor = () => {
    const div = document.createElement('div');
    div.className = 'box';

    const img = document.createElement('img');
    img.className = 'fotos movie-image'; 
    img.alt = '';

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

    return div;
};

const render = async () => {
    let dataReady = await obtenerData();
    let movieContainer = document.querySelector(".movies-container");

    dataReady.recientes.forEach((movie) => {
        const img = document.createElement('img');
        img.className = 'fotos movie-image';
        img.alt = '';
        img.src = movie.link;
        movieContainer.appendChild(img);
    });

    const contenedor = crearContenedor();

    movieContainer.appendChild(contenedor);
}



window.onload = render;
