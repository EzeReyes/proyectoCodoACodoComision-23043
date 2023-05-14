
const cardHtml = ( array, nodo ) => {
    const generarNodos = array.reduce(( acc, element) => {
        return acc + `
        <div class="container-tema">
        <div class="titulo-tema">
        <h4>${element.nombre}</h4>
        </div>
        <div class="tema">
            <img src=${element.image} alt=${element.nombre}>
            <p>${element.info}</p>
        </div>
    </div> `
    }, "")

    document.querySelector(nodo).innerHTML = generarNodos
}
cardHtml(temas,".sectionTwo")